'use client'

import React, { FC } from "react";
import Icon from "./logos/Icon";
import { TREE_ICONS } from "@/lib/icons";
import ContactForm from "./ContactForm";
import { FormProvider } from "@/context/FormContext";

interface ContactFormSectionProps {
  tree: "willow" | "baobab" | "acacia";
  treeClassName?: string
}

const FORM_DATA = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  service: "",
  message: "",
};

const ContactFormSection: FC<ContactFormSectionProps> = ({ tree, treeClassName }) => {
  return (
    <section className="bg-duckEgg py-sectionY pr-section flex relative">
      <div className={`flex-[0.5] w-full`}>
        <Icon 
          path={TREE_ICONS[tree]}
          className={`h-full w-full ${treeClassName}`}
        />
      </div>

      <div className="flex-[0.5] w-full">
        <h2 className="font-heading heading">Contact Me</h2>
        <p className="text-[14px]">Let's get in touch to make it happen</p>

        <FormProvider initialState={FORM_DATA}>
          <ContactForm />
        </FormProvider>
      </div>
    </section>
  );
};

export default ContactFormSection;
