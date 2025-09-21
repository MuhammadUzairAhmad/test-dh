"use client";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import BellIcon from "@/assets/svgs/bell-badge.svg";
import ArrowDownIcon from "@/assets/svgs/chevron-down.svg";
import Image from "next/image";
import clsx from "clsx";
import { poppins } from "@/lib/font";
import { TopbarProps } from "@/types";

export default function Topbar({ onMenuClick }: TopbarProps) {
  return (
    <header className=" flex items-center justify-between h-12 mt-4 md:mt-10 bg-white">
      {/* Left (title/breadcrumb placeholder) */}
      <div>
      <HiMiniBars3BottomLeft
        onClick={onMenuClick}
        className="w-6 h-6 lg:hidden text-gray-700 focus:outline-none cursor-pointer"
      />
      </div>

      {/* Right (profile & actions) */}
      <div className="flex items-center">
        <Image
          src={BellIcon}
          alt="Bell-icon"
          priority
          className=" w-6 h-6 cursor-pointer"
        />
        <div className={`h-12 w-[1px] bg-[#C2C2C2] mx-2 sm:mx-6`} />
        {/* Profile dropdown */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <div
            className={clsx(
              poppins.className,
              "w-[46px] h-[46px] rounded-full bg-[#E7E7E7] flex items-center justify-center uppercase font-bold text-lg text-[#C4C5CA] "
            )}
          >
            pd
          </div>
          <div>
            <div
              className={clsx(
                poppins.className,
                "text-[10px] text-[#BFBFBF] font-bold leading-[150%] tracking-wider"
              )}
            >
              Admin
            </div>
            <div className="flex items-center gap-2 sm:gap-5">
              <div
                className={clsx(
                  poppins.className,
                  "text-base text-[#0A0A0A] font-medium leading-[150%] tracking-wider max-w-[110px]"
                )}
              >
                Prerit Das
              </div>

              <Image
                src={ArrowDownIcon}
                alt="Arrow Down Icon"
                priority
                className=" w-6 h-6 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
