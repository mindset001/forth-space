import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { andalus } from "./fonts/fonts";

// Keep Geist Mono as a fallback for monospace text
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "4orth SPACE | Premium Coworking Space in Lagos",
  description: "Nigeria&apos;s premier destination for sophisticated professionals. A refined coworking and creative hub where innovation meets elegance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${andalus.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
