import type { Metadata } from "next";
import { ClientLayout } from "./client-layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Achyut Katiyar | Software Engineer",
  description:
    "Software Engineer building full-stack applications and decentralized systems. MS Computer Science at Northeastern University. Co-Chair of MIT Bitcoin Expo.",
  metadataBase: new URL("https://achyutkatiyar.com"),

  // Basic metadata
  applicationName: "Achyut Katiyar Portfolio",
  authors: [{ name: "Achyut Katiyar" }],
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "Blockchain",
    "Web3",
    "Next.js",
    "React",
    "TypeScript",
    "Northeastern University",
    "MIT Bitcoin Expo",
  ],

  openGraph: {
    type: "website",
    url: "https://achyutkatiyar.com",
    title: "Achyut Katiyar | Software Engineer",
    description:
      "Software Engineer building full-stack applications and decentralized systems. MS CS at Northeastern. Co-Chair of MIT Bitcoin Expo.",
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
