import React, { FC } from "react";
import ServiceCard from "./cards/ServiceCard";
import BasicButton from "./buttons/BasicButton";
import { SERVICES_ICONS } from "@/lib/icons";
import StaggeredMotionWrapper from "@/components/motion/StaggerChildrenMotionWrapper";

interface CardsSectionProps {
  heading: string;
  cards: {
    name: string;
    description: string;
    icon?: string;
  }[];
  benefits?: boolean;
  id?: string;
  linkage?: boolean;
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
      <div className="flex flex-col lg:flex-row lg:justify-between justify-center items-center lg:pb-12 pb-6">
        <h2 className="font-heading heading mb-4 lg:mb-0">{heading}</h2>
        <BasicButton 
          text="Contact Us" 
          bgColor="var(--color-duckEgg)" 
          className="lg:block hidden"
        />
      </div>

      <div className="overflow-x-auto pb-4">
        <StaggeredMotionWrapper
          // direction="left-to-right"
          duration={0.5}
          staggerDelay={0.1}
        >
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
            {cards.map((card, i) => (
              <ServiceCard
                key={i}
                name={card.name}
                description={card.description}
                col={benefits}
                // icon={SERVICES_ICONS[card.name]}
                buttons={!benefits}
                linkage={linkage}
              />
            ))}
          </div>
        </StaggeredMotionWrapper>
      </div>
    </section>
  );
};

export default CardsSection;