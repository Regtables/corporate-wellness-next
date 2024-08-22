import { cn } from "@/lib/utils";
import React, { FC, ButtonHTMLAttributes } from "react";

interface BasicButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  handleClick?: () => void;
  icon?: React.ReactNode;
  pill?: boolean;
  bgColor?: string;
  color?: string;
  outline?: boolean;
}

const BasicButton: FC<BasicButtonProps> = ({
  text,
  handleClick,
  icon,
  bgColor,
  color,
  pill,
  outline,
  className,
  ...props
}) => {
  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: bgColor, color, borderColor: color }}
      className={cn(
        "rounded-[12px] px-[24px] h-[40px] leading-none",
        pill && "rounded-full",
        outline && "border-2 border-[var(--color-black)]",
        className
      )}
      aria-label={props['aria-label'] || text}
      {...props}
    >
      {icon && <span className="mr-2" aria-hidden="true">{icon}</span>}
      <span>{text}</span>
    </button>
  );
};

export default BasicButton;