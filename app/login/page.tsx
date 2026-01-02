"use client";
import React, { useState } from "react";
import { TfiEmail } from "react-icons/tfi";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Super Admin"); // Default role selection
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Basic Validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);

    // Static Logic: Role ko save karna aur redirect karna
    setTimeout(() => {
      setSubmitting(false);
      
      // Ye line Sidebar ko batayegi ke kaunse links dikhane hain
      localStorage.setItem("selected_role", role);
      // Demo email save kar rahe hain sidebar niche dikhane ke liye
      localStorage.setItem("zeus_email", email);
      
      router.push("/dashboard"); 
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#0E1117] text-white flex flex-col items-center justify-center px-4">
      <div className="absolute top-8 left-8 text-gray-300 font-semibold text-sm tracking-wide">
        Logo
      </div>

      <div className="w-full max-w-md flex flex-col items-center gap-12 text-center">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Zeus Platform</h1>
          <p className="text-gray-400 mt-1 text-sm">
            Enterprise Marketing Attribution
          </p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <div>
            <TfiEmail size={34} className="inline-block" />
            <h2 className="text-2xl font-medium">Sign In</h2>
          </div>
          <p className="text-gray-400 text-sm">
            Select your role to explore the dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
          <div className="text-left flex flex-col gap-4">
            {/* Role Dropdown - UI consistent with email input */}
            <div>
              <label className="block mb-2 text-sm text-gray-300 font-medium">User Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full bg-[#161B22] border border-gray-700 focus:border-blue-500 rounded-lg px-3 py-2.5 text-sm outline-none transition text-white appearance-none"
                style={{ backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'white\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1em' }}
              >
                <option value="Super Admin">Super Admin</option>
                <option value="Agency Admin">Agency Admin</option>
                <option value="Client Admin">Client Admin</option>
                <option value="Agency Standard User">Agency User</option>
                <option value="Client User">Client User</option>
              </select>
            </div>

            {/* Email Input */}
            <div>
              <label className="block mb-2 text-sm text-gray-300 font-medium">Email Address</label>
              <input
                type="email"
                placeholder="user@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border border-gray-700 focus:border-blue-500 rounded-lg px-3 py-2.5 text-sm outline-none transition"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white py-2.5 hover:cursor-pointer rounded-lg font-medium shadow-md hover:shadow-blue-500/30 transition-all disabled:opacity-60"
          >
            {submitting ? "Entering Dashboard..." : "Sign In"}
          </button>
        </form>

        {error && (
          <p className="text-red-400 text-xs max-w-sm leading-relaxed">
            {error}
          </p>
        )}

        <p className="text-gray-500 text-xs max-w-sm leading-relaxed">
          This is a static demo. Choose any role to see the permission-based UI.
        </p>
      </div>
    </div>
  );
}