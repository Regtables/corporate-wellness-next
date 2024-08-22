import { SanityImageType } from '@/lib/sanity/types'
import React, { FC } from 'react'
import SanityImage from './SanityImage'

interface ParallaxBannerProps {
  image: SanityImageType,
  initialPosition?: number
}

const ParallaxBanner:FC <ParallaxBannerProps>= ({ image }) => {
  return (
    <div className='w-full h-[282px]'>
      <SanityImage image={image} />
    </div>
  )
}

export default ParallaxBanner