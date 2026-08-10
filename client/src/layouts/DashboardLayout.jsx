import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-[#0A101B] flex">

      <Sidebar />

      <div className="flex-1 min-w-0">

        <Navbar />

        <main className="p-6">
          <Outlet />
        </main>

      </div>

    </div>
  );
}