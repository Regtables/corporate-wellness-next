import { AnimatePresence } from "framer-motion";
import React, { Dispatch, FC, SetStateAction } from "react";

import ViewMotionWrapper from "./CardMotionWrapper";

interface RadioButtonProps {
  isChecked: boolean;
  text: string;
  handleCheck: Dispatch<SetStateAction<boolean>>;
}

const RadioButton: FC<RadioButtonProps> = ({
  isChecked,
  text,
  handleCheck,
}) => {
  return (
    <button
      onClick={() => handleCheck(!isChecked)}
      className="flex items-center text-start gap-4"
      type="button"
    >
      <div className="h-4 w-4 min-w-4 min-h-4 bg-white rounded-full flex items-center justify-center">
        <AnimatePresence>
          {isChecked && (
            <ViewMotionWrapper
              className="h-2 w-2 min-h-2 min-w-2 rounded-full bg-black"
              y={0}
              duration={0.3}
            >
              <></>
            </ViewMotionWrapper>
          )}
        </AnimatePresence>
      </div>

      <div className="lg:text-[14px] text-[12px] font-[400] lg:leading-[16px]">{text}</div> 
    </button>
  );
};

export default RadioButton;
