'use client';

import { useState } from "react";

interface PresentationLargeCardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

export default function PresentationLargeCard({
  title,
  description,
  imageUrl = "/mintosko-WbN3XSUvlRc-unsplash.jpg",
}: PresentationLargeCardProps) {
  return (
    <section className="w-full bg-white py-16">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_7fr] gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">Display Formats</p>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
            <p className="text-gray-700 text-base leading-relaxed">{description}</p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-full">
              <div
                className="aspect-[16/9] bg-center bg-cover rounded-md border border-gray-200"
                style={{ backgroundImage: `url(${imageUrl})` }}
              />
              <hr className="border-gray-300 mt-4" />
            </div>
          </div>
          <div className="mt-6 lg:col-start-2">
            <AccordionRows />
          </div>
        </div>
      </div>
    </section>
  );
}

function AccordionRows() {
  const [openSpecs, setOpenSpecs] = useState(false);
  const [openBreakpoints, setOpenBreakpoints] = useState(false);

  const handleAccordionClick = (e: React.MouseEvent, toggleFn: () => void) => {
    e.stopPropagation();
    toggleFn();
  };

  return (
    <div className="mt-6">
      <button
        type="button"
        className="w-full flex items-center justify-between py-2"
        onClick={(e) => handleAccordionClick(e, () => setOpenSpecs((v) => !v))}
        aria-expanded={openSpecs}
      >
        <h2 className="text-lg font-semibold">2 Column Specs</h2>
        <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full font-bold ${openSpecs ? 'bg-yellow-400 text-black' : 'bg-gray-200 text-gray-900'}`}>
          {openSpecs ? '−' : '+'}
        </span>
      </button>
      {openSpecs && (
        <div className="mt-4 border-t">
          {[
            { label: '1 Logo', value: 'File type: transparent PNG or EPS' },
            { label: '1 Headline', value: 'Character limit: 65' },
            { label: '1 Descriptor Message', value: 'Character limit: 50' },
            { label: '1 CTA Message', value: 'Character Limit: 15\nClick-through URL in HTTPS format' },
            { label: '1 Desktop Image', value: 'File type: JPG or PNG free of text, logo or branding\nDimensions: 960x270px\nSafe zone: 270px on each side' },
            { label: '1 Mobile Image', value: 'File type: JPG or PNG free of text, logo or branding\nDimensions: 828x760px (retina display)\nSafe zone: 80px on each side' },
          ].map((row, idx) => (
            <div key={idx} className="grid grid-cols-2 gap-6 py-4 border-b last:border-b-0">
              <div className="text-[10px] md:text-xs uppercase tracking-wider font-semibold text-gray-700">{row.label}</div>
              <div className="text-sm whitespace-pre-line text-gray-800">{row.value}</div>
            </div>
          ))}
        </div>
      )}

      <hr className="border-gray-200 my-6" />

      <button
        type="button"
        className="w-full flex items-center justify-between py-2"
        onClick={(e) => handleAccordionClick(e, () => setOpenBreakpoints((v) => !v))}
        aria-expanded={openBreakpoints}
      >
        <h2 className="text-lg font-semibold">2 Column Breakpoints</h2>
        <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full font-bold ${openBreakpoints ? 'bg-yellow-400 text-black' : 'bg-gray-200 text-gray-900'}`}>
          {openBreakpoints ? '−' : '+'}
        </span>
      </button>
      {openBreakpoints && (
        <div className="mt-4 border-t">
          {[{ label: 'Desktop', size: '1605×270' }, { label: 'Desktop', size: '1280×270' }, { label: 'Tablet', size: '970×270' }, { label: 'Tablet', size: '728×270' }, { label: 'Mobile', size: '—' }].map((bp, i) => (
            <div key={i} className="grid grid-cols-2 gap-6 py-4 border-b last:border-b-0">
              <div className="text-[10px] md:text-xs uppercase tracking-wider font-semibold text-gray-700">{bp.label}</div>
              <div className="text-sm text-gray-800">{bp.size}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


