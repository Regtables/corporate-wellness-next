import React, { FC } from 'react'

import { SanityImageType, ServiceObjectiveType } from '@/lib/sanity/types'

import RippleBg from './RippleBg'
import SanityImage from './SanityImage'
import ServiceObjective from './ServiceObjective'
import BasicButton from './buttons/BasicButton'
import StaggeredMotionWrapper from './motion/StaggerChildrenMotionWrapper'
import AnimatedTitle from './motion/AnimatedTitle'

interface ServiceObjectivesSectionProps {
  heading: string,
  image: SanityImageType,
  objectives: ServiceObjectiveType[]
}

const ServiceObjectivesSection:FC<ServiceObjectivesSectionProps> = ({ heading, image, objectives }) => {
  return (
    <div className='bg-duckEgg xl:pl-section lg:pl-[var(--section-x-md)] lg:pr-0 md:px-[var(--section-x-md)] px-[var(--section-x-xs)] section-padding-y relative'>
      <RippleBg />

      <div className='flex lg:flex-row flex-col lg:gap-24 gap-8 relative z-10'>
        <div className='flex-[0.4] '>
          <AnimatedTitle className='heading mb-6 lg:text-left md:text-center text-center' text= {heading} />

          <StaggeredMotionWrapper className='flex flex-col gap-6 mb-6' staggerDelay={0.2}>
            {objectives.map((objective, i) => (
              <ServiceObjective description= {objective.description} title= {objective.title} />
            ))}
          </StaggeredMotionWrapper>
          
          <div className='flex lg:justify-start md:justify-center justify-center w-full'>
            <BasicButton bgColor='white' color='black' text='contact us'/>
          </div>
        </div>


        <div className='w-full lg:flex-[0.6] lg:h-[unset] h-[300px]'>
          <SanityImage image={image} className='lg:rounded-l-xl rounded-xl'/>
        </div>
      </div>
    </div>
  )
}

export default ServiceObjectivesSection