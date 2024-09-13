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
    <section className="bg-duckEgg lg:py-sectionY lg:pb-0 lg:pr-section px-[20px] py-[30px] flex relative">
      <ViewMotionWrapper className={`flex-[0.5] w-full lg:block hidden`} x = {-20} y = {0} duration={2}>
        <Icon
          path={TREE_ICONS[tree]}
          className={`h-full w-full ${treeClassName}`}
        />
      </ViewMotionWrapper>

      <StaggeredMotionWrapper className="lg:flex-[0.5] w-full">
        <AnimatedTitle text= {heading} />
        <p className="text-[14px] lg:text-start text-center">{text}</p>

        <ContactForm />
      </StaggeredMotionWrapper>
    </section>
  );
};

export default ContactFormSection;
