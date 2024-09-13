import React, { FC, Fragment } from "react";

import { SanityProcessStepType } from "@/lib/sanity/types";

import ProcessStepCard from "./ProcessStepCard";
import { cn } from "@/lib/utils";
import StaggeredMotionWrapper from "./motion/StaggerChildrenMotionWrapper";

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
    <StaggeredMotionWrapper
      className={cn(
        "lg:grid grid-cols-4",
        col && "grid-cols-1",
        className && className
      )}
      staggerDelay={0.2}
    >
      {processSteps.map((step, i) => (
        <div className="">
          <div className={cn("flex relative ", col && "flex-col items-start")}>
            <ProcessStepCard
              name={step.name}
              tasks={step.tasks}
              contained={contained}
              i={i}
            />

            {/* Partition */}
            {i !== processSteps.length - 1 && (
              <div
                className={cn(
                  "h-1 bg-duckEgg w-8 mt-[60px]",
                  col && "ml-8 h-8 w-1 mt-[0px]"
                )}
              />
            )}
          </div>
        </div>
      ))}
    </StaggeredMotionWrapper>
  );
};

export default Process;
