import React, { FC } from "react";

import SanityImage from "./SanityImage";
import BlockText from "./BlockText";
import BasicButton from "./buttons/BasicButton";
import {
  SanityHeadingWithBlockText,
  SanityImageType,
} from "@/lib/sanity/types";
import AnimatedTitle from "./motion/AnimatedTitle";
import Link from "next/link";
import AnimatedChildrenTitle from "./motion/AnimatedChildrenTitle";
import ViewMotionWrapper from "./ViewMotionWrapper";
import StaggeredMotionWrapper from "./motion/StaggerChildrenMotionWrapper";
import VariantButton from "./buttons/VariantButton";

interface ServiceIntroductionSectionProps {
  headingWithBlockText: SanityHeadingWithBlockText;
  image: SanityImageType;
}

const ServiceIntroductionSection: FC<ServiceIntroductionSectionProps> = ({
  headingWithBlockText,
  image,
}) => {
  const { heading, text } = headingWithBlockText;

  return (
    <div className="flex lg:flex-row flex-col-reverse lg:gap-20 gap-8 lg:pr-section lg:pl-0 section-padding-y lg:mx-0 md:mx-[var(--section-x-md)] px-[var(--section-x-xs)]">
      <ViewMotionWrapper className="lg:flex-[0.5] lg:h-[unset] h-[250px]">
        <SanityImage image={image} className="lg:rounded-r-[12px] lg:rounded-l-none rounded-xl" />
      </ViewMotionWrapper>

      <StaggeredMotionWrapper className="flex-[0.5] flex gap-[12px] flex-col lg:py-sectionY lg:text-left text-center">
        <AnimatedTitle text= {heading} className="heading font-heading lg:text-left md:text-center" />
        {/* <AnimatedChildrenTitle className="heading">{heading}</AnimatedChildrenTitle> */}

        <BlockText text={text} className="gap-4 bodyText" />

        <StaggeredMotionWrapper className="flex gap-6 mt-6 lg:justify-start md:justify-center">
          <Link href={'/#services'}>
            <VariantButton text="Our Services" variant={1} aria-label="Our Services" />
          </Link>

          <Link href={'#contact'}>
            <VariantButton text="Contact Us" aria-label="Contact Us" variant={3} />
          </Link>
        </StaggeredMotionWrapper>
      </StaggeredMotionWrapper>
    </div>
  );
};

export default ServiceIntroductionSection;
