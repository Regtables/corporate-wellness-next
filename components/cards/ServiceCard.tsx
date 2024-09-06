"use client";

import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SERVICES_ICONS } from "@/lib/icons";
import { cn, slugify } from "@/lib/utils";

interface ServiceCardProps {
  name: string;
  description: string;
  linkage?: boolean;
  buttons?: boolean;
  col?: boolean;
  icon?: string;
}

const ServiceCard: FC<ServiceCardProps> = ({
  name,
  description,
  linkage,
  buttons,
  col,
  icon,
}) => {
  const { src, height, width } = SERVICES_ICONS[name];

  return (
    <Link href={linkage ? `/services/${slugify(name)}` : ""}>
      <article className="bg-[white] lg:p-[30px] p-[16px] rounded-xl flex lg:text-left text-center flex-col lg:gap-6 gap-4 h-full hover:bg-black hover:text-duckEgg hover:border-duckEgg transition-all duration-500 hover:pl-[40px]">
        <div
          className={cn(
            "flex lg:flex-row flex-col lg:gap-6 gap-4 items-center",
            col &&
              "flex-col text-center items-center justify-center w-64 mx-auto"
          )}
        >
          <Image src={src} alt={name} height={height} width={width} />

          <h3 className="font-heading lg:text-[26px] text-[20px] font-bold leading-[32px]">
            {name}
          </h3>
        </div>

        <p className="bodyText">{description}</p>

        {buttons && (
          <div className="font-medium flex items-center lg:justify-start justify-center gap-4">
            Read More
            <ArrowUpRight />
          </div>
        )}
      </article>
    </Link>
  );
};

export default ServiceCard;
