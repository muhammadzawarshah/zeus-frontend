"use client";
import React from 'react';
import { 
  Search, 
  BookOpen, 
  MessageCircle, 
  Mail, 
  ExternalLink, 
  ChevronRight,
  LifeBuoy
} from 'lucide-react';

export default function HelpPage() {
  const faqs = [
    { q: "How do I connect my GA4 account?", a: "Go to Pixels & CAPI settings and enter your Measurement ID." },
    { q: "What is CAPI deduplication?", a: "It's a process that ensures client and server events aren't counted twice." },
    { q: "How can I add more users?", a: "Agency Admins can add users via the User Management tab." }
  ];

  return (
    <div className="text-white p-8 font-sans">
      {/* Header with Search */}
      <div className="max-w-4xl mx-auto text-center mb-16 mt-8">
        <h1 className="text-4xl font-bold mb-4">How can we help you?</h1>
        <p className="text-gray-400 mb-8">Search our documentation or contact our support team.</p>
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-3.5 text-gray-500" size={20} />
          <input 
            type="text" 
            placeholder="Search for articles, guides..." 
            className="w-full bg-[#161B22] border border-gray-800 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-blue-500 transition shadow-lg"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {/* Support Cards */}
        <div className="bg-[#161B22] p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition group cursor-pointer">
          <div className="bg-blue-500/10 p-3 rounded-xl w-fit mb-6 group-hover:bg-blue-500/20 transition">
            <BookOpen className="text-blue-500" size={24} />
          </div>
          <h3 className="text-xl font-bold mb-2">Documentation</h3>
          <p className="text-gray-400 text-sm mb-6">Detailed guides on how to setup and use Zeus Platform.</p>
          <div className="flex items-center gap-2 text-blue-500 font-semibold text-sm">
            Browse Docs <ChevronRight size={16} />
          </div>
        </div>

        <div className="bg-[#161B22] p-8 rounded-2xl border border-gray-800 hover:border-teal-500 transition group cursor-pointer">
          <div className="bg-teal-500/10 p-3 rounded-xl w-fit mb-6 group-hover:bg-teal-500/20 transition">
            <MessageCircle className="text-teal-500" size={24} />
          </div>
          <h3 className="text-xl font-bold mb-2">Live Chat</h3>
          <p className="text-gray-400 text-sm mb-6">Talk to our experts in real-time for immediate assistance.</p>
          <div className="flex items-center gap-2 text-teal-500 font-semibold text-sm">
            Start Chat <ChevronRight size={16} />
          </div>
        </div>

        <div className="bg-[#161B22] p-8 rounded-2xl border border-gray-800 hover:border-purple-500 transition group cursor-pointer">
          <div className="bg-purple-500/10 p-3 rounded-xl w-fit mb-6 group-hover:bg-purple-500/20 transition">
            <Mail className="text-purple-500" size={24} />
          </div>
          <h3 className="text-xl font-bold mb-2">Email Support</h3>
          <p className="text-gray-400 text-sm mb-6">Send us a ticket and we'll get back to you within 24 hours.</p>
          <div className="flex items-center gap-2 text-purple-500 font-semibold text-sm">
            Open Ticket <ChevronRight size={16} />
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="max-w-4xl mx-auto bg-[#161B22] rounded-3xl border border-gray-800 overflow-hidden mb-12">
        <div className="p-8 border-b border-gray-800">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <LifeBuoy className="text-blue-500" /> Frequently Asked Questions
          </h2>
        </div>
        <div className="divide-y divide-gray-800">
          {faqs.map((faq, i) => (
            <div key={i} className="p-8 hover:bg-white/5 transition cursor-pointer flex justify-between items-center group">
              <div>
                <h4 className="font-semibold text-lg mb-1 group-hover:text-blue-400 transition">{faq.q}</h4>
                <p className="text-gray-400 text-sm">{faq.a}</p>
              </div>
              <ExternalLink size={18} className="text-gray-600 group-hover:text-white" />
            </div>
          ))}
        </div>
      </div>

      <div className="text-center pb-12">
        <p className="text-gray-500 text-sm">
          Still stuck? Visit our <span className="text-blue-500 hover:underline cursor-pointer font-medium">Community Forum</span> or check our <span className="text-blue-500 hover:underline cursor-pointer font-medium">Status Page</span>.
        </p>
      </div>
    </div>
  );
}