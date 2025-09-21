"use client";
import Image from "next/image";
import clsx from "clsx";
import coverImg from "@/assets/images/coverImage.png";
import ResponsiveTruncate from "@/components/dump/ResponsiveTruncate";
import Link from "next/link";
import React from "react";
import { CardDataProps } from "@/types";
import { poppins } from "@/lib/font";

const ContestCard: React.FC<CardDataProps> = ({ card }) => {
  return (
    <div className="flex w-full bg-[#F0F0F3] rounded-2xl">
      <div className="flex-1 p-3 sm:p-5">
        <div
          className={clsx(
            poppins.className,
            "font-semibold text-base sm:text-lg md:text-[28px] mb-1 leading-6 text-[#282828] tracking-wider sm:mt-[1px]"
          )}
        >
          {card.title} <span className="font-normal">{card.subTitle}</span>
        </div>

        <ResponsiveTruncate text={card.description} />

        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            console.log(`Clicked card ID: ${card.id}`);
          }}
          className={clsx(
            poppins.className,
            "font-normal text-sm sm:text-base leading-[128%] tracking-[1%] text-[#12BAB0] underline underline-solid underline-offset-0 decoration-[0%]"
          )}
        >
          See Details
        </Link>
      </div>

      <Image
        src={coverImg}
        alt="cover image"
        priority
        className="overflow-hidden w-[120px] sm:w-[200px] md:w-[233px] h-auto"
      />
    </div>
  );
};

export default ContestCard;
