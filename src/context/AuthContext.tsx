"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type AuthContextType = {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: { email: string } | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  requestPasswordReset: (email: string) => Promise<string>;
  resetPassword: (token: string, password: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ email: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const raw = localStorage.getItem("auth_user");
    if (raw) {
      setUser(JSON.parse(raw));
      setIsAuthenticated(true);
    }
    setIsLoading(false); // done checking
  }, []);

  const login = async (email: string, _password: string) => {
    void _password;
    await new Promise((r) => setTimeout(r, 500)); // fake delay
    setUser({ email });
    setIsAuthenticated(true);
    localStorage.setItem("auth_user", JSON.stringify({ email }));
    router.push("/contests");
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("auth_user");
    router.push("/");
  };

  const requestPasswordReset = async (email: string) => {
    await new Promise((r) => setTimeout(r, 500));
    const token = "mock-token-" + Date.now();
    localStorage.setItem("mock_reset_token", token);
    localStorage.setItem("mock_reset_email", email);
    return token;
  };

  const resetPassword = async (token: string, _password: string) => {
    void _password;
    await new Promise((r) => setTimeout(r, 500));
    const stored = localStorage.getItem("mock_reset_token");
    if (token !== stored) throw new Error("Invalid token");
    localStorage.removeItem("mock_reset_token");
    localStorage.removeItem("mock_reset_email");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        user,
        login,
        logout,
        requestPasswordReset,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
