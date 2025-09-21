"use client";
import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import Image from "next/image";
import CalendarDateIcon from "@/assets/svgs/calendar-month.svg";
import { poppins } from "@/lib/font";
import { CalendarInputProps } from "@/types";

const CalendarInput: React.FC<CalendarInputProps> = ({
  id,
  label,
  value = "",
  onChange,
  onBlur,
  error,
  touched,
  className,
}) => {
  const [internalValue, setInternalValue] = useState(value);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const hasError = touched && error;

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const handleOpenPicker = () => {
    inputRef.current?.showPicker?.();
  };

  const handleChange = (val: string) => {
    setInternalValue(val);
    onChange?.(val);
  };

  return (
    <div className={clsx("flex flex-col gap-1 w-full", className)}>
      {label && (
        <label
          htmlFor={id}
          className={clsx(
            poppins.className,
            "font-normal text-sm sm:text-base leading-[100%] text-[#181818] opacity-[64%]"
          )}
        >
          {label}
        </label>
      )}

      <div className="relative">
        {/* Visible input */}
        <input
          id={id}
          name={id}
          type="text"
          readOnly
          value={internalValue}
          placeholder="YYYY-MM-DD"
          onClick={handleOpenPicker}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur?.(e);
          }}
          className={clsx(
            poppins.className,
            "h-8 w-full rounded-[20px] border px-4 pr-10 text-[#010B28] text-sm sm:text-base outline-none transition-colors duration-200 cursor-pointer",
            {
              "border-[#0000003D]": !isFocused && !hasError,
              "border-[#12BAB0]": isFocused && !hasError,
              "border-red-500": hasError,
            }
          )}
        />

        {/* Hidden native date input */}
        <input
          ref={inputRef}
          type="date"
          value={internalValue}
          onChange={(e) => handleChange(e.target.value)}
          className="absolute top-0 left-0 w-full h-full opacity-0 pointer-events-none"
        />

        {/* Custom calendar icon */}
        <Image
          src={CalendarDateIcon}
          alt="Calendar Date Icon"
          onClick={handleOpenPicker}
          priority
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#12BAB0] cursor-pointer"
        />
      </div>

      {hasError && <p className="text-red-500 text-sm mx-2">{error}</p>}
    </div>
  );
};

export default CalendarInput;
