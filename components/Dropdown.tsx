'use client'

import { ChevronDown } from "lucide-react";
import React, { FC, useRef, useState } from "react";

interface DropdownProps {
  heading: string;
  defaultValue: string;
  options: string[];
  handleOptionSelect: (option: string) => void;
  selectedOption?: string;
}

const Dropdown: FC<DropdownProps> = ({
  heading,
  defaultValue,
  options,
  handleOptionSelect,
  selectedOption,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const content: any = useRef(null);

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
      setHeight(`${content.current.scrollHeight}px`);
    } else {
      setHeight("0px");
      setIsOpen(false);
    }
  };

  const handleOptionClick = (option: string) => {
    handleOptionSelect(option);

    handleOpen();
  };

  return (
    <div className="bg-lightEgg text-black py-[10px] px-[16px] rounded-xl relative">
      <div className="flex justify-between items-center h-full" onClick={handleOpen}>
        <div className="">{heading}</div>

        <div className="flex justify-between items-center" >
          <ChevronDown size={20} />
        </div>
      </div>

      <div
        className="overflow-hidden bg-white rounded-lg absolute top-[90%] start-0 end-0 z-10 w-full flex flex-col gap-1 transition-all duration-300 m-1"
        style={{ maxHeight: height }}
        ref={content}
      >
        {options.map((option, i) => (
          <div
            className="font-light px-4 cursor-pointer"
            onClick={() => handleOptionClick(option)}
            key={i}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
