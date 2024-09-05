import Image from 'next/image'
import React, { FC } from 'react'
import TimelineTile from './TimelineTile'

interface TimelineProps {
  timeline: {
    date: string
    text: string
  }[]
}

const Timeline:FC<TimelineProps> = ({ timeline }) => {
  return (
    <div className='px-section pb-32'>
      <div className='w-full grid grid-cols-6'>
        {timeline.map((miletone, i) => (
          <TimelineTile
            date= {miletone.date}
            text= {miletone.text}
            last = {i === timeline.length - 1}
          />
        ))}
      </div>
    </div>
  )
}

export default Timeline