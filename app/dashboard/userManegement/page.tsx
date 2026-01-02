"use client";
import React, { useState } from "react";
import { Edit2, Trash2, Plus, X } from "lucide-react";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  clients: string[];
  status: "Active" | "Inactive";
}

export default function UserManagement() {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: "John Smith",
      email: "johnsmith@gmail.com",
      role: "Admin",
      clients: ["Client A", "Client B"],
      status: "Active",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarahjohnson@gmail.com",
      role: "Billing Admin",
      clients: ["Client B", "Client C"],
      status: "Active",
    },
    {
      id: 3,
      name: "Emily Davis",
      email: "emilydavis@gmail.com",
      role: "Viewer",
      clients: ["Client A", "Client B"],
      status: "Inactive",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "Admin",
    clients: [] as string[],
  });

  const handleAddUser = () => {
    if (!newUser.name || !newUser.email) return;
    const newUserEntry: User = {
      id: Date.now(),
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      clients: newUser.clients,
      status: "Active",
    };
    setUsers([...users, newUserEntry]);
    setIsModalOpen(false);
    setNewUser({ name: "", email: "", role: "Admin", clients: [] });
  };

  const handleDelete = (id: number) =>
    setUsers((prev) => prev.filter((user) => user.id !== id));

  return (
    <div className="bg-bgDark min-h-screen py-10 px-4 sm:px-8 text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">User Management</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-medium transition shadow-md"
        >
          <Plus size={18} />
          Add New User
        </button>
      </div>

      <div className="max-w-6xl mx-auto bg-background border border-gray-800 rounded-2xl shadow-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-800 text-lg font-semibold">
          Users
        </div>
        <div className="grid grid-cols-6 bg-white text-black text-sm font-medium px-6 py-3 border-b border-gray-800">
          <p>Name</p>
          <p>Email</p>
          <p>Role</p>
          <p>Assigned Clients</p>
          <p>Status</p>
          <p className="text-right">Action</p>
        </div>

        {users.map((user) => (
          <div
            key={user.id}
            className="grid grid-cols-6 items-center px-6 py-4 border-b border-gray-800 text-sm text-gray-300 hover:bg-[#20242d] transition"
          >
            <p>{user.name}</p>
            <p>{user.email}</p>
            <div>
              <span
                className={`px-3 py-1 rounded-md text-xs font-medium ${
                  user.role === "Admin"
                    ? "bg-blue-700/30 text-blue-400"
                    : user.role === "Billing Admin"
                    ? "bg-teal-700/30 text-teal-400"
                    : "bg-gray-700/30 text-gray-400"
                }`}
              >
                {user.role}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {user.clients.map((client, i) => (
                <span
                  key={i}
                  className="bg-green-700/20 text-green-300 text-xs px-3 py-1 rounded-full"
                >
                  {client}
                </span>
              ))}
            </div>
            <div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  user.status === "Active"
                    ? "bg-teal-700/30 text-teal-400"
                    : "bg-red-700/30 text-red-400"
                }`}
              >
                {user.status}
              </span>
            </div>
            <div className="flex justify-end gap-3 text-gray-400">
              <button className="hover:text-blue-400 transition">
                <Edit2 size={16} />
              </button>
              <button
                onClick={() => handleDelete(user.id)}
                className="hover:text-red-400 transition"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="bg-[#1a1d23] border border-gray-700 rounded-2xl w-[90%] sm:w-[500px] p-6 relative shadow-2xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>
            <h2 className="text-lg font-semibold mb-5">Add New User</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={newUser.name}
                  onChange={(e) =>
                    setNewUser((p) => ({ ...p, name: e.target.value }))
                  }
                  className="w-full bg-[#111318] border border-gray-700 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-blue-600 outline-none"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={newUser.email}
                  onChange={(e) =>
                    setNewUser((p) => ({ ...p, email: e.target.value }))
                  }
                  className="w-full bg-[#111318] border border-gray-700 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-blue-600 outline-none"
                  placeholder="john@acme.com"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Role</label>
                <select
                  value={newUser.role}
                  onChange={(e) =>
                    setNewUser((p) => ({ ...p, role: e.target.value }))
                  }
                  className="w-full bg-[#111318] border border-gray-700 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-blue-600 outline-none"
                >
                  <option>Admin</option>
                  <option>User</option>
                  <option>Client</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Assign To Clients
                </label>
                <select
                  multiple
                  value={newUser.clients}
                  onChange={(e) =>
                    setNewUser((p) => ({
                      ...p,
                      clients: Array.from(
                        e.target.selectedOptions,
                        (opt) => opt.value
                      ),
                    }))
                  }
                  className="w-full bg-[#111318] border border-gray-700 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-blue-600 outline-none"
                >
                  <option>Client A</option>
                  <option>Client B</option>
                  <option>Client C</option>
                  <option>Client D</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm transition"
              >
                Cancel
              </button>
              <button
                onClick={handleAddUser}
                className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm shadow-lg transition"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
