import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SRK Gallery",
  description: "Motivational Videos of Shah Rukh Khan curated by Akshat Dubey"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
