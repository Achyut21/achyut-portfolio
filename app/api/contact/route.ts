import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema, HONEYPOT_FIELD } from "@/lib/contact-schema";

const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;

// Per-instance only. A serverless cold start resets it and parallel instances
// don't share it, so treat this as friction rather than a real limit.
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();

  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    }
  }

  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  hits.set(ip, recent);

  if (recent.length >= MAX_PER_WINDOW) return true;

  recent.push(now);
  return false;
}

function clientIp(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for");
  const first = forwarded?.split(",")[0]?.trim();
  if (first) return first;
  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.RESEND_FROM ?? "Portfolio <onboarding@resend.dev>";

  if (!apiKey || !to) {
    console.error("contact: RESEND_API_KEY or CONTACT_TO_EMAIL is not set");
    return NextResponse.json({ error: "Contact form is not configured." }, { status: 500 });
  }

  if (rateLimited(clientIp(request))) {
    return NextResponse.json({ error: "Too many messages. Try again in a bit." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Silent 200: a bot that filled the honeypot should think it worked.
  const honeypot = (body as Record<string, unknown>)?.[HONEYPOT_FIELD];
  if (typeof honeypot === "string" && honeypot.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid submission." },
      { status: 400 }
    );
  }

  const { name, email, subject, message } = parsed.data;

  const { error } = await new Resend(apiKey).emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `Portfolio: ${subject}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  });

  if (error) {
    console.error("contact: resend rejected the send", error);
    return NextResponse.json({ error: "Could not send right now." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
