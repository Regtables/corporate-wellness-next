import { SanityTestimonialsSection } from '@/lib/sanity/types'
import React, { FC } from 'react'
import TestimonialCard from './cards/TestimonialCard'
import Icon from './logos/Icon'


const TestimonialsSection:FC<SanityTestimonialsSection> = ({ heading, testimonials }) => {
  return (
    <section className='px-section py-32 relative' id = 'testimonials'>
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
      
      <div className='absolute bottom-[0px] -start-[0px]'>
        <Icon path={{src: '/baobab-sml.png'}} className="h-[330px] w-[157px]"/>
      </div>
    </section>
  )
}

export default TestimonialsSection