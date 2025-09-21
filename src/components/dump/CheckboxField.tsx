"use client";
import React from "react";
import { CheckboxFieldProps } from "@/types";
import { poppins } from "@/lib/font";

const CheckboxField: React.FC<CheckboxFieldProps> = ({
  id,
  name,
  label,
  checked,
  onChange,
}) => {
  return (
    <label
      htmlFor={id}
      className="flex items-center gap-1 cursor-pointer select-none"
    >
      <input
        id={id}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="
          w-3 h-3 sm:w-4 sm:h-4 border border-[#12BAB0] cursor-pointer
          appearance-none
          checked:bg-[#12BAB0] checked:border-[#12BAB0]
          checked:after:content-['✔'] checked:after:flex checked:after:items-center checked:after:justify-center
          checked:after:text-white checked:after:text-[12px] checked:after:leading-4
        "
      />
      <span
        className={`${poppins.className} font-normal text-sm sm:text-base leading-[100%] tracking-[0.1px] text-[#010B28]`}
      >
        {label}
      </span>
    </label>
  );
};

export default CheckboxField;
