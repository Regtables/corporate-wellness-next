'use client'

import { SanityTestimonialsSection } from '@/lib/sanity/types'
import React, { FC, useState } from 'react'
import TestimonialCard from './cards/TestimonialCard'
import Icon from './logos/Icon'
import { useMediaQuery } from 'react-responsive'
import HiddenContent from './HiddenContent'
import CardMotionWrapper from './CardMotionWrapper'
import AnimatedTitle from './motion/AnimatedTitle'


const TestimonialsSection:FC<SanityTestimonialsSection> = ({ heading, testimonials }) => {
  const [toggleMore, setToggleMore] = useState(false)
  const isMobile = useMediaQuery({ maxWidth: '676px' })

  return (
    <section className='section-padding py-32 relative' id = 'testimonials'>

      <AnimatedTitle text= {heading} isRandom />
      
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 pt-10 relative' style = {toggleMore ? { maxHeight: 'unset' } : { maxHeight: '130vh' }}>
        {testimonials.map((testimonial, i) => (
          <CardMotionWrapper delay={i*0.1} duration={1}>
            <TestimonialCard 
              name= {testimonial.name}
              country= {testimonial.country}
              text= {testimonial.text}
            />
          </CardMotionWrapper>
        ))}

        {!toggleMore && isMobile && (
          <div className='absolute h-[30%] z-20 -bottom-[40px] -start-1 end-3 w-[102%]'>
            <HiddenContent 
              toggle = {toggleMore} 
              //@ts-ignore
              setToggle={setToggleMore} 
            />
          </div>
        )}
      </div>
      
      <div className='lg:block hidden absolute bottom-[0px] -start-[0px]'>
        <Icon path={{src: '/baobab-sml.png'}} className="h-[330px] w-[157px]"/>
      </div>
    </section>
  )
}

export default TestimonialsSection