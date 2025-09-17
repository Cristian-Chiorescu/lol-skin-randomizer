import type { Metadata } from "next";
import { Inter, Russo_One } from "next/font/google";
import Footer from "@/components/Footer";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  subsets: ["latin"],
});

const russo = Russo_One({
  variable: "--font-russo",
  display: "swap",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LoL Skin Randomizer",
  description: "An app that chooses a League of Legends skin for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${russo.variable}`}>
      <body className={`antialiased`}>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
