"use client";

import { useState } from "react";
import { cn } from "@/src/lib/utils";
import { Lock, User, ArrowRight } from "lucide-react";

export const AuthSwitch = ({ onLogin }: { onLogin: (key: string) => void }) => {
  const [key, setKey] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-navy/5 rounded-2xl">
            <Lock className="text-gold w-8 h-8" />
          </div>
        </div>
        <h2 className="text-3xl font-serif font-bold text-navy text-center mb-2">Admin Portal</h2>
        <p className="text-gray-500 text-center mb-8">Secure access for JurySolve administrators</p>
        
        <div className="space-y-6">
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="password"
              placeholder="Enter Admin Secret Key"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && onLogin(key)}
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all font-sans"
            />
          </div>
          
          <button
            onClick={() => onLogin(key)}
            className="w-full bg-navy text-white py-4 rounded-2xl font-bold text-lg shadow-xl hover:bg-navy/90 transition-all flex items-center justify-center gap-2 group"
          >
            Access Dashboard
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-400 uppercase tracking-widest">Authorized Personnel Only</p>
        </div>
      </div>
    </div>
  );
};
