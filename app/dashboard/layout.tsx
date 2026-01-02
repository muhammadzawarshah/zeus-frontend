"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // --- Static Check (Auth dependency removed for demo) ---
  const loading = false;
  const user = { name: "Alex" }; 

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#0E1117] text-gray-400">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-[#0E1117] text-white overflow-hidden relative">
      
      {/* Header - Fixed on top */}
      <Header onMenuClick={toggleSidebar} />

      <div className="flex flex-1 overflow-hidden relative">
        
        {/* Sidebar */}
        <aside
          className={`
            fixed inset-y-0 left-0 z-50 w-64 bg-[#0E1117] border-r border-gray-800 
            transform transition-transform duration-300 ease-in-out
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            md:relative md:translate-x-0 md:flex md:shrink-0
            h-full overflow-y-auto custom-scrollbar
          `}
        >
          <Sidebar />
        </aside>

        {/* Overlay for Mobile Sidebar */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden z-40 transition-opacity"
            onClick={() => setSidebarOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 custom-scrollbar w-full">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}