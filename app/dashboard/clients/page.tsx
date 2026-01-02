"use client";
import React, { useState } from "react";
import { Plus, Edit2, Trash2, Upload, Users, X, ChevronDown } from "lucide-react";

export default function ClientsPage() {
  const [showModal, setShowModal] = useState(false);

  // Static Data for Table
  const clients = [
    { name: "John Smith", date: "2025-03-15", industry: "Healthcare", uploads: "1,241", users: 24 },
    { name: "Sarah Johnson", date: "2025-03-15", industry: "Healthcare", uploads: "1,241", users: 25 },
    { name: "Emily Davis", date: "2025-03-15", industry: "Healthcare", uploads: "1,241", users: 30 },
    { name: "John Smith", date: "2025-03-15", industry: "Healthcare", uploads: "1,241", users: 24 },
    { name: "Sarah Johnson", date: "2025-03-15", industry: "Healthcare", uploads: "1,241", users: 25 },
    { name: "Emily Davis", date: "2025-03-15", industry: "Healthcare", uploads: "1,241", users: 30 },
  ];

  return (
    <div className="p-8 min-h-screen text-white relative">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Clients</h1>
        <button 
          onClick={() => setShowModal(true)}
          className="bg-[#4F8AFF] hover:bg-[#3b6edb] text-white hover:cursor-pointer px-6 py-2.5 rounded-xl flex items-center gap-2 shadow-[0_0_20px_rgba(79,138,255,0.3)] transition-all font-medium"
        >
          <Plus size={18} /> Add Clients
        </button>
      </div>

      {/* Table Container */}
      <div className="bg-[#161B22] rounded-2xl border border-gray-800 overflow-hidden">
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Users</h2>
            <table className="w-full text-left border-collapse">
            <thead>
                <tr className="border-b border-gray-800 text-gray-400 text-sm">
                <th className="pb-4 font-medium px-4">Client Name</th>
                <th className="pb-4 font-medium px-4">Date Created</th>
                <th className="pb-4 font-medium px-4">Industry</th>
                <th className="pb-4 font-medium px-4">Total Uploads</th>
                <th className="pb-4 font-medium px-4">Active Users</th>
                <th className="pb-4 font-medium px-4 text-right">Action</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/50">
                {clients.map((client, index) => (
                <tr key={index} className="text-sm text-gray-300 hover:bg-[#1C2128] transition-colors">
                    <td className="py-5 px-4">{client.name}</td>
                    <td className="py-5 px-4">{client.date}</td>
                    <td className="py-5 px-4">
                    <span className="bg-[#2D333B] text-gray-400 px-3 py-1 rounded-full text-xs">
                        {client.industry}
                    </span>
                    </td>
                    <td className="py-5 px-4 flex items-center gap-2">
                        <Upload size={14} className="text-gray-500" /> {client.uploads}
                    </td>
                    <td className="py-5 px-4">
                        <div className="flex items-center gap-2">
                            <Users size={14} className="text-gray-500" /> {client.users}
                        </div>
                    </td>
                    <td className="py-5 px-4 text-right">
                    <div className="flex justify-end gap-3">
                        <Edit2 size={16} className="cursor-pointer hover:text-blue-400" />
                        <Trash2 size={16} className="cursor-pointer hover:text-red-400" />
                    </div>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
      </div>

      {/* Modal - Client Information Form (Side Overlay style based on your screenshot) */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-end">
          <div className="w-full max-w-md bg-[#0E1117] p-8 border-l  overflow-y-auto h-screen py-10 border-gray-800 shadow-2xl animate-in slide-in-from-right duration-300">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-2xl font-bold">Client Information</h2>
              <button onClick={() => setShowModal(false)} className="bg-gray-800 p-1.5 hover:cursor-pointer rounded-full hover:bg-gray-700 transition">
                <X size={20} />
              </button>
            </div>

            <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); setShowModal(false); }}>
              {/* Business Name */}
              <div>
                <label className="block text-sm font-medium mb-3 text-gray-300">Business Name</label>
                <input 
                  type="text" 
                  defaultValue="John Doe"
                  className="w-full bg-[#161B22] border border-gray-800 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition"
                />
              </div>

              {/* Industry Dropdown */}
              <div>
                <label className="block text-sm font-medium mb-3 text-gray-300">Industry</label>
                <div className="relative">
                  <select className="w-full bg-[#161B22] border border-gray-800 rounded-xl px-4 py-3 outline-none appearance-none focus:border-blue-500 transition">
                    <option>Industry</option>
                    <option>Healthcare</option>
                    <option>Technology</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-3.5 text-gray-500" size={18} />
                </div>
              </div>

              {/* Time Zone */}
              <div>
                <label className="block text-sm font-medium mb-3 text-gray-300">Time Zone</label>
                <div className="relative">
                  <select className="w-full bg-[#161B22] border border-gray-800 rounded-xl px-4 py-3 outline-none appearance-none focus:border-blue-500 transition">
                    <option>Time Zone</option>
                    <option>UTC +5:00</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-3.5 text-gray-500" size={18} />
                </div>
              </div>

              {/* Assign Admin */}
              <div>
                <label className="block text-sm font-medium mb-3 text-gray-300">Assign Admin User</label>
                <div className="relative">
                  <select className="w-full bg-[#161B22] border border-gray-800 rounded-xl px-4 py-3 outline-none appearance-none focus:border-blue-500 transition">
                    <option>Assign Admin User</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-3.5 text-gray-500" size={18} />
                </div>
              </div>

              {/* Assigned Users */}
              <div>
                <label className="block text-sm font-medium mb-3 text-gray-300">Assigned Users</label>
                <div className="relative">
                  <select className="w-full bg-[#161B22] border border-gray-800 rounded-xl px-4 py-3 outline-none appearance-none focus:border-blue-500 transition text-gray-500">
                    <option>select multi users</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-3.5 text-gray-500" size={18} />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#4F8AFF] hover:bg-[#3b6edb] hover:cursor-pointer text-white py-3.5 rounded-xl font-semibold shadow-[0_0_25px_rgba(79,138,255,0.4)] transition-all mt-8"
              >
                Save Client
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}