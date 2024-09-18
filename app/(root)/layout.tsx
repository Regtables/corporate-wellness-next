import React, { FC } from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ParallaxProvider } from "react-scroll-parallax";
import { sanityFetchAccreditationsLogos } from "@/lib/sanity/actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Wellness",
  description: "As a highly skilled and internationally experienced coach and HR leader with over 25 years of expertise across various sectors and countries (South Africa, Middle East, and UK), I understand the importance of being in right relationship with others—at home, socially, and at work. Despite my extensive experience, I travel light, bringing a focused and adaptable approach to every engagement.",
};

const Layout: FC<{ children: React.ReactNode }> = async ({ children }) => {
  const accreditations = await sanityFetchAccreditationsLogos();

  return (
    <div>
      <div id = 'home' className="absolute top-0"/>
      <Navbar />

      <main className="lg:pt-[120px] pt-[80px]">{children}</main>

      <Footer accreditations={accreditations} />
    </div>
  );
};

export default Layout;
