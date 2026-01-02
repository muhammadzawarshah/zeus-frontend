"use client";

import React, { useState, useCallback } from "react";
import { ChevronDown } from "lucide-react";

interface UploadRecord {
  id: string | number;
  title: string;
  email: string;
  status: string;
  totalRows: number;
  invalid: number;
  mapping: string;
  time: string;
}

export default function UploadsList() {
  // --- Static Demo Data ---
  const [uploads] = useState<UploadRecord[]>([
    {
      id: "1",
      title: "q4_sales_report_final.csv",
      email: "admin@zeusplatform.com",
      status: "Success",
      totalRows: 12500,
      invalid: 0,
      mapping: "E-commerce Standard",
      time: "2 hours ago",
    },
    {
      id: "2",
      title: "offline_leads_december.xlsx",
      email: "marketing@zeusplatform.com",
      status: "Processing",
      totalRows: 5420,
      invalid: 12,
      mapping: "Facebook Lead Gen",
      time: "45 mins ago",
    },
    {
      id: "3",
      title: "legacy_crm_export.json",
      email: "admin@zeusplatform.com",
      status: "Failed",
      totalRows: 890,
      invalid: 890,
      mapping: "Custom CRM Bridge",
      time: "Yesterday, 4:30 PM",
    },
    {
      id: "4",
      title: "google_ads_conversions_nov.csv",
      email: "analyst@zeusplatform.com",
      status: "Success",
      totalRows: 2100,
      invalid: 4,
      mapping: "Google Ads Offline",
      time: "2 days ago",
    },
  ]);

  const [filter, setFilter] = useState<string>("All");
  const [openFilter, setOpenFilter] = useState(false);
  const [loading] = useState(false);
  const [error] = useState<string | null>(null);

  const filtered = uploads.filter(
    (item) => filter === "All" || item.status === filter
  );

  const statusColor = (status: string) => {
    switch (status) {
      case "Success":
        return "bg-[#00E0FF33] text-[#00E0FF]";
      case "Processing":
        return "bg-[#FF980033] text-[#FF9800]";
      case "Failed":
        return "bg-[#FF3B3B33] text-[#FF3B3B]";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const handleExport = useCallback(() => {
    alert("Exporting current view to CSV...");
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-background text-gray-400">
        Loading uploads...
      </div>
    );
  }

  return (
    <div className="bg-background text-white py-10 px-4 sm:px-6 rounded-xl">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-2xl sm:text-3xl font-semibold">Upload Files</h1>
          <div className="flex flex-wrap gap-3 relative">
            <div className="relative">
              <button
                onClick={() => setOpenFilter(!openFilter)}
                className="w-full sm:w-auto py-2 px-5 bg-[#1A1D24] border-2 border-gray-600 duration-300 transition-all hover:cursor-pointer rounded-xl flex items-center justify-between sm:justify-center gap-2 hover:bg-gray-800 text-sm sm:text-base"
              >
                {filter} <ChevronDown size={18} />
              </button>

              {openFilter && (
                <div className="absolute right-0 mt-2 w-40 bg-gray-800 rounded-lg shadow-lg border border-gray-700 z-20">
                  {["All", "Success", "Processing", "Failed"].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => {
                        setFilter(opt);
                        setOpenFilter(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-700 ${
                        filter === opt ? "bg-gray-700" : ""
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={handleExport}
              className="w-full sm:w-auto py-2 px-6 bg-[#1A1D24] border-2 border-gray-600 rounded-xl hover:cursor-pointer duration-300 transition-all hover:bg-gray-800 text-sm sm:text-base"
            >
              Export
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {filtered.length === 0 ? (
            <p className="text-gray-400 text-sm">No uploads found.</p>
          ) : (
            filtered.map((item) => (
              <div
                key={item.id}
                className="bg-[#1F2937] border border-gray-700 rounded-2xl p-5 sm:p-6 flex flex-col gap-3 hover:shadow-md hover:shadow-blue-500/10 transition"
              >
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="font-bold text-base sm:text-lg break-all">
                      {item.title}
                    </h2>
                    <span
                      className={`text-xs sm:text-sm font-semibold px-3 py-1 rounded-lg ${statusColor(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>

                <p className="text-gray-400 text-xs sm:text-sm">
                  Uploaded by{" "}
                  <span className="text-gray-200">{item.email}</span> • {item.time}
                </p>

                <div className="flex flex-wrap gap-6 text-gray-300 text-xs sm:text-sm">
                  <p>
                    Total Rows:{" "}
                    <span className="text-[#00E0FF] font-medium">
                      {item.totalRows.toLocaleString()}
                    </span>
                  </p>
                  <p>
                    Invalid:{" "}
                    <span className="text-red-400 font-medium">
                      {item.invalid}
                    </span>
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 items-center text-xs sm:text-sm">
                  <p className="text-gray-400">Mapping:</p>
                  <span className="bg-gray-800 border border-gray-700 px-3 py-1 rounded-md">
                    {item.mapping}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}