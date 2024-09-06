"use client";

import React, { FC } from "react";
import Icon from "./logos/Icon";
import { TREE_ICONS } from "@/lib/icons";
import ContactForm from "./ContactForm";
import { FormProvider } from "@/context/FormContext";

interface ContactFormSectionProps {
  tree: "willow" | "baobab" | "acacia";
  treeClassName?: string;
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
}) => {
  return (
    <section className="bg-duckEgg lg:py-sectionY lg:pr-section px-[20px] py-[30px] flex relative">
      <div className={`flex-[0.5] w-full lg:block hidden`}>
        <Icon
          path={TREE_ICONS[tree]}
          className={`h-full w-full ${treeClassName}`}
        />
      </div>

      <div className="lg:flex-[0.5] w-full">
        <h2 className="font-heading heading">Contact Me</h2>
        <p className="text-[14px] lg:text-start text-center">Let's get in touch to make it happen</p>

        <ContactForm />
      </div>
    </section>
  );
};

export default ContactFormSection;
