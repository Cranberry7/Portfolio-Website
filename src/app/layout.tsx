import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Shaurya Agrawal — AI Data Engineer Portfolio",
  description:
    "Portfolio of Shaurya Agrawal, an AI Data Engineer specializing in RAG pipelines, multi-agent systems, and secure infrastructure. View projects, experience, and get in touch.",
  keywords: [
    "AI Data Engineer",
    "RAG pipelines",
    "multi-agent systems",
    "portfolio",
    "Shaurya Agrawal",
    "machine learning",
    "data engineering",
  ],
  authors: [{ name: "Shaurya Agrawal" }],
  openGraph: {
    title: "Shaurya Agrawal — AI Data Engineer Portfolio",
    description:
      "Portfolio of Shaurya Agrawal, an AI Data Engineer specializing in RAG pipelines, multi-agent systems, and secure infrastructure. View projects, experience, and get in touch.",
    url: "https://shauryaagrawal.com", // TODO: Replace with your actual domain
    siteName: "Shaurya Agrawal",
    locale: "en_US",
    type: "website",
    // TODO: Add OG image — create a 1200x630px image and place at /public/og-image.png
    // images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Shaurya Agrawal — AI Data Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaurya Agrawal — AI Data Engineer Portfolio",
    description:
      "AI Data Engineer specializing in RAG pipelines, multi-agent systems, and secure infrastructure.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
