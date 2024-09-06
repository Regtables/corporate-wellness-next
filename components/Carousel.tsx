'use client'

import React, { useState, useRef, useEffect, ReactNode } from 'react';

interface CarouselProps {
  children: ReactNode[];
  className?: string,
  counterClassName?: string
}

const Carousel: React.FC<CarouselProps> = ({ children, className, counterClassName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollPosition = scrollRef.current.scrollLeft;
        const slideWidth = scrollRef.current.offsetWidth;
        const newIndex = Math.round(scrollPosition / slideWidth);
        setActiveIndex(newIndex);
      }
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="carousel-container">
      <div ref={scrollRef} className={`snap-scroll-container mb-4 ${className}`}>
        {React.Children.map(children, (child, index) => (
          <div key={index} className="w-full">
            {child}
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        {children.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full mx-1 ${
              index === activeIndex ? 'bg-black' : 'bg-gray-300'
            } ${counterClassName}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;