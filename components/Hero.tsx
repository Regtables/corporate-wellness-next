"use client";

import React, { FC, useEffect, useState } from "react";
import SanityImage from "./SanityImage";
import { SanityImageType } from "@/lib/sanity/types";
import Overlay from "./Overlay";
import BasicButton from "./buttons/BasicButton";
import Logo from "./logos/Logo";

interface HeroProps {
  title: string;
  subtitle: string;
  image: SanityImageType;
  text: string;
}

const Hero: FC<HeroProps> = ({ title, subtitle, image, text }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className="h-screen relative"
      style={{ height: "calc(100vh - 120px)" }}
      aria-label="Hero section"
    >
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{ transform: "rotateY(180deg)" }}
        aria-hidden="true"
      >
        <Overlay opacity={40}>
          <SanityImage image={image} />
        </Overlay>
      </div>

      <div 
        className="h-[150%] w-[800px] end-0 absolute top-[0px] opacity-30"
        aria-hidden="true"
      >
        <Logo />
      </div>

      <div 
        className="absolute top-0 left-0 h-full flex flex-col justify-center items-start z-10 px-section w-full"
        role="region"
        aria-labelledby="hero-title"
      >
        <h2 className="uppercase text-duckEgg text-[23px]">{subtitle}</h2>
        <h1 id="hero-title" className="font-heading text-white text-[76px] font-bold w-40">
          {title}
        </h1>
        <div 
          className="w-[40%] text-white font-[400] leading-[34px]"
          aria-label="Hero description"
        >
          {text}
        </div>
        <BasicButton
          text="contact us"
          bgColor="transparent"
          pill
          color="white"
          outline
          aria-label="Contact us"
        />
      </div>
    </section>
  );
};

export default Hero;