"use client";

import { useState } from "react";
import { Lock, User } from "lucide-react";
import { authenticate } from "./actions";
import Link from "next/link";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    const result = await authenticate(username, password);
    
    if (result.error) {
      setError(result.error);
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-navy-50 flex flex-col items-center justify-center p-4">
      <Link href="/" className="mb-8 block">
        <img src="/images/logo.png" alt="Zenvest Wealth" className="h-12 w-auto" />
      </Link>
      
      <div className="w-full max-w-md bg-white rounded-3xl shadow-soft border border-navy-100 p-8">
        <div className="text-center mb-8">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-navy-900 mb-4">
            <Lock className="text-gold-400" size={32} />
          </div>
          <h1 className="text-3xl font-display font-bold text-navy-900">Admin Login</h1>
          <p className="text-navy-600 mt-2">Secure access to Zenvest Dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-navy-600">
              Username
            </label>
            <div className="relative">
              <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-400" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-xl border border-navy-100 bg-white px-10 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-gold-400 focus:ring-4 focus:ring-gold-100"
                required
              />
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-navy-600">
              Password
            </label>
            <div className="relative">
              <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-navy-100 bg-white px-10 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-gold-400 focus:ring-4 focus:ring-gold-100"
                required
              />
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-sm bg-red-50 p-3 rounded-xl border border-red-100">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 rounded-full bg-navy-800 px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-navy-700 disabled:opacity-70 flex justify-center items-center"
          >
            {loading ? "Authenticating..." : "Login"}
          </button>
        </form>
      </div>
      
      <p className="mt-8 text-sm text-navy-500">
        &copy; {new Date().getFullYear()} Zenvest Wealth. All rights reserved.
      </p>
    </div>
  );
}
