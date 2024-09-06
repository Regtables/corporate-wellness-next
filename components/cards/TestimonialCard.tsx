import { SanityTestimonialType } from '@/lib/sanity/types'
import React, { FC } from 'react'

const TestimonialCard:FC<SanityTestimonialType> = ({ name, country, text }) => {
  return (
    <div className='flex flex-col justify-between gap-8 bg-black text-white rounded-xl p-[30px]'>
      <div className='bodyText'>
        {text}
      </div>

      <div className='font-heading font-bold text-[28px] leading-none flex items-end justify-between'>
        {name}

        <div className='text-[12px] font-body font-light tracking-wide text-[var(--color-duckEgg)] leading-none text-right'>
          {country}
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard