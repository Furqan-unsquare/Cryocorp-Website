import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IndustriesAnimatedSection = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const industriesRef = useRef([]);
  const textRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const industries = [
    "Healthcare",
    "Hospitals",
    "Petrochemicals",
    "Fertilizers",
    "Pharmaceuticals",
    "Biotechnology",
    "Food Processing",
    "Preservation",
    "Processing",
    "Aviation Industry",
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
        // Mobile - Horizontal scrolling
        const totalWidth = industries.length * ITEM_WIDTH;
        const containerWidth = window.innerWidth;
        const scrollLength = totalWidth - containerWidth + 50;

        // Pin the section
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${scrollLength}`,
          pin: true,
          scrub: false,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        });

        // Animate horizontal scroll
        gsap.fromTo(
          industriesRef.current,
          { x: 0 },
          {
            x: -scrollLength,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: `+=${scrollLength}`,
              scrub: 0.8,
            }
          }
        );

      } else {
        // Desktop - Vertical scrolling
        const totalHeight = industries.length * ITEM_HEIGHT;
        const containerHeight = window.innerHeight;
        const scrollLength = totalHeight - containerHeight + 400; // Increased buffer

        // Pin the section
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${scrollLength}`,
          pin: true,
          scrub: false,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        });

        // Animate vertical scroll - Fixed to show all items properly
        gsap.fromTo(
          industriesRef.current,
          { y: 100 }, // Start with a slight offset to show first items
          {
            y: -(totalHeight - containerHeight + 200), // End position
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: `+=${scrollLength}`,
              scrub: 0.5,
            }
          }
        );
      }

      // Keep the text fixed
      const textScrollLength = isMobile 
        ? industries.length * ITEM_WIDTH - window.innerWidth + 50
        : industries.length * ITEM_HEIGHT - window.innerHeight + 400;

      gsap.fromTo(
        textRef.current,
        { y: 0 },
        {
          y: 0,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: `+=${textScrollLength}`,
            scrub: true,
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile, industries.length]);

  // Populate industriesRef with refs for each industry item
  const addToRefs = (el) => {
    if (el && !industriesRef.current.includes(el)) {
      industriesRef.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="h-screen snap-start bg-blue-600 text-white relative overflow-hidden flex items-center"
      style={{ 
        minHeight: '100vh',
        background: 'linear-gradient(to bottom right, #0a192f, #1e3a8a, #0f172a)'
      }}
    >
      {/* Removed background decoration circles */}
      
      <div className="max-w-7xl mx-auto w-full relative z-10 px-4">
        <div className={`grid grid-cols-1 lg:grid-cols-5 sm:gap-8 items-center h-full ${isMobile ? 'pt-12 gap-0' : ''}`}>

          {/* Left Content (Pinned Text) */}
          <div ref={textRef} className={`lg:col-span-2 ${isMobile ? 'mb-4' : ''}`}>
            <div className="sticky top-12 transition-all duration-1000">
              <h2 className={`font-bold leading-tight ${isMobile ? 'text-2xl mb-3' : 'text-4xl md:text-6xl mb-6'}`}>
                Industries We Serve
              </h2>
              <p className={`opacity-90 leading-relaxed ${isMobile ? 'text-sm mb-3' : 'text-md mb-6'}`}>
               CryoCorp acts as a comprehensive partner to these businesses, providing engineering solutions in ASU or PSA Oxygen or Nitrogen generation, OEM quality genuine spares, and expert maintenance services, going beyond supplying products. We exists to reduce operational costs and increase profits of our clients.


              </p>
              <p className={`opacity-80 leading-relaxed ${isMobile ? 'text-xs mb-3' : 'text-md mb-6'}`}>
                Drawing on over 35+ years of combined industry experience, our focus is on addressing our clients' pain points and helping save costs across diverse Oxygen & Nitrogen Plant types and applications. Our aim is to ensure production continuity and extend the lifespan of valuable equipment for our clients globally. 
              </p>
            </div>
          </div>

          {/* Right Content - Industries List */}
          <div className={`lg:col-span-3 lg:pl-8 ${isMobile ? 'h-1/2' : ''}`}>
            <div
              ref={containerRef}
              className={`relative overflow-hidden ${isMobile ? 'h-64' : 'h-screen flex items-start pt-20'}`}
            >
              <div className={`flex ${isMobile ? 'flex-row' : 'flex-col'} w-full`}>
                {industries.map((industry, index) => (
                  <div
                    key={industry}
                    ref={addToRefs}
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

      {/* Removed the bottom gradient that was causing the white background */}
    </section>
  );
};

export default IndustriesAnimatedSection;
