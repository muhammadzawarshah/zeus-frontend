"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import IntegrationCards from "./sections/Integrationcards";
import PixelSetup from "./sections/PixelSetup";

export default function IntegrationPage() {
  const [selectedAgency, setSelectedAgency] = useState("Digital Dynamics");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const agencies = ["Digital Dynamics", "Adverto Media", "SkyReach Labs"];

  return (
    <div className="min-h-screen text-white px-6 py-10">

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
        <h1 className="text-3xl font-semibold mb-3 sm:mb-0">Integration Setup</h1>

        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className="flex items-center justify-between gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-medium px-4 py-2 rounded-lg shadow-md focus:outline-none transition"
          >
            {selectedAgency}
            <ChevronDown size={18} />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-[#1F2937] border border-gray-700 rounded-md shadow-lg z-50">
              {agencies.map((agency, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedAgency(agency);
                    setIsDropdownOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 text-sm hover:bg-[#374151] ${
                    selectedAgency === agency ? "text-teal-400" : "text-gray-200"
                  }`}
                >
                  {agency}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="space-y-10">
        <IntegrationCards />
        <PixelSetup />
      </div>
    </div>
  );
}
