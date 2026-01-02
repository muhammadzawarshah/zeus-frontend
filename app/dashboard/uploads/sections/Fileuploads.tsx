"use client";

import React, { useRef, useState, useCallback } from "react";
import { Upload } from "lucide-react";
import { useAuth } from "../../../components/AuthContext";
import Link from "next/link";

export default function Fileuploads() {
  const { user, api, loading: authLoading } = useAuth();
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (!files || files.length === 0) return;

      const file = files[0];

      if (!user) {
        setMessage("Please log in before uploading.");
        return;
      }

      const allowedTypes = [
        "text/csv",
        "application/json",
        "application/vnd.ms-excel",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      ];
      if (!allowedTypes.includes(file.type)) {
        setMessage("Invalid file type. Only CSV, Excel, and JSON files are allowed.");
        return;
      }

      const maxMB = 25;
      if (file.size > maxMB * 1024 * 1024) {
        setMessage(`File too large. Max allowed size is ${maxMB}MB.`);
        return;
      }

      const formData = new FormData();
      formData.append("file", file);
      formData.append("userId", user.id || "");
      formData.append("email", user.email || "");

      try {
        setUploading(true);
        setMessage(null);

        const res = await api.post("/uploads", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        console.log("[Zeus Upload Success]:", res.data);
        setMessage("File uploaded successfully!");
      } catch (err: any) {
        console.error("[Zeus Upload Error]:", err);
        setMessage(
          err?.response?.data?.message ||
          err?.message ||
          "Upload failed. Please try again."
        );
      } finally {
        setUploading(false);
        if (fileInputRef.current) fileInputRef.current.value = "";
      }
    },
    [user, api]
  );

  if (authLoading)
    return (
      <div className="flex items-center justify-center h-screen bg-background text-gray-400">
        Loading...
      </div>
    );

  return (
    <div className="bg-background text-white py-10 px-6 rounded-lg">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex justify-between gap-3 items-center">
            <div className="w-10 h-10 text-center bg-bgDark flex items-center justify-center rounded-full">
              1
            </div>
            <h1 className="text-2xl font-semibold">Upload Files</h1>
          </div>
          <div className="flex justify-between gap-3 items-center">
            <div className="w-10 h-10 text-center bg-bgDark flex items-center justify-center rounded-full">
              2
            </div>
            <h1 className="text-2xl font-semibold">Mapping Template</h1>
          </div>
        </div>

        <div
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-gray-600 rounded-2xl p-12 text-center flex flex-col items-center gap-6 transition-all duration-300 hover:bg-[#1f2937]/30 hover:cursor-pointer"
        >
          <div className="bg-btn rounded-lg p-3 hover:shadow-[0_0_15px_#5593F7] duration-300 transition-all">
            <Upload size={36} className="text-white" />
          </div>

          <div>
            <h2 className="font-semibold text-lg">
              Drop files here or click to browse
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              Supported formats: CSV, Excel, JSON
            </p>
          </div>

          <div className="flex flex-col items-center gap-1">
            <label className="cursor-pointer bg-btn text-white py-2 px-6 rounded-lg font-medium hover:shadow-[0_0_15px_#5593F7] transition">
              Browse Files
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept=".csv, .xlsx, .xls, .json"
                onChange={handleFileChange}
                disabled={uploading}
              />
            </label>
            <p className="text-xs text-gray-500 mt-1">
              Target: ≤ 5 minutes for 50k records
            </p>
          </div>

          {uploading && (
            <p className="text-blue-400 text-sm animate-pulse mt-2">
              Uploading file...
            </p>
          )}

          {message && (
            <p
              className={`text-sm mt-2 ${message.toLowerCase().includes("success")
                  ? "text-green-400"
                  : "text-red-400"
                }`}
            >
              {message}
            </p>
          )}
        </div>

        <div className="flex justify-end">
          <Link href="/dashboard/uploads/mapping">
            <button
              className="bg-btn hover:shadow-[0_0_15px_#5593F7] hover:cursor-pointer text-white py-2 px-6 rounded-lg font-medium shadow-md hover:shadow-blue-500/30 transition-all disabled:opacity-60"
              disabled={uploading}
            >
              Apply Mapping Template
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
