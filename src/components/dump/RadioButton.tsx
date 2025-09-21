"use client";
import React from "react";
import clsx from "clsx";
import { RadioButtonProps } from "@/types";
import { poppins } from "@/lib/font";

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  value,
  interactive = false,
  checked = false,
  onChange,
}) => {
  const sharedClasses = clsx(
    "flex items-center gap-2",
    poppins.className,
    "text-[#282828] text-base md:text-xl cursor-pointer",
    interactive && "cursor-pointer"
  );

  return (
    <div className={sharedClasses}>
      {interactive ? (
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={() => onChange && onChange(value || "")}
          className={clsx(
            "w-4 h-4 rounded-full border-2 border-[#12BAAF] accent-[#12BAAF]",
            checked ? "border-[#12BAAF] accent-[#12BAAF]" : "border-[#12BAAF]"
          )}
        />
      ) : (
        <div className="w-4 h-4 rounded-full border-2 border-[#12BAAF]" />
      )}
      <span>{label}</span>
    </div>
  );
};

export default RadioButton;
