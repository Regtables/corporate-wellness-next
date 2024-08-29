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
      <article className="bg-[white] p-[30px] rounded-xl flex flex-col gap-6 h-full hover:bg-black hover:text-duckEgg hover:border-duckEgg transition-all duration-500 hover:pl-[40px]">
        <div
          className={cn(
            "flex gap-6 items-center",
            col &&
              "flex-col text-center items-center justify-center w-64 mx-auto"
          )}
        >
          <Image src={src} alt={name} height={height} width={width} />

          <h3 className="font-heading text-[26px] font-bold leading-[32px]">
            {name}
          </h3>
        </div>

        <p className="bodyText">{description}</p>

        {buttons && (
          <div className="font-medium flex items-center gap-4">
            Read More
            <ArrowUpRight />
          </div>
        )}
      </article>
    </Link>
  );
};

export default ServiceCard;
