import { SanityTestimonialsSection } from '@/lib/sanity/types'
import React, { FC } from 'react'
import TestimonialCard from './cards/TestimonialCard'


const TestimonialsSection:FC<SanityTestimonialsSection> = ({ heading, testimonials }) => {
  return (
    <section className='px-section py-32' id = 'testimonials'>
      <h2 className='font-heading heading'>{heading}</h2>
      
      <div className='grid grid-cols-3 gap-8 pt-10'>
        {testimonials.map((testimonial, i) => (
          <TestimonialCard 
            name= {testimonial.name}
            country= {testimonial.country}
            text= {testimonial.text}
          />
        ))}
      </div>
    </section>
  )
}

export default TestimonialsSection