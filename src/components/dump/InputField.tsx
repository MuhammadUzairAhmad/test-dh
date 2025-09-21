"use client";
import React, { useState } from "react";
import clsx from "clsx";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { poppins } from "@/lib/font";
import { InputFieldProps } from "@/types";

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  touched,
  className,
  variant = "input",
  options = [],
  inputClass = "",
  labelClass = "",
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const isPassword = type === "password";
  const hasError = touched && Boolean(error);

  // Common base classes
  const commonClasses = clsx(
    poppins.className,
    "w-full text-sm sm:text-base outline-none transition-colors duration-200",
    {
      "border-red-500": hasError,
      "border-[#12BAB0]": isFocused && !hasError,
      "border-[#0000003D]": !isFocused && !hasError,
    }
  );

  return (
    <div className={clsx("flex flex-col gap-1 w-full", className)}>
      {/* Label */}
      <label
        htmlFor={id}
        className={clsx(
          poppins.className,
          "font-normal text-sm sm:text-base leading-[100%] text-[#181818] opacity-70",
          labelClass
        )}
      >
        {label}
      </label>

      {/* Input / Textarea / Select / text */}
      <div className="relative">
        {variant === "input" && (
          <input
            id={id}
            name={name}
            type={isPassword && showPassword ? "text" : type}
            placeholder={placeholder}
            value={value}
            onChange={onChange as React.ChangeEventHandler<HTMLInputElement>}
            onBlur={(e) => {
              setIsFocused(false);
              onBlur?.(e);
            }}
            onFocus={() => setIsFocused(true)}
            aria-invalid={hasError}
            aria-describedby={hasError ? `${id}-error` : undefined}
            className={clsx(
              commonClasses,
              "h-[40px] rounded-[20px] border px-3 pr-10 text-[#010B28]",
              inputClass
            )}
          />
        )}

        {variant === "textarea" && (
          <textarea
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange as React.ChangeEventHandler<HTMLTextAreaElement>}
            onBlur={(e) => {
              setIsFocused(false);
              onBlur?.(e);
            }}
            onFocus={() => setIsFocused(true)}
            aria-invalid={hasError}
            aria-describedby={hasError ? `${id}-error` : undefined}
            className={clsx(
              commonClasses,
              "min-h-[120px] py-2 px-3 resize-none rounded-[12px] border border-opacity-25 bg-[#EFF0F3] text-[#010B28]",
              inputClass
            )}
          />
        )}

        {variant === "select" && (
          <select
            id={id}
            name={name}
            value={value}
            onChange={onChange as React.ChangeEventHandler<HTMLSelectElement>}
            onBlur={(e) => {
              setIsFocused(false);
              onBlur?.(e);
            }}
            onFocus={() => setIsFocused(true)}
            aria-invalid={hasError}
            aria-describedby={hasError ? `${id}-error` : undefined}
            className={clsx(
              commonClasses,
              "h-[40px] rounded-[12px] border px-3 bg-white text-[#010B28]",
              inputClass
            )}
          >
            <option value="" disabled>
              {placeholder || "Select an option"}
            </option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        )}

        {variant === "text" && (
          <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange as React.ChangeEventHandler<HTMLInputElement>}
            onBlur={(e) => {
              setIsFocused(false);
              onBlur?.(e);
            }}
            onFocus={() => setIsFocused(true)}
            aria-invalid={hasError}
            aria-describedby={hasError ? `${id}-error` : undefined}
            className={clsx(
              poppins.className,
              "w-full border-b text-[#222222] text-[16px] leading-[128%] tracking-[0.01em] font-normal bg-transparent outline-none",
              "border-[#0000003D] focus:border-[#12BAB0] placeholder:text-gray-400",
              inputClass
            )}
          />
        )}

        {/* Password Toggle */}
        {variant === "input" && isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute inset-y-0 right-3 flex items-center"
          >
            {showPassword ? (
              <AiOutlineEyeInvisible size={22} className="text-[#12BAB0]" />
            ) : (
              <AiOutlineEye size={22} className="text-[#12BAB0]" />
            )}
          </button>
        )}
      </div>

      {/* Error Message */}
      {hasError && (
        <p id={`${id}-error`} className="text-red-500 text-sm ml-2 mt-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default InputField;
