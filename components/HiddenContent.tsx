import React, { FC } from 'react'

interface HiddenContentProps {
  className: string,
  toggle: boolean,
  setToggle: (toggle: boolean) => void
}

const HiddenContent:FC<HiddenContentProps> = ({ className, toggle, setToggle }) => {
  return (
    <div className='bg-white w-full h-full relative flex justify-center items-start'>
      <div className='bg-white h-[100px] blur-[40px] abslote top-0 z-10' />
      <button className='bg-black text-white px-6 py-2 rounded-xl mt-8' onClick={() => setToggle(true)}>
        Show more
      </button>
    </div>
  )
}

export default HiddenContent