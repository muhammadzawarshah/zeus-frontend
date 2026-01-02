"use client";
import React from "react";
import { CreditCard, Download, Edit3, ChevronRight } from "lucide-react";

export default function BillingPage() {
  const invoices = [
    { id: "INV-2025-12345", period: "2025-11-01 TO 2025-11-30", amount: "$49.99", status: "Paid" },
    { id: "INV-2025-12345", period: "2025-11-01 TO 2025-11-30", amount: "$49.99", status: "Paid" },
    { id: "INV-2025-12345", period: "2025-11-01 TO 2025-11-30", amount: "$49.99", status: "Unpaid" },
    { id: "INV-2025-12345", period: "2025-11-01 TO 2025-11-30", amount: "$49.99", status: "Unpaid" },
  ];

  return (
    <div className=" text-white p-8 font-sans">
      <h1 className="text-3xl font-bold mb-8">Billing & Subscription</h1>

      {/* Top Section: Plans & Payment */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Current Plan */}
        <div className="bg-[#161B22] p-6 rounded-2xl border border-gray-800">
          <h2 className="text-lg font-semibold">Current Plan</h2>
          <p className="text-gray-500 text-sm mb-6">Standard Plan</p>
          <div className="space-y-4 mb-8 text-sm">
            <div className="flex justify-between"><span className="text-gray-400">Plan</span><span>Standard Plan</span></div>
            <div className="flex justify-between"><span className="text-gray-400">Price</span><span className="text-right">$49.99<br/><span className="text-[10px] text-gray-500 text-xs">Monthly</span></span></div>
            <div className="flex justify-between pt-2"><span className="text-gray-400">Next Billing</span><span>2025-12-15</span></div>
          </div>
          <button className="w-full bg-[#36D1DC] hover:bg-[#2bb5bf] text-black font-bold py-2.5 rounded-lg text-sm transition shadow-[0_0_15px_rgba(54,209,220,0.3)]">
            Upgrade
          </button>
        </div>

        {/* Basic Plan */}
        <div className="bg-[#161B22] p-6 rounded-2xl border border-gray-800">
          <h2 className="text-lg font-semibold">Basic Plan</h2>
          <p className="text-gray-500 text-sm mb-6">Standard Plan</p>
          <div className="space-y-4 mb-8 text-sm">
            <div className="flex justify-between"><span className="text-gray-400">Plan</span><span>Basic Plan</span></div>
            <div className="flex justify-between"><span className="text-gray-400">Price</span><span className="text-right">$89.99<br/><span className="text-[10px] text-gray-500 text-xs">Monthly</span></span></div>
            <div className="flex justify-between pt-2"><span className="text-gray-400">Next Billing</span><span>2025-12-29</span></div>
          </div>
          <button className="w-full bg-[#36D1DC] hover:bg-[#2bb5bf] text-black font-bold py-2.5 rounded-lg text-sm transition shadow-[0_0_15px_rgba(54,209,220,0.3)]">
            Upgrade
          </button>
        </div>

        {/* Payment Method */}
        <div className="bg-[#161B22] p-6 rounded-2xl border border-gray-800">
          <h2 className="text-lg font-semibold">Payment Method</h2>
          <p className="text-gray-500 text-sm mb-6">Card on file</p>
          <div className="space-y-4 mb-8 text-sm">
            <div className="flex justify-between items-center"><span className="text-gray-400">•••• •••• •••• 1234</span><span className="text-blue-500 font-bold italic text-lg">VISA</span></div>
            <div className="flex justify-between"><span className="text-gray-400">DD/MM/YY</span><span></span></div>
            <div className="flex justify-between items-center"><span className="text-gray-400">John Smith</span><CreditCard size={24} className="text-gray-500" /></div>
          </div>
          <button className="w-full bg-[#36D1DC] hover:bg-[#2bb5bf] text-black font-bold py-2.5 rounded-lg text-sm transition shadow-[0_0_15px_rgba(54,209,220,0.3)]">
            Update Card
          </button>
        </div>
      </div>

      {/* Bottom Section: Contact & History */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Billing Contact Form */}
        <div className="bg-[#161B22] p-6 rounded-2xl border border-gray-800 h-fit">
          <h2 className="text-lg font-semibold">Billing Contact</h2>
          <p className="text-gray-500 text-sm mb-6">Contact Information for billing</p>
          
          <div className="space-y-5">
            <div>
              <label className="text-xs text-gray-300 block mb-2">Name</label>
              <input type="text" defaultValue="John Doe" className="w-full bg-[#0E1117] border border-gray-800 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="text-xs text-gray-300 block mb-2">Email</label>
              <input type="email" placeholder="Enter email" className="w-full bg-[#0E1117] border border-gray-800 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="text-xs text-gray-300 block mb-2">Phone</label>
              <input type="text" placeholder="Enter phone number" className="w-full bg-[#0E1117] border border-gray-800 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500" />
            </div>
            <button className="w-full bg-[#4F8AFF] hover:bg-blue-600 text-white font-semibold py-2.5 rounded-lg text-sm transition shadow-[0_0_20px_rgba(79,138,255,0.4)]">
              Edit Contact
            </button>
          </div>
        </div>

        {/* Invoice History Table */}
        <div className="lg:col-span-2 bg-[#161B22] rounded-2xl border border-gray-800 overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Invoice History</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-xs text-gray-400 border-b border-gray-800 bg-white/5">
                    <th className="py-4 px-4 font-medium">Invoice ID</th>
                    <th className="py-4 px-4 font-medium">Period</th>
                    <th className="py-4 px-4 font-medium">Amount</th>
                    <th className="py-4 px-4 font-medium">Status</th>
                    <th className="py-4 px-4 font-medium text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {invoices.map((inv, i) => (
                    <tr key={i} className="border-b border-gray-800 hover:bg-white/5 transition">
                      <td className="py-5 px-4 text-gray-400">{inv.id}</td>
                      <td className="py-5 px-4 text-gray-400 text-xs">{inv.period}</td>
                      <td className="py-5 px-4 font-medium">{inv.amount}</td>
                      <td className="py-5 px-4">
                        <span className={`px-3 py-1 rounded-md text-[10px] font-bold ${
                          inv.status === "Paid" ? "bg-[#14C9B0]/20 text-[#14C9B0]" : "bg-red-500/20 text-red-500"
                        }`}>
                          {inv.status}
                        </span>
                      </td>
                      <td className="py-5 px-4 text-center">
                        <button className="bg-[#2563EB] hover:bg-blue-700 text-white px-3 py-1.5 rounded-md text-[10px] flex items-center gap-1 mx-auto transition">
                          <Download size={12} /> Download PDF
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}