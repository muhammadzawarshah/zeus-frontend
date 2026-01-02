"use client";
import React, { useState } from "react";
import { Edit2, Trash2 } from "lucide-react";

interface ValidationError {
  id: string | number;
  column: string;
  row: string;
  errorType: string;
  description: string;
  fix: string;
  status: "errors" | "Warning";
}

export default function ValidationReport() {
  const [errors, setErrors] = useState<ValidationError[]>([
    {
      id: 1,
      column: "product_category",
      row: "N/A",
      errorType: "Missing Mapping",
      description: "No target field mapped for product_category in Google Ads.",
      fix: "Map 'product_category' to a suitable Google Ads field.",
      status: "errors",
    },
    {
      id: 2,
      column: "region",
      row: "Row 5",
      errorType: "Data Format Mismatch",
      description: "Expected 'US' or 'EU' format, found 'EMEA'.",
      fix: "Transform 'EMEA' to 'EU' or adjust mapping rule.",
      status: "errors",
    },
    {
      id: 3,
      column: "ad_group_id",
      row: "Row 3",
      errorType: "Data Type Warning",
      description: "Value 'abc123' found, expected numeric. Auto-correction applied (skipped).",
      fix: "Review source data or add a data cleansing rule.",
      status: "Warning",
    },
  ]);

  return (
    <div className="py-10 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Container */}
        <div className="bg-background border border-[#30363d] rounded-xl overflow-hidden shadow-2xl">
          
          {/* Header Section */}
          <div className="p-8 pb-6">
            <div className="flex items-center gap-4 mb-2">
              <h1 className="text-3xl font-medium text-white tracking-tight">Validation Report</h1>
              <span className="bg-[#da3633] text-white text-xs font-bold px-3 py-1 rounded-lg shadow-[0_0_15px_rgba(218,54,51,0.4)]">
                3 errors
              </span>
            </div>
            <p className="text-[#8b949e] text-sm">Identified issues in data and mappings. Take action to resolve.</p>
          </div>

          {/* Table Header (Pure White as per image) */}
          <div className="grid grid-cols-[1.2fr_0.8fr_1.2fr_2fr_1.5fr_0.8fr_0.8fr] bg-white px-8 py-4 items-center">
            <span className="text-[12px] font-bold text-black">Column</span>
            <span className="text-[12px] font-bold text-black text-center">Row</span>
            <span className="text-[12px] font-bold text-black">Error Type</span>
            <span className="text-[12px] font-bold text-black">Description</span>
            <span className="text-[12px] font-bold text-black">Suggested Fix</span>
            <span className="text-[12px] font-bold text-black text-center">Status</span>
            <span className="text-[12px] font-bold text-black text-right">Action</span>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-[#30363d]">
            {errors.map((err) => (
              <div key={err.id} className="grid grid-cols-[1.2fr_0.8fr_1.2fr_2fr_1.5fr_0.8fr_0.8fr] items-center px-8 py-7 hover:bg-[#161b22] transition-colors group">
                <span className="text-[#8b949e] text-sm font-mono">{err.column}</span>
                <span className="text-[#8b949e] text-sm text-center font-mono">{err.row}</span>
                <span className="text-[#e6edf3] text-sm font-medium">{err.errorType}</span>
                <span className="text-[#8b949e] text-sm leading-relaxed pr-4">{err.description}</span>
                <span className="text-[#8b949e] text-sm pr-4">{err.fix}</span>
                
                {/* Status Pills */}
                <div className="flex justify-center">
                  <span className={`text-[11px] font-bold px-4 py-1.5 rounded-lg shadow-lg border border-transparent uppercase tracking-tight ${
                    err.status === "errors" 
                    ? "bg-[#da3633] text-white shadow-[#da3633]/20" 
                    : "bg-[#d29922] text-white shadow-[#d29922]/20"
                  }`}>
                    {err.status}
                  </span>
                </div>

                {/* Action Icons */}
                <div className="flex items-center justify-end gap-3">
                  <button className="text-[#8b949e] hover:text-white transition cursor-pointer"><Edit2 size={18} /></button>
                  <button className="text-[#8b949e] hover:text-[#da3633] transition cursor-pointer"><Trash2 size={18} /></button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action Bar */}
        </div>
          <div className="flex justify-end items-center gap-4 p-8 ">
             <button className="bg-[#161b22] text-[#e6edf3] border border-[#30363d] px-8 py-2.5 rounded-lg text-sm font-bold hover:bg-[#21262d] transition cursor-pointer">
                Apply Template
             </button>
             <button className="bg-[#4493f8] text-white px-8 py-2.5 rounded-xl text-sm font-bold shadow-[0_0_20px_rgba(68,147,248,0.4)] hover:bg-[#58a6ff] transition cursor-pointer">
                Save Mapping
             </button>
          </div>
      </div>
    </div>
  );
}