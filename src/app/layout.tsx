import type { Metadata } from "next";
import "./globals.css";
import { andalus, paragraphFont } from "./fonts/fonts";

// Keep Geist Mono as a fallback for monospace text


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
        className={`${andalus.variable} ${paragraphFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}