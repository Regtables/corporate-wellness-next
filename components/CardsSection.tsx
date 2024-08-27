import React, { FC } from "react";

import ServiceCard from "./cards/ServiceCard";
import BasicButton from "./buttons/BasicButton";
import { SERVICES_ICONS } from "@/lib/icons";

interface CardsSectionProps {
  heading: string;
  cards: {
    name: string;
    description: string;
    icon?: string
  }[];
  benefits?: boolean
}

const CardsSection: FC<CardsSectionProps> = ({ heading, cards, benefits }) => {
  return (
    <section className="px-section mt-10">
      <div className="flex justify-between items-center pb-8">
        <h2 className="font-heading heading">{heading}</h2>

        <BasicButton text="Contact Us" bgColor="var(--color-duckEgg)" />
      </div>

      <div className="grid grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <ServiceCard
            name={card.name}
            description={card.description}
            col = {benefits}
            key={i}
            icon = {SERVICES_ICONS['Team Coaching']}
          />
        ))}
      </div>
    </section>
  );
};

export default CardsSection;
