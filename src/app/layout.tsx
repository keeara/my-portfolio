import Menu from "@/components/menu";
import "@/styles/globals.css";

import { Inter, Rethink_Sans } from "next/font/google";
import type { Metadata } from "next/types";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const rethink = Rethink_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rethink-sans",
});

export const metadata: Metadata = {
  title: "Francesco Chiaramonte",
  description: "Francesco Chiaramonte's Portfolio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${rethink.variable}`}>
      <body
        className={`h-screen bg-[#1A1A1A] text-[#F2F3F4] max-w-4xl mx-auto ${rethink.className}`}
      >
        <header className="py-8 px-4">
          <h1 className="text-4xl font-bold">Francesco Chiaramonte</h1>
        </header>
        <Menu />
        <main
          className="px-4 pt-4 pb-10"
        >{children}</main>
      </body>
    </html>
  );
}
