import React, { ChangeEvent, FC } from "react";

import { cn } from "../lib/utils";

interface InputProps {
  placeholder: string;
  type: string;
  name: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean
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
    <div className="w-full">
      <input
        className={cn(
          "bg-lightEgg text-black w-full py-[10px] px-[16px] rounded-xl focus:outline-white",
          type !== "email" && "capitalize"
        )}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        type={type}
        required={required}
      />
    </div>
  );
};

export default Input;
