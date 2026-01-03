import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eckho Systems | Innovation Through Technology",
  description: "Eckho Systems is a leader in innovative technology solutions, delivering cutting-edge digital experiences that drive business transformation.",
  keywords: ["technology", "innovation", "digital transformation", "software development", "consulting"],
  authors: [{ name: "Eckho Systems" }],
  openGraph: {
    title: "Eckho Systems | Innovation Through Technology",
    description: "Eckho Systems is a leader in innovative technology solutions, delivering cutting-edge digital experiences that drive business transformation.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eckho Systems | Innovation Through Technology",
    description: "Eckho Systems is a leader in innovative technology solutions, delivering cutting-edge digital experiences that drive business transformation.",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
