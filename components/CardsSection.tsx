'use client'

import React, { FC } from "react";
import ServiceCard from "./cards/ServiceCard";
import BasicButton from "./buttons/BasicButton";
import { SERVICES_ICONS } from "@/lib/icons";
import StaggeredMotionWrapper from "@/components/motion/StaggerChildrenMotionWrapper";
import Link from "next/link";
import AnimatedTitle from "./motion/AnimatedTitle";
import { useMediaQuery } from "react-responsive";
import CardMotionWrapper from "./CardMotionWrapper";

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
  linkage,
}) => {
  const isMobile = useMediaQuery({ maxWidth: "676px" });
  return (
    <section className="section-padding" id={id}>
      <div className="flex flex-col lg:flex-row lg:justify-between justify-center items-center lg:pb-12 pb-10">
        {/* <h2 className="font-heading heading mb-4 lg:mb-0">{heading}</h2> */}
        <AnimatedTitle text={heading} className="heading" />

        <Link href={"#contact"}>
          <BasicButton
            text="Contact Us"
            bgColor="var(--color-duckEgg)"
            className="lg:flex hidden"
          />
        </Link>
      </div>

      <div className="pb-4">
        {/* <StaggeredMotionWrapper
          // direction="left-to-right"
          duration={0.5}
          staggerDelay={0.1}
        > */}
          <div
            className="grid gap-6 card-grid"
            // style={
            //   !isMobile
            //     ? {
            //         gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            //       }
            //     : {
            //         gridTemplateColumns: "1fr",
            //       }
            // }
          >
            {cards.map((card, i) => (
              <CardMotionWrapper key={i} delay={i * 0.1} duration={1} className="lg:min-w-[unset] min-w-full">
                <ServiceCard
                  key={i}
                  name={card.name}
                  description={card.description}
                  col={benefits}
                  // icon={SERVICES_ICONS[card.name]}
                  buttons={!benefits}
                  linkage={linkage}
                  sml={benefits}
                />
              </CardMotionWrapper>
            ))}
          </div>
        {/* </StaggeredMotionWrapper> */}
      </div>
    </section>
  );
};

export default CardsSection;
