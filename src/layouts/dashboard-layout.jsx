import Navbar from "@/components/shared/navbar";
import { Outlet } from "react-router";
import Sidebar from "@/components/dashboard/sidebar";

export default function DashboardLayout() {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar at the top */}
      <Navbar />

      <div className="flex flex-grow">
        {/* Sidebar on the left */}
        <div className="basis-[15%]">
          <Sidebar/>
          
        </div>
        {/* Main Content (Dashboard) */}
        <main className="basis-[85%] flex-grow bg-[#F0F5FF] p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
