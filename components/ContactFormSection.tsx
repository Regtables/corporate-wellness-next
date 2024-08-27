import React, { FC } from "react";
import Icon from "./logos/Icon";
import { TREE_ICONS } from "@/lib/icons";
import ContactForm from "./ContactForm";

interface ContactFormSectionProps {
  tree: "willow" | "baobab" | "acacia";
  treeClassName?: string
}

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

        <ContactForm />
      </div>
    </section>
  );
};

export default ContactFormSection;
