import React, { FC } from "react";

import ServiceCard from "./cards/ServiceCard";
import BasicButton from "./buttons/BasicButton";

interface ServicesSectionProps {
  heading: string;
  services: {
    name: string;
    description: string;
  }[];
}

const ServicesSection: FC<ServicesSectionProps> = ({ heading, services }) => {
  return (
    <section className="px-section mt-10">
      <div className="flex justify-between items-center pb-8">
        <h2 className="font-heading heading">{heading}</h2>

        <BasicButton text="Contact Us" bgColor="var(--color-duckEgg)" />
      </div>

      <div className="flex gap-8">
        {services.map((service, i) => (
          <ServiceCard
            name={service.name}
            description={service.description}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
