import Navbar from '@/components/Navbar'
import React, { FC } from 'react'

const Layout:FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Navbar />

      <main className='pt-[120px]'>
        {children}
      </main>
    </div>
  )
}

export default Layout