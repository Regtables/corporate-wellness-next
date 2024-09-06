"use client";

import React, { FC } from "react";

import { SanityProcessSection } from "@/lib/sanity/types";

import Process from "./Process";
import Icon from "./logos/Icon";
import Carousel from "./Carousel";
import ProcessStepCard from "./ProcessStepCard";
import { cn } from "@/lib/utils";

const GeneralProcess: FC<SanityProcessSection> = ({
  heading,
  processSteps,
}) => {
  return (
    <section
      className="bg-black section-padding relative overflow-y-hidden flex flex-col items-center"
      id="process"
    >
      <h2 className="font-heading heading text-white text-center">{heading}</h2>

      <div className="lg:block hidden">
        <Process processSteps={processSteps} className="mt-10" />
      </div>

      <div className="lg:hidden block w-full mt-6">
        <Carousel className="gap-[20px]" counterClassName="bg-duckEgg">
          {processSteps.map((step, i) => (
            <div className="w-full flex relative">
              <ProcessStepCard name={step.name} tasks={step.tasks} i={i} />

              {/* Partition */}
              {i !== processSteps.length - 1 && (
                <div
                  className={cn(
                    "h-[2px] bg-duckEgg w-[20px] absolute top-[30px]",
                  )}
                />
              )}
            </div>
          ))}
        </Carousel>
      </div>

      <div className="lg:block hidden absolute -start-[100px] -top-28 z-10">
        <Icon
          path={{ src: "/logo-icon-blue.png" }}
          className="h-[310px] w-[300px]"
        />
      </div>

      {/* <div className='absolute -bottom-[100px] start-0 z-10'>
        <Icon path={{ src: '/baobab-sml.png' }} className="h-[330px] w-[167px]" />
      </div> */}
    </section>
  );
};

export default GeneralProcess;
