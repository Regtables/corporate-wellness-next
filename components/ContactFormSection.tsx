"use client";

import React, { FC } from "react";
import Icon from "./logos/Icon";
import { TREE_ICONS } from "@/lib/icons";
import ContactForm from "./ContactForm";
import { FormProvider } from "@/context/FormContext";
import AnimatedTitle from "./motion/AnimatedTitle";
import StaggeredMotionWrapper from "./motion/StaggerChildrenMotionWrapper";
import ViewMotionWrapper from "./ViewMotionWrapper";

interface ContactFormSectionProps {
  tree: "willow" | "baobab" | "acacia";
  treeClassName?: string;
  heading?: string,
  text?: string
}

const FORM_DATA = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  service: "",
  message: "",
};

const ContactFormSection: FC<ContactFormSectionProps> = ({
  tree,
  treeClassName,
  heading = 'Contact Me',
  text = 'Lets get in touch to and make it happen'
}) => {
  return (
    <section className="bg-duckEgg lg:py-sectionY lg:pb-0 lg:pr-[var(--section-x-md)] md:px-[var(--section-x-md)] px-[20px] md:py-[40] pt-[40px] flex relative gap-10">
      <ViewMotionWrapper className={`flex-[0.5] w-full lg:block hidden`} x = {-20} y = {0} duration={2}>
        <Icon
          path={TREE_ICONS[tree]}
          className={`h-full w-full relative ${treeClassName}`}
        />
      </ViewMotionWrapper>

      <StaggeredMotionWrapper className="lg:flex-[0.5] w-full">
        <AnimatedTitle text= {heading} className="lg:text-left md:text-center" />
        <p className="text-[14px] lg:text-start text-center">{text}</p>

        <ContactForm />
      </StaggeredMotionWrapper>
    </section>
  );
};

export default ContactFormSection;
