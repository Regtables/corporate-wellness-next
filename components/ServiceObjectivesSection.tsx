import { SanityImageType, ServiceObjectiveType } from '@/lib/sanity/types'
import React, { FC } from 'react'
import RippleBg from './RippleBg'
import SanityImage from './SanityImage'
import ServiceObjective from './ServiceObjective'
import BasicButton from './buttons/BasicButton'

interface ServiceObjectivesSectionProps {
  heading: string,
  image: SanityImageType,
  objectives: ServiceObjectiveType[]
}

const ServiceObjectivesSection:FC<ServiceObjectivesSectionProps> = ({ heading, image, objectives }) => {
  return (
    <div className='bg-duckEgg pl-section py-sectionY relative'>
      <RippleBg />

      <div className='flex gap-24 relative z-10'>
        <div className='flex-[0.55]'>
          <h2 className='font-heading heading mb-4'>{heading}</h2>

          <div className='flex flex-col gap-6 mb-6'>
            {objectives.map((objective, i) => (
              <ServiceObjective description= {objective.description} title= {objective.title} />
            ))}
          </div>

          <BasicButton bgColor='white' color='black' text='contact us'/>
        </div>


        <div className='w-full flex-[0.45]'>
          <SanityImage image={image} className='rounded-l-xl'/>
        </div>
      </div>
    </div>
  )
}

export default ServiceObjectivesSection