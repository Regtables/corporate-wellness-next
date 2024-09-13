import { SanityImageType, ServiceObjectiveType } from '@/lib/sanity/types'
import React, { FC } from 'react'
import RippleBg from './RippleBg'
import SanityImage from './SanityImage'
import ServiceObjective from './ServiceObjective'
import BasicButton from './buttons/BasicButton'
import StaggeredMotionWrapper from './motion/StaggerChildrenMotionWrapper'

interface ServiceObjectivesSectionProps {
  heading: string,
  image: SanityImageType,
  objectives: ServiceObjectiveType[]
}

const ServiceObjectivesSection:FC<ServiceObjectivesSectionProps> = ({ heading, image, objectives }) => {
  return (
    <div className='bg-duckEgg lg:pl-section lg:pr-0 px-[var(--section-x-xs)] section-padding-y relative'>
      <RippleBg />

      <div className='flex lg:flex-row flex-col lg:gap-24 gap-8 relative z-10'>
        <div className='flex-[0.4]'>
          <h2 className='font-heading heading mb-4'>{heading}</h2>

          <StaggeredMotionWrapper className='flex flex-col gap-6 mb-6' staggerDelay={0.2}>
            {objectives.map((objective, i) => (
              <ServiceObjective description= {objective.description} title= {objective.title} />
            ))}
          </StaggeredMotionWrapper>

          <BasicButton bgColor='white' color='black' text='contact us'/>
        </div>


        <div className='w-full lg:flex-[0.6] lg:h-[unset] h-[300px]'>
          <SanityImage image={image} className='lg:rounded-l-xl rounded-xl'/>
        </div>
      </div>
    </div>
  )
}

export default ServiceObjectivesSection