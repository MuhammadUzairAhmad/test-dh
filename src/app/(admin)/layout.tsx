"use client";

import { useState } from "react";
import SidebarAdmin from "@/components/dashboard/layout/SidebarAdmin";
import SidebarDrawer from "@/components/dashboard/layout/SidebarDrawer";
import Topbar from "@/components/dashboard/layout/Topbar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div className="flex h-screen bg-white">
      <div className="hidden lg:block">
        <SidebarAdmin />
      </div>
      {/* Mobile Drawer */}
      <SidebarDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <div className="bg-white flex-1 flex flex-col h-screen overflow-y-auto md:pl-8 md:pr-12 pl-4 pr-4 pb-4">
        <Topbar onMenuClick={() => setDrawerOpen(true)} />
        <main className="">{children}</main>
      </div>
    </div>
  );
}
