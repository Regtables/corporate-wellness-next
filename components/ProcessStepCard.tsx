import React, { FC } from "react";
import ProcessStepTasksList from "./ProcessStepTasksList";
import { cn } from "@/lib/utils";

interface ProcessStepCardProps {
  name: string;
  tasks: string[];
  contained?: boolean;
  i: number;
}

const ProcessStepCard: FC<ProcessStepCardProps> = ({
  name,
  tasks,
  contained,
  i,
}) => {
  return (
    <article className="rounded-xl w-full">
      <div
        className={cn(
          "flex items-center font-heading p-[24px] bg-duckEgg rounded-xl gap-4 font-bold text-[28px] leading-[36px]",
          contained && "flex-col justify-center items-start"
        )}
      >
        <div className="flex items-center w-52 gap-4">
          <div className="h-[30px] w-[30px] min-h-[30px] min-w-[30px] flex items-center justify-center bg-black rounded-full text-duckEgg">
            {`${i + 1}`}
          </div>

          <h3 className="font-[700]">{name}</h3>
        </div>

        {contained && (
          <ProcessStepTasksList
            tasks={tasks}
            className="text-black font-body gap-6"
            contained={contained}
          />
        )}
      </div>

      {!contained && (
        <ProcessStepTasksList 
          tasks={tasks} 
          className="gap-[20px]" 
        />
      )}
    </article>
  );
};

export default ProcessStepCard;
