import { VALUES_ICONS } from '@/lib/icons'
import Image from 'next/image'
import React from 'react'
import StaggeredMotionWrapper from './motion/StaggerChildrenMotionWrapper'

const VALUES = ['trust', 'respect','authenticity', 'heart']

const Values = () => {
  return (
    <StaggeredMotionWrapper 
      className='bg-[var(--color-black)] flex lg:flex-row md:flex-row flex-col justify-between p-10 rounded-xl lg:gap-10 gap-4 w-full lg:mx-section md:mx-[100px] mx-[20px]'
      duration={0.5}
    >
      {VALUES.map((value, i) => (
        <>
          <div className='flex lg:gap-10 md:gap-4'>
            <div className='text-white font-heading  flex items-center lg:text-[28px] text-[20px] capitalize gap-6'>
              <Image src={VALUES_ICONS[value].src} height={50} width={50} alt = {value}/>
              {value}
            </div>

          </div>
            {i < VALUES.length-1 && (
              <div className='w-[2px] h-[50px] bg-[var(--color-white)] lg:block hidden'/>
            )}
        </>
      ))}
    </StaggeredMotionWrapper>
  )
}

export default Values