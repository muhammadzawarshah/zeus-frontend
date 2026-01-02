"use client";
import React from "react";
import { 
  Upload, 
  Download, 
  ChevronDown, 
  Target, 
  TrendingUp, 
  MousePointer2, 
  CheckCircle2, 
  LineChart, 
  Clock 
} from "lucide-react";
import { 
  LineChart as ReLineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";

// Static Data for Chart
const chartData = [
  { name: "Jan", spend: 400, revenue: 240 },
  { name: "Feb", spend: 300, revenue: 139 },
  { name: "Mar", spend: 600, revenue: 980 },
  { name: "Apr", spend: 800, revenue: 390 },
  { name: "May", spend: 500, revenue: 480 },
  { name: "Jun", spend: 900, revenue: 380 },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8 bg-[#0d1117] min-h-screen pb-10">
      
      {/* 1. TOP HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-gray-400 text-sm mt-1">Enterprise marketing attribution and performance analytics</p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-[#1f6feb] hover:bg-[#388bfd] text-white px-4 py-2 rounded-lg text-sm transition font-medium">
            <Upload size={16} /> Upload Offline Data
          </button>
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-[#1f6feb] hover:bg-[#388bfd] text-white px-4 py-2 rounded-lg text-sm transition font-medium">
            <Download size={16} /> Export to CSV <ChevronDown size={14} />
          </button>
        </div>
      </div>

      {/* 2. TOP KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard title="Return on Investment (ROI)" value="28.5%" change="+1.2% vs last month" icon={<Target className="text-blue-400" size={20}/>} />
        <KPICard title="Return on Ad Spend (ROAS)" value="$4.15" change="+1.23 vs last month" icon={<TrendingUp className="text-blue-400" size={20}/>} />
        <KPICard title="Cost Per Acquisition (CPA)" value="$12.00" change="+1.2% vs last month" icon={<MousePointer2 className="text-blue-400" size={20}/>} isNegative />
        
        {/* Connection Status Card */}
        <div className="bg-[#161b22] border border-gray-800 p-5 rounded-2xl flex flex-col justify-between">
          <span className="text-gray-400 text-sm font-medium">Client Intent (Configure the Feature)</span>
          <div className="flex gap-2 my-2">
            <span className="bg-gray-800 text-[10px] px-2 py-1 rounded text-gray-300">Today 0</span>
            <span className="bg-[#1f6feb] text-[10px] px-2 py-1 rounded text-white">Syncs</span>
          </div>
          <button className="w-full bg-[#00e0ff] text-black font-bold py-2 rounded-lg text-xs mt-2">Reconnect</button>
        </div>
      </div>

      {/* 3. FILTERS BAR */}
      <div className="bg-[#161b22] border border-gray-800 p-3 rounded-xl flex flex-wrap gap-4 items-center">
        <FilterSelect label="Last 7 days" />
        <FilterSelect label="UTC" />
        <FilterSelect label="Last Click" />
        <div className="h-6 w-[1px] bg-gray-700 hidden md:block"></div>
        <button className="text-sm bg-gray-800 px-4 py-1.5 rounded-lg text-gray-300">Google Ads</button>
        <button className="text-sm bg-gray-800 px-4 py-1.5 rounded-lg text-gray-300">Meta</button>
        <button className="text-sm bg-gray-800 px-4 py-1.5 rounded-lg text-gray-300">Offline</button>
      </div>

      {/* 4. SECONDARY STATS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatSmall title="Total Uploads" value="2" change="12.3%" icon={<Upload size={16}/>} />
        <StatSmall title="Match Rate" value="89.4%" change="-3.1%" icon={<CheckCircle2 size={16}/>} isNegative />
        <StatSmall title="Offline Conversions" value="4" change="+22.1%" icon={<LineChart size={16}/>} />
        <StatSmall title="Avg Latency" value="0ms" change="-1.1%" icon={<Clock size={16}/>} isNegative />
      </div>

      {/* 5. CAMPAIGN PERFORMANCE OVERVIEW */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Campaign Performance Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Sidebar inside main content */}
          <div className="bg-[#161b22] border border-gray-800 p-4 rounded-2xl space-y-4 h-fit">
             <div className="text-xs font-bold text-gray-500 uppercase">Source</div>
             <div className="flex justify-between items-center bg-gray-800 p-2 rounded text-xs">
                <span>Google Ads</span>
                <span className="text-gray-500">100%</span>
             </div>
             <FilterSelect label="Select Campaign" fullWidth />
             <FilterSelect label="Select Conversions" fullWidth />
             <button className="w-full bg-[#1f6feb] py-2 rounded-lg text-xs font-bold">Apply Filters</button>
          </div>

          {/* Performance Grids */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-[#161b22] border border-gray-800 p-4 rounded-2xl">
                <div className="flex justify-between mb-4">
                  <span className="text-xs font-bold">Google Ads</span>
                  <span className="bg-[#1f6feb33] text-[#58a6ff] text-[10px] px-2 py-0.5 rounded">Standard</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-[11px]"><span className="text-gray-400">Impressions</span><span>12,400</span></div>
                  <div className="flex justify-between text-[11px]"><span className="text-gray-400">Clicks</span><span>1,250</span></div>
                  <div className="flex justify-between text-[11px]"><span className="text-gray-400">Conversions</span><span>45</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6. CHARTS SECTION */}
      <div className="bg-[#161b22] border border-gray-800 p-6 rounded-2xl">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-lg font-semibold text-white">Conversion Trends</h2>
          <div className="flex gap-2">
            <button className="bg-gray-800 text-xs px-3 py-1.5 rounded-lg border border-gray-700">Conversions</button>
            <button className="bg-gray-800 text-xs px-3 py-1.5 rounded-lg border border-gray-700">ROAS</button>
          </div>
        </div>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ReLineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#30363d" vertical={false} />
              <XAxis dataKey="name" stroke="#8b949e" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#8b949e" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={{ backgroundColor: "#161b22", borderColor: "#30363d" }} />
              <Line type="monotone" dataKey="revenue" stroke="#1f6feb" strokeWidth={3} dot={{ r: 4, fill: "#1f6feb" }} />
              <Line type="monotone" dataKey="spend" stroke="#238636" strokeWidth={3} dot={{ r: 4, fill: "#238636" }} />
            </ReLineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

// --- HELPER COMPONENTS ---

function KPICard({ title, value, change, icon, isNegative = false }: any) {
  return (
    <div className="bg-[#161b22] border border-gray-800 p-5 rounded-2xl relative overflow-hidden">
      <div className="flex justify-between items-start">
        <div className="p-2 bg-gray-800/50 rounded-lg">{icon}</div>
      </div>
      <div className="mt-4">
        <p className="text-gray-400 text-sm font-medium">{title}</p>
        <h3 className="text-2xl font-bold mt-1 text-white">{value}</h3>
        <p className={`text-[11px] mt-1 ${isNegative ? "text-red-400" : "text-green-400"}`}>{change}</p>
      </div>
    </div>
  );
}

function StatSmall({ title, value, change, icon, isNegative = false }: any) {
  return (
    <div className="bg-[#161b22] border border-gray-800 p-4 rounded-2xl flex items-center justify-between">
      <div>
        <p className="text-gray-400 text-xs">{title}</p>
        <h4 className="text-xl font-bold text-white">{value}</h4>
        <span className={`text-[10px] ${isNegative ? "text-red-400" : "text-green-400"}`}>{change}</span>
      </div>
      <div className="text-blue-500 opacity-50">{icon}</div>
    </div>
  );
}

function FilterSelect({ label, fullWidth = false }: { label: string; fullWidth?: boolean }) {
  return (
    <div className={`flex items-center justify-between bg-gray-900 border border-gray-700 px-3 py-1.5 rounded-lg text-xs text-gray-300 cursor-pointer hover:border-gray-500 transition ${fullWidth ? 'w-full' : 'w-auto min-w-[120px]'}`}>
      <span>{label}</span>
      <ChevronDown size={14} className="ml-2 text-gray-500" />
    </div>
  );
}