"use client";
import React from "react";
import clsx from "clsx";
import CloseIcon from "@/assets/svgs/modal-close-icon.svg";
import Image from "next/image";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
};

const ModalUI: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className,
}) => {
  if (!isOpen) return null; // Don’t render if closed

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-[#000000B8] " onClick={onClose} />

      {/* Modal Content */}
      <div
        className={clsx(
          `relative bg-white rounded-2xl shadow-lg w-full  max-w-[738px] mx-4 transition-all duration-300 p-4 sm:p-6`,
          className
          // min-h-[689px] if needed
        )}
      >
        {/* Header */}
        <div className="">
          {/* Close button */}
          <Image
            onClick={onClose}
            src={CloseIcon}
            alt="Close"
            priority
            className="w-[30px] ml-auto h-auto cursor-pointer"
          />
        </div>

        {/* Body */}
        <div className="px-2 sm:px-4 md:px-6 lg:px-20">{children}</div>
      </div>
    </div>
  );
};

export default ModalUI;
