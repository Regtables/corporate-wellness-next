"use client";

import React, { FC, useEffect, useState } from "react";
import SanityImage from "./SanityImage";
import { SanityImageType } from "@/lib/sanity/types";
import Overlay from "./Overlay";
import BasicButton from "./buttons/BasicButton";
import Logo from "./logos/Logo";
import Icon from "./logos/Icon";
import AnimatedTitle from "./motion/AnimatedTitle";
import ViewMotionWrapper from "./ViewMotionWrapper";

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
      id="home"
    >
      <ViewMotionWrapper
        className="absolute top-0 left-0 w-full h-full"
        // style={{ transform: "rotateY(180deg)" }}
        y={0}
        aria-hidden="true"
      >
        <Overlay opacity={40}>
          <SanityImage image={image} />
        </Overlay>
      </ViewMotionWrapper>

      {/* <div 
        className="h-[150%] w-[800px] end-0 absolute top-[0px] z-10"
        aria-hidden="true"
      >
        <Logo />
      </div> */}

      <div
        className="absolute top-0 left-0 h-full flex flex-col gap-2 justify-center lg:items-start items-center z-10 lg:px-[var(--section-x-lg)] px-[var(--section-x-xs)] w-full"
        role="region"
        aria-labelledby="hero-title"
      >
        <h2 className="uppercase text-duckEgg text-[23px]">{subtitle}</h2>
        <AnimatedTitle
          text={title}
          className="font-heading text-white lg:text-[76px] text-[56px] text-center font-bold lg:w-40 leading-[100px]"
        />
        {/* <h1
          id="hero-title"
         
        >
          {title}
        </h1> */}
        <div
          className="lg:w-[40%] lg:text-left text-center text-white font-[400] leading-[34px] lg:mb-6"
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
          className="lg:mt-0 mt-4"
          aria-label="Contact us"
        />
      </div>

      <Icon
        path={{ src: "/baobab-sml.png" }}
        className="lg:block hidden h-[330px] w-[157px] absolute z-[20] bottom-[-350px]"
      />
    </section>
  );
};

export default Hero;
