'use client'

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface StaggeredMotionWrapperProps {
  children: ReactNode;
  y?: number;
  x?: number;
  delay?: number;
  staggerDelay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
  scale?: number;
  exit?: {};
  animationKey?: string | number;
  style?: any
}

const StaggeredMotionWrapper = ({
  children,
  y = 20,
  x = 0,
  delay = 0,
  staggerDelay = 0.1,
  duration = 0.5,
  once = false,
  className,
  scale = 1,
  style,
  exit = { opacity: 0, transition: { duration: 0.5 } },
  animationKey,
}: StaggeredMotionWrapperProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerDelay,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y, x, scale },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: { duration },
    },
  };

  return (
    <motion.div
      key={animationKey}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      exit={exit}
      className={className}
      style={style}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StaggeredMotionWrapper;