"use client";

import { useState } from "react";

interface StepTabsProps {
  currentStep: 1 | 2;
}

export default function StepTabs({ currentStep }: StepTabsProps) {
  const [open, setOpen] = useState(false);

  const steps = [
    {
      id: 1,
      label: "Activity Details",
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.5 2.5V15.5M3.5 2.5H12.5L10 6.5L12.5 10.5H3.5"
            stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 2,
      label: "Location Details",
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9 15.5C9 15.5 14 11 14 7.5C14 4.74 11.76 2.5 9 2.5C6.24 2.5 4 4.74 4 7.5C4 11 9 15.5 9 15.5Z"
            stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"
          />
          <circle cx="9" cy="7.5" r="1.75" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      ),
    },
  ];

  return (
    <div>
      {/* Mobile toggle button */}
      <button
        className="md:hidden w-full flex items-center justify-between px-3 py-2.5 bg-gray-100 rounded-lg text-sm font-medium text-gray-900 mb-1"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="flex items-center gap-2">
          {steps[currentStep - 1].icon}
          {steps[currentStep - 1].label}
        </span>
        <svg
          width="16" height="16" viewBox="0 0 16 16" fill="none"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Steps list — always visible on md+, toggleable on mobile */}
      <div className={`flex-col gap-1 ${open ? "flex" : "hidden"} md:flex`}>
        {steps.map((step) => (
          <div
            key={step.id}
            className={`flex items-center gap-2.5 py-2.5 px-3 rounded-lg cursor-default ${
              currentStep === step.id ? "bg-gray-100" : "bg-transparent"
            }`}
          >
            <span className={currentStep === step.id ? "text-gray-800" : "text-gray-400"}>
              {step.icon}
            </span>
            <span className={`text-sm ${currentStep === step.id ? "text-gray-900 font-medium" : "text-gray-500"}`}>
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
