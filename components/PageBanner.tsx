'use client'

import React, { FC } from 'react'
import SanityImage from './SanityImage'
import Image from 'next/image'

import { SanityImageType } from '@/lib/sanity/types'
import { SERVICES_ICONS, SERVICES_ICONS_WHITE } from '@/lib/icons'

interface PageBannerProps {
  heading: string,
  subHeading: string,
  icon: string,
  image: SanityImageType

}

const PageBanner:FC<PageBannerProps> = ({ heading, subHeading, icon, image }) => {
  const { src, height, width } = SERVICES_ICONS_WHITE[heading]

  return (
    <div className='flex pl-section bg-duckEgg relative'>
      <div className='py-sectionY flex-[0.5] w-full'>
        {subHeading && (
          <h4 className='uppercase text-[23px] tracking-[-4%]'>{subHeading}</h4>
        )}

        <h1 className='font-heading text-[76px] w-40 leading-[94px] font-bold'>{heading}</h1>
      </div>

      <div className='absolute top-20 start-[45%] z-10'>
        <Image src={src} alt={heading} height={height} width={width} />
      </div>

      <div className='flex-[0.5] w-full'>
        <SanityImage image={image} />
      </div>
    </div>
  )
}

export default PageBanner