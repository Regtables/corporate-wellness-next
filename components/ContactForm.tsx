"use client";

import React, { ChangeEvent, useState } from "react";

import Input from "./Input";
import Dropdown from "./Dropdown";
import RadioButton from "./RadioButtton";
import BasicButton from "./buttons/BasicButton";

const FORM_DATA = {
  firstname: "",
  lastname: "",
  email: "",
  contact: "",
  service: "",
  message: "",
};

const SERVICE_OPTIONS = [
  "Individual Coaching",
  "Team Coaching",
  "HR consultance",
];

const ContactForm = () => {
  const [formData, setFormData] = useState(FORM_DATA);
  const [agreed, setAgreed] = useState(false)

  const rowStyles = "flex";

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form className="mt-10 flex flex-col items-start gap-5">
      <div className="grid grid-cols-2 gap-5 w-full">
        <Input
          placeholder="First name"
          value={formData.firstname}
          name="firstName"
          handleChange={handleFormChange}
        />

        <Input
          placeholder="Surname"
          value={formData.lastname}
          name="lastName"
          handleChange={handleFormChange}
        />

        <Input
          placeholder="Email"
          value={formData.email}
          name="email"
          handleChange={handleFormChange}
        />

        <Input
          placeholder="Contact number"
          value={formData.contact}
          name="contact"
          handleChange={handleFormChange}
        />
      </div>

      <Dropdown
        heading="Services"
        options={SERVICE_OPTIONS}
        defaultValue="Individual Coaching"
        
      />

      <textarea
        className="bg-lightEgg text-black py-[10px] px-[16px] rounded-xl w-full"
        rows={8}
        placeholder="Add a message..."
      ></textarea>

      <RadioButton 
        text="By Submitting a message, you have read and understood the Privacy Policy and consent to the processing of your personal data for marketing and profiling purposes."
        isChecked = {agreed}
        handleCheck={setAgreed}
      />

      <BasicButton text="Send Message" bgColor="var(--color-black)" color="white"/>
    </form> 
  );
};

export default ContactForm;
