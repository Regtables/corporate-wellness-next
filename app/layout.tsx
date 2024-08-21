import type { Metadata } from "next";

import "./globals.css";
import { combineFontClasses, libreBaskerville, nunitoSans } from "@/lib/fonts";


export const metadata: Metadata = {
  title: "Corporate Wellness",
  description: "Corporate Wellness webpage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={combineFontClasses(
        libreBaskerville.variable,
        nunitoSans.variable
      )}
    >
      <body>{children}</body>
    </html>
  );
}
