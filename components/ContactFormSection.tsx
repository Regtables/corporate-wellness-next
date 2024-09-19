"use client";

import React, { FC } from "react";
import Image from "next/image";
import { TREE_ICONS } from "@/lib/icons";
import ContactForm from "./ContactForm";
import { FormProvider } from "@/context/FormContext";
import AnimatedTitle from "./motion/AnimatedTitle";
import StaggeredMotionWrapper from "./motion/StaggerChildrenMotionWrapper";
import ViewMotionWrapper from "./ViewMotionWrapper";

interface ContactFormSectionProps {
  tree: "willow" | "baobab" | "acacia";
  treeClassName?: string;
  heading?: string;
  text?: string;
}

const ContactFormSection: FC<ContactFormSectionProps> = ({
  tree,
  treeClassName,
  heading = "Contact Me",
  text = "Lets get in touch to and make it happen",
}) => {
  const { src, height, width } = TREE_ICONS[tree];
  return (
    <section className="bg-duckEgg lg:pt-sectionY lg:pb-40 lg:pl-0 md:px-[var(--section-x-md)] px-[20px] md:py-[40px] pb-10 pt-[40px] flex lg:flex-row flex-col relative">
      <ViewMotionWrapper
        className={`lg:flex-[0.50] w-full lg:block lg:h-[300px] flex-[unset] lg:mb-0 mb-4`}
      
        y={30}
        duration={2}
      >
        <Image
          src={src}
          width={width || undefined}
          height={height || undefined}
          alt={tree}
          className={treeClassName}
          priority
          quality={100}
        />
      </ViewMotionWrapper>

      <StaggeredMotionWrapper className="lg:flex-[0.50] w-full">
        <AnimatedTitle
          text={heading}
          className="lg:text-left md:text-center heading"
        />
        <p className="text-[14px] lg:text-start text-center">{text}</p>

        <ContactForm />
      </StaggeredMotionWrapper>
    </section>
  );
};

export default ContactFormSection;
