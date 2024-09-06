"use client";

import axios from "axios";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { FormProvider, useForm } from "@/context/FormContext";

import Input from "./Input";
import Dropdown from "./Dropdown";
import RadioButton from "./RadioButtton";
import BasicButton from "./buttons/BasicButton";
import FormErrorMessage from "./FormErrorMessage";

const INITIAL_FORM_DATA = {
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

const FORM_CONFIG = {
  firstname: { required: true },
  lastname: { required: true },
  email: {
    required: true,
    validationRules: [
      (value: string) =>
        !/\S+@\S+\.\S+/.test(value) ? "Invalid email format" : undefined,
    ],
  },
  contact: { required: true },
  service: { required: true },
  message: { required: true },
  consent: { required: true }
};

const ContactFormContent = () => {
  const { formData, errors, handleChange, validateForm, setFormData } =
    useForm();
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      if (agreed) {
        console.log("Form submitted", formData);
        try{
          setIsLoading(true)
    
          const res = await axios.post('/api/form', { formData })
    
          if(res.status === 200){
            setSuccess(true)

            setFormData(INITIAL_FORM_DATA)
    
            setTimeout(() => {
              setSuccess(false)
            }, 3000);
          }
        } catch (error){
          console.log(error)
        } finally {
          setIsLoading(false)
        }
      } else {
        console.log("Form has errors or agreement not checked");
        setError('Please agree to the terms and conditions before sending your message')
      }
    }
  };

  const handleServiceSelect = (service: string) => {
    setFormData({ ...formData, service });
  };

  const handleAgree = () => {
    if(!agreed) {
      setAgreed(true)
      if(error){
        setError('')
      }
    } else {
      setAgreed(false)
    }
  }

  const renderButtonText = () => {
    if(isLoading){
      return 'Sending Message...'
    } else if(success){
      return 'Message Sent!'
    } else {
      return 'Send Message'
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="lg:mt-10 mt-6 flex flex-col items-start gap-5"
    >
      <div className="grid grid-cols-2 gap-5 w-full">
        <Input placeholder="First name" name="firstname" type="text" required />
        <Input placeholder="Surname" name="lastname" type="text" required />
        <Input placeholder="Email" name="email" type="email" required />
        <Input
          placeholder="Contact number"
          name="contact"
          type="tel"
          required
        />
      </div>

      <Dropdown
        heading="Services"
        options={SERVICE_OPTIONS}
        selectedOption={formData.service}
        handleOptionSelect={handleServiceSelect}
      />

      <div className="relative w-full">
        <textarea
          className="bg-lightEgg text-black py-[10px] px-[16px] rounded-xl w-full"
          rows={8}
          placeholder="Add a message..."
          name="message"
          value={formData.message}
          onChange={handleChange}
          // required
        ></textarea>
        <AnimatePresence>
          {errors.message && <FormErrorMessage message={errors.message} />}
        </AnimatePresence>
      </div>

      <div className="relative">
        <AnimatePresence>
          {error && (
            <FormErrorMessage message= {error} className="-top-5 left-4" />
          )}
        </AnimatePresence>

        <RadioButton
          text="By Submitting a message, you have read and understood the Privacy Policy and consent to the processing of your personal data for marketing and profiling purposes."
          isChecked={agreed}
          handleCheck={handleAgree}
        />
      </div>
      
      <div className="flex w-full lg:justify-start justify-center">
        <BasicButton
          text= {renderButtonText()}
          bgColor="var(--color-black)"
          color="white"
          type="submit"
        />
      </div>
    </form>
  );
};

const ContactForm = () => (
  <FormProvider initialState={INITIAL_FORM_DATA} formConfig={FORM_CONFIG}>
    <ContactFormContent />
  </FormProvider>
);

export default ContactForm;
