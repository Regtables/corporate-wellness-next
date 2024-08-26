import React, { FC, Fragment } from "react";

import { SanityProcessStepType } from "@/lib/sanity/types";

import ProcessStepCard from "./ProcessStepCard";
import { cn } from "@/lib/utils";

interface ProcessProps {
  processSteps: SanityProcessStepType[];
  contained?: boolean; //Whether or not the copy(tasks) is contained in the card,
  col?: boolean;
  className?: string;
}

const Process: FC<ProcessProps> = ({
  processSteps,
  contained,
  col,
  className,
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-4",
        col && "grid-rows-4",
        className && className
      )}
    >
      {processSteps.map((step, i) => (
        <div className="">
          <div className="flex items-center">
            <ProcessStepCard
              name={step.name}
              tasks={step.tasks}
              contained={contained}
              i={i}
            />

            {/* Partition */}
            {i !== processSteps.length - 1 && (
              <div className="h-1 bg-duckEgg w-8" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Process;
