import React, { ChangeEvent, FC } from "react";

import { cn } from "../lib/utils";

interface InputProps {
  placeholder: string;
  type: string;
  name: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const Input: FC<InputProps> = ({
  placeholder,
  type,
  name,
  value,
  required,
  handleChange,
}) => {
  return (
    <input
      className={cn(
        "bg-lightEgg text-black py-[10px] px-[16px] rounded-xl focus:outline-white",
        type !== "email" && "capitalize"
      )}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      type={type}
      required={required}
    />
  );
};

export default Input;
