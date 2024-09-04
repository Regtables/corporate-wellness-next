"use client";

import type { Metadata } from "next";

import "./globals.css";
import { combineFontClasses, libreBaskerville, nunitoSans } from "@/lib/fonts";
import { ParallaxProvider } from "react-scroll-parallax";
import { FormProvider } from "@/context/FormContext";

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
      <body>
        <ParallaxProvider>{children}</ParallaxProvider>
      </body>
    </html>
  );
}
