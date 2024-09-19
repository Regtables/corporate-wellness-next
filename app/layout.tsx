"use client";

import type { Metadata } from "next";
import "./globals.scss";
import { combineFontClasses, libreBaskerville, nunitoSans } from "@/lib/fonts";
import { ParallaxProvider } from "react-scroll-parallax";
import { useEffect, useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import { ModalProvider as ModalContextProvider } from "@/context/ModalContext";
import ModalProvider from "@/providers/ModalProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const handleLoad = () => {
    if (typeof window !== "undefined") {
      const isRecentString = localStorage.getItem("isRecent");
      if (isRecentString) {
        const isRecent = JSON.parse(isRecentString);
        if (isRecent.date) {
          const lastVisit = new Date(isRecent.date);
          const now = new Date();
          const hoursSinceLastVisit =
            (now.getTime() - lastVisit.getTime()) / (1000 * 60 * 60);

          if (hoursSinceLastVisit < 1) {
            // Less than 1 hour since last visit, don't show loading screen
            setIsFirstLoad(false);
          } else {
            // More than 1 hour, update the time and show loading screen
            localStorage.setItem(
              "isRecent",
              JSON.stringify({ date: now.toISOString() })
            );
            setIsFirstLoad(true);
          }
        } else {
          // Invalid date in localStorage, set current time and show loading screen
          const now = new Date();
          localStorage.setItem(
            "isRecent",
            JSON.stringify({ date: now.toISOString() })
          );
          setIsFirstLoad(true);
        }
      } else {
        // No recent visit recorded, set current time and show loading screen
        const now = new Date();
        localStorage.setItem(
          "isRecent",
          JSON.stringify({ date: now.toISOString() })
        );
        setIsFirstLoad(true);
      }
    }
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <html
      lang="en"
      className={combineFontClasses(
        libreBaskerville.variable,
        nunitoSans.variable
      )}
    >
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <ParallaxProvider>
          <ModalContextProvider>
            {/* {isFirstLoad && <LoadingScreen />} */}
            {children}

            <ModalProvider />
          </ModalContextProvider>
        </ParallaxProvider>
      </body>
    </html>
  );
}
