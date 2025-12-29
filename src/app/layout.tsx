import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ViewTransition } from "react";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Design Inspirations",
  description: "A curated collection of beautiful design patterns",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${inter.variable} antialiased`}>
        <ViewTransition>{children}</ViewTransition>
      </body>
    </html>
  );
}
