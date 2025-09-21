"use client";
import { poppins } from "@/lib/font";
import { TabsProps } from "@/types";
import { useState } from "react";

export default function Tabs({ tabs, initialTab, onTabChange }: TabsProps) {
  const [selectedTab, setSelectedTab] = useState(initialTab || tabs[0]?.id);

  const handleClick = (tabId: string) => {
    setSelectedTab(tabId);
    if (onTabChange) onTabChange(tabId);
  };

  return (
    <div className={`flex items-center gap-4 sm:gap-10 ${poppins.className}`}>
      {tabs.map((tab) => {
        const isSelected = selectedTab === tab.id;

        return (
          <div
            key={tab.id}
            onClick={() => handleClick(tab.id)}
            className={`
              cursor-pointer
              text-xl leading-[26px] tracking-[0.5px] text-[#010B28]
              py-[7px]
              ${
                isSelected
                  ? "font-bold border-b-2 border-[#010B28]"
                  : "font-normal"
              }
            `}
          >
            {tab.label}
          </div>
        );
      })}
    </div>
  );
}
