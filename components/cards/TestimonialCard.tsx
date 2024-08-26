import { SanityTestimonialType } from '@/lib/sanity/types'
import React, { FC } from 'react'

const TestimonialCard:FC<SanityTestimonialType> = ({ name, country, text }) => {
  return (
    <div className='flex flex-col justify-between gap-8 bg-black text-white rounded-xl p-[30px]'>
      <div className='bodyText'>
        {text}
      </div>

      <div className='font-heading font-bold text-[28px]'>
        {name}

        <div className='text-[12px] font-body font-light tracking-wide leading-[12px] opacity-70'>
          {country}
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard