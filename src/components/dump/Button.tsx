"use client";
import React from "react";
import clsx from "clsx";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { poppins } from "@/lib/font";
import { ButtonProps, SizeType, VariantType } from "@/types";



const ButtonUI: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className,
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  ...props
}) => {
  // Base shared styles
  const baseClasses = clsx(
    `${poppins.className} cursor-pointer rounded-[40px] 
     font-medium tracking-[0.015em] 
     text-center transition flex items-center justify-center gap-2 
     min-w-[120px] sm:min-w-[140px] md:min-w-[150px] lg:min-w-[173px] 
     w-full px-4`,
    className
  );

  // Variants
  const variantClasses: Record<VariantType, string> = {
    primary: "bg-[#12BAB0] text-white hover:opacity-90",
    outline: "bg-transparent border border-[#12BAB0]  hover:bg-[#12BAB0] ",
    dark: "bg-[#010B28] text-white hover:opacity-80",
    dashboard: "bg-[#12BAB0] text-white gap-2 hover:opacity-90",
    textUnderline:
      "bg-transparent border-0 text-[#12BAB0] underline hover:text-[#0e9c95] hover:underline",
  };

  // Responsive sizes (mobile → desktop → xl)
  const sizeClasses: Record<SizeType, string> = {
    sm: "h-9 sm:h-10 md:h-11 lg:h-12 text-sm sm:text-base md:text-lg",
    md: "h-10 sm:h-11 md:h-12 lg:h-14 text-sm sm:text-base md:text-lg lg:text-xl",
    mdx: "h-[41px] text-[15px]  py-[9px] !pl-2.5 !pr-[14px]",
    lg: "h-11 sm:h-12 md:h-13 lg:h-14 text-base sm:text-lg md:text-xl lg:text-[28px]",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
      className={clsx(
        baseClasses,
        variantClasses[variant],
        variant !== "textUnderline" && sizeClasses[size],
        (disabled || loading) && "opacity-70 cursor-not-allowed"
      )}
    >
      {loading ? (
        <AiOutlineLoading3Quarters className="animate-spin text-lg" />
      ) : (
        <>
          {leftIcon && <span className="flex items-center">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="flex items-center">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};

export default ButtonUI;
