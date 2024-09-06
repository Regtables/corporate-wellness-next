import React, { FC } from "react";
import {
  SanityHeadingWithBlockText,
  SanityImageType,
  SanitySection,
} from "@/lib/sanity/types";

import SanityImage from "./SanityImage";
import BlockText from "./BlockText";
import BasicButton from "./buttons/BasicButton";

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
    <section className="flex lg:flex-row flex-col-reverse lg:gap-20 lg:pr-section px-[var(--section-x-xs)] lg:pt-32 pt-[var(--section-y-xs)] lg:pb-24 pb-16" id = 'about'>
      <div className="lg:flex-[0.5] lg:h-[unset] h-[300px] lg:mt-0 mt-8">
        <SanityImage image={image} className="rounded-[12px]" />
      </div>

      <div className="flex-[0.5] flex gap-[12px] flex-col lg:text-left text-center">
        <h2 className="heading font-heading">{heading}</h2>

        <BlockText
          text={text}
          className="gap-4 bodyText"
        />

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
    </section>
  );
};

export default AboutSection;
