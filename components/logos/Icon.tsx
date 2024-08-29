import Image from 'next/image'
import React from 'react'

interface IconProps {
  className?: string;
  width?: number;
  height?: number;
  path: {
    src: string,
    height?: number,
    width?: number
  }
}

const Icon: React.FC<IconProps> = ({ className = '', width = 0, height = 0, path }) => {
  return (
    <div className={`relative ${className}`}>
      <Image 
        src = {path.src} 
        fill
        // width={width || undefined}
        // height={height || undefined}
        alt="Corporate Wellness Logo" 
        className="object-cover"
        priority
        quality={100}
      />
    </div>
  )
}

export default Icon