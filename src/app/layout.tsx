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
        className={`h-screen bg-[#121414] text-[#F2F3F4] ${rethink.className}`}
      >
        <header className="p-4 max-w-7xl mx-auto">
          <div className="bg-card-bg rounded-5xl p-4 sm:p-6 shadow-lg backdrop-blur-sm">
            <h1 className="text-4xl font-bold text-center">Francesco Chiaramonte</h1>
          </div>
        </header>
        <Menu />
        <main
          className="pt-4 pb-10 flex flex-col gap-4 max-w-7xl mx-auto"
        >{children}</main>
      </body>
    </html>
  );
}
