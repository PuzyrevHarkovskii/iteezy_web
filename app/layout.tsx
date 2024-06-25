import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Roboto } from "next/font/google";
import { Inter_Tight } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["cyrillic"], weight: ["400"] });
const inter_tight = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ITEEZY Школа Программирования | На Витебском",
  description: "Школа Программирования | На Витебском",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={inter_tight.className}>{children}</body>
    </html>
  );
}
