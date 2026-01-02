"use client";
import React, { useState, useCallback } from "react";
import { Copy, Upload, Trash2 } from "lucide-react";

interface Mapping {
  id: string | number;
  title: string;
  type: string;
  fields: number | string;
  scope: string;
  active: string;
  createdBy: string;
}

export default function MappingCardList() {
  // --- Static Demo Data ---
  const [mappings, setMappings] = useState<Mapping[]>([
    {
      id: 1,
      title: "Google eCommerce Sync",
      type: "Conversion API",
      fields: 12,
      scope: "Global",
      active: "Yes",
      createdBy: "Admin",
    },
    {
      id: 2,
      title: "FB Lead Gen Template",
      type: "Offline Events",
      fields: 8,
      scope: "Account",
      active: "Yes",
      createdBy: "Marketing Team",
    },
    {
      id: 3,
      title: "LinkedIn CRM Bridge",
      type: "Lead Mapping",
      fields: 5,
      scope: "Workspace",
      active: "No",
      createdBy: "System",
    },
    {
      id: 4,
      title: "Shopify Data Export",
      type: "Custom Mapping",
      fields: 15,
      scope: "Global",
      active: "Yes",
      createdBy: "Developer",
    },
    {
      id: 5,
      title: "Snapchat Pixel Map",
      type: "Event Match",
      fields: 6,
      scope: "Private",
      active: "No",
      createdBy: "Admin",
    },
  ]);

  const [loading, setLoading] = useState(false);
  const [error] = useState<string | null>(null);

  // --- Mock Handle Delete ---
  const handleDelete = useCallback((id: string | number) => {
    if (window.confirm("Are you sure you want to delete this template?")) {
      setLoading(true);
      // Simulate small delay
      setTimeout(() => {
        setMappings((prev) => prev.filter((item) => item.id !== id));
        setLoading(false);
      }, 300);
    }
  }, []);

  if (loading) {
    return (
      <div className="bg-[#0f1115] py-12 px-4 sm:px-8 text-gray-400 text-center min-h-screen">
        Processing...
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#0f1115] py-12 px-4 sm:px-8 text-red-400 text-center min-h-screen">
        {error}
      </div>
    );
  }

  return (
    <div className="py-12 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mappings.length === 0 ? (
          <p className="text-gray-400 text-center col-span-full">
            No mapping templates found.
          </p>
        ) : (
          mappings.map((item) => (
            <div
              key={item.id}
              className="bg-background flex flex-col gap-3 border border-gray-800 rounded-xl p-6 shadow-lg text-white hover:shadow-2xl hover:border-gray-600 transition-all duration-300"
            >
              <div className="mb-3">
                <h1 className="text-xl font-semibold">{item.title}</h1>
                <p className="text-gray-400 text-left text-sm">{item.type}</p>
              </div>
              <div className="space-y-1 text-sm leading-relaxed text-gray-300">
                <p className="flex justify-between">
                  <span className="font-medium text-white">Fields Mapped:</span>{" "}
                  {item.fields}
                </p>
                <p className="flex justify-between items-center">
                  <span className="font-medium text-white">Scope:</span>
                  <span className="bg-bgDark py-1 px-4 rounded-xl text-white border-2 border-gray-700">
                    {item.scope}
                  </span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium text-white">Active:</span>{" "}
                  {item.active}
                </p>
                <p className="flex justify-between">
                  <span className="font-medium text-white">Created By:</span>{" "}
                  {item.createdBy}
                </p>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <button
                  className="text-sm bg-bgDark py-2 px-4 rounded-lg hover:underline border-2 border-gray-700 hover:cursor-pointer transition"
                  disabled={loading}
                >
                  Edit
                </button>
                <div className="flex gap-5 ml-auto text-gray-400">
                  <button className="hover:text-blue-400 transition hover:cursor-pointer">
                    <Copy size={20} />
                  </button>
                  <button className="hover:text-green-400 transition hover:cursor-pointer">
                    <Upload size={20} />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="hover:text-red-500 transition hover:cursor-pointer"
                    disabled={loading}
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}