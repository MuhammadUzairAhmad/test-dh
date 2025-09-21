"use client";
import React from "react";
import clsx from "clsx";
import ButtonUI from "@/components/dump/Button";
import { poppins } from "@/lib/font";
import { HeadingProps } from "@/types";

const Heading: React.FC<HeadingProps> = ({
  title,
  buttonLabel,
  buttonLeftIcon,
  buttonRightIcon,
  onButtonClick,
  align = "left",
  className,
}) => {
  const justifyClass =
    align === "left"
      ? "justify-between"
      : align === "right"
      ? "justify-end"
      : "justify-center";

  return (
    <div
      className={clsx(
        "flex items-center mb-3.5 mt-6.5",
        justifyClass,
        className
      )}
    >
      {title && (
        <div
          className={clsx(
            poppins.className,
            "font-bold text-lg sm:text-xl md:text-[28px] leading-[24px] sm:leading-[26px] tracking-[0.5px] text-[#010B28]"
          )}
        >
          {title}
        </div>
      )}

      {buttonLabel && (
        <ButtonUI
          variant="dashboard"
          onClick={onButtonClick}
          size="mdx"
          leftIcon={buttonLeftIcon}
          rightIcon={buttonRightIcon}
          className="!w-fit"
        >
          {buttonLabel}
        </ButtonUI>
      )}
    </div>
  );
};

export default Heading;
