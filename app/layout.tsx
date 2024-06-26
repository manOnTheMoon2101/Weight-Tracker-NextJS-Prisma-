import type { Metadata } from "next";

import "./globals.css";

import Navbar from "./layouts/navbar/Navbar";
import Footer from "./layouts/footer/page";
import Head from "next/head";
import { Roboto_Mono } from "next/font/google";

const roboto_Mono = Roboto_Mono({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>

      <body>
      <Navbar/>
        <main className={roboto_Mono.className}>{children}</main>

      </body>
    </html>
  );
}
