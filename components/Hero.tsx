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
import { useMediaQuery } from "react-responsive";
import StaggeredMotionWrapper from "./motion/StaggerChildrenMotionWrapper";

interface HeroProps {
  title: string;
  subtitle: string;
  image: SanityImageType;
  text: string;
}

const Hero: FC<HeroProps> = ({ title, subtitle, image, text }) => {
  const [offset, setOffset] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: "676px" });

  const heroHeight = !isMobile ? "calc(100vh - 120px)" : "calc(100vh - 80px)";

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
      style={{ height: heroHeight }}
      aria-label="Hero section"
      // id="home"
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

      <StaggeredMotionWrapper
        className="absolute top-0 left-0 right-0 h-full w-full flex flex-col text-center xl:items-center gap-2 justify-center lg:items-start items-center z-10 lg:px-[var(--section-x-lg)] px-[var(--section-x-xs)] w-full"
        // role="region"
        // aria-labelledby="hero-title"
      >
        <h2 className="uppercase text-duckEgg text-[23px]">{subtitle}</h2>
        <AnimatedTitle
          text={title}
          className="font-heading text-white lg:text-[70px] text-[56px] text-center font-bold lg:mx-auto lg:leading-[100px]"
        />
        {/* <h1
          id="hero-title"
         
        >
          {title}
        </h1> */}
        <div
          className="lg:w-[100%] lg:text-left text-center text-white font-[400] leading-[34px] lg:mb-6"
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
      </StaggeredMotionWrapper>

      <Icon
        path={{ src: "/baobab-sml.png" }}
        className="lg:block hidden h-[330px] w-[157px] absolute z-10 bottom-[-50px]"
      />

      <div
        style={{ transform: "rotateY(180deg)" }}
        className="lg:block hidden right-0 absolute z-10 bottom-[-50px]"
      >
        <Icon
          path={{ src: "/baobab-sml.png" }}
          className="lg:block hidden h-[330px] w-[157px]"
        />
      </div>

      <Icon
        path={{ src: "/baobab-sml.png" }}
        className="xl:hidden lg:hidden block h-[250px] w-[80px] left-0 absolute z-[10] -bottom-[65px]"
      />

      <div
        style={{ transform: "rotateY(180deg)" }}
        className="xl:hidden right-0 absolute z-[10] -bottom-[65px]"
      >
        <Icon
          path={{ src: "/baobab-sml.png" }}
          className="xl:hidden lg:hidden block h-[250px] w-[80px]"
        />
      </div>
      {/* <Icon
        path={{ src: "/baobab-sml.png" }}
        className="xl:hidden block h-[230px] w-[100px] right-0 absolute z-[20] bottom-[-350px]"
      /> */}
    </section>
  );
};

export default Hero;
