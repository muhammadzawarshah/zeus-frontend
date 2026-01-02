"use client";
import React from "react";
import { 
  User, Key, DollarSign, Shield, Users, Bell, 
  Sun, Globe, Copy, RefreshCw, ChevronDown, Check 
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className=" text-white p-8 font-sans space-y-10">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-white">Settings</h1>
        <p className="text-gray-400 text-sm mt-1">Manage your account preferences and platform configuration.</p>
      </header>

      {/* 1. Profile Settings */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 px-1 text-gray-400">
          <User size={20} />
          <h2 className="text-lg font-semibold text-white">Profile Settings</h2>
        </div>
        <div className="bg-[#161B22] p-8 rounded-2xl border border-gray-800">
          <div className="max-w-md space-y-6">
            <div>
              <label className="text-sm text-gray-300 block mb-2 font-medium">Full Name</label>
              <input type="text" defaultValue="John Doe" className="w-full bg-[#0E1117] border border-gray-800 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 transition" />
            </div>
            <div>
              <label className="text-sm text-gray-300 block mb-2 font-medium">Email Address</label>
              <input type="email" defaultValue="john@example.com" className="w-full bg-[#0E1117] border border-gray-800 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 transition" />
            </div>
            <div>
              <label className="text-sm text-gray-300 block mb-2 font-medium">Role</label>
              <input type="text" defaultValue="Agency Admin" disabled className="w-full bg-[#0E1117] border border-gray-800 rounded-xl px-4 py-3 text-sm outline-none opacity-50 cursor-not-allowed" />
            </div>
            <div className="flex gap-4 pt-2">
              <button className="bg-[#2563EB] hover:cursor-pointer hover:bg-blue-600 text-white px-8 py-2.5 rounded-xl text-sm font-bold shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all">Save Changes</button>
              <button className="bg-[#1C2128] hover:cursor-pointer hover:bg-gray-700 text-white px-8 py-2.5 rounded-xl text-sm font-bold border border-gray-700">Cancel</button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. API Keys & Tokens */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 px-1 text-gray-400">
          <Key size={20} />
          <h2 className="text-lg font-semibold text-white">API Keys & Tokens</h2>
        </div>
        <div className="bg-[#161B22] p-6 rounded-2xl border border-gray-800 space-y-4">
          {[
            { label: "Personal API Key", sub: "zeus_api_********************", btn: "Regenerate", secondaryBtn: "Copy" },
            { label: "Google OAuth Token", sub: "Expires in 3 days", btn: "Refresh" },
            { label: "Meta Business Token", sub: "Expires in 12 hours", btn: "Reconnect" }
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center p-6 bg-[#0E1117] rounded-xl border border-gray-800">
              <div>
                <h3 className="text-md font-semibold">{item.label}</h3>
                <p className="text-xs text-gray-500 mt-1">{item.sub}</p>
              </div>
              <div className="flex gap-3">
                <button className="bg-[#1C2128] hover:cursor-pointer border border-gray-700 px-5 py-2 rounded-lg text-xs hover:bg-gray-800 transition">{item.btn}</button>
                {item.secondaryBtn && <button className="bg-[#1C2128] hover:cursor-pointer border border-gray-700 px-5 py-2 rounded-lg text-xs hover:bg-gray-800 transition">{item.secondaryBtn}</button>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Financial Settings */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 px-1 text-gray-400">
          <DollarSign size={20} />
          <h2 className="text-lg font-semibold text-white">Financial Settings</h2>
        </div>
        <div className="bg-[#161B22] p-8 rounded-2xl border border-gray-800">
          <h3 className="text-xl font-bold mb-2">Monthly Retainer Configuration</h3>
          <p className="text-gray-500 text-sm mb-8">Manage your financial configurations, including retainer amounts and billing preferences.</p>
          <div className="flex items-end justify-between gap-6">
            <div className="w-full max-w-xs">
              <label className="text-sm text-gray-300 block mb-3 font-medium">Monthly Retainer Amount ($)</label>
              <input type="text" defaultValue="$5,000" className="w-full bg-[#0E1117] border border-gray-800 rounded-xl px-4 py-3 text-sm font-mono outline-none focus:border-blue-500 transition" />
            </div>
            <button className="bg-[#1C2128] hover:cursor-pointer border border-gray-700 text-white px-8 py-3 rounded-xl text-sm font-semibold hover:bg-gray-800 transition">Save Changes</button>
          </div>
        </div>
      </section>

      {/* 4. Security & Privacy */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 px-1 text-gray-400">
          <Shield size={20} />
          <h2 className="text-lg font-semibold text-white">Security & Privacy</h2>
        </div>
        <div className="bg-[#161B22] p-6 rounded-2xl border border-gray-800 space-y-4">
          <div className="flex justify-between items-center p-6 bg-[#0E1117] rounded-xl border border-gray-800">
            <div><h3 className="text-md font-semibold">Session Timeout</h3><p className="text-xs text-gray-500 mt-1">Auto-logout after inactivity</p></div>
            <div className="relative">
              <select className="bg-[#161B22] border border-gray-700 rounded-lg px-4 py-2 text-xs appearance-none pr-10 outline-none"><option>15 Minutes</option><option>1 Hour</option></select>
              <ChevronDown size={14} className="absolute right-3 top-2.5 text-gray-500" />
            </div>
          </div>
          <div className="flex justify-between items-center p-6 bg-[#0E1117] rounded-xl border border-gray-800">
            <div><h3 className="text-md font-semibold">Data Retention Period</h3><p className="text-xs text-gray-500 mt-1">How long to keep logs and data</p></div>
            <div className="relative">
              <select className="bg-[#161B22] border border-gray-700 rounded-lg px-4 py-2 text-xs appearance-none pr-10 outline-none"><option>30 days</option><option>90 days</option></select>
              <ChevronDown size={14} className="absolute right-3 top-2.5 text-gray-500" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Roles & Permissions */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 px-1 text-gray-400">
          <Users size={20} />
          <h2 className="text-lg font-semibold text-white">Roles & Permissions</h2>
        </div>
        <div className="bg-[#161B22] p-8 rounded-2xl border border-gray-800">
          <div className="mb-6">
            <label className="text-sm text-gray-300 block mb-3 font-medium">Role Type</label>
            <input type="text" defaultValue="Admin" className="w-full bg-[#0E1117] border border-gray-800 rounded-xl px-4 py-3 text-sm outline-none" />
          </div>
          <div className="bg-[#0E1117] p-6 rounded-xl border border-gray-800 flex justify-between items-center mb-10">
            <div><h3 className="text-md font-semibold">Grant Agency Owner Access</h3><p className="text-xs text-gray-500 mt-1">Allows full access to agency-specific queues and logs.</p></div>
            <div className="w-12 h-6 bg-blue-600 rounded-full relative cursor-pointer"><div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div></div>
          </div>
          <div className="flex justify-end gap-4">
            <button className="bg-[#1C2128] hover:cursor-pointer border border-gray-700 text-white px-8 py-3 rounded-xl text-sm font-bold">Cancel</button>
            <button className="bg-[#4F8AFF] hover:cursor-pointer text-white px-8 py-3 rounded-xl text-sm font-bold shadow-[0_0_25px_rgba(79,138,255,0.5)]">Save Changes</button>
          </div>
        </div>
      </section>

      {/* 6. Notifications */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 px-1 text-gray-400">
          <Bell size={20} />
          <h2 className="text-lg font-semibold text-white">Notifications</h2>
        </div>
        <div className="bg-[#161B22] p-4 rounded-2xl border border-gray-800 space-y-3">
          {["Upload Completion", "Token Expiry Warnings", "System Errors", "Weekly Reports", "Send Notifications via Email"].map((notif, i) => (
            <div key={i} className="flex justify-between items-center p-6 bg-[#0E1117] rounded-xl border border-gray-800">
              <span className="text-sm font-medium">{notif}</span>
              <div className="w-12 h-6 bg-blue-600 rounded-full relative cursor-pointer"><div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div></div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Appearance */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 px-1 text-gray-400">
          <Sun size={20} />
          <h2 className="text-lg font-semibold text-white">Appearance</h2>
        </div>
        <div className="bg-[#161B22] p-6 rounded-2xl border border-gray-800 space-y-4">
          <div className="flex justify-between items-center p-6 bg-[#0E1117] rounded-xl border border-gray-800">
            <div><h3 className="text-md font-semibold">Theme</h3><p className="text-xs text-gray-400">Choose your preferred theme</p></div>
            <div className="relative">
              <select className="bg-[#161B22] border border-gray-700 rounded-lg px-4 py-2 text-xs appearance-none pr-10 outline-none"><option>System Default</option></select>
              <ChevronDown size={14} className="absolute right-3 top-2.5 text-gray-500" />
            </div>
          </div>
          <div className="flex justify-between items-center p-6 bg-[#0E1117] rounded-xl border border-gray-800">
            <div><h3 className="text-md font-semibold">Micro-animations</h3><p className="text-xs text-gray-400">Enable smooth transitions and effects</p></div>
            <div className="w-12 h-6 bg-blue-600 rounded-full relative cursor-pointer"><div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div></div>
          </div>
        </div>
      </section>

      {/* 8. Regional Settings */}
      <section className="space-y-4 pb-12">
        <div className="flex items-center gap-2 px-1 text-gray-400">
          <Globe size={20} />
          <h2 className="text-lg font-semibold text-white">Regional Settings</h2>
        </div>
        <div className="bg-[#161B22] p-8 rounded-2xl border border-gray-800 space-y-6">
          <div>
            <label className="text-sm text-gray-300 block mb-3 font-medium">Timezone</label>
            <div className="relative"><select className="w-full bg-[#0E1117] border border-gray-800 rounded-xl px-4 py-3 text-sm appearance-none outline-none"><option>UTC</option></select><ChevronDown size={18} className="absolute right-4 top-3.5 text-gray-500" /></div>
          </div>
          <div>
            <label className="text-sm text-gray-300 block mb-3 font-medium">Date Format</label>
            <div className="relative"><select className="w-full bg-[#0E1117] border border-gray-800 rounded-xl px-4 py-3 text-sm appearance-none outline-none"><option>MM/DD/YYYY</option></select><ChevronDown size={18} className="absolute right-4 top-3.5 text-gray-500" /></div>
          </div>
          <div>
            <label className="text-sm text-gray-300 block mb-3 font-medium">Number Format</label>
            <div className="relative"><select className="w-full bg-[#0E1117] border border-gray-800 rounded-xl px-4 py-3 text-sm appearance-none outline-none"><option>1,234.56 (US)</option></select><ChevronDown size={18} className="absolute right-4 top-3.5 text-gray-500" /></div>
          </div>
        </div>
      </section>
    </div>
  );
}