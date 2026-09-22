import type { Metadata } from "next";
import { ClientLayout } from "./client-layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Achyut Katiyar | Software Engineer",
  description:
    "Achyut Katiyar — AI engineer in Boston building agents and LLM applications. MS Computer Science at Northeastern, software engineering co-op at Maven Realty, Co-Chair of MIT Bitcoin Expo 2026.",
  metadataBase: new URL("https://achyutkatiyar.com"),

  // Basic metadata
  applicationName: "Achyut Katiyar Portfolio",
  authors: [{ name: "Achyut Katiyar" }],
  keywords: [
    "AI Engineer",
    "AI Agents",
    "LLM Applications",
    "Function Calling",
    "Model Context Protocol",
    "OpenAI API",
    "Anthropic API",
    "Software Engineer",
    "TypeScript",
    "Next.js",
  ],

  openGraph: {
    type: "website",
    url: "https://achyutkatiyar.com",
    title: "Achyut Katiyar | Software Engineer",
    description:
      "Achyut Katiyar — AI engineer in Boston building agents and LLM applications. MS Computer Science at Northeastern, software engineering co-op at Maven Realty, Co-Chair of MIT Bitcoin Expo 2026.",
    siteName: "Achyut Katiyar",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Achyut Katiyar - Portfolio",
      },
    ],
  },

  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: { url: "/apple-touch-icon.png" },
  },

  alternates: {
    canonical: "https://achyutkatiyar.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <ClientLayout>{children}</ClientLayout>;
}
