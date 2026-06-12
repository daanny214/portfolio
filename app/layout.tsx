import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daniel Isiyemi — Web & Mobile Developer",
  description:
    "Web & Mobile Application Developer based in Lagos, Nigeria. I build cross-platform mobile apps with React Native and modern web applications with Next.js. Available for freelance & full-time roles.",
  keywords: [
    "Daniel Isiyemi",
    "Web Developer",
    "Mobile Developer",
    "React Native",
    "Next.js",
    "Lagos",
    "Nigeria",
  ],
  openGraph: {
    title: "Daniel Isiyemi — Web & Mobile Developer",
    description:
      "Building cross-platform mobile apps with React Native and modern web applications with Next.js.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
