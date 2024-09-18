import React, { FC } from 'react'
import { motion } from 'framer-motion'

interface PlusMinusProps {
  isOpen: boolean
}

const PlusMinus: FC<PlusMinusProps> = ({ isOpen }) => {
  return (
    <div className='relative flex items-center justify-center h-5 w-5'>
      <motion.div
        className='w-[1.5px] h-5 bg-black group-hover:bg-white absolute transition-colors duration-300'
        animate={{ rotate: isOpen ? 90 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      <motion.div
        className='h-[1.5px] w-5 bg-black group-hover:bg-white absolute transition-colors duration-300'
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  )
}

export default PlusMinus