"use client";

import React, { ChangeEvent, useState } from "react";

import Input from "./Input";
import Dropdown from "./Dropdown";
import RadioButton from "./RadioButtton";
import BasicButton from "./buttons/BasicButton";

const FORM_DATA = {
  firstName: "",
  lastName: "",
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

const ContactForm = ({ defaultService } : { defaultService?: string }) => {
  const [formData, setFormData] = useState(FORM_DATA);
  const [agreed, setAgreed] = useState(false)

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceSelect = (service: string) => {
    setFormData({ ...formData, service })
  }

  return (
    <form className="mt-10 flex flex-col items-start gap-5">
      <div className="grid grid-cols-2 gap-5 w-full">
        <Input
          placeholder="First name"
          value={formData.firstName}
          name="firstName"
          handleChange={handleFormChange}
          type="text"
          required
        />

        <Input
          placeholder="Surname"
          value={formData.lastName}
          name="lastName"
          handleChange={handleFormChange}
          type="text"
          required
        />

        <Input
          placeholder="Email"
          value={formData.email}
          name="email"
          handleChange={handleFormChange}
          type="email"
          required
        />

        <Input
          placeholder="Contact number"
          value={formData.contact}
          name="contact"
          handleChange={handleFormChange}
          type="text"
        />
      </div>

      <Dropdown
        heading="Services"
        options={SERVICE_OPTIONS}
        handleOptionSelect={handleServiceSelect}
        selectedOption= {defaultService || formData.service}
        
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

      <BasicButton text="Send Message" bgColor="var(--color-black)" color="white" type="submit"/>
    </form> 
  );
};

export default ContactForm;
