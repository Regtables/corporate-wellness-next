'use client'

import React, { FC } from 'react'
import { sanityClient } from '@/lib/sanity/client'
import { useNextSanityImage } from 'next-sanity-image'

import { SanityImageType } from '@/lib/sanity/types'
import Image from 'next/image'

interface SanityImageProps {
  image: SanityImageType
  priority?: boolean
  quality?: number
  className?: string
}

const SanityImage: FC<SanityImageProps> = ({ image, priority = false, className = '', quality = 80 }) => {
  const { src, loader, width, height } = useNextSanityImage(sanityClient, image.image)

  return (
    <div className='w-full h-full relative'>
      <Image 
        src={src}
        loader={loader}
        fill
        sizes="100vw"
        alt={image.alt || ""}
        className={`object-cover ${className}`}
        priority={priority}
        quality = {quality}
        aria-hidden={image.alt ? "false" : "true"}
      />
    </div>
  )
}

export default SanityImage