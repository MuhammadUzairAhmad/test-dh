"use client";
import Image from "next/image";
import React, { useState } from "react";
import LogoIcon from "../../assets/svgs/navbar-logo.svg";
import ButtonUI from "../dump/Button";
import LoginModal from "./modals/LoginModal";
import ForgetPasswordModal from "./modals/ForgetPasswordModal";
import ResetSuccessModal from "./modals/ResetSuccessModal";
import ResetPasswordModal from "./modals/ResetPasswordModal";

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isForgotOpen, setIsForgotOpen] = useState(false);
  const [isResetSuccessOpen, setResetSuccessOpen] = useState(false);
  const [isResetPasswordOpen, setResetPasswordOpen] = useState(false);
  return (
    <nav className="w-full flex items-center justify-between  ">
      <Image
        src={LogoIcon}
        alt="Navbar logo"
        priority
        className="h-14 w-auto md:h-auto"
      />
      {/* Right Button */}
      <div className="min-w-[120px] sm:min-w-[140px] md:min-w-[150px] lg:min-w-[173px] xl:pr-2">
        <ButtonUI
          variant="outline"
          onClick={() => setIsLoginOpen(true)}
          size="sm"
        >
          Login
        </ButtonUI>
      </div>

      {/* Modals */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onForgot={() => {
          setIsLoginOpen(false);
          setIsForgotOpen(true);
        }}
      />
      <ForgetPasswordModal
        isOpen={isForgotOpen}
        onClose={() => setIsForgotOpen(false)}
        onSuccess={() => setResetSuccessOpen(true)}
      />
      <ResetSuccessModal
        isOpen={isResetSuccessOpen}
        onClose={() => setResetSuccessOpen(false)}
        onReset={() => {
          setResetSuccessOpen(false);
          setResetPasswordOpen(true);
        }}
      />
      <ResetPasswordModal
        isOpen={isResetPasswordOpen}
        onClose={() => setResetPasswordOpen(false)}
        onSuccess={() => {
          setResetPasswordOpen(false);
          setIsLoginOpen(true); // after reset go back to login
        }}
      />
    </nav>
  );
};

export default Navbar;
