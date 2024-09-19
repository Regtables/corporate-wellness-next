import React from "react";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { Metadata } from "next";

import {
  sanityFetchAllServices,
  sanityFetchServiceContent,
} from "@/lib/sanity/actions";

import PageBanner from "@/components/PageBanner";
import ServiceIntroductionSection from "@/components/ServiceIntroductionSection";
import ServiceObjectivesSection from "@/components/ServiceObjectivesSection";
import ParallaxBanner from "@/components/ParallaxBanner";
import ServiceProcessSection from "@/components/ServiceProcessSection";
import CardsSection from "@/components/CardsSection";
import ContactFormSection from "@/components/ContactFormSection";

export const revalidate = 60

export const generateStaticParams = async () => {
  const services = await sanityFetchAllServices();

  return services.map((service) => ({
    params: {
      service: service.slug.current,
    },
  }));
};

export const generateMetadata = async ({ params }: { params: { service: string } }): Promise<Metadata> => {
  const { service } = params;
  const serviceContent = await sanityFetchServiceContent(service);

  return {
    title: `${serviceContent.name} | Corporate Wellness`,
    description: serviceContent.description,
  };
};

const ServicePage = async ({ params }: { params: Params }) => {
  const { service } = params;

  const {
    name,
    introductionSection,
    bannerImage,
    objectivesSection,
    imageBanner1,
    imageBanner2,
    processSection,
    benefitsSection,
  } = await sanityFetchServiceContent(service);

  return (
    <div className="flex flex-col">
      <PageBanner
        heading={name}
        subHeading="services"
        image={bannerImage}
        icon
      />

      <ServiceIntroductionSection
        headingWithBlockText={introductionSection.headingWithBlockText}
        image={introductionSection.image}
      />

      <div>
        <ServiceObjectivesSection
          heading={objectivesSection.heading}
          image={objectivesSection.image}
          objectives={objectivesSection.objectives}
        />

        <ParallaxBanner image={imageBanner1} />

        <ServiceProcessSection
          heading={processSection.heading}
          processSteps={processSection.processSteps}
          service={name}
        />
      </div>

      <CardsSection
        heading={benefitsSection.heading}
        cards={benefitsSection.benefits}
        benefits
      />

      <ParallaxBanner image={imageBanner2} />

      <ContactFormSection tree="willow" treeClassName="absolute -start-28" />
    </div>
  );
};

export default ServicePage;
