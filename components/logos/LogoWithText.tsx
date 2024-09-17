import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LogoWithText = () => {
  return (
    <Link href={'/'}>
      <Image 
        src={'/logo-black-with-text-row.png'}
        alt='Corporate Wellness Logo with Text'
        width={182}
        height={60}
        quality={100}
        className='lg:max-w-[unset] lg:max-h-[unset] md:max-w-[unset] md:max-h-[unset]  max-h-[38px] max-w-[117px]'
      />
    </Link>
  )
}

export default LogoWithText