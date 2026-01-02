"use client";
import React, { useState } from "react";
import { Edit2, Trash2, ChevronDown } from "lucide-react";

type PixelStatus = "Active" | "Inactive";

interface Pixel {
  id: string;
  name: string;
  platform: string;
  pixelId: string;
  status: PixelStatus;
}

export default function PixelSetup() {
  // Static Data as per Image
  const [pixels, setPixels] = useState<Pixel[]>([
    { id: "1", name: "Website Conversion", platform: "GA4", pixelId: "G-XXXXXXXXXX1", status: "Active" },
    { id: "2", name: "Product View Events", platform: "Meta Pixel", pixelId: "1234567890123456", status: "Active" },
    { id: "3", name: "Landing Page Retargeting", platform: "GA4", pixelId: "G-XXXXXXXXXX2", status: "Inactive" },
  ]);

  return (
    <div className="rounded-lg bg-background text-white py-12 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-10">
          <h1 className="text-4xl font-semibold tracking-tight mb-2">Pixel Setup & Management</h1>
          <p className="text-[#8b949e] text-lg">Add, edit, or remove GA4 and Meta Pixel IDs for tracking purposes.</p>
        </div>

        {/* Input Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] gap-6 mb-8">
          <div className="space-y-3">
            <label className="text-xl font-medium block ml-1">Pixel Name</label>
            <input
              type="text"
              placeholder="e.g., Lead Generation"
              className="w-full bg-[#0d1117] border border-[#30363d] rounded-xl px-5 py-4 text-[#8b949e] text-lg focus:outline-none focus:border-[#2dd4bf] transition"
            />
          </div>

          <div className="space-y-3">
            <label className="text-xl font-medium block ml-1">Platform Type</label>
            <div className="relative">
              <select className="w-full bg-[#0d1117] border border-[#30363d] rounded-xl px-5 py-4 text-white text-lg appearance-none focus:outline-none focus:border-[#2dd4bf] transition">
                <option>GA4</option>
                <option>Meta Pixel</option>
              </select>
              <ChevronDown className="absolute right-5 top-5 text-[#8b949e]" size={20} />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-xl font-medium block ml-1">Pixel ID</label>
            <div className="relative">
              <select className="w-full bg-[#0d1117] border border-[#30363d] rounded-xl px-5 py-4 text-[#8b949e] text-lg appearance-none focus:outline-none focus:border-[#2dd4bf] transition">
                <option>e.g., G-XXXXXXXXXX or 12345...</option>
              </select>
              <ChevronDown className="absolute right-5 top-5 text-[#8b949e]" size={20} />
            </div>
          </div>
        </div>

        {/* Add Button */}
        <button className="w-full bg-[#56ead7] hover:bg-[#45d1bf] text-[#0d1117] font-bold text-xl py-4 rounded-xl mb-12 shadow-[0_0_20px_rgba(86,234,215,0.2)] transition-all">
          Add New Pixel
        </button>

        {/* Table Container */}
        <div className="bg-[#0d1117] border border-[#30363d] rounded-xl overflow-hidden shadow-2xl">
          {/* Table Header (Pure White as per image) */}
          <div className="grid grid-cols-[2fr_1.5fr_2fr_1fr_0.5fr] bg-white px-8 py-5 items-center">
            <span className="text-sm font-bold text-black">Pixel Name</span>
            <span className="text-sm font-bold text-black">Platform</span>
            <span className="text-sm font-bold text-black">Pixel ID</span>
            <span className="text-sm font-bold text-black text-center">Status</span>
            <span className="text-sm font-bold text-black text-right">Action</span>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-[#30363d]">
            {pixels.map((pixel) => (
              <div key={pixel.id} className="grid grid-cols-[2fr_1.5fr_2fr_1fr_0.5fr] items-center px-8 py-10 hover:bg-[#161b22] transition-colors">
                <span className="text-[#8b949e] text-lg">{pixel.name}</span>
                <span className="text-[#8b949e] text-lg">{pixel.platform}</span>
                <span className="text-[#8b949e] text-lg font-mono">{pixel.pixelId}</span>
                
                {/* Status Pills */}
                <div className="flex justify-center">
                  <span className={`px-6 py-2 rounded-xl text-sm font-bold shadow-lg border border-transparent tracking-wide ${
                    pixel.status === "Active" 
                    ? "bg-[#2dd4bf] text-white shadow-[#2dd4bf]/20" 
                    : "bg-[#da3633] text-white shadow-[#da3633]/20"
                  }`}>
                    {pixel.status}
                  </span>
                </div>

                {/* Action Icons */}
                <div className="flex items-center justify-end gap-4">
                  <button className="text-[#8b949e] hover:text-white transition"><Edit2 size={22} /></button>
                  <button className="text-[#8b949e] hover:text-[#da3633] transition"><Trash2 size={22} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}