"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const COUNTRIES = [
  {
    code: "+1",
    label: "US",
    flag: "https://img.icons8.com/?size=100&id=aRiu1GGi6Aoe&format=png&color=000000",
  },
  {
    code: "+91",
    label: "IN",
    flag: "https://img.icons8.com/?size=100&id=esGVrxg9VCJ1&format=png&color=000000",
  },
  {
    code: "+1",
    label: "CA",
    flag: "https://img.icons8.com/?size=100&id=esGVrxg9VCJ1&format=png&color=000000",
  },
  {
    code: "+33",
    label: "FR",
    flag: "https://img.icons8.com/?size=100&id=esGVrxg9VCJ1&format=png&color=000000",
  },
  {
    code: "+61",
    label: "AU",
    flag: "https://img.icons8.com/?size=100&id=P94rwJyovccu&format=png&color=000000",
  },
];

interface PhoneInputProps {
  countryCode: string;
  onCountryCodeChange: (code: string) => void;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
}

export default function PhoneInput({
  countryCode,
  onCountryCodeChange,
  value,
  onChange,
  error,
  placeholder,
}: PhoneInputProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selected = COUNTRIES.find((c) => c.code === countryCode) ?? COUNTRIES[0];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="w-full min-w-0">
      <div className="flex flex-row border border-gray-300 rounded-3xl overflow-visible focus-within:ring-1 focus-within:ring-gray-400 relative">
        {/* Flag trigger */}
        <div ref={ref} className="relative shrink-0">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-1 px-2 py-2 bg-white border-r border-gray-300 h-full hover:bg-gray-50 focus:outline-none"
          >
            <Image src={selected.flag} alt={selected.label} width={20} height={20} className="rounded-sm object-cover" />
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-gray-400">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Dropdown */}
          {open && (
            <div className="absolute top-full left-0 mt-1 z-50 bg-white border border-gray-200 rounded-md shadow-lg min-w-[120px] py-1">
              {COUNTRIES.map((c, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => { onCountryCodeChange(c.code); setOpen(false); }}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 text-sm hover:bg-gray-50 transition-colors ${
                    selected.label === c.label ? "bg-gray-50 font-medium" : "text-gray-700"
                  }`}
                >
                  <Image src={c.flag} alt={c.label} width={20} height={20} className="rounded-sm object-cover shrink-0" />
                  <span className="text-gray-500">{c.code}</span>
                  <span className="text-gray-700">{c.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <input
          type="tel"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="flex-1 px-3 py-2 text-sm outline-none bg-white rounded-r-2xl"
        />
      </div>
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}
