import { SanityProcessSection } from '@/lib/sanity/types'
import React, { FC } from 'react'
import Icon from './logos/Icon'
import { SERVICE_PROCESS_ICONS, TREE_ICONS } from '@/lib/icons'
import ProcessStepTasksList from './ProcessStepTasksList'
import Process from './Process'

interface ServiceProcessSectionProps {
  service: string,
  heading: string,
  processSteps: any,
  // icon?: any
}

const ServiceProcessSection:FC<ServiceProcessSectionProps> = ({ heading, processSteps, service }) => {
  return (
    <div className='bg-black px-section py-sectionY flex gap-16 lg:flex-row flex-col'>
      <div className='w-full flex-[0.6]'>
        <Icon path={SERVICE_PROCESS_ICONS[service]} className="h-full w-full"/>
      </div>

      <div className='flex-[0.4]'>
        <h3 className='font-heading heading text-white mb-4'>{heading}</h3>

        <div className='h-[500px] overflow-y-scroll scrollbar-hide hide-scrollbar'>
          <Process processSteps={processSteps} contained col />
        </div>
      </div>
    </div>
  )
}

export default ServiceProcessSection