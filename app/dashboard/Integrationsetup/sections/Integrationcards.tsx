"use client";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { CheckCircle, RefreshCcw, ExternalLink } from "lucide-react";

interface Integration {
  id: string;
  platform: string;
  accountName: string;
  accountId: string;
  tokenExpiry: string;
  lastSync: string;
  scopes: string[];
  connected: boolean;
}

export default function IntegrationCards() {
  const [loading, setLoading] = useState(false);

  // Static Data - Exactly matching your requirement
  const staticIntegrations: Integration[] = [
    {
      id: "1",
      platform: "Google Ads",
      accountName: "Marketing Main",
      accountId: "842-192-4410",
      tokenExpiry: "2025-12-30",
      lastSync: "2 mins ago",
      scopes: ["ads.readonly", "analytics.manage"],
      connected: true,
    },
    {
      id: "2",
      platform: "Meta Business",
      accountName: "Social Campaign",
      accountId: "act_224195021",
      tokenExpiry: "2025-06-15",
      lastSync: "1 hour ago",
      scopes: ["ads_management", "business_management"],
      connected: true,
    },
    {
      id: "3",
      platform: "Google Analytics 4",
      accountName: "Web Property",
      accountId: "GA4-99201",
      tokenExpiry: "Expired",
      lastSync: "Never",
      scopes: ["read_and_analyze"],
      connected: false,
    }
  ];

  const handleConnect = (platform: string) => {
    setLoading(true);
    // Static demo delay
    setTimeout(() => {
      setLoading(false);
      alert(`${platform} integration initiated (Static Demo)`);
    }, 1000);
  };

  return (
    <div className="flex items-start justify-center px-6 py-12">
      <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {staticIntegrations.map((item) => (
          <div
            key={item.id}
            className="bg-[#161B22] border border-gray-800 rounded-2xl p-6 text-white shadow-xl hover:border-gray-700 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  {item.platform.includes("Google") ? (
                    <FcGoogle className="text-4xl" />
                  ) : (
                    <FaFacebook className="text-4xl text-[#1877F2]" />
                  )}
                  <div>
                    <h2 className="text-lg font-bold tracking-tight">{item.platform}</h2>
                    <p className="text-xs text-gray-500 font-mono">{item.accountId}</p>
                  </div>
                </div>
                {item.connected && (
                  <span className="bg-teal-500/10 text-teal-400 p-1 rounded-full">
                    <CheckCircle size={16} />
                  </span>
                )}
              </div>

              <div className="space-y-3 border-t border-gray-800 pt-5 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Account:</span>
                  <span className="text-gray-200 font-medium">{item.accountName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Token Expiry:</span>
                  <span className={item.tokenExpiry === "Expired" ? "text-red-400" : "text-gray-200"}>
                    {item.tokenExpiry}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Last Sync:</span>
                  <span className="text-gray-200">{item.lastSync}</span>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-3 font-bold">Authorized Scopes</p>
                <div className="flex flex-wrap gap-2">
                  {item.scopes.map((scope, i) => (
                    <span
                      key={i}
                      className="bg-[#0E1117] border border-gray-800 px-2 py-1 rounded-md text-[10px] text-gray-400 font-mono"
                    >
                      {scope}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => handleConnect(item.platform)}
              disabled={loading}
              className={`w-full mt-8 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                item.connected 
                ? "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700" 
                : "bg-[#4F8AFF] hover:bg-blue-600 text-white shadow-[0_0_20px_rgba(79,138,255,0.4)]"
              }`}
            >
              {loading ? (
                <RefreshCcw size={18} className="animate-spin" />
              ) : item.connected ? (
                <>Reauthorize Access <ExternalLink size={14}/></>
              ) : (
                `Connect ${item.platform}`
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}