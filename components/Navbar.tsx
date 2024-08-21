import React from 'react'
import Link from 'next/link'

import LogoWithText from './logos/LogoWithText'
import BasicButton from './buttons/BasicButton'

const LINKS = [
  {
    link: 'home',
    slug: '/'
  },
  {
    link: 'about us',
    slug: '#about'
  },
  {
    link: 'our approach',
    slug: '#about'
  },
  {
    link: 'services',
    slug: '#services',
    pages: [
      {
        link: 'Individual Coaching',
        slug: '/services/individual-coaching'
      },
      {
        link: 'Team Coaching',
        slug: '/services/team-coaching'
      },
      {
        link: 'HR Consulting',
        slug: '/services/hr-consulting'
      },
    ]
  },
  {
    link: 'our process',
    slug: '#process'
  },
  {
    link: 'testimonials',
    slug: '#testimonials'
  },
]

const Navbar = () => {
  return (
    <nav className='flex w-full py-[30px] items-center justify-between px-section bg-white fixed top-0 left-0 z-20' role="navigation" aria-label="Main">
      <LogoWithText />

      <ul className='flex gap-10 list-none' role="menubar">
        {LINKS.map((link, i) => (
          <li key={i} role="none">
            <a 
              href={link.slug} 
              className='capitalize font-[400] text-black tracking-[-0.04em] font-body'
              role={link.pages ? "menuitem" : undefined}
              aria-haspopup={link.pages ? "true" : undefined}
              aria-expanded={link.pages ? "false" : undefined}
            >
              {link.link}
            </a>

            {link.pages && (
              <ul role="menu" aria-label={`${link.link} submenu`} className="hidden">
                {link.pages.map((sublink, j) => (
                  <li key={j} role="none">
                    <a 
                      href={sublink.slug} 
                      className='capitalize font-[400] text-black tracking-[-0.04em] font-body'
                      role="menuitem"
                    >
                      {sublink.link}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      
      <Link href={'#contact'} passHref>
        <BasicButton 
          text='contact us' 
          bgColor='var(--color-duckEgg)' 
          color='black' 
          aria-label="Contact us"
        />
      </Link>
    </nav>
  )
}

export default Navbar