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
  linkage?: boolean,
  buttons?: boolean
  col?: boolean
  icon?: string
}

const ServiceCard: FC<ServiceCardProps> = ({ name, description, linkage, buttons, col, icon }) => {
  return (
  <Link href={linkage ? `/services/${slugify(name)}` : ''}>
    <article className="bg-[white] p-[30px] rounded-xl flex flex-col gap-6 h-full">
      <div className={cn("flex gap-6", col && 'flex-col text-center items-center w-64 mx-auto')}>
        <Image src={icon ? icon : SERVICES_ICONS[name]} height={50} width={80} alt={name} className="" />
        <h3 className="font-heading text-[26px] font-bold">{name}</h3>
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
