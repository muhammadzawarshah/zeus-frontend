"use client";

import React, { useState } from "react";
import { FileMinus, Check, History, TrendingUp } from "lucide-react";

interface MetricCard {
  id: number;
  icon: React.ReactNode;
  title: string;
  result: string | number;
}

export default function Cards() {
  // --- Static Demo Data ---
  const [cards] = useState<MetricCard[]>([
    {
      id: 1,
      icon: <FileMinus size={18} />,
      title: "Total Uploads",
      result: "1,284",
    },
    {
      id: 2,
      icon: <Check size={18} />,
      title: "Success Rate",
      result: "98.2%",
    },
    {
      id: 3,
      icon: <History size={18} />,
      title: "Avg Processing",
      result: "1.4s",
    },
    {
      id: 4,
      icon: <TrendingUp size={18} />,
      title: "In Queue",
      result: "12",
    },
  ]);

  const [loading] = useState(false);
  const [error] = useState<string | null>(null);

  if (loading) {
    return (
      <div className="text-white py-10 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="bg-background border border-gray-700 rounded-2xl p-5 flex flex-col justify-between animate-pulse"
            >
              <div className="flex justify-end">
                <div className="bg-[#1C2635] p-2 rounded-full text-gray-500">
                  <FileMinus size={18} />
                </div>
              </div>
              <div className="mt-4 text-center">
                <h2 className="text-gray-500 text-sm tracking-wide">Loading...</h2>
                <p className="text-3xl font-bold mt-1">—</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-400 py-10">
        <p className="text-sm">{error}</p>
      </div>
    );
  }

  return (
    <div className="text-white py-10 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((item) => (
          <div
            key={item.id}
            className="bg-background border border-gray-700 rounded-2xl p-5 flex flex-col justify-between hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300"
          >
            <div className="flex justify-end">
              <div className="bg-[#1C2635] p-2 rounded-full text-gray-300">
                {item.icon}
              </div>
            </div>
            <div className="mt-4 text-center">
              <h2 className="text-gray-400 text-sm tracking-wide">
                {item.title}
              </h2>
              <p className="text-4xl font-bold mt-1">{item.result}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}