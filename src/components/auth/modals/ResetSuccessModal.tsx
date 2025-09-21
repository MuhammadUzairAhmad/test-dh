import ModalUI from "@/components/dump/Modal";
import ButtonUI from "@/components/dump/Button";
import React from "react";
import { ResetSuccessModalProps } from "@/types";
import { poppins } from "@/lib/font";

const ResetSuccessModal: React.FC<ResetSuccessModalProps> = ({
  isOpen,
  onClose,
  onReset,
}) => {
  return (
    <ModalUI isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col w-full sm:mt-8 mb-8 lg:mt-[89px] lg:mb-[120px]">
        <div
          className={`${poppins.className} text-[#010B28] text-3xl sm:text-4xl md:text-[58px] tracking-[2%] font-semibold`}
        >
          Password Reset Request Sent
        </div>
        <div className="mt-6  sm:mt-14 text-sm sm:text-base tracking-normal text-[#010B28]">
          A password reset message was sent to your email address. Please click
          the link in that message to reset password.
        </div>

        {/* Login button */}
        <ButtonUI
          type="button"
          variant="dark"
          size="sm"
          className="w-full mt-6 sm:mt-[108px]"
          onClick={onReset}
        >
          Login
        </ButtonUI>
      </div>
    </ModalUI>
  );
};

export default ResetSuccessModal;
