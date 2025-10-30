interface HeroBannerProps {
  heading: string;
  text: string;
  bgColor?: string;
  headingClassName?: string;
}

export default function HeroBanner({ heading, text, bgColor = "bg-yellow-400", headingClassName = "text-6xl" }: HeroBannerProps) {
  return (
    <section className={`w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[32rem] flex items-center ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-8 w-full">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h1 className={`${headingClassName} font-bold text-gray-900`}>
              {heading}
            </h1>
          </div>
          
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
