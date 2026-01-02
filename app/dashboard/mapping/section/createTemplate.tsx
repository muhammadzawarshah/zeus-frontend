import React from "react";
import { Plus } from "lucide-react";

export default function CreateTemplateHeader() {
  return (
    <div className="py-6 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Mapping Templates
          </h1>
          <p className="text-gray-400 text-sm sm:text-base mt-1">
            Create and manage field mapping schemas for offline conversion uploads
          </p>
        </div>
        <div>
          <button className="flex items-center gap-2 bg-[#4B8CFF] text-white font-semibold px-6 py-3 rounded-lg shadow-[0_0_15px_#4B8CFF80] hover:shadow-[0_0_25px_#4B8CFFCC] hover:scale-105 transition-all duration-300 hover:cursor-pointer">
            <Plus size={18} />
            Create Template
          </button>
        </div>
      </div>
    </div>
  );
}
