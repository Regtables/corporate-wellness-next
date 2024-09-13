import { SanityBlockText } from "@/lib/sanity/types";

import React, { FC, Fragment } from "react";
import ViewMotionWrapper from "./ViewMotionWrapper";

interface BlockTextProps {
  text: SanityBlockText;
  className?: string;
  gap?: string;
}

const BlockText: FC<BlockTextProps> = ({ text, className }) => {
  return (
    <article className={`flex flex-col ${className}`}>
      {text.map((para, i) => (
        <Fragment key = {i}>
          {para.children.map((child, i) => (
            <ViewMotionWrapper className="block" key={i} delay={i*0.1}>
              {child.text}
            </ViewMotionWrapper>
          ))}
        </Fragment>
      ))}
    </article>  
  );
};

export default BlockText;
