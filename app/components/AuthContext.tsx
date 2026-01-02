"use client";
import React, {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

// Backend/API ki koi zaroorat nahi isliye axios aur cookies hata diye gaye hain

const AuthContext = createContext<any>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  // Static user state - Frontend demo ke liye hamesha ek fake user set rakhen
  const [user, setUser] = useState<any>({
    id: "1",
    name: "Demo User",
    email: "user@example.com",
    role: "Super Admin",
  });
  
  const [emailForVerification, setEmailForVerification] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  // Static Request Login Code
  const requestLoginCode = async (email: string) => {
    setLoading(true);
    // Simulation delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    setEmailForVerification(email);
    setLoading(false);
  };

  // Static Verify Code
  const verifyCode = async (code: string) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    // Seedha user set kar dena bina API ke
    setUser({
      id: "1",
      name: "Demo User",
      email: emailForVerification || "user@example.com",
      role: "Super Admin",
    });
    setLoading(false);
  };

  // Static Logout
  const logout = () => {
    setUser(null);
    setEmailForVerification(null);
  };

  // Static Permission Check (Hamesha true return karega demo ke liye)
  const hasPermission = (action: string) => {
    return true; 
  };

  const value = useMemo(
    () => ({
      user,
      token: "static-demo-token", // Fake token
      loading,
      authError,
      emailForVerification,
      requestLoginCode,
      verifyCode,
      logout,
      hasPermission,
    }),
    [user, loading, authError, emailForVerification]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}