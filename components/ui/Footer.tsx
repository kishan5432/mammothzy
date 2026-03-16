export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 mt-auto">
      <div className="flex flex-col items-center gap-3 py-8 sm:py-10 px-4 text-center">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="mammothzy" className="h-20 w-auto object-contain" />
        </div>

        <p className="text-sm text-gray-500 max-w-2xl">
          Marketplace for searching, filtering and instantly booking team activities
        </p>

        <div className="flex items-center gap-3 mt-1">
          {/* Facebook */}
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
              <path d="M11 10H13L13.5 8H11V7C11 6.45 11.45 6 12 6H13.5V4H12C10.34 4 9 5.34 9 7V8H7V10H9V16H11V10Z" fill="currentColor" />
            </svg>
          </a>
          {/* Instagram */}
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="14.5" cy="5.5" r="0.75" fill="currentColor" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
              <path d="M6 8.5V14M6 6V6.01M10 14V11C10 9.9 10.9 9 12 9C13.1 9 14 9.9 14 11V14M10 8.5V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </a>
          {/* Email */}
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="5" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
              <path d="M2 7L10 12L18 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <p className="text-sm text-gray-400">Copyright © 2024</p>
      </div>
    </footer>
  );
}
