import type { Metadata } from "next";
import { Inter as FontSans} from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils"


import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Kang Ming's Portfolio",
  description: "Multi-purpose portfolio of yours truly.",
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
          fontSans.variable
        )}>
          <Navbar/>
          <div className="flex-grow">{children}</div>
          <Footer/>
        </body>
    </html>
  );
}
