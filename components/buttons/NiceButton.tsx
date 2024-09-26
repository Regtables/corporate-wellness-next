import { cn } from "@/lib/utils";
import { ArrowUpRight, MoveUpRight } from "lucide-react";
import React, { FC, ButtonHTMLAttributes } from "react";

interface BasicButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  handleClick?: () => void;
  icon?: React.ReactNode;
  pill?: boolean;
  bgColor?: string;
  color?: string;
  outline?: boolean
}

const NiceButton: FC<BasicButtonProps> = ({
  text,
  handleClick,
  icon,
  bgColor,
  color,
  pill,
  outline,
  className,
  type,
  ...props
}) => {
  return (
    <button
      onClick={handleClick}
      className={cn(
        "rounded-[12px] lg:px-[24px] px-[19px] text-white border-2 border-[var(--color-white)] h-[40px] leading-none capitalize flex items-center gap-2 hover:gap-4 transition-all duration-500",
        pill && "rounded-full",
        outline && "",
        className
      )}
      type= {type}
      aria-label={props['aria-label'] || text}
      {...props}
    >
      <span>{text}</span>
      {icon ? (<span className="mr-2" aria-hidden="true">{icon}</span>) : (<ArrowUpRight size={20} />)}
    </button>
  );
};

export default NiceButton;