interface HeroBannerProps {
  heading: string;
  text: string;
}

export default function HeroBanner({ heading, text }: HeroBannerProps) {
  return (
    <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-yellow-400 h-[32rem] flex items-center">
      <div className="max-w-7xl mx-auto px-8 w-full">
        <div className="flex items-center justify-between">
          {/* Left side - Heading */}
          <div className="flex-1">
            <h1 className="text-6xl font-bold text-gray-900">
              {heading}
            </h1>
          </div>
          
          {/* Right side - Text */}
          <div className="flex-1 pl-8">
            <p className="text-2xl text-gray-700">
              {text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
