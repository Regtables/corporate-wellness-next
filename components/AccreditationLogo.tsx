import { SanityImageType } from "@/lib/sanity/types";
import Image from "next/image";
import React, { FC } from "react";

import { urlFor } from "@/lib/sanity/client";

interface AccreditationLogoProps {
  logo: SanityImageType;
  width?: number
}

const AccreditationLogo: FC<AccreditationLogoProps> = ({ logo, width = 240 }) => {
  return (
    <div>
      <Image
        src={urlFor(logo.image).width(width).url()}
        alt= {logo.alt}
        layout="responsive"
        width={240}
        height={20}
        className="object-contain"
        quality={100}
      />
    </div>
  );
};

export default AccreditationLogo;
