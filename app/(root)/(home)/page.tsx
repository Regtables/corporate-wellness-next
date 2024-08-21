import React, { FC } from "react";

import Hero from "@/components/Hero";
import { sanityFetchHomePageContent } from "@/lib/sanity/actions";
import ApproachSection from "@/components/ApproachSection";
import Leaves from "@/components/Leaves";

const HomePage: FC = async () => {
  const { heroSection } = await sanityFetchHomePageContent();

  return (
    <div>
      <div className="relative">
        <Hero
          image={heroSection.backgroundImages[0]}
          title={heroSection.title}
          subtitle={heroSection.subtitle}
          text={heroSection.bodyText}
        />

        <div className="w-[70px] h-[400px] absolute bottom-[-220px]">
          <Leaves />
        </div>
      </div>

      <ApproachSection />
    </div>
  );
};

export default HomePage;
