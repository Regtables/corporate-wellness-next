import React, { FC } from 'react'

import { cn } from '@/lib/utils'

interface ProcessStepTasksProps {
  tasks: string[],
  className?: string,
  contained?: boolean 
}

const ProcessStepTasksList:FC<ProcessStepTasksProps> = ({ tasks, className, contained }) => {
  return (
    <div className= {cn('flex flex-col w-full', className && className)}>
      {tasks.map((task, i) => (
        <div className={cn(`text-white text-[13px] leading-none flex flex-col ${className}`)}>
          <>
            {i !== 0 && (
              <div className={cn('h-[1px] bg-black w-full', !contained && 'bg-duckEgg')} />
            )}

            <div className={cn('min-h-[30px] font-[300]', contained && 'min-h-0')}>
             {task}
            </div>
          </>
        </div>
      ))}
    </div>
  )
}

export default ProcessStepTasksList