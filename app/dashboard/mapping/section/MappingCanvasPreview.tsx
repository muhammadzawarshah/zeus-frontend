"use client";
import React, { useState } from "react";

interface MappingPair {
  source: string;
  target: string;
}

export default function MappingCanvasPreview() {
  // Static data added here
  const [mappings] = useState<MappingPair[]>([
    { source: "customer_email", target: "email" },
    { source: "first_name", target: "given_name" },
    { source: "last_name", target: "family_name" },
    { source: "phone_no", target: "phone_number" },
    { source: "order_val", target: "value" },
    { source: "transaction_id", target: "order_id" },
    { source: "iso_currency", target: "currency" },
  ]);

  const [loading] = useState(false);
  const [error] = useState<string | null>(null);

  if (loading) {
    return (
      <div className="bg-background py-5 px-4 sm:px-8 text-gray-400 text-center w-[90%] m-auto rounded-lg border border-gray-700 mb-12">
        Loading mapping preview...
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-background py-5 px-4 sm:px-8 text-red-400 text-center w-[90%] m-auto rounded-lg border border-gray-700 mb-12">
        {error}
      </div>
    );
  }

  return (
    <div className="bg-background py-5 px-4 sm:px-8 text-white w-[90%] m-auto rounded-lg border border-gray-700 mb-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-6">
          Mapping Canvas <span className="text-gray-400">(Preview)</span>
        </h1>
        {mappings.length === 0 ? (
          <p className="text-gray-400 text-center text-sm">No mappings found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div>
              <h2 className="text-gray-400 font-medium mb-4">
                Source Fields (CSV)
              </h2>
              <div className="space-y-4">
                {mappings.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#1a1d23] border border-gray-700 rounded-lg py-3 px-4 text-gray-200 hover:border-gray-500 transition"
                  >
                    {item.source}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-gray-400 font-medium mb-4">
                Target Fields (Google Ads)
              </h2>
              <div className="space-y-4">
                {mappings.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#1a1d23] border border-gray-700 rounded-lg py-3 px-4 text-gray-200 hover:border-gray-500 transition"
                  >
                    {item.target}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}