import React, { FC } from 'react'

import { ServiceObjectiveType } from '@/lib/sanity/types'

const ServiceObjective:FC<ServiceObjectiveType> = ({ description, title }) => {
  return (
    <div className='bg-black text-white p-6 rounded-xl lg:text-left text-center'>
      <div className='font-heading font-bold lg:text-[28px] text-[20px]'>
        <h3>{title}</h3>
      </div>

      <div className='bodyText mt-4 font-light'>
        {description}
      </div>
    </div>
  )
}

export default ServiceObjective