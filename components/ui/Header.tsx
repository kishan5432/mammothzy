export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="h-[60px] flex items-center justify-between px-8">
        <div className="flex items-center gap-2">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 4C10.5 4 6 8.5 6 14C6 16 6.5 17.8 7.5 19.3L6 28L10 26L12 27C13.2 27.6 14.6 28 16 28C21.5 28 26 23.5 26 18C26 12.5 21.5 8 16 8M10 12C10 10.9 10.9 10 12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14C10.9 14 10 13.1 10 12M18 12C18 10.9 18.9 10 20 10C21.1 10 22 10.9 22 12C22 13.1 21.1 14 20 14C18.9 14 18 13.1 18 12M8 18C8 16 9 14 10.5 13L9 16C9 16 11 18 13 18H19C21 18 23 16 23 16L21.5 13C23 14 24 16 24 18C24 20 22 22 20 23H12C10 22 8 20 8 18Z"
              fill="currentColor"
            />
          </svg>
          <span className="text-lg font-semibold text-gray-900">
            mammothzy
          </span>
        </div>

        <a href="#" className="flex items-center gap-1.5 text-sm text-gray-700">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-700"
          >
            <circle
              cx="10"
              cy="7"
              r="3"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M4 17C4 13.6863 6.68629 11 10 11C13.3137 11 16 13.6863 16 17"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          Profile
        </a>
      </div>
    </header>
  );
}
