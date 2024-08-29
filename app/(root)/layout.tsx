'use client'

import React, { FC } from 'react'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { ParallaxProvider } from 'react-scroll-parallax'

const Layout:FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ParallaxProvider>
      <div>
        <Navbar />

        <main className='pt-[120px]'>
          {children}
        </main>

        <Footer />
      </div>
    </ParallaxProvider>
  )
}

export default Layout