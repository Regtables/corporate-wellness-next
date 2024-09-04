import React, { FC } from "react";

import {
  SanityHeadingWithBlockText,
  SanityImageType,
} from "@/lib/sanity/types";

import BlockText from "./BlockText";
import Accordion from "./Accordion";
import SanityImage from "./SanityImage";
import RippleBg from "./RippleBg";

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
    <section className="flex pl-section py-24 pb-40 bg-duckEgg gap-24 relative" id = 'approach'>
      <RippleBg />

      <div className="flex-[0.5] flex flex-col gap-[12px] relative z-10">
        <h2 className="heading">{heading}</h2>

        <BlockText text={text} className="gap-4 bodyText" />

        <div className="flex flex-col gap-8 mt-4">
          {appproaches.map((approach, i) => (
            <Accordion
              name={approach.name}
              description={approach.description}
              key={i}
              className="hover:bg-[var(--color-black)] hover:text-white"
            />
          ))}
        </div>
      </div>

      <div className="flex-[0.5] w-full">
        <SanityImage image={image} className="rounded-l-xl" />
      </div>
    </section>
  );
};

export default ApproachSection;
