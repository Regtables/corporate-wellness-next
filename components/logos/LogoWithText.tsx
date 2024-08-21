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
      />
    </Link>
  )
}

export default LogoWithText