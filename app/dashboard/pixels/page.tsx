"use client";
import React, { useState } from "react";
import { Copy, Check, ChevronDown, Play, Save, Zap } from "lucide-react";
import clsx from "clsx";

export default function PixelsPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const pixelCode = `<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>`;

  return (
    <div className=" text-white p-8 font-sans">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Pixels & CAPI</h1>
          <p className="text-gray-400 text-sm mt-1">Manage tracking pixels and server configuration</p>
        </div>
        <button className="bg-[#161B22] border border-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 text-sm hover:bg-gray-800 transition">
          Digital Dynamics <ChevronDown size={16} />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* GA4 Card */}
        <div className="bg-[#161B22] p-6 rounded-2xl border border-gray-800">
          <h2 className="text-lg font-semibold mb-4">GA4 Measurement</h2>
          <label className="text-xs text-gray-500 block mb-2 font-medium">Measurement ID</label>
          <input 
            type="text" 
            defaultValue="G-XXXXXXXXXX" 
            className="w-full bg-[#0E1117] border border-gray-800 rounded-lg px-4 py-2.5 text-sm mb-4 outline-none focus:border-blue-500"
          />
          <div className="flex justify-between text-[10px] text-gray-500 mb-6">
            <span className="flex items-center gap-1"><Check size={12} className="text-green-500" /> Connected</span>
            <span>Last synced: 2 hours ago</span>
          </div>
          <button className="w-full bg-[#36D1DC] hover:bg-[#2bb5bf] text-black font-bold py-2 rounded-lg text-sm transition shadow-[0_0_15px_rgba(54,209,220,0.3)]">
            Test Connection
          </button>
        </div>

        {/* Meta Pixel Card */}
        <div className="bg-[#161B22] p-6 rounded-2xl border border-gray-800">
          <h2 className="text-lg font-semibold mb-4">Meta Pixel</h2>
          <label className="text-xs text-gray-500 block mb-2 font-medium">Pixel ID</label>
          <input 
            type="text" 
            defaultValue="1234567890" 
            className="w-full bg-[#0E1117] border border-gray-800 rounded-lg px-4 py-2.5 text-sm mb-4 outline-none focus:border-blue-500"
          />
          <div className="flex justify-between text-[10px] text-gray-500 mb-6">
            <span className="flex items-center gap-1"><Check size={12} className="text-green-500" /> Connected</span>
            <span>Last synced: 1 hour ago</span>
          </div>
          <button className="w-full bg-[#36D1DC] hover:bg-[#2bb5bf] text-black font-bold py-2 rounded-lg text-sm transition shadow-[0_0_15px_rgba(54,209,220,0.3)]">
            Test Connection
          </button>
        </div>
      </div>

      {/* Code Snippet Section */}
      <div className="bg-[#161B22] p-6 rounded-2xl border border-gray-800 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Client-Side Pixel Snippet</h2>
          <button onClick={handleCopy} className="text-xs text-gray-400 flex items-center gap-2 hover:text-white transition bg-gray-800/50 px-3 py-1.5 rounded-md">
            {copied ? <Check size={14} /> : <Copy size={14} />} Copy Code
          </button>
        </div>
        <div className="bg-[#0E1117] rounded-xl p-6 font-mono text-sm text-gray-400 border border-gray-800 overflow-x-auto">
          <pre className="whitespace-pre-wrap">{pixelCode}</pre>
        </div>
      </div>

      {/* Server-Side Configuration */}
      <div className="bg-[#161B22] p-8 rounded-2xl border border-gray-800 mb-8">
        <h2 className="text-xl font-bold mb-6">Server-Side API (CAPI) Configuration</h2>
        
        <div className="space-y-6 mb-8">
          {[
            { title: "GA4 Deduplication", desc: "Prevent duplicate events being recorded" },
            { title: "Meta Deduplication", desc: "Ensure unique events are sent to Meta" },
            { title: "Meta CAPI Integration", desc: "Enable server-to-server tracking" }
          ].map((item, idx) => (
            <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-800 last:border-0">
              <div>
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
              <div className="w-10 h-5 bg-blue-600 rounded-full relative cursor-pointer">
                <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="text-xs text-gray-500 block mb-2">Batch Size</label>
            <input type="number" defaultValue="100" className="w-full bg-[#0E1117] border border-gray-800 rounded-lg px-4 py-2 text-sm outline-none" />
          </div>
          <div>
            <label className="text-xs text-gray-500 block mb-2">Deduplication Strategy</label>
            <select className="w-full bg-[#0E1117] border border-gray-800 rounded-lg px-4 py-2 text-sm outline-none">
              <option>Event ID Based</option>
            </select>
          </div>
        </div>

        <div className="flex gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 shadow-[0_0_15px_rgba(37,99,235,0.4)]">
            <Save size={16} /> Save Configuration
          </button>
          <button className="border border-gray-700 hover:bg-gray-800 text-gray-300 px-6 py-2 rounded-lg text-sm flex items-center gap-2">
            Test CAPI
          </button>
        </div>
      </div>

      {/* Event Stream */}
      <div className="bg-[#161B22] p-6 rounded-2xl border border-gray-800">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Real-time Event Stream</h2>
          <span className="flex items-center gap-2 text-[10px] bg-green-950 text-green-400 px-2 py-1 rounded-full border border-green-800">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> Live
          </span>
        </div>
        
        <div className="space-y-3">
          {[
            { name: "GA4", event: "purchase", time: "11s ago" },
            { name: "Meta", event: "add_to_cart", time: "34s ago" },
            { name: "GA4", event: "page_view", time: "1m ago" }
          ].map((ev, i) => (
            <div key={i} className="bg-[#0E1117] p-4 rounded-xl border border-gray-800 flex justify-between items-center hover:border-gray-700 transition cursor-default">
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-bold bg-gray-800 px-2 py-1 rounded text-gray-400">{ev.name}</span>
                <span className="text-sm font-medium">{ev.event}</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap size={14} className="text-yellow-500" />
                <span className="text-xs text-gray-500">{ev.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}