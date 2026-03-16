"use client";

interface StepTabsProps {
  currentStep: 1 | 2;
}

export default function StepTabs({ currentStep }: StepTabsProps) {
  return (
    <div className="flex flex-col gap-1 w-fit">
      <div className="flex items-center gap-2 py-2 px-1 cursor-default">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={currentStep === 1 ? "text-gray-900" : "text-gray-400"}
        >
          <rect
            x="2"
            y="2"
            width="12"
            height="12"
            rx="1"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M5 6H11M5 9H11"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <span
          className={`text-sm ${
            currentStep === 1
              ? "text-gray-900 font-medium"
              : "text-gray-400"
          }`}
        >
          Activity Details
        </span>
      </div>

      <div className="flex items-center gap-2 py-2 px-1 cursor-default">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={currentStep === 2 ? "text-gray-900" : "text-gray-400"}
        >
          <path
            d="M8 14C8 14 13 10 13 6C13 3.79086 11.2091 2 9 2C6.79086 2 5 3.79086 5 6C5 10 8 14 8 14Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <span
          className={`text-sm ${
            currentStep === 2
              ? "text-gray-900 font-medium"
              : "text-gray-400"
          }`}
        >
          Location Details
        </span>
      </div>
    </div>
  );
}
