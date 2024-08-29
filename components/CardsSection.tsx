import React, { FC } from "react";

import ServiceCard from "./cards/ServiceCard";
import BasicButton from "./buttons/BasicButton";
import { SERVICES_ICONS } from "@/lib/icons";
import ViewMotionWrapper from "./ViewMotionWrapper";

interface CardsSectionProps {
  heading: string;
  cards: {
    name: string;
    description: string;
    icon?: string;
  }[];
  benefits?: boolean;
  id?: string;
  linkage?: boolean
}

const CardsSection: FC<CardsSectionProps> = ({
  heading,
  cards,
  benefits,
  id,
  linkage
}) => {
  return (
    <section className="px-section py-32" id={id}>
      <div className="flex justify-between items-center pb-12">
        <h2 className="font-heading heading">{heading}</h2>

        <BasicButton text="Contact Us" bgColor="var(--color-duckEgg)" />
      </div>

      <div className="grid grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <ViewMotionWrapper delay={i*-0.1} duration={1}>
            <ServiceCard
              name={card.name}
              description={card.description}
              col={benefits}
              key={i}
              // icon={SERVICES_ICONS[card.name]}
              buttons={!benefits}
              linkage = {linkage}
            />
          </ViewMotionWrapper>
        ))}
      </div>
    </section>
  );
};

export default CardsSection;
