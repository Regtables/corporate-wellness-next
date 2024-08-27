import React, { FC } from 'react'

import { SanityProcessSection } from '@/lib/sanity/types'

import Process from './Process'

const GeneralProcess:FC<SanityProcessSection> = ({ heading, processSteps }) => {
  return (
    <section className='bg-black px-section py-sectionY'>
      <h2 className='font-heading heading text-white text-center'>{heading}</h2>

      <Process processSteps={processSteps} className='mt-10' />
    </section>
  )
}

export default GeneralProcess