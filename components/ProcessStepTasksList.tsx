import React, { FC } from 'react'

import { cn } from '@/lib/utils'

interface ProcessStepTasksProps {
  tasks: string[],
  className?: string
}

const ProcessStepTasksList:FC<ProcessStepTasksProps> = ({ tasks, className }) => {
  return (
    <ul className= {cn('flex flex-col gap-4', className && className)}>
      {tasks.map((task, i) => (
        <li className='text-white text-[13px]'>
          <>
            {i !== 0 && (
              <div className='h-1 bg-black w-full' />
            )}
            {task}
          </>
        </li>
      ))}
    </ul>
  )
}

export default ProcessStepTasksList