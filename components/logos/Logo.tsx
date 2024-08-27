import Image from 'next/image'
import React from 'react'

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ className = '', width = 0, height = 0 }) => {
  return (
    <div className={`relative ${className}`} style={{ width: width || 'auto', height: height || 'auto' }}>
      <Image 
        src="/logo-white.png" 
        fill={width === 0 && height === 0}
        width={width || undefined}
        height={height || undefined}
        alt="Corporate Wellness Logo" 
        className="object-contain"
        priority
        quality={100}
      />
    </div>
  )
}

export default Logo