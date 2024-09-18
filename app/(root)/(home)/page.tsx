import React, { FC } from "react";

import {
  sanityFetchAccreditationsLogos,
  sanityFetchHomePageContent,
} from "@/lib/sanity/actions";

import Hero from "@/components/Hero";
import ApproachSection from "@/components/ApproachSection";
import AboutSection from "@/components/AboutSection";
import Values from "@/components/Values";
import CardsSection from "@/components/CardsSection";
import ParallaxBanner from "@/components/ParallaxBanner";
import GeneralProcess from "@/components/GeneralProcess";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactFormSection from "@/components/ContactFormSection";
import Timeline from "@/components/timeline/Timeline";
import Icon from "@/components/logos/Icon";
import TimelineMobile from "@/components/timeline/TimelineMobile";

const TIMELINE = [
  {
    date: "1998",
    text: "The idea of Corporate Wellness starts in South Africa.",
  },
  {
    date: "2004",
    text: "Corporate Wellness was formally established in Cape Town, South Africa.  ",
  },
  {
    date: "2006",
    text: "Corporate Wellness HR Consulting services commenced in Dubai, United Arab Emirates.",
  },
  {
    date: "2009",
    text: "Coaching Services were added to Corporate Wellness’s repertoire.",
  },
  {
    date: "2015",
    text: "Team Coaching Services were added to Corporate Wellness’s repertoire.",
  },
  {
    date: "2024",
    text: "Corporate Wellness expanded its operations to the UK.",
  },
  // {
  //   date: "2025",
  //   text: "Corporate Wellness celebrates years of success in Coaching and HR Consulting with global clients.",
  // },
];

export const revalidate = 60

const HomePage: FC = async () => {
  const {
    heroSection,
    aboutSection,
    approachSection,
    servicesSection,
    imageBanner1,
    testimonialSection,
    imageBanner2,
  } = await sanityFetchHomePageContent();
  return (
    <div className="flex flex-col" id="home">
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

      <Timeline timeline={TIMELINE} />

      <TimelineMobile timeline={TIMELINE} />

      {/* Approach & Values */}
      <div className="relative">
        <ApproachSection
          headingWithText={approachSection.sectionContent.headingWithBlockText}
          image={approachSection.sectionContent.image}
          appproaches={approachSection.approaches}
        />
      </div>

      {/* Services */}
      <div className="relative">
        <div className="xl:block lg:hidden md:hidden hidden h-[310px] w-[300px] absolute -end-28 -top-20 z-10 overflow-hidden">
          <Icon
            path={{ src: "/logo-icon-blue.png" }}
            className="h-[310px] w-[300px] absolute end-0 top-0 z-10"
          />
        </div>

        <div className="lg:mt-16 md:mt-20 mt-72">
          <CardsSection
            heading={servicesSection.heading}
            cards={servicesSection.services}
            id="services"
            linkage
          />
        </div>

        <div className="absolute w-full flex justify-center lg:top-[-65px] top-[-100px]">
          <Values />
        </div>
      </div>

      <ParallaxBanner image={imageBanner1} />

      {/* Testimonials */}
      <TestimonialsSection
        heading={testimonialSection.heading}
        testimonials={testimonialSection.testimonials}
      />

      <ParallaxBanner image={imageBanner2} />

      <ContactFormSection tree="baobab" />
    </div>
  );
};

export default HomePage;
