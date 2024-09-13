import Image from 'next/image'
import React, { FC } from 'react'
import TimelineTile from './TimelineTile'
import StaggeredMotionWrapper from '../motion/StaggerChildrenMotionWrapper'

interface TimelineProps {
  timeline: {
    date: string
    text: string
  }[]
}

const Timeline:FC<TimelineProps> = ({ timeline }) => {
  return (
    <div className='lg:block hidden section-padding-x pb-32'>
      <StaggeredMotionWrapper className='w-full grid grid-cols-6' duration={1}>
        {timeline.map((miletone, i) => (
          <TimelineTile
            date= {miletone.date}
            text= {miletone.text}
            last = {i === timeline.length - 1}
          />
        ))}
      </StaggeredMotionWrapper>
    </div>
  )
}

export default Timeline