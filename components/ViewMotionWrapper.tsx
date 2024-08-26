'use client'

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface ViewMotionWrapperProps {
  children: ReactNode;
  y?: number;
  x?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
  scale?: number;
  exit?: {};
  tabIndex?: number;
  ref?: any;
  animationKey?: string | number; // Add this line
}

const ViewMotionWrapper = ({
  children,
  y = 20,
  x = 0,
  delay = 0,
  duration = 0.5,
  once = false,
  className,
  scale = 1,
  tabIndex = 0,
  exit = { opacity: [1, 0], duration: 0.5 },
  ref,
  animationKey,
}: ViewMotionWrapperProps) => {
  return (
    <motion.div
      key={animationKey}
      whileInView={{ y: [y, 0], x: [x, 0], opacity: [0, 1], scale: [scale, 1] }}
      transition={{ duration: duration, delay: delay }}
      initial={{ y: y, x: x, opacity: 0 }}
      viewport={{ once: once }}
      className={className}
      exit={exit}
      // tabIndex={tabIndex}
      role="region"
      aria-label="Motion View Wrapper"
    >
      {children}
    </motion.div>
  );
};

export default ViewMotionWrapper;