"use client";
import ForgetPasswordModal from "@/components/auth/modals/ForgetPasswordModal";
import LoginModal from "@/components/auth/modals/LoginModal";
import ResetPasswordModal from "@/components/auth/modals/ResetPasswordModal";
import ResetSuccessModal from "@/components/auth/modals/ResetSuccessModal";
import ButtonUI from "@/components/dump/Button";
import { poppins } from "@/lib/font";
import { useState } from "react";


export default function Home() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isForgotOpen, setIsForgotOpen] = useState(false);
  const [isResetSuccessOpen, setResetSuccessOpen] = useState(false);
  const [isResetPasswordOpen, setResetPasswordOpen] = useState(false);

  return (
    <main className="min-h-[calc(100vh-6.5rem)] md:min-h-[calc(100vh-8.5rem)] flex flex-col items-center justify-center gap-4 sm:gap-10 md:gap-14">
      <div
        className={`${poppins.className} max-w-[836px]
        text-2xl sm:text-4xl md:text-5xl 
        leading-snug sm:leading-[138%] 
        tracking-[0.5px] text-center font-normal`}
      >
        Welcome to Admin Portal of{" "}
        <span className="font-bold">Fantazy Buzz</span>
      </div>
      <ButtonUI
        variant="primary"
        onClick={() => setIsLoginOpen(true)}
        size="lg"
        className="w-full max-w-[220px] sm:max-w-[280px] md:max-w-[349px]"
      >
        Login
      </ButtonUI>

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
    </main>
  );
}
