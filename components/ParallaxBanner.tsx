"use client";

import { SanityImageType } from "@/lib/sanity/types";
import React, { FC } from "react";
import SanityImage from "./SanityImage";
import { ParallaxBanner as Parallax } from "react-scroll-parallax";
import { sanityClient, urlFor } from "@/lib/sanity/client";
import { useNextSanityImage } from "next-sanity-image";

interface ParallaxBannerProps {
  image: SanityImageType;
  initialPosition?: number;
}

const ParallaxBanner: FC<ParallaxBannerProps> = ({ image, initialPosition }) => {
  const { src, loader } = useNextSanityImage(sanityClient, image.image)

  return (
    <div className="w-full">
      <Parallax
        layers={[{ image: src, speed: -15 }]}
        className="w-full h-[282px]"
        style={{ objectPosition: '100% 100%'}}
      />
      {/* <SanityImage image={image} /> */}
    </div>
  );
};

export default ParallaxBanner;
