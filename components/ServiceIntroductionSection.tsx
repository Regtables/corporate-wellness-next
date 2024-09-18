import React, { FC } from "react";

import SanityImage from "./SanityImage";
import BlockText from "./BlockText";
import BasicButton from "./buttons/BasicButton";
import {
  SanityHeadingWithBlockText,
  SanityImageType,
} from "@/lib/sanity/types";
import AnimatedTitle from "./motion/AnimatedTitle";

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
      <div className="lg:flex-[0.5] lg:h-[unset] h-[250px]">
        <SanityImage image={image} className="lg:rounded-r-[12px] lg:rounded-l-none rounded-xl" />
      </div>

      <div className="flex-[0.5] flex gap-[12px] flex-col lg:py-sectionY lg:text-left text-center">
        <AnimatedTitle text= {heading} className="heading font-heading lg:text-left md:text-center" />

        <BlockText text={text} className="gap-4 bodyText" />

        <div className="flex gap-6 mt-6 lg:justify-start md:justify-center">
          <BasicButton text="Our Services" bgColor="var(--color-duckEgg)" />

          <BasicButton
            text="contact us"
            bgColor="transparent"
            color="black"
            outline
            aria-label="Contact us"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceIntroductionSection;
