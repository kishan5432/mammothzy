export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 mt-auto">
      <div className="flex flex-col items-center gap-3 py-8 text-center">
        <div className="flex items-center gap-2">
          <svg
            width="40"
            height="40"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 4C10.5 4 6 8.5 6 14C6 16 6.5 17.8 7.5 19.3L6 28L10 26L12 27C13.2 27.6 14.6 28 16 28C21.5 28 26 23.5 26 18C26 12.5 21.5 8 16 8M10 12C10 10.9 10.9 10 12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14C10.9 14 10 13.1 10 12M18 12C18 10.9 18.9 10 20 10C21.1 10 22 10.9 22 12C22 13.1 21.1 14 20 14C18.9 14 18 13.1 18 12M8 18C8 16 9 14 10.5 13L9 16C9 16 11 18 13 18H19C21 18 23 16 23 16L21.5 13C23 14 24 16 24 18C24 20 22 22 20 23H12C10 22 8 20 8 18Z"
              fill="currentColor"
            />
          </svg>
          <span className="text-xl font-semibold text-gray-900">
            mammothzy
          </span>
        </div>

        <p className="text-sm text-gray-500">
          Marketplace for searching, filtering and instantly booking team
          activities
        </p>

        <div className="flex items-center gap-3">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2"
                y="2"
                width="16"
                height="16"
                rx="4"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="15" cy="5" r="0.5" fill="currentColor" />
            </svg>
          </a>

          <a href="#" className="text-gray-600 hover:text-gray-900">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 4.5L11 11.5L7 7.5L2 12.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13 4.5H18V9.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <a href="#" className="text-gray-600 hover:text-gray-900">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2"
                y="2"
                width="16"
                height="16"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M6 8V14M10 6V14M14 10V14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </a>

          <a href="#" className="text-gray-600 hover:text-gray-900">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2"
                y="5"
                width="16"
                height="11"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M2 7L10 12L18 7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <p className="text-sm text-gray-400">Copyright © 2024</p>
      </div>
    </footer>
  );
}
