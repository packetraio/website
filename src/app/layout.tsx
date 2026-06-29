import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PACKETRA | Powering Intelligent Networks",
  description:
    "Modern networking software for cloud infrastructure, observability, AI networking, and enterprise performance.",
  keywords: [
    "networking",
    "cloud infrastructure",
    "observability",
    "AI networking",
    "DPDK",
    "packet processing",
    "enterprise SaaS",
  ],
  authors: [{ name: "PACKETRA" }],
  creator: "PACKETRA",
  openGraph: {
    title: "PACKETRA | Powering Intelligent Networks",
    description:
      "Modern networking software for cloud infrastructure, observability, AI networking, and enterprise performance.",
    url: "https://packetra.in",
    siteName: "PACKETRA",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PACKETRA | Powering Intelligent Networks",
    description:
      "Modern networking software for cloud infrastructure, observability, AI networking, and enterprise performance.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#081B33",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
