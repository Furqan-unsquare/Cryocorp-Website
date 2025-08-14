import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const IndustriesAnimatedSection2 = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const listContainerRef = useRef(null);
  const textRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const industries = [
    "Iron & Steel",
    "Medical &",
    "Hospitals",
    "Petrochemicals",
    "Fertilizers",
    "Pharmaceuticals",
    "Biotechnology",
    "Food",
    "Preservation &",
    "Processing",
    "Aviation",
    "Aqua & Fisheries"
  ];

  const ITEM_WIDTH = 300;
  const ITEM_HEIGHT = 120;

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (isMobile) {
        // Mobile - Automatic horizontal sliding
        const totalWidth = industries.length * ITEM_WIDTH;
        const duration = industries.length * 2; // 2 seconds per item for smooth auto-slide

        gsap.to(listContainerRef.current, {
          x: -totalWidth,
          duration: duration,
          ease: "none",
          repeat: -1
        });

      } else {
        // Desktop - Automatic vertical sliding (similar to mobile)
        const totalHeight = industries.length * ITEM_HEIGHT;
        const duration = industries.length * 2; // 2 seconds per item for smooth auto-slide

        gsap.to(listContainerRef.current, {
          y: -totalHeight,
          duration: duration,
          ease: "none",
          repeat: -1
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile, industries.length]);

  return (
    <section
      ref={sectionRef}
      className="h-screen snap-start bg-blue-600 text-white relative overflow-hidden flex items-center"
      style={{ 
        minHeight: '100vh',
        background: 'linear-gradient(to bottom right, #0a192f, #1e3a8a, #0f172a)'
      }}
    >
      <div className="max-w-7xl mx-auto w-full relative z-10 px-4">
        <div className={`grid grid-cols-1 lg:grid-cols-5 sm:gap-8 items-center h-full ${isMobile ? 'pt-12 gap-0' : ''}`}>

          {/* Left Content (Static Text) */}
          <div ref={textRef} className={`lg:col-span-2 ${isMobile ? 'mb-4' : ''}`}>
            <div className="transition-all duration-1000">
              <h2 className={`font-bold leading-tight ${isMobile ? 'text-2xl mb-3' : 'text-4xl md:text-6xl mb-6'}`}>
                Industries We Serve
              </h2>
              <p className={`opacity-90 leading-relaxed text-justify ${isMobile ? 'text-sm mb-3' : 'text-md mb-6'}`}>
                CryoCorp acts as a comprehensive partner to these businesses, providing engineering solutions in ASU or PSA Oxygen or Nitrogen generation, OEM quality genuine spares, and expert maintenance services, going beyond supplying products. We exists to reduce operational costs and increase profits of our clients.
              </p>
              <p className={`opacity-90 leading-relaxed text-justify ${isMobile ? 'text-sm mb-3' : 'text-md mb-6'}`}>
                Drawing on over 35+ years of combined industry experience, our focus is on addressing our clients' pain points and helping save costs across diverse Oxygen & Nitrogen Plant types and applications. Our aim is to ensure production continuity and extend the lifespan of valuable equipment for our clients globally. 
              </p>
            </div>
          </div>

          {/* Right Content - Industries List */}
          <div className={`lg:col-span-3 lg:pl-8 ${isMobile ? 'h-1/2' : ''}`}>
            <div
              ref={containerRef}
              className={`relative overflow-hidden ${isMobile ? 'h-64' : 'h-screen flex items-center'}`}
            >
              <div ref={listContainerRef} className={`flex ${isMobile ? 'flex-row' : 'flex-col'} w-full`}>
                {/* Original industries */}
                {industries.map((industry, index) => (
                  <div
                    key={industry}
                    className="flex items-start justify-start flex-shrink-0"
                    style={{ 
                      width: isMobile ? `${ITEM_WIDTH}px` : '100%',
                      height: `${ITEM_HEIGHT}px`
                    }}
                  >
                    <div className={`
                      font-light
                      transition-all duration-1000 transform
                      hover:text-blue-300 cursor-default
                      bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent
                      leading-tight tracking-tight text-start
                      whitespace-nowrap text-[#2C5EA3]
                      ${isMobile ? 'text-4xl font-medium text-[#77a8eb]' : 'md:text-8xl'}
                    `}>
                      {industry}
                    </div>
                  </div>
                ))}
                
                {/* Duplicate industries for seamless loop */}
                {industries.map((industry, index) => (
                  <div
                    key={`${industry}-dup`}
                    className="flex items-start justify-start flex-shrink-0"
                    style={{ 
                      width: isMobile ? `${ITEM_WIDTH}px` : '100%',
                      height: `${ITEM_HEIGHT}px`
                    }}
                  >
                    <div className={`
                      font-light
                      transition-all duration-1000 transform
                      hover:text-blue-300 cursor-default
                      bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent
                      leading-tight tracking-tight text-start
                      whitespace-nowrap text-[#2C5EA3]
                      ${isMobile ? 'text-4xl font-medium text-[#77a8eb]' : 'md:text-8xl'}
                    `}>
                      {industry}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesAnimatedSection2;
