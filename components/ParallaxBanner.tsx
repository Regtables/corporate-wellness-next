'use client'

import React, { FC } from "react";
import { ParallaxBanner as Parallax } from "react-scroll-parallax";
import { sanityClient } from "@/lib/sanity/client";
import { useNextSanityImage } from "next-sanity-image";
import { SanityImageType } from "@/lib/sanity/types";
import ViewMotionWrapper from "./ViewMotionWrapper";

interface ParallaxBannerProps {
  image: SanityImageType;
  initialYPosition?: number;
}

const ParallaxBanner: FC<ParallaxBannerProps> = ({ image, initialYPosition = 0 }) => {
  const { src } = useNextSanityImage(sanityClient, image.image);

  return (
    <ViewMotionWrapper className="w-full" duration={1} y = {0}>
      <Parallax
        layers={[
          {
            image: src,
            speed: -15,
            shouldAlwaysCompleteAnimation: true,
          },
        ]}
        className="w-full h-[282px]"
      />
    </ViewMotionWrapper>
  );
};

export default ParallaxBanner;