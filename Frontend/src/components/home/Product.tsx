import React from 'react';

const PromotionBanner = () => {
  return (
    <div className="relative w-full bg-[#1B365D]">
      {/* Responsive Background Image */}
      <picture>
        <source media="(max-width: 768px)" srcSet="/promotion-mobile.png" />
        <img
          src="/promotion-desktop.png"
          alt="Promotion"
          className="w-full max-h-screen object-contain xl:object-cover"
        />
      </picture>

      {/* CTA Button (custom position) */}
      <a
        href="https://www.appsheet.com/start/aa652aa4-fbf5-4527-a453-574efcd9aa28"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute left-0 bottom-[12vh] md:left-[6vw] md:bottom-[20vh] z-10"
      >
        <button className="bg-cyan-300 text-white text-2xl uppercase font-bold px-6 py-2 rounded-full shadow hover:bg-gray-200 transition-all ml-24">
          Try it Now!
        </button>
      </a>
    </div>
  );
};

export default PromotionBanner;
