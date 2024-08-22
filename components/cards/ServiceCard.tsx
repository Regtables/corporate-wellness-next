"use client";

import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SERVICES_ICONS } from "@/lib/icons";
import { slugify } from "@/lib/utils";

interface ServiceCardProps {
  name: string;
  description: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ name, description }) => {
  return (
  <Link href={`/services/${slugify(name)}`}>
    <article className="bg-[white] p-[30px] rounded-xl flex flex-col gap-6">
      <div className="flex gap-6">
        <Image src={SERVICES_ICONS[name]} height={50} width={80} alt={name} className="" />
        <h3 className="font-heading text-[26px] font-bold">{name}</h3>
      </div>

      <p className="bodyText">{description}</p>

      <div className="font-medium flex items-center gap-4">
        Read More

        <ArrowUpRight />
      </div>
    </article>
  </Link>
  );
};

export default ServiceCard;
