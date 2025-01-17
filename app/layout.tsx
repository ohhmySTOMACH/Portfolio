import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import "@/style/globals.css";
import Footer from "@/components/Footer";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  style: ["italic", "normal"],
  display: "swap",
  variable: "--font-libre-baskerville",
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
    <html lang="en">
      <body
        className={`${libreBaskerville.variable} antialiased w-full h-full`}
      >
        {children}
      </body>
    </html>
  );
}
