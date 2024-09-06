import React, { FC } from "react";

import ServiceCard from "./cards/ServiceCard";
import BasicButton from "./buttons/BasicButton";
import { SERVICES_ICONS } from "@/lib/icons";
import ViewMotionWrapper from "./CardMotionWrapper";

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
    <section className="section-padding" id={id}>
      <div className="flex lg:justify-between justify-center items-center lg:pb-12 pb-6">
        <h2 className="font-heading heading">{heading}</h2>

        <BasicButton text="Contact Us" bgColor="var(--color-duckEgg)" className="lg:block hidden" />
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
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
