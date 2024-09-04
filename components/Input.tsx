import React, { FC } from "react";
import { useForm } from "@/context/FormContext";
import { cn } from "../lib/utils";
import FormErrorMessage from "./FormErrorMessage";
import { AnimatePresence } from "framer-motion";

interface InputProps {
  placeholder: string;
  type: string;
  name: string;
  required?: boolean;
}

const Input: FC<InputProps> = ({
  placeholder,
  type,
  name,
  required,
}) => {
  const { formData, errors, handleChange } = useForm();

  return (
    <div className="w-full relative">
      <input
        className={cn(
          "bg-lightEgg text-black w-full py-[10px] px-[16px] rounded-xl focus:outline-white",
          type !== "email" && "capitalize",
          errors[name] && "border-red-500"
        )}
        name={name}
        placeholder={placeholder}
        value={formData[name] || ''}
        onChange={handleChange}
        type={type}
        // required={required}
      />

      <AnimatePresence>
        {errors[name] && (
          <FormErrorMessage message={errors[name]} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Input;