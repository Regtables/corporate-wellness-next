import { SanityBlockText } from "@/lib/sanity/types";

import React, { FC, Fragment } from "react";

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
            <p className="block" key={i}>
              {child.text}
            </p>
          ))}
        </Fragment>
      ))}
    </article>  
  );
};

export default BlockText;
