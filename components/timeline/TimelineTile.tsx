"use client";

import { TIMELINE_ICONS } from "@/lib/icons";
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";

interface TimelineTileProps {
  date: string;
  text: string;
  last?: boolean;
}

const TimelineTile: FC<TimelineTileProps> = ({ date, text, last }) => {
  const [hoverDate, setHoverDate] = useState("");
  const { src, height, width } = TIMELINE_ICONS[date];

  // useEffect(() => {
  //   setTimeout(() => {
  //     setHoverDate('1998')
  //   }, 1500);
  // }, [])

  return (
    <div className="flex items-center relative">
      {/* <Image src={src} alt={date} height={height} width={width} /> */}
      <AnimatePresence>
        {date === hoverDate && (
          <div className="absolute bg-duckEgg px-4 py-4 rounded-xl -top-32 min-w-[250px] bodyText">
            {text}
          </div>
        )}
      </AnimatePresence>
      <div
        className="flex items-center justify-center bg-black h-[78px] min-w-[133px] w-[133px] text-white rounded-xl hover:bg-duckEgg transition-all duration-500 cursor-pointer"
        onMouseEnter={() => setHoverDate(date)}
        onMouseLeave={() => setHoverDate("")}
    
      >
        {hoverDate === date ? (
          <div>
            <Image
              src={src}
              alt={date}
              height={height}
              width={width}
              className=""
            />
          </div>
        ) : (
          <div className="font-heading text-[22px]">{date}</div>
        )}
        {/* <div className="font-heading text-[22px]">{date}</div> */}
      </div>

      {!last && <div className="h-1 w-full bg-black" />}
    </div>
  );
};

export default TimelineTile;
