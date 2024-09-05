'use client'

import React, { FC } from 'react'

import { SanityProcessSection } from '@/lib/sanity/types'

import Process from './Process'
import Icon from './logos/Icon'

const GeneralProcess:FC<SanityProcessSection> = ({ heading, processSteps }) => {
  return (
    <section className='bg-black px-section py-sectionY relative overflow-y-hidden flex flex-col items-center' id = 'process'>
      <h2 className='font-heading heading text-white text-center'>{heading}</h2>

      <Process 
        processSteps={processSteps} 
        className='mt-10' 
      />

      <div className='absolute -start-[100px] -top-28 z-10'>
        <Icon path={{ src: '/logo-icon-blue.png' }} className="h-[310px] w-[300px]" />
      </div>

      {/* <div className='absolute -bottom-[100px] start-0 z-10'>
        <Icon path={{ src: '/baobab-sml.png' }} className="h-[330px] w-[167px]" />
      </div> */}
    </section>
  )
}

export default GeneralProcess