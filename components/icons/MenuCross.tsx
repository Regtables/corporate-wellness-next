import React, { FC } from 'react'
import { motion } from 'framer-motion'

interface MenuCrossProps {
  isOpen: boolean
  className?: string
}

const MenuCross: FC<MenuCrossProps> = ({ isOpen, className = '' }) => {
  return (
    <div className={`relative w-7 h-7 ${className}`}>
      <motion.span
        className="absolute h-[1.5px] w-6 bg-black group-hover:bg-white transition-colors duration-300 origin-center"
        animate={isOpen 
          ? { rotate: 45, y: 0, top: '50%', translateY: '-50%' } 
          : { rotate: 0, y: 0, top: '25%', translateY: '-50%' }
        }
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="absolute h-[1.5px] w-6 bg-black group-hover:bg-white transition-colors duration-300 origin-center"
        style={{ top: '50%', translateY: '-50%' }}
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="absolute h-[1.5px] w-6 bg-black group-hover:bg-white transition-colors duration-300 origin-center"
        animate={isOpen 
          ? { rotate: -45, y: 0, bottom: '50%', translateY: '50%' } 
          : { rotate: 0, y: 0, bottom: '25%', translateY: '50%' }
        }
        transition={{ duration: 0.3 }}
      />
    </div>
  )
}

export default MenuCross