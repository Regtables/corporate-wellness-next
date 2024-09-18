"use client";

import type { Metadata } from "next";

import "./globals.scss";
import { combineFontClasses, libreBaskerville, nunitoSans } from "@/lib/fonts";
import { ParallaxProvider } from "react-scroll-parallax";
import { useEffect, useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isFirstLoad, setIsFirstLoad] = useState(true)

  useEffect(() => {
    setIsFirstLoad(false)
  }, [])
  
  return (
    <html
      lang="en"
      className={combineFontClasses(
        libreBaskerville.variable,
        nunitoSans.variable
      )}
    >
      <body>
        <ParallaxProvider>
          {!isFirstLoad && <LoadingScreen />}
          {children}
        </ParallaxProvider>
      </body>
    </html>
  );
}
