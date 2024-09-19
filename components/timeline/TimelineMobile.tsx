import React from "react";
import Carousel from "@/components/Carousel";
import TimelineTileMobile from "./TimelineTileMobile";

interface TimelineMobileProps {
  timeline: {
    date: string;
    text: string;
  }[];
}

const TimelineMobile: React.FC<TimelineMobileProps> = ({ timeline }) => {
  return (
    <div className="lg:hidden block pl-[var(--section-x-xs)] pb-16">
      <Carousel>
        {timeline.map((milestone, i) => (
          <TimelineTileMobile
            key={i}
            date={milestone.date}
            text={milestone.text}
            isLast={i === timeline.length - 1}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default TimelineMobile;
