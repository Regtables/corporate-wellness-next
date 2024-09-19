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
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const handleLoad = () => {
    if (typeof window !== 'undefined') {
      const isRecentString = localStorage.getItem('isRecent');
      if (isRecentString) {
        const isRecent = JSON.parse(isRecentString);
        if (isRecent.date) {
          const lastVisit = new Date(isRecent.date);
          const now = new Date();
          const hoursSinceLastVisit = (now.getTime() - lastVisit.getTime()) / (1000 * 60 * 60);
          
          if (hoursSinceLastVisit < 1) {
            // Less than 1 hour since last visit, don't show loading screen
            setIsFirstLoad(false);
          } else {
            // More than 1 hour, update the time and show loading screen
            localStorage.setItem('isRecent', JSON.stringify({ date: now.toISOString() }));
            setIsFirstLoad(true);
          }
        } else {
          // Invalid date in localStorage, set current time and show loading screen
          const now = new Date();
          localStorage.setItem('isRecent', JSON.stringify({ date: now.toISOString() }));
          setIsFirstLoad(true);
        }
      } else {
        // No recent visit recorded, set current time and show loading screen
        const now = new Date();
        localStorage.setItem('isRecent', JSON.stringify({ date: now.toISOString() }));
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
      <body>
        <ParallaxProvider>
          {isFirstLoad && <LoadingScreen />}
          {children}
        </ParallaxProvider>
      </body>
    </html>
  );
}