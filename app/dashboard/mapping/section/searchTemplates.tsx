"use client";
import React, { useState, useEffect } from "react";

interface Template {
  id: string;
  name: string;
  platform: string;
  scope: string;
}

export default function SearchTemplates() {
  // --- Static Data ---
  const initialTemplates: Template[] = [
    { id: "1", name: "E-commerce Conversion Sync", platform: "Google Ads", scope: "Global" },
    { id: "2", name: "Facebook Lead Gen Map", platform: "Facebook", scope: "Account" },
    { id: "3", name: "TikTok Event API", platform: "TikTok", scope: "Global" },
    { id: "4", name: "CRM Contact Bridge", platform: "LinkedIn", scope: "Private" },
    { id: "5", name: "YouTube Attribution Template", platform: "Google Ads", scope: "Workspace" },
  ];

  const [query, setQuery] = useState("");
  const [platform, setPlatform] = useState("All Platforms");
  const [scope, setScope] = useState("All Scopes");
  const [templates, setTemplates] = useState<Template[]>(initialTemplates);
  const [loading, setLoading] = useState(false);
  const [error] = useState<string | null>(null);

  // --- Static Search & Filter Logic ---
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      let filtered = initialTemplates.filter((t) =>
        t.name.toLowerCase().includes(query.toLowerCase())
      );

      if (platform !== "All Platforms") {
        filtered = filtered.filter((t) => t.platform === platform);
      }

      if (scope !== "All Scopes") {
        filtered = filtered.filter((t) => t.scope === scope);
      }

      setTemplates(filtered);
      setLoading(false);
    }, 300); // Chota sa delay loading effect ke liye

    return () => clearTimeout(timer);
  }, [query, platform, scope]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="bg-background py-6 px-4 sm:px-8 w-[90%] m-auto rounded-lg border border-gray-700">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        <input
          type="text"
          placeholder="Search Template"
          value={query}
          onChange={handleSearch}
          className="bg-bgDark text-gray-200 placeholder-gray-500 py-2.5 px-4 rounded-lg w-full sm:w-[40%] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
        />
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setPlatform(platform === "All Platforms" ? "Google Ads" : "All Platforms")}
            className="bg-bgDark text-white px-5 py-2 rounded-lg border border-gray-700 hover:border-gray-500 hover:bg-[#22262d] transition-all duration-300 hover:cursor-pointer"
          >
            {platform}
          </button>
          <button
            onClick={() => setScope(scope === "All Scopes" ? "Global" : "All Scopes")}
            className="bg-bgDark text-white px-5 py-2 rounded-lg border border-gray-700 hover:border-gray-500 hover:bg-[#22262d] transition-all duration-300 hover:cursor-pointer"
          >
            {scope}
          </button>
        </div>
      </div>

      {/* Results / Status Messages */}
      {error && (
        <p className="text-red-400 text-sm text-center mt-4">{error}</p>
      )}
      {!error && templates.length === 0 && !loading && (
        <p className="text-gray-400 text-sm text-center mt-4">
          No templates found for "{query}".
        </p>
      )}
      {loading && (
        <p className="text-blue-400 text-sm text-center mt-4 animate-pulse">
          Searching templates...
        </p>
      )}
      
      {/* Search results ka count dikhane ke liye (Optional but helpful) */}
      {!loading && templates.length > 0 && query && (
        <p className="text-gray-500 text-[10px] text-center mt-2 uppercase tracking-widest">
          Found {templates.length} matching templates
        </p>
      )}
    </div>
  );
}