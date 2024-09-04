'use client'

import React, { FC } from 'react'
import ViewMotionWrapper from './ViewMotionWrapper'

const FormErrorMessage:FC<{ message: string, className?: string }> = ({ message, className }) => {
  return (
    <ViewMotionWrapper className={`text-[#c35e5e] absolute text-[11px] ml-4 mt-[1.5px] ${className}`} y = {0}>
      {message}
    </ViewMotionWrapper>
  )
}

export default FormErrorMessage