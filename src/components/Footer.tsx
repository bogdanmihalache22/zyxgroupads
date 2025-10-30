import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-screen left-1/2 -translate-x-1/2 relative bg-yellow-400 text-black py-12 border-t border-gray-400">
      <div className="max-w-[96rem] mx-auto px-8 flex flex-col w-full">
        <div className="flex flex-col items-start w-full">
          <Link href="/contact" className="flex items-center space-x-3 group mb-5">
            <span className="text-[56px] font-semibold leading-[1.1]">Get in touch</span>
            <span className="inline-flex items-center justify-center w-9 h-9 border border-black rounded-full transition-colors group-hover:bg-black">
              <svg width="18" height="18" fill="none" viewBox="0 0 20 20" stroke="currentColor" className="text-black group-hover:text-white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10h10m0 0l-4-4m4 4l-4 4" />
              </svg>
            </span>
          </Link>
          <hr className="w-full border-black my-3" />
        </div>
        {/* 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full mt-5">
          <div className="font-bold uppercase text-base tracking-wide">Column 1</div>
          <div className="font-bold uppercase text-base tracking-wide">Column 2</div>
          <div className="font-bold uppercase text-base tracking-wide">Column 3</div>
          <div className="font-bold uppercase text-base tracking-wide">Column 4</div>
        </div>
      </div>
    </footer>
  );
}
