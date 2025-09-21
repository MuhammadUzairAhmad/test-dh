"use client";
import Image from "next/image";
import React from "react";
import LogoIcon from "../../assets/svgs/navbar-logo.svg";
import ButtonUI from "../dump/Button";

const Navbar = () => {
  const handleLogin = () => {
    console.log("Login clicked!");
    // later: router.push("/login") or your auth logic
  };
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
        <ButtonUI variant="outline" onClick={handleLogin} size="sm">
          Login
        </ButtonUI>
      </div>
    </nav>
  );
};

export default Navbar;
