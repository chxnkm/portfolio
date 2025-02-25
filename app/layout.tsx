import type { Metadata } from "next";
import { Inter as FontSans, Ma_Shan_Zheng as msz, Merriweather as merriweather} from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

import { cn } from "@/lib/utils"

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const mszFont = msz({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-msz",
})

const belseyFont = merriweather({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-merriweather",
})

export const metadata: Metadata = {
  title: "Kang Ming's Portfolio",
  description: "Chen Kang Ming is a graduate computer science student pursuing a career in tech. This is a showcase of his work, skills and hobbies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen flex flex-col font-sans antialiased",
          fontSans.variable,
          mszFont.variable,
          belseyFont.variable
        )}>
          <SpeedInsights/>
          <Navbar/>
          <div className="flex-grow">{children}</div>
          <Footer/>
        </body>
    </html>
  );
}
