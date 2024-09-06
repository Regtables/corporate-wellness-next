import { SanityImageType } from '@/lib/sanity/types'
import React, { FC } from 'react'
import SanityImage from './SanityImage'
import AccreditationLogo from './AccreditationLogo'

interface AccreditationsProps {
  accreditations: {
    logo: SanityImageType
  }[]
}

const Accreditations:FC<AccreditationsProps> = ({ accreditations }) => {
  
  return (
    <div className='flex lg:flex-row flex-col w-full lg:gap-24 gap-8'>
      <h2 className='font-heading font-bold text-duckEgg text-[24px]'>Accreditations</h2>

      <div className='flex items-center justify-between w-full'>
        {accreditations.map((accreditation, i) => (
          <AccreditationLogo logo={accreditation.logo} width={i === 0 ? 60 : 240}/>
        ))}
      </div>
    </div>
  )
}

export default Accreditations