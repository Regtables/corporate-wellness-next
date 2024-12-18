"use client";

import React, { FC, useRef, useState } from "react";
import PlusMinus from "./icons/PlusMinus";

interface AccordionProps {
  name: string;
  description: string;
  className?: string;
}

const Accordion: FC<AccordionProps> = ({ name, description, className }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [height, setHeight] = useState("0px");
  const content = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    setHeight(isExpanded ? "0px" : `${content.current?.scrollHeight || 0}px`);
  };

  return (
    <div
      className={`group bg-white lg:p-[24px] p-[16px] rounded-xl border-[3px] border-[#00000000] hover:border-[var(--color-black)] transition-all duration-500 ${className}`}
    >
      <button
        className="w-full text-left"
        onClick={handleToggle}
        aria-expanded={isExpanded}
        aria-controls={`content-${name.replace(/\s+/g, "-").toLowerCase()}`}
      >
        <div className="flex justify-between items-center">
          <h3 className="font-heading font-bold lg:text-[28px] text-[16px] w-full">{name}</h3>
          <div
            className="h-10 w-10 rounded-full border-2 border-[var(--color-black)] flex items-center justify-center group-hover:border-white transition-all duration-500"
            aria-hidden="true"
          >
            {/* {isExpanded ? "−" : "+"} */}
            <PlusMinus isOpen = {isExpanded} />
          </div>
        </div>
      </button>

      <div
        className="overflow-hidden transition-all duration-500"
        style={{ maxHeight: height }}
        ref={content}
        id={`content-${name.replace(/\s+/g, "-").toLowerCase()}`}
        role="region"
        aria-labelledby={`heading-${name.replace(/\s+/g, "-").toLowerCase()}`}
      >
        <p className="mt-4 bodyText">{description}</p>
      </div>
    </div>
  );
};

export default Accordion;
