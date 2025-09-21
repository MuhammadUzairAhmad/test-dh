"use client";

import React from "react";

type DividerProps = {
  className?: string;
};

export default function DividerUI({ className }: DividerProps) {
  return (
    <div
      className={`w-full h-px bg-[#FFFFFF3D] opacity-100 ${className ?? ""}`}
    />
  );
}
