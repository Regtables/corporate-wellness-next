"use client";

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

const ParallaxBanner: FC<ParallaxBannerProps> = ({
  image,
  initialYPosition = 0,
}) => {
  const { src } = useNextSanityImage(sanityClient, image.image);

  return (
    <Parallax
      layers={[
        {
          image: src,
          speed: 5, // Reduce speed
          shouldAlwaysCompleteAnimation: true,
          // expanded: false, // This might help with mobile performance
          easing: "easeOutQuad", // Add easing for smoother motion
        },
      ]}
      className="w-full lg:h-[282px] h-[200px]"
    />
  );
};

export default ParallaxBanner;
