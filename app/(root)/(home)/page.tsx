import React, { FC } from "react";

import { sanityFetchHomePageContent } from "@/lib/sanity/actions";

import Hero from "@/components/Hero";
import ApproachSection from "@/components/ApproachSection";
import AboutSection from "@/components/AboutSection";
import Values from "@/components/Values";
import ServicesSection from "@/components/ServicesSection";
import ParallaxBanner from "@/components/ParallaxBanner";

const HomePage: FC = async () => {
  const { heroSection, aboutSection, approachSection, servicesSection, imageBanner1 } = await sanityFetchHomePageContent();

  return (
    <div className="flex flex-col gap-32">
      <Hero
        image={heroSection.backgroundImages[0]}
        title={heroSection.title}
        subtitle={heroSection.subtitle}
        text={heroSection.bodyText}
      />

      <AboutSection
        headingWithBlockText={aboutSection.headingWithBlockText}
        image={aboutSection.image}
      />

      <div className="relative">
        <ApproachSection
          headingWithText={approachSection.sectionContent.headingWithBlockText}
          image={approachSection.sectionContent.image}
          appproaches={approachSection.approaches}
        />

        <div className="absolute w-full flex justify-center bottom-[-65px]">
          <Values />
        </div>
      </div>

      <ServicesSection
        heading={servicesSection.heading}
        services={servicesSection.services}
      />

      <div>
        <ParallaxBanner image={imageBanner1} />
      </div>
    </div>
  );
};

export default HomePage;
