"use client";

import React, { FC, useEffect, useState } from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { useMediaQuery } from "react-responsive";
import { AnimatePresence, motion } from "framer-motion";

import { SanityImageType } from "@/lib/sanity/types";

import SanityImage from "./SanityImage";
import Overlay from "./Overlay";
import BasicButton from "./buttons/BasicButton";
import Icon from "./logos/Icon";
import AnimatedTitle from "./motion/AnimatedTitle";
import ViewMotionWrapper from "./ViewMotionWrapper";
import StaggeredMotionWrapper from "./motion/StaggerChildrenMotionWrapper";

interface HeroProps {
  title: string;
  subtitle: string;
  image: SanityImageType;
  text: string;
  onContactClick: () => void;
  showContact: boolean;
}

const Hero: FC<HeroProps> = ({
  title,
  subtitle,
  image,
  text,
  onContactClick,
  showContact,
}) => {
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

  const handleContactButtonClick = () => {
    onContactClick();
  };

  return (
    <section
      className="h-screen relative"
      style={{ height: heroHeight }}
      aria-label="Hero section"
      // id="home"
    >
      <ParallaxBanner className="h-full w-full">
        <ParallaxBannerLayer speed={-20}>
          <ViewMotionWrapper
            className="absolute top-0 left-0 w-full h-full"
            // style={{ transform: "rotateY(180deg)" }}
            y={0}
            aria-hidden="true"
          >
            <Overlay opacity={35}>
              <SanityImage image={image} />
            </Overlay>
          </ViewMotionWrapper>
        </ParallaxBannerLayer>
      </ParallaxBanner>

      {/* <div 
        className="h-[150%] w-[800px] end-0 absolute top-[0px] z-10"
        aria-hidden="true"
      >
        <Logo />
      </div> */}
      <AnimatePresence>
        {!showContact && (
          <StaggeredMotionWrapper
            className="absolute top-0 left-0 right-0 h-full z-30 flex flex-col text-center xl:items-start gap-2 justify-center lg:items-start items-center lg:px-[var(--section-x-lg)] px-[var(--section-x-xs)] w-full"
            exit={{ y: 30, opacity: 0, transition: { duration: 0.5 }}}
            delay= {0.5}
            // role="region"
            // aria-labelledby="hero-title"
          >
            <h2 className="uppercase text-duckEgg text-[23px]">{subtitle}</h2>

            <motion.div
              animate={
                showContact
                  ? { y: [0, 50], opacity: [1, 0] }
                  : { y: 0, opacity: 1 }
              }
              transition={{ duration: 1 }}
            >
              <AnimatedTitle
                text={title}
                className="font-heading text-white lg:text-[70px] text-[56px] text-center font-bold lg:mx-auto lg:leading-[100px]"
              />
            </motion.div>
            
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
              onClick={handleContactButtonClick}
            />
          </StaggeredMotionWrapper>
        )}
      </AnimatePresence>

      <ViewMotionWrapper
        y={0}
        x={-20}
        duration={1}
        className="absolute z-10 bottom-[-50px] overflow-hidden"
      >
        <Icon
          path={{ src: "/baobab-sml.png" }}
          className="lg:block hidden h-[330px] w-[157px]"
        />
      </ViewMotionWrapper>

      {/* <div
        style={{ transform: "rotateY(180deg)" }}
        className="lg:block hidden right-0 absolute z-10 bottom-[-50px]"
      >
        <Icon
          path={{ src: "/baobab-sml.png" }}
          className="lg:block hidden h-[330px] w-[157px]"
        />
      </div> */}

      <ViewMotionWrapper
        y={20}
        duration={1}
        className="left-0 absolute z-[10] -bottom-[65px] overflow-hidden"
      >
        <Icon
          path={{ src: "/baobab-sml.png" }}
          className="xl:hidden lg:hidden block h-[250px] w-[80px] "
        />
      </ViewMotionWrapper>

      <ViewMotionWrapper
        y={20}
        x={0}
        duration={1}
        className="xl:hidden right-0 absolute z-[10] -bottom-[65px] overflow-hidden"
      >
        <div style={{ transform: "rotateY(180deg)" }}>
          <Icon
            path={{ src: "/baobab-sml.png" }}
            className="xl:hidden lg:hidden block h-[250px] w-[80px]"
          />
        </div>
      </ViewMotionWrapper>
      {/* <Icon
        path={{ src: "/baobab-sml.png" }}
        className="xl:hidden block h-[230px] w-[100px] right-0 absolute z-[20] bottom-[-350px]"
      /> */}
    </section>
  );
};

export default Hero;
