'use client'

import React, { FC, ReactNode, ElementType } from 'react';
import { motion } from 'framer-motion';

interface AnimatedTitleProps {
  children: ReactNode;
  className?: string;
  element?: ElementType;
  style?:any
}

const AnimatedTitle: FC<AnimatedTitleProps> = ({ 
  children, 
  className = "", 
  element: Element = 'h2',
  style
}) => {
  const contentAnimation = {
    hidden: { y: -5, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const animateContent = (content: ReactNode, index: number) => {
    if (typeof content === 'string') {
      return content.split(' ').map((word, i) => (
        <motion.span
          key={`${index}-${i}`}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.5,
            delay: (index + i) * 0.1,
            ease: "easeOut"
          }}
          variants={contentAnimation}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
        >
          {word}
        </motion.span>
      ));
    } else {
      return (
        <motion.span
          key={index}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeOut"
          }}
          variants={contentAnimation}
          className='block mr-[0.25em]'
     
        >
          {content}
        </motion.span>
      );
    }
  };

  return (
    <Element className={`${className}`} style={style}>
      {React.Children.map(children, (child, index) => animateContent(child, index))}
    </Element>
  );
};

export default AnimatedTitle;