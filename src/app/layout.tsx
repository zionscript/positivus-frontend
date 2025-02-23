import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceg = Space_Grotesk({
  variable: "--font-space-g",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Positivus",
  description: "Projeto Positivus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceg.variable}`}>
        {children}
      </body>
    </html>
  );
}
