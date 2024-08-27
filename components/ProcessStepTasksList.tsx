import React, { FC } from 'react'

import { cn } from '@/lib/utils'

interface ProcessStepTasksProps {
  tasks: string[],
  className?: string
}

const ProcessStepTasksList:FC<ProcessStepTasksProps> = ({ tasks, className }) => {
  return (
    <div className= {cn('flex flex-col gap-6 w-full', className && className)}>
      {tasks.map((task, i) => (
        <div className={cn(`text-white font-normal text-[13px] leading-none flex flex-col gap-6 ${className}`)}>
          <>
            {i !== 0 && (
              <div className='h-[1px] bg-black w-full' />
            )}
            {task}
          </>
        </div>
      ))}
    </div>
  )
}

export default ProcessStepTasksList