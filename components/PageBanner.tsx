"use client";

import React, { FC } from "react";
import SanityImage from "./SanityImage";
import Image from "next/image";

import { SanityImageType } from "@/lib/sanity/types";
import { SERVICES_ICONS_WHITE } from "@/lib/icons";

import AnimatedTitle from "./motion/AnimatedTitle";
import ViewMotionWrapper from "./ViewMotionWrapper";

interface PageBannerProps {
  heading: string;
  subHeading: string;
  icon?: boolean;
  image?: SanityImageType;
  staticPath?: boolean;
  imagePath?: string;
}

const PageBanner: FC<PageBannerProps> = ({
  heading,
  subHeading,
  icon,
  image,
  staticPath = false,
  imagePath,
}) => {
  const { src, height, width } = SERVICES_ICONS_WHITE[heading];

  return (
    <div className="flex xl:pl-section lg:pl-[var(--section-x-md)] xl:pt-0 md:pt-[40px] pl-0 pt-[40px] bg-duckEgg relative lg:flex-row flex-col">
      <div className="lg:py-sectionY pt-[40px] pb-[40px] text-center lg:flex-[0.5] flex flex-col lg:items-start items-center">
        {subHeading && (
          <h4 className="uppercase lg:text-[23px] text-[18px] tracking-[-4%]">
            {subHeading}
          </h4>
        )}

        <AnimatedTitle
          text={heading}
          className="mt-2 font-heading lg:text-[76px] text-[36px] lg:w-40 w-72 lg:mx-[unset] md:mx-auto lg:leading-[94px] font-bold lg:text-left md:text-center"
        />
      </div>

      {icon && (
        <ViewMotionWrapper
          className="absolute lg:top-20 bottom-[170px] lg:start-[50%] lg:w-[unset] w-full flex justify-center z-10"
          x={-20}
          y={0}
          duration={1}
        >
          <Image
            src={src}
            alt={heading}
            height={height}
            width={width}
            className="lg:max-w-[unset] lg:max-h-[unset] max-h-[70px] max-w-[unset]"
          />
        </ViewMotionWrapper>
      )}

      {staticPath ? (
        <ViewMotionWrapper
          className="lg:flex-[0.5] flex-[unset] lg:h-[unset] h-[200px] w-full relative"
          delay={0.3}
          y={0}
          duration={1}
        >
          <Image fill src={imagePath!} alt={heading} />
        </ViewMotionWrapper>
      ) : (
        <ViewMotionWrapper
          className="lg:flex-[0.5] flex-[unset] lg:h-[unset] h-[200px] w-full"
          delay={0.3}
          y={0}
          duration={1}
        >
          <SanityImage image={image!} priority quality={80} />
        </ViewMotionWrapper>
      )}
    </div>
  );
};

export default PageBanner;
