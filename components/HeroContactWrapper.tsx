"use client";

import React, { FC, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from 'react-responsive';

import Hero from "./Hero";
import ContactFormSection from "./ContactFormSection";
import ViewMotionWrapper from "./ViewMotionWrapper";
import { MoveLeft } from "lucide-react";

interface HeroContactWrapperProps {
  heroSection: any;
  contactSectionContent: any;
}

const HeroContactWrapper: FC<HeroContactWrapperProps> = ({
  heroSection,
  contactSectionContent,
}) => {
  const [showContact, setShowContact] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const heroHeight = !showContact ? (!isMobile ? "calc(100vh - 120px)" : "calc(100vh - 80px)") : '120vh';

  const handleBackClick = () => {
    setShowContact(false)
  }

  const handleContactButtonClick = () => {
    setShowContact(true);
  };

  const slideAnimation = isMobile
    ? { y: ["100%", "0%"] }
    : { x: ["-100%", "0%"] };

  const slideExitAnimation = isMobile
    ? { y: ["0%", "100%"] }
    : { x: ["0%", "-100%"] };

  return (
    <div className="relative w-full" style={{ height: heroHeight }}>
      <div className="relative z-10">
        <Hero
          image={heroSection.backgroundImages[0]}
          title={heroSection.title}
          subtitle={heroSection.subtitle}
          text={heroSection.bodyText}
          onContactClick={handleContactButtonClick}
          showContact={showContact}
        />
      </div>

      <AnimatePresence>
        {showContact && (
          <>
            <motion.div
              className="absolute inset-0 bg-duckEgg z-20"
              initial={isMobile ? { y: "100%" } : { x: "-100%" }}
              animate={slideAnimation}
              exit={slideExitAnimation}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute inset-0 z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <div className="w-full h-full relative">
                <button className="ml-20 pt-10 flex text-[14px] -tracking-widest text-white items-center gap-2" onClick={handleBackClick}>
                  <MoveLeft color="var(--color-white)" size={20} /> {'Home'}
                </button>
                <ViewMotionWrapper delay={0.7} exit={{ y: 50, opacity: 0 }}>
                  <ContactFormSection
                    tree="baobab"
                    containerClassName="lg:pt-0 bg-[transparent]"
                  />
                </ViewMotionWrapper>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroContactWrapper;