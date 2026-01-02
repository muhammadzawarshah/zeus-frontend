"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Bell, Sun, Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header({ onMenuClick }: { onMenuClick?: () => void }) {
  const [isClientOpen, setIsClientOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // --- Static Data ---
  const clientList = ["Zeus Enterprise", "Global Marketing", "Tech Solutions"];
  const user = {
    name: "Alex Thompson",
    email: "alex.t@zeusplatform.com",
    avatar: "https://ui-avatars.com/api/?name=Alex+Thompson&background=0D8ABC&color=fff"
  };

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsClientOpen(false);
        setIsUserOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-[#0E1117] border-b border-gray-800 text-white sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Left Section: Logo & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="md:hidden bg-[#1F2937] p-2 rounded-lg border border-gray-700 hover:border-gray-600 transition"
            aria-label="Toggle menu"
          >
            <Menu size={20} />
          </button>
          <h1 className="text-xl font-semibold whitespace-nowrap">Zeus</h1>
        </div>

        {/* Center Section: Client Dropdown & Search (Desktop) */}
        <div className="hidden lg:flex items-center gap-4 flex-1 justify-center max-w-3xl">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsClientOpen(!isClientOpen)}
              className="flex items-center gap-2 bg-[#1F2937] px-4 py-2 rounded-lg text-sm border border-gray-700 hover:border-gray-600 transition-all"
            >
              <span>{clientList[0]}</span>
              <ChevronDown size={16} />
            </button>
            {isClientOpen && (
              <div className="absolute top-full left-0 mt-2 bg-[#1F2937] border border-gray-700 rounded-lg shadow-lg w-48 text-sm z-50">
                {clientList.map((name) => (
                  <button
                    key={name}
                    onClick={() => setIsClientOpen(false)}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-700 transition"
                  >
                    {name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="w-full max-w-md">
            <input
              type="text"
              placeholder="Search Zeus Platform"
              className="w-full bg-[#1F2937] border border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-500 transition"
            />
          </div>
        </div>

        {/* Right Section: Actions & Profile */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            className="bg-[#1F2937] p-2 rounded-full border border-gray-700 hover:border-gray-600 transition"
            aria-label="Toggle theme"
          >
            <Sun size={16} />
          </button>

          <button
            className="bg-[#1F2937] p-2 rounded-full border border-gray-700 hover:border-gray-600 transition relative"
            aria-label="Notifications"
          >
            <Bell size={16} />
            <span className="absolute top-1 right-1 bg-red-500 w-2 h-2 rounded-full"></span>
          </button>

          <div className="relative hidden sm:block">
            <button
              onClick={() => setIsUserOpen(!isUserOpen)}
              className="flex items-center gap-2 bg-[#1F2937] px-3 py-2 rounded-lg border border-gray-700 hover:border-gray-600 transition"
            >
              <Image
                src={user.avatar}
                alt="User Avatar"
                width={28}
                height={28}
                className="rounded-full object-cover"
              />
              <div className="text-left text-sm hidden md:block">
                <p className="font-medium leading-tight">{user.name}</p>
                <p className="text-gray-400 text-xs truncate max-w-[140px]">
                  {user.email}
                </p>
              </div>
              <ChevronDown size={16} />
            </button>

            {isUserOpen && (
              <div className="absolute right-0 mt-2 bg-[#1F2937] border border-gray-700 rounded-lg shadow-lg w-52 text-sm z-50">
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-700 transition">
                  Profile
                </button>
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-700 transition">
                  Settings
                </button>
                <button
                  onClick={() => alert("Logged out (Static)")}
                  className="block w-full text-left px-4 py-2 text-red-400 hover:bg-gray-700 transition"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Hamburger Menu (Mobile Only) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden bg-[#1F2937] p-2 rounded-lg border border-gray-700 hover:border-gray-600 transition"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#111827] border-t border-gray-800 p-4 flex flex-col gap-4">
          <div className="relative">
            <button
              onClick={() => setIsClientOpen(!isClientOpen)}
              className="flex items-center justify-between bg-[#1F2937] w-full px-4 py-2 rounded-lg text-sm border border-gray-700 hover:border-gray-600 transition-all"
            >
              <span>{clientList[0]}</span>
              <ChevronDown size={16} />
            </button>
          </div>

          <input
            type="text"
            placeholder="Search Zeus Platform"
            className="w-full bg-[#1F2937] border border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-500 transition"
          />

          <div className="flex items-center gap-3 mt-2">
            <Image
              src={user.avatar}
              alt="User Avatar"
              width={36}
              height={36}
              className="rounded-full object-cover"
            />
            <div>
              <p className="font-medium text-sm">{user.name}</p>
              <p className="text-gray-400 text-xs">{user.email}</p>
            </div>
          </div>

          <div className="flex flex-col border-t border-gray-700 mt-3 pt-3 text-sm">
            <button className="text-left px-2 py-2 hover:bg-gray-800 rounded-md transition">Profile</button>
            <button className="text-left px-2 py-2 hover:bg-gray-800 rounded-md transition">Settings</button>
            <button className="text-left px-2 py-2 text-red-400 hover:bg-gray-800 rounded-md transition">Logout</button>
          </div>
        </div>
      )}
    </header>
  );
}