import React from "react";
import Image from "next/image";

interface RippleBgProps {
  className?: string;
  opacity?: number;
}

const RippleBg: React.FC<RippleBgProps> = ({ className = '', opacity = 0.1 }) => {
  return (
    <div 
      className={`absolute top-0 start-0 end-0 bottom-0 w-full h-full z-0 ${className}`} 
      style={{ opacity }}
      aria-hidden="true"
    >
      <Image
        src="/ripple-bg.png"
        fill
        className="object-cover"
        alt=""
        role="presentation"
        priority={false}
      />
    </div>
  );
};

export default RippleBg;