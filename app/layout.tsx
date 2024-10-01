import localFont from "next/font/local";
import type { Metadata } from "next";
import Provider from "@/providers/provider";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Aura",
  description: "Get colors used in your image",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen bg-[#F5F5F5] dark:bg-[#141414]`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
