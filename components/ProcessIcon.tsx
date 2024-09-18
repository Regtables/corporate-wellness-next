import React, { FC } from "react";
import Icon from "./logos/Icon";
import Image from "next/image";
import { SERVICE_PROCESS_ICONS, SERVICE_PROCESS_ICONS_ICONS, SERVICES_ICONS_WHITE } from "@/lib/icons";
import { useParallax } from "react-scroll-parallax";

interface ProcessIconProps {
  path: {
    src: string,
    height?: number,
    width?: number
  }
  service: string
}

const ProcessIcon:FC<ProcessIconProps> = ({ path, service }) => {
  const { src, height, width } = SERVICE_PROCESS_ICONS_ICONS[service]
  const parallax = useParallax<HTMLDivElement>({
    rotate: [-10, 10],
  });
  return (
    <div className="relative h-full w-full flex justify-center items-center">
      <div className="absolute lg:mt-16 mt-8">
        <Image src={src} alt = {`${service} icon`} height={height} width={width} className='lg:max-w-[unset] lg:max-h-[unset] max-h-[70px] max-w-[unset]' />
      </div>

      <div ref = {parallax.ref} className= 'h-full w-full'>
        <Icon
          path={path}
          className="h-full w-full relative"
        />
      </div>
    </div>
  );
};

export default ProcessIcon;
