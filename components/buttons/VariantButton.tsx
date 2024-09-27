import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import React, { ButtonHTMLAttributes, FC, HTMLAttributes } from 'react'

interface VariantButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string,
  icon?: string,
  variant: 1 | 2 | 3 | 4 | 5,
  pill?: boolean,
  className?: string
}

const VariantButton:FC<VariantButtonProps> = ({ text, icon, variant, pill,className, ...props }) => {
  return (
    <button 
      className= {cn(`rounded-[12px] lg:px-[24px] px-[19px] h-[40px] leading-none capitalize flex items-center gap-2 hover:gap-4 transition-all duration-500`, 
        variant === 1 && "bg-duckEgg border-[2px] border-transparent hover:bg-transparent hover:border-black",
        variant === 2 && "border-[2px] border-white text-white hover:bg-duckEgg hover:text-black hover:border-duckEgg",
        variant === 3 && "border-[2px] border-black text-black hover:bg-duckEgg hover:text-black hover:border-duckEgg",
        variant === 4 && "bg-black text-white hover:bg-transparent border-[2px] border-transparent hover:border-black hover:text-black",
        variant === 5 && "bg-white text-black hover:bg-black border-[2px] border-transparent hover:text-white",
        pill && "rounded-full",
        className
      )}
      { ...props }
    >
      {text}

      {icon ? (<span className="mr-2" aria-hidden="true">{icon}</span>) : (<ArrowUpRight size={20} />)}
    </button>
  )
}

export default VariantButton