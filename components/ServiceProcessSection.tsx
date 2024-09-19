'use client'

import React, { FC } from 'react'
import { useParallax } from 'react-scroll-parallax'

import { SERVICE_PROCESS_ICONS } from '@/lib/icons'

import Icon from './logos/Icon'
import Process from './Process'
import AnimatedTitle from './motion/AnimatedTitle'
import ViewMotionWrapper from './ViewMotionWrapper'
import ProcessIcon from './ProcessIcon'

interface ServiceProcessSectionProps {
  service: string,
  heading: string,
  processSteps: any,
  // icon?: any
}

const ServiceProcessSection:FC<ServiceProcessSectionProps> = ({ heading, processSteps, service }) => {
  return (
    <div className='bg-black section-padding lg:flex gap-16 lg:flex-row flex-col'>
      {/* <ViewMotionWrapper className='w-full lg:flex-[0.6] lg:h-[unset] h-[300px]' y = {0} x = {-20} duration={1.5}>
        <Icon path={SERVICE_PROCESS_ICONS[service]} className="h-full w-full relative"/>
      </ViewMotionWrapper> */}
        <div className='w-full lg:flex-[0.6] lg:h-[unset] xl:max-w-[700px] h-[300px] md:h-[460px] md:mx-auto md:max-w-[400px]'>
          <ProcessIcon service={service} path={SERVICE_PROCESS_ICONS[service]}  />
        </div>


      <div className='flex-[0.4]'>
        {/* <h3 className='font-heading heading text-white mb-4'>{heading}</h3> */}
        <AnimatedTitle text= {heading} className='font-heading heading text-white mb-8 my-8 lg:pb-0 pb-8' />

        <div className='h-[500px] overflow-y-scroll scrollbar-hide hide-scrollbar'>
          <Process processSteps={processSteps} contained col />
        </div>
      </div>
    </div>
  )
}

export default ServiceProcessSection