import { VALUES_ICONS } from '@/lib/icons'
import Image from 'next/image'
import React from 'react'

const VALUES = ['trust', 'respect','authenticity', 'heart']

const Values = () => {
  return (
    <div className='bg-[var(--color-black)] flex justify-between p-10 rounded-xl gap-10 w-full mx-section'>
      {VALUES.map((value, i) => (
        <>
          <div className='flex gap-10'>
            <div className='text-white font-heading  flex items-center text-[28px] capitalize gap-6'>
              <Image src={VALUES_ICONS[value]} height={50} width={50} alt = {value}/>
              {value}
            </div>

          </div>
            {i < VALUES.length-1 && (
              <div className='w-[2px] bg-[var(--color-white)]'/>
            )}
        </>
      ))}
    </div>
  )
}

export default Values