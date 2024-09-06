import React, { FC } from "react";
import Image from "next/image";

import { TIMELINE_ICONS } from "@/lib/icons";

interface TimelineTileMobileProps {
  date: string;
  text: string;
  isLast?: boolean;
}

const TimelineTileMobile: FC<TimelineTileMobileProps> = ({
  date,
  text,
  isLast,
}) => {
  const { src, height, width } = TIMELINE_ICONS[date];
  return (
    <div className="flex w-full items-center">
      <div className="w-full bg-duckEgg px-[20px] py-[10px] rounded-[20px] flex flex-col gap-2 items-center text-center justify-center">
        <Image src={src} alt={date} height={height} width={width} className="" />
        <div className="font-heading font-bold text-[20px]">{date}</div>

        <div className="text-[12px]">{text}</div>

      </div>

      {!isLast && (
        <div className="h-[2px] min-w-[20px] bg-black"/>
      )}
    </div>
  );
};

export default TimelineTileMobile;
