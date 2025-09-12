export default function FilterBar() {
  return (
    <section className="w-full bg-white py-16">
      <div className="w-full">
        <div className="flex items-center gap-8">
          <span className="text-black font-bold text-sm uppercase tracking-wide">FILTER</span>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="text-black font-bold text-sm uppercase tracking-wide">Device</span>
              <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="text-black font-bold text-sm uppercase tracking-wide">Website</span>
              <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="text-black font-bold text-sm uppercase tracking-wide">Type</span>
              <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
