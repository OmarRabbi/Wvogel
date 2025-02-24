import { Sidebar } from "@/components/dashboard/sidebar/sidebar";
import Navbar from "@/components/shared/navbar";

import { Outlet } from "react-router";

export default function DashboardLayout() {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar at the top */}
      <Navbar />

      <div className="flex flex-grow">
        {/* Sidebar on the left */}
        <Sidebar />

        {/* Main Content (Dashboard) */}
        <main className="flex-grow bg-[#F0F5FF] p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
