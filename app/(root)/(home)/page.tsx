import React, { FC } from "react";

import { sanityFetchHomePageContent } from "@/lib/sanity/actions";

import Hero from "@/components/Hero";
import ApproachSection from "@/components/ApproachSection";
import AboutSection from "@/components/AboutSection";
import Values from "@/components/Values";
import CardsSection from "@/components/CardsSection";
import ParallaxBanner from "@/components/ParallaxBanner";
import GeneralProcess from "@/components/GeneralProcess";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactFormSection from "@/components/ContactFormSection";

const HomePage: FC = async () => {
  const {
    heroSection,
    aboutSection,
    approachSection,
    servicesSection,
    imageBanner1,
    generalProcess,
    testimonialSection,
    imageBanner2
  } = await sanityFetchHomePageContent();

  return (
    <div className="flex flex-col gap-32">
      {/* Hero */}
      <Hero
        image={heroSection.backgroundImages[0]}
        title={heroSection.title}
        subtitle={heroSection.subtitle}
        text={heroSection.bodyText}
      />

      {/* About */}
      <AboutSection
        headingWithBlockText={aboutSection.headingWithBlockText}
        image={aboutSection.image}
      />

      {/* Approach & Values */}
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

      {/* Services */}
      <CardsSection
        heading={servicesSection.heading}
        cards={servicesSection.services}
        id = 'services'
        
      />

      {/* Process */}
      <div>
        <ParallaxBanner image={imageBanner1} />

        <GeneralProcess
          heading={generalProcess.heading}
          processSteps={generalProcess.processSteps}
        />
      </div>

      {/* Testimonials */}
      <TestimonialsSection
        heading={testimonialSection.heading}
        testimonials={testimonialSection.testimonials}
      />

      <div>
        <ParallaxBanner image={imageBanner2} />

        <ContactFormSection tree = 'baobab' />
      </div>
    </div>
  );
};

export default HomePage;
