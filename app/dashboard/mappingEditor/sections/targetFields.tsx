"use client";
import React, { useState } from "react";
import { ChevronDown, Search } from "lucide-react";

interface TargetField {
  id: string | number;
  name: string;
  type: string;
  status: string;
  platform: string;
}

export default function TargetFieldsTable() {
  const [platform, setPlatform] = useState("Google Ads");
  const [currentPage, setCurrentPage] = useState(1);
  const fieldsPerPage = 5; // Image ke mutabiq 5 rows

  const staticFields: TargetField[] = [
    { id: 1, name: "Campaign Name (Required)", type: "number", status: "Not Mapped", platform: "Google Ads" },
    { id: 2, name: "Ad Group ID (Optional)", type: "url", status: "Not Mapped", platform: "Google Ads" },
    { id: 3, name: "Final URL (Required)", type: "currency", status: "Not Mapped", platform: "Google Ads" },
    { id: 4, name: "Budget (Optional)", type: "text", status: "Not Mapped", platform: "Google Ads" },
    { id: 5, name: "Campaign Name (Required)", type: "number", status: "Not Mapped", platform: "Google Ads" },
    { id: 6, name: "Conversion Value", type: "number", status: "Mapped", platform: "Google Ads" },
  ];

  const filteredFields = staticFields.filter(f => f.platform === platform);
  const totalPages = 6; // Image ke mutabiq fixed range dikhane ke liye
  const startIndex = (currentPage - 1) * fieldsPerPage;
  const currentFields = filteredFields.slice(startIndex, startIndex + fieldsPerPage);

  return (
    <div className="py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Table Wrapper */}
        <div className="bg-background border border-[#30363d] rounded-lg overflow-hidden shadow-sm">
          
          {/* Top Header Section */}
          <div className="flex justify-between items-center p-6 border-b border-[#30363d]">
            <h1 className="text-2xl font-semibold text-[#e6edf3]">Target Fields</h1>
            <div className="relative">
              <select
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                className="appearance-none bg-[#161b22] text-[#e6edf3] text-sm border border-[#30363d] rounded-md py-1.5 pl-3 pr-10 focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer"
              >
                <option>Google Ads</option>
                <option>Facebook Ads</option>
              </select>
              <ChevronDown className="absolute right-3 top-2 text-[#8b949e] pointer-events-none" size={16} />
            </div>
          </div>

          {/* Table Header Row (White Background like Image) */}
          <div className="grid grid-cols-[1fr_1fr_1fr] bg-[#f6f8fa] px-8 py-4 border-b border-[#30363d]">
            <p className="text-xs font-bold text-[#24292f]">Field Name</p>
            <p className="text-xs font-bold text-[#24292f] text-center">Type</p>
            <p className="text-xs font-bold text-[#24292f] text-right">Status</p>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-[#30363d]">
            {currentFields.map((field, idx) => (
              <div
                key={idx}
                className="grid grid-cols-[1fr_1fr_1fr] items-center px-8 py-6 hover:bg-[#161b22] transition-colors"
              >
                {/* Field Name with Checkbox */}
                <div className="flex items-center gap-4">
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 bg-[#0d1117] border-[#30363d] rounded focus:ring-0 focus:ring-offset-0 accent-blue-500 cursor-pointer" 
                  />
                  <span className="text-[#e6edf3] text-sm font-medium">{field.name}</span>
                </div>

                {/* Type Column */}
                <div className="text-center">
                  <span className="text-[#8b949e] text-sm font-mono">{field.type}</span>
                </div>

                {/* Status Column */}
                <div className="text-right">
                  <button className="bg-[#010409] text-[#e6edf3] text-[11px] font-bold px-4 py-1.5 rounded-full border border-[#30363d] hover:border-[#8b949e] transition uppercase tracking-tight">
                    {field.status}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Section (Image Style) */}
          <div className="flex justify-center items-center gap-1.5 py-6 border-t border-[#30363d]">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <button
                key={num}
                onClick={() => setCurrentPage(num)}
                className={`w-8 h-8 flex items-center justify-center rounded-md border text-xs font-medium transition ${
                  currentPage === num
                    ? "bg-[#0d1117] border-[#30363d] text-[#e6edf3]"
                    : "border-transparent text-[#8b949e] hover:border-[#30363d]"
                }`}
              >
                {num}
              </button>
            ))}
            <span className="text-[#8b949e] px-1">...</span>
            <button className="px-4 py-1.5 border border-[#30363d] rounded-md text-xs font-medium text-[#e6edf3] hover:bg-[#161b22]">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}