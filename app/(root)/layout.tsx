import React, { FC } from 'react'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const Layout:FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Navbar />

      <main className='pt-[120px]'>
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default Layout