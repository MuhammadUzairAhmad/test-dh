"use client";
import ArchivedContent from "@/components/dashboard/contests/ArchivedContent/ArchivedContent";
import OngoingContent from "@/components/dashboard/contests/OngoingContent/OngoingContent";
import Heading from "@/components/dashboard/sharedComp/Heading";
import Tabs from "@/components/dump/TabsUI";
import { myTabs } from "@/constant";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";



export default function Dashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("ongoing");
  const handleCreateContest = () => {
    router.push("/contests/new");
  };
  return (
    <main>
      <Heading
        title="Contests"
        buttonLabel="Create New Contest"
        buttonLeftIcon={<FaPlus />}
        onButtonClick={handleCreateContest}
      />

      {/* Tabs and content would go here */}
      <div className="mt-3.5 ">
        <Tabs
          tabs={myTabs}
          initialTab="ongoing"
          onTabChange={(tabId) => setActiveTab(tabId)}
        />

        <div className=" mt-3 sm:mt-5.5">
          {activeTab === "ongoing" && <OngoingContent />}
          {activeTab === "archived" && <ArchivedContent />}
        </div>
      </div>
    </main>
  );
}
