"use client";
import React, { useEffect, useState } from "react";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { useAuth } from "../components/AuthContext";
import { useRouter } from "next/navigation";

export default function VerifyPage() {
  const { emailForVerification, verifyCode } = useAuth();
  const [code, setCode] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!emailForVerification) router.replace("/");
  }, [emailForVerification, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!code || code.length !== 6) {
      setError("Please enter the 6-digit verification code.");
      return;
    }

    try {
      setSubmitting(true);
      await verifyCode(code);
      router.push("/dashboard"); 
    } catch (err: any) {
      console.error("[Verify] Failed:", err);
      setError(
        err?.response?.data?.message ||
          err?.response?.data?.error ||
          err?.message ||
          "Verification failed. Please check your code and try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0E1117] text-white flex flex-col items-center justify-center px-4">
      <div className="absolute top-8 left-8 text-gray-300 font-semibold text-sm tracking-wide">
        Logo
      </div>
      <div className="w-full max-w-md bg-[#171c25] border border-gray-800 rounded-2xl shadow-lg p-10 flex flex-col items-center gap-8 text-center">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            Zeus Platform
          </h1>
          <p className="text-gray-400 mt-1 text-sm">
            Enterprise Marketing Attribution
          </p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <IoShieldCheckmarkOutline size={40} className="text-blue-400" />
          <h2 className="text-2xl font-medium">Verify Code</h2>
          <p className="text-gray-400 text-sm">
            Enter the 6-digit code sent to{" "}
            <span className="text-blue-400 wrap-break-word">
              {emailForVerification || "your email"}
            </span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
          <div className="text-left">
            <label className="block mb-2 text-sm text-gray-300">
              Verification Code
            </label>
            <input
              type="text"
              inputMode="numeric"
              maxLength={6}
              placeholder="123456"
              value={code}
              onChange={(e) =>
                setCode(e.target.value.replace(/[^0-9]/g, "").slice(0, 6))
              }
              className="w-full bg-[#0E1117] border border-gray-700 focus:border-blue-500 rounded-lg px-3 py-2 text-center text-lg outline-none transition tracking-[0.4em] caret-transparent"
              required
              autoFocus
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="bg-[#2563EB] hover:bg-[#1D4ED8] hover:cursor-pointer text-white py-2.5 rounded-lg font-medium shadow-md hover:shadow-blue-500/30 transition-all disabled:opacity-60"
          >
            {submitting ? "Verifying..." : "Verify and Sign In"}
          </button>
        </form>

        {error && (
          <p className="text-red-400 text-xs max-w-sm leading-relaxed mt-2">
            {error}
          </p>
        )}

        <p className="text-gray-500 text-xs max-w-sm leading-relaxed mt-2">
          Secured with enterprise-grade encryption. Your data is protected and
          never shared.
        </p>
      </div>
    </div>
  );
}
