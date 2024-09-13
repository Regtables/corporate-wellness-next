'use client'

import React, { FC } from 'react'
import SanityImage from './SanityImage'
import Image from 'next/image'

import { SanityImageType } from '@/lib/sanity/types'
import { SERVICES_ICONS, SERVICES_ICONS_WHITE } from '@/lib/icons'
import AnimatedTitle from './motion/AnimatedTitle'
import ViewMotionWrapper from './ViewMotionWrapper'

interface PageBannerProps {
  heading: string,
  subHeading: string,
  icon: string,
  image: SanityImageType

}

const PageBanner:FC<PageBannerProps> = ({ heading, subHeading, icon, image }) => {
  const { src, height, width } = SERVICES_ICONS_WHITE[heading]

  return (
    <div className='flex lg:pl-section pl-0 bg-duckEgg relative lg:flex-row flex-col'>
      <div className='lg:py-sectionY pt-[40px] pb-[80px] text-center lg:flex-[0.5] w-full flex flex-col lg:items-start items-center'>
        {subHeading && (
          <h4 className='uppercase lg:text-[23px] text-[18px] tracking-[-4%]'>{subHeading}</h4>
        )}

        {/* <h1 className='font-heading lg:text-[76px] text-[36px] w-40 lg:leading-[94px] font-bold'>{heading}</h1> */}
        <AnimatedTitle text= {heading} className='font-heading lg:text-[76px] text-[36px] w-40 lg:leading-[94px] font-bold' />
      </div>

      <ViewMotionWrapper className='absolute lg:top-20 bottom-[170px] lg:start-[5%] flex justify-center w-full z-10' x = {-20} y = {0} duration={1}>
        <Image src={src} alt={heading} height={height} width={width} className='lg:max-w-[unset] lg:max-h-[unset] max-h-[70px] max-w-[unset]' />
      </ViewMotionWrapper >

      <ViewMotionWrapper className='lg:flex-[0.5] flex-[unset] lg:h-[unset] h-[200px] w-full' delay={0.3} y = {0} duration={1}>
        <SanityImage image={image} />
      </ViewMotionWrapper>
    </div>
  )
}

export default PageBanner