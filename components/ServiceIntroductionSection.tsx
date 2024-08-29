import React, { FC } from "react";

import SanityImage from "./SanityImage";
import BlockText from "./BlockText";
import BasicButton from "./buttons/BasicButton";
import {
  SanityHeadingWithBlockText,
  SanityImageType,
} from "@/lib/sanity/types";

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
    <div className="flex gap-20 pr-section py-32">
      <div className="flex-[0.5]">
        <SanityImage image={image} className="rounded-r-[12px]" />
      </div>

      <div className="flex-[0.5] flex gap-[12px] flex-col py-sectionY">
        <h2 className="heading font-heading">{heading}</h2>

        <BlockText text={text} className="gap-4 bodyText" />

        <div className="flex gap-6 mt-6">
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
