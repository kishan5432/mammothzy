import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto h-20 flex items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="mammothzy" width={112} height={112} className="h-14 w-auto object-contain" quality={100} />
        </div>

        <a href="#" className="flex items-center gap-1.5 text-sm text-gray-700 hover:text-gray-900">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
              <path
                d="M4 17C4 13.69 6.69 11 10 11C13.31 11 16 13.69 16 17"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
              />
            </svg>
          </span>
          Profile
        </a>
      </div>
    </header>
  );
}
