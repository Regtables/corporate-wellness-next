import React, { FC } from "react";

import {
  SanityHeadingWithBlockText,
  SanityImageType,
} from "@/lib/sanity/types";

import BlockText from "./BlockText";
import Accordion from "./Accordion";
import SanityImage from "./SanityImage";
import RippleBg from "./RippleBg";
import AnimatedTitle from "./motion/AnimatedTitle";
import StaggeredMotionWrapper from "./motion/StaggerChildrenMotionWrapper";
import ViewMotionWrapper from "./ViewMotionWrapper";

interface ApproachSectionProps {
  headingWithText: SanityHeadingWithBlockText;
  image: SanityImageType;
  appproaches: {
    name: string;
    description: string;
  }[];
}

const ApproachSection: FC<ApproachSectionProps> = ({
  headingWithText,
  image,
  appproaches,
}) => {
  const { heading, text } = headingWithText;

  return (
    <section
      className="flex lg:flex-row flex-col xl:pl-section xl:pb-32 lg:pt-24 xl:pr-0 lg:pr-0 lg:pl-[var(--section-x-md)] md:px-[var(--section-x-md)] px-[var(--section-x-xs)] py-[var(--section-y-xs)] pb-40 bg-duckEgg lg:gap-24 gap-6 relative"
      id="approach"
    >
      <RippleBg />

      <div className="flex-[0.5] flex flex-col gap-[12px] relative z-10">
        <AnimatedTitle text={heading} className="heading" />

        <BlockText text={text} className="gap-4 bodyText xl:text-left text-center" />

        <StaggeredMotionWrapper className="flex flex-col lg:gap-8 gap-6 mt-4" y = {0} x = {-20} duration={1}>
          {appproaches.map((approach, i) => (
            <Accordion
              name={approach.name}
              description={approach.description}
              key={i}
              className="hover:bg-[var(--color-black)] hover:text-white"
            />
          ))}
        </StaggeredMotionWrapper>
      </div>

      <ViewMotionWrapper className="lg:flex-[0.5] lg:h-[unset] h-[300px] w-full" y = {30} duration={1} delay={0.1}>
        <SanityImage image={image} className="lg:rounded-l-xl lg:rounded-r-none rounded-xl" />
      </ViewMotionWrapper>
    </section>
  );
};

export default ApproachSection;
