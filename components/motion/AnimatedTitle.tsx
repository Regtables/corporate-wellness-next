'use client'

import React, { FC } from 'react';
import { motion } from 'framer-motion';

interface AnimatedTitleProps {
  text: string,
  isRandom?: boolean,
  className?: string,
  children?: React.ReactNode,
  duration?: number,
  delay?: number
}

const AnimatedTitle:FC<AnimatedTitleProps> = ({ text, isRandom = true, className = 'heading font-heading', children, delay = 0.06, duration = 0.5 }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        // type: "spring",
        // damping: 12,
        // stiffness: 200,
        duration,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        // type: "spring",
        // damping: 12,
        // stiffness: 200,
      },
    },
  };

  return (
    <motion.h2
      className={`text-3xl font-bold heading font-heading ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          variants={child}
          custom={isRandom ? Math.random() * 5 : index}
        >
          {word}
        </motion.span>
      ))}
    </motion.h2>
  );
};

export default AnimatedTitle