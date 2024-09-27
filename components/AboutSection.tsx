import React, { FC } from "react";
import {
  SanityHeadingWithBlockText,
  SanityImageType,
  SanitySection,
} from "@/lib/sanity/types";

import SanityImage from "./SanityImage";
import BlockText from "./BlockText";
import BasicButton from "./buttons/BasicButton";
import AnimatedTitle from "./motion/AnimatedTitle";
import StaggeredMotionWrapper from "./motion/StaggerChildrenMotionWrapper";
import ViewMotionWrapper from "./ViewMotionWrapper";
import Link from "next/link";
import VariantButton from "./buttons/VariantButton";

interface AboutSectionProps {
  headingWithBlockText: SanityHeadingWithBlockText;
  image: SanityImageType;
}

const AboutSection: FC<AboutSectionProps> = ({
  headingWithBlockText,
  image,
}) => {
  const { text, heading } = headingWithBlockText;

  return (
    <section className="flex lg:flex-row flex-col-reverse lg:gap-20 xlg:pr-sectio lg:pr-[var(--section-x-md) lg:pl-0 md:px-[var(--section-x-md)] px-[var(--section-x-xs)] lg:pt-32 pt-[var(--section-y-xs)] md:pt-[var(--section-y-md)] lg:pb-24 pb-10" id = 'about'>
      <ViewMotionWrapper className="lg:flex-[0.5] lg:h-[unset] md:h-[500px] h-[300px] lg:mt-0 mt-8" y = {30} duration={1}>
        <SanityImage image={image} className="xl:object-[center_-50px] lg:rounded-r-[12px] md:rounded-xl sm:object-[center_200px] object-[center_-20px] rounded-xl" />
      </ViewMotionWrapper>

      <div className="flex-[0.5] flex gap-[12px] flex-col lg:text-left text-center">
        <AnimatedTitle text= {heading} className="heading lg:text-left md:text-center" />

        <BlockText
          text={text}
          className="gap-3 bodyText lg:text-left sm:text-center"
        />

        <StaggeredMotionWrapper className="flex lg:gap-6 gap-4 mt-6 xl:justify-start md:justify-center" duration={0.5} delay={0.1}>
          <Link href={'#services'}>
            <VariantButton variant={1} text="Our Services" aria-label="Our Services" />
          </Link>

          <Link href={'#contact'}>
            <VariantButton variant={3} text = "Contact us" aria-label="Contact Us" />
          </Link>
        </StaggeredMotionWrapper>
      </div>
    </section>
  );
};

export default AboutSection;
