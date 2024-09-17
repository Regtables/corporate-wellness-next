import React, { FC } from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ParallaxProvider } from "react-scroll-parallax";
import { sanityFetchAccreditationsLogos } from "@/lib/sanity/actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Wellness",
  description: "Corporate Wellness webpage",
};

const Layout: FC<{ children: React.ReactNode }> = async ({ children }) => {
  const accreditations = await sanityFetchAccreditationsLogos();

  return (
    <div>
      <Navbar />

      <main className="lg:pt-[120px] pt-[80px]">{children}</main>

      <Footer accreditations={accreditations} />
    </div>
  );
};

export default Layout;
