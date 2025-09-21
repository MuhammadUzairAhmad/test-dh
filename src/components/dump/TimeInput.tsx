"use client";

import Image from "next/image";
import TimeIcon from "@/assets/svgs/time-icon.svg";
import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { TimeInputProps } from "@/types";
import { poppins } from "@/lib/font";

const TimeInput: React.FC<TimeInputProps> = ({
  id,
  name,
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

  const handleChange = (val: string) => {
    setInternalValue(val);
    onChange?.(val);
  };

  const handleClick = () => {
    inputRef.current?.showPicker?.();
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

      {/* Input + custom icon wrapper */}
      <div className="relative w-full">
        <input
          ref={inputRef}
          id={id}
          name={name}
          type="time"
          step={1}
          value={internalValue}
          onChange={(e) => handleChange(e.target.value)}
          onClick={handleClick}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur?.(e);
          }}
          onFocus={() => setIsFocused(true)}
          className={clsx(
            poppins.className,
            "h-8 w-full rounded-[20px] border pl-3 pr-10 text-[#010B28] text-sm sm:text-base outline-none transition-colors duration-200 appearance-none",
            {
              "border-[#0000003D]": !isFocused && !hasError,
              "border-[#12BAB0]": isFocused && !hasError,
              "border-red-500": hasError,
            }
          )}
        />

        {/* Custom Icon (clickable to trigger picker) */}
        <Image
          src={TimeIcon}
          alt="Time Icon"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer"
          onClick={handleClick}
        />
      </div>

      {hasError && <p className="text-red-500 text-sm mx-2">{error}</p>}

      <style jsx>{`
        /* Hide native Chrome/Edge time picker icon */
        input[type="time"]::-webkit-calendar-picker-indicator {
          display: none;
          -webkit-appearance: none;
        }
        input[type="time"]::-webkit-inner-spin-button,
        input[type="time"]::-webkit-clear-button {
          display: none;
        }
        input[type="time"]::-moz-clear {
          display: none;
        }
        input[type="time"]::-ms-clear {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default TimeInput;
