'use client'

import React, { FC } from 'react';
import { motion } from 'framer-motion';

interface AnimatedTitleProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

const AnimatedTitle:FC<AnimatedTitleProps> = ({ text, className, delay = 0.1, duration = 0.5 }) => {
  const words = text.split(' ')

  return (
    <div className={`flex xl:justify-start justify-center gap-2 flex-wrap ${className}`}>
      {words.map((word,i) => (
        <motion.div 
          key = {i}
          whileInView={{ opacity: [0, 1], y: [20, 0]}}
          transition={{ duration: duration, delay: delay*i}}
          initial = {{ opacity: 0, y: 20 }}
        >
            {word}
          </motion.div>
      ))}
    </div>
  )
}

export default AnimatedTitle