"use client";

import { SanityTestimonialsSection } from "@/lib/sanity/types";
import React, { FC, useState } from "react";
import TestimonialCard from "./cards/TestimonialCard";
import Icon from "./logos/Icon";
import { useMediaQuery } from "react-responsive";
import CardMotionWrapper from "./CardMotionWrapper";
import AnimatedTitle from "./motion/AnimatedTitle";
import BasicButton from "./buttons/BasicButton";

const TestimonialsSection: FC<SanityTestimonialsSection> = ({
  heading,
  testimonials,
}) => {
  const [showMore, setShowMore] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "676px" });

  const visibleTestimonials = isMobile && !showMore ? testimonials.slice(0, 3) : testimonials;

  return (
    <section className="section-padding py-32 relative" id="testimonials">
      <AnimatedTitle text={heading} className="heading" />

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 pt-10 relative">
        {visibleTestimonials.map((testimonial, i) => (
          <CardMotionWrapper key={i} delay={i * 0.1} duration={1}>
            <TestimonialCard
              name={testimonial.name}
              country={testimonial.country}
              text={testimonial.text}
            />
          </CardMotionWrapper>
        ))}
      </div>

      {isMobile && testimonials.length > 3 && (
        <div className="flex justify-center mt-8">
          <BasicButton
            text={showMore ? "Show less" : "Show more"}
            bgColor="var(--color-black)"
            color="white"
            onClick={() => setShowMore(!showMore)}
          />
        </div>
      )}

      <div className="lg:block hidden absolute bottom-[0px] -start-[0px]">
        <Icon
          path={{ src: "/baobab-sml.png" }}
          className="h-[330px] w-[157px]"
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;