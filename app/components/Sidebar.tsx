"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Home,
  Users,
  Upload,
  FileSpreadsheet,
  FileText,
  Puzzle,
  Cpu,
  CreditCard,
  Settings,
  HelpCircle,
} from "lucide-react";
import clsx from "clsx";

// Static Role Links Configuration
const roleLinks: Record<string, { label: string; href: string; icon: React.ReactNode }[]> = {
  "Super Admin": [
    { label: "Dashboard", href: "/dashboard", icon: <Home size={18} /> },
    { label: "Clients", href: "/dashboard/clients", icon: <Users size={18} /> },
    { label: "User Management", href: "/dashboard/userManegement", icon: <Users size={18} /> },
    { label: "Uploads", href: "/dashboard/uploads", icon: <Upload size={18} /> },
    { label: "Integrations", href: "/dashboard/Integrationsetup", icon: <Puzzle size={18} /> },
    { label: "Billing & Subscription", href: "/dashboard/billing", icon: <CreditCard size={18} /> },
    { label: "Settings", href: "/dashboard/settings", icon: <Settings size={18} /> },
    { label: "Help", href: "/dashboard/help", icon: <HelpCircle size={18} /> },
  ],
  "Agency Admin": [
    { label: "Dashboard", href: "/dashboard", icon: <Home size={18} /> },
    { label: "Clients", href: "/dashboard/clients", icon: <Users size={18} /> },
    { label: "User Management", href: "/dashboard/userManegement", icon: <Users size={18} /> },
    { label: "Uploads", href: "/dashboard/uploads", icon: <Upload size={18} /> },
    { label: "Mapping Templates", href: "/dashboard/mapping", icon: <FileSpreadsheet size={18} /> },
    { label: "Mapping Editor", href: "/dashboard/mappingEditor", icon: <FileText size={18} /> },
    { label: "Integrations", href: "/dashboard/Integrationsetup", icon: <Puzzle size={18} /> },
    { label: "Pixels & CAPI", href: "/dashboard/pixels", icon: <Cpu size={18} /> },
    { label: "Billing & Subscription", href: "/dashboard/billing", icon: <CreditCard size={18} /> },
    { label: "Settings", href: "/dashboard/settings", icon: <Settings size={18} /> },
    { label: "Help", href: "/dashboard/help", icon: <HelpCircle size={18} /> },
  ],
  "Client Admin": [
    { label: "Dashboard", href: "/dashboard", icon: <Home size={18} /> },
    { label: "Uploads", href: "/dashboard/uploads", icon: <Upload size={18} /> },
    { label: "Users", href: "/dashboard/users", icon: <Users size={18} /> },
  ],
  "Client User": [
    { label: "Dashboard", href: "/dashboard", icon: <Home size={18} /> }
  ],
  "Agency Standard User": [
    { label: "Dashboard", href: "/dashboard", icon: <Home size={18} /> },
    { label: "Uploads", href: "/dashboard/uploads", icon: <Upload size={18} /> },
    { label: "Mapping", href: "/dashboard/mapping", icon: <FileSpreadsheet size={18} /> },
  ]
};

export default function Sidebar() {
  const pathname = usePathname();
  const [currentRole, setCurrentRole] = useState("Agency Admin"); // Default for demo
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedRole = localStorage.getItem("selected_role") || "Agency Admin";
    setCurrentRole(savedRole);
    setMounted(true);
  }, []);

  if (!mounted) return <aside className="bg-[#0E1117] w-64 min-h-screen border-r border-gray-800" />;

  const links = roleLinks[currentRole] || roleLinks["Client User"];

  return (
    <aside className="bg-[#0E1117] text-white w-64 min-h-screen p-5 border-r border-gray-800 flex flex-col gap-6">
      <div className="px-4 mb-2">
        <h2 className="text-xs font-bold text-blue-500 uppercase tracking-widest">
          {currentRole}
        </h2>
      </div>

      <nav className="flex flex-col gap-1" aria-label="Primary">
        {links.map((item, idx) => {
          // FIX: Dashboard ke liye exact match, baaki ke liye startsWith
          const isActive = item.href === "/dashboard" 
            ? pathname === "/dashboard" 
            : pathname?.startsWith(item.href);
          
          return (
            <Link
              key={`${item.label}-${idx}`}
              href={item.href}
              className={clsx(
                "flex items-center gap-3 px-4 py-2 rounded-lg transition-all text-sm group",
                isActive 
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20" 
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              )}
            >
              <span className={clsx(
                "transition-colors",
                isActive ? "text-white" : "text-gray-500 group-hover:text-blue-400"
              )}>
                {item.icon}
              </span>
              <span className="truncate font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-4 border-t border-gray-800">
        <div className="bg-gray-900/50 p-3 rounded-xl border border-gray-800">
          <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">
            Access Level
          </p>
          <p className="text-xs text-blue-400 font-medium truncate">
            {currentRole}
          </p>
        </div>
      </div>
    </aside>
  );
}