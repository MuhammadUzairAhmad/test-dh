"use client";

import LogoIcon from "@/assets/svgs/navbar-logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaPlus } from "react-icons/fa";
import ButtonUI from "../../dump/Button";
import DividerUI from "../../dump/DividerUI";

const menuItems = [
  { label: "Contests", href: "/contests" },
  { label: "User Management", href: "/users" },
  { label: "Marketing Campaigns", href: "/contests" },
  { label: "Leaderboard Control", href: "/contests" },
  { label: "Analytics", href: "/contests" },
];

const submenuItems = [
  { label: "Notifications", href: "/contests" },
  { label: "Security", href: "/contests" },
  { label: "Feedback & Support", href: "/contests" },
];

export default function SidebarAdmin() {
  const pathname = usePathname();
  const router = useRouter();
  const handleCreateContest = () => {
    router.push("/contests/new");
  };

  const getMenuItemClass = (isActive: boolean) =>
    isActive
      ? "cursor-pointer font-poppins font-bold text-[15px] leading-[150%] tracking-[0.6px] text-white h-[39px] border-r-[6px] border-r-[#12BAB0] border-t-0 border-b-0 border-l-0 flex items-center py-2"
      : "cursor-pointer font-poppins font-light text-[15px] leading-[150%] tracking-[0.6px] text-white opacity-80 hover:opacity-100 py-2";

  return (
    <aside className="w-[254px] bg-[#010B28] text-white flex flex-col h-screen overflow-y-auto">
      {/* Logo */}
      <Image
        src={LogoIcon}
        alt="Admin Logo"
        priority
        className="w-[153px] h-auto mt-[50px] mb-[106px] ml-7"
      />

      {/* Create Contest Button */}
      <div className="mx-6">
        <ButtonUI
          variant="dashboard"
          onClick={handleCreateContest}
          size="mdx"
          leftIcon={<FaPlus />}
          className="mb-2"
        >
          Create New Contest
        </ButtonUI>
        <DividerUI className="my-10" />
      </div>

      {/* Main Menu Items */}
      <div className="ml-6 flex flex-col gap-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <div className={getMenuItemClass(isActive)}>{item.label}</div>
            </Link>
          );
        })}
      </div>

      {/* Divider */}
      <div className="mx-6">
        <DividerUI className="my-4" />
      </div>

      {/* Sub Menu Items */}
      <div className="ml-6 flex flex-col gap-4 mb-6">
        {submenuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <div className={getMenuItemClass(isActive)}>{item.label}</div>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
