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

export const roleLinks = {
  "Super Admin": [
    { label: "Dashboard", href: "/dashboard", icon: <Home size={18} /> },
    { label: "Clients", href: "/dashboard/clients", icon: <Users size={18} /> },
    { label: "User Management", href: "/dashboard/users", icon: <Users size={18} /> },
    { label: "Uploads", href: "/dashboard/uploads", icon: <Upload size={18} /> },
    { label: "Integrations", href: "/dashboard/integrations", icon: <Puzzle size={18} /> },
    { label: "Billing & Subscription", href: "/dashboard/billing", icon: <CreditCard size={18} /> },
    { label: "Settings", href: "/dashboard/settings", icon: <Settings size={18} /> },
    { label: "Help", href: "/dashboard/help", icon: <HelpCircle size={18} /> },
  ],

  "Agency Admin": [
    { label: "Dashboard", href: "/dashboard", icon: <Home size={18} /> },
    { label: "Clients", href: "", icon: <Users size={18} /> },
    { label: "User Management", href: "/dashboard/users", icon: <Users size={18} /> },
    { label: "Uploads", href: "/dashboard/uploads", icon: <Upload size={18} /> },
    { label: "Mapping Templates", href: "/dashboard/mapping-templates", icon: <FileSpreadsheet size={18} /> },
    { label: "Mapping Editor", href: "/dashboard/mapping-editor", icon: <FileText size={18} /> },
    { label: "Integrations", href: "/dashboard/integrations", icon: <Puzzle size={18} /> },
    { label: "Pixels & CAPI", href: "/dashboard/pixels", icon: <Cpu size={18} /> },
    { label: "Billing & Subscription", href: "/dashboard/billing", icon: <CreditCard size={18} /> },
    { label: "Settings", href: "/dashboard/settings", icon: <Settings size={18} /> },
    { label: "Help", href: "/dashboard/help", icon: <HelpCircle size={18} /> },
  ],

  "Agency Power User": [
    { label: "Dashboard", href: "/dashboard", icon: <Home size={18} /> },
    { label: "Uploads", href: "/dashboard/uploads", icon: <Upload size={18} /> },
    { label: "Integrations", href: "/dashboard/integrations", icon: <Puzzle size={18} /> },
  ],

  "Agency Viewer": [
    { label: "Dashboard", href: "/dashboard", icon: <Home size={18} /> },
    { label: "Uploads", href: "/dashboard/uploads", icon: <Upload size={18} /> },
  ],

  "Client Admin": [
    { label: "Dashboard", href: "/dashboard", icon: <Home size={18} /> },
    { label: "Uploads", href: "/dashboard/uploads", icon: <Upload size={18} /> },
    { label: "Users", href: "/dashboard/users", icon: <Users size={18} /> },
  ],

  "Client User": [
    { label: "Dashboard", href: "/dashboard", icon: <Home size={18} /> },
  ],
};
