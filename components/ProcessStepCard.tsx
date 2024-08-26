import React, { FC } from "react";
import ProcessStepTasksList from "./ProcessStepTasksList";

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
    <article className="rounded-xl">
      <div className="flex items-center font-heading p-[24px] bg-duckEgg rounded-xl gap-4 font-bold text-[28px] leading-[36px]">
        <div className="h-[30px] w-[30px] min-h-[30px] min-w-[30px] flex items-center justify-center bg-black rounded-full text-duckEgg">
          {`${i + 1}`}
        </div>

        <h3 className="font-[700]">{name}</h3>

        {/* {contained && <ProcessStepTasksList tasks={tasks} />} */}
      </div>

      {!contained && <ProcessStepTasksList tasks={tasks} className="mt-4" />}
    </article>
  );
};

export default ProcessStepCard;
