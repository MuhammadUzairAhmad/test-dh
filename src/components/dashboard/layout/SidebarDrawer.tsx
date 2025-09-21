"use client";
import React from "react";
import CloseIcon from "@/assets/svgs/modal-close-icon.svg";
import clsx from "clsx";
import Image from "next/image";
import SidebarAdmin from "./SidebarAdmin";

type SidebarDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SidebarDrawer({ isOpen, onClose }: SidebarDrawerProps) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={clsx(
          "fixed inset-0 bg-black/60 transition-opacity duration-300 lg:hidden",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={clsx(
          "fixed top-0 left-0 h-full w-[254px] bg-[#010B28] shadow-lg transform transition-transform duration-300 lg:hidden z-50",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Close Button (top-right inside drawer) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:opacity-80"
        >
          <Image alt="Close" src={CloseIcon} priority className="w-6 h-6" />
        </button>

        {/* Sidebar Content */}
        <SidebarAdmin />
      </div>
    </>
  );
}
