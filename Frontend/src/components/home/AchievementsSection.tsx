import React, { useEffect, useRef, useState } from 'react';

const AnimatedNumber = ({ value, shouldAnimate }: { value: string; shouldAnimate: boolean }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const animationRef = useRef<number>();
  const startTimeRef = useRef<number>();
  const prevValueRef = useRef(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Only animate if shouldAnimate is true and hasn't animated before
    if (!shouldAnimate || hasAnimated.current) return;

    // Extract numeric part and suffix (like + or %)
    const numericValue = parseInt(value.replace(/\D/g, '')) || 0;
    
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      
      const progress = Math.min((timestamp - startTimeRef.current) / 2000, 1);
      const easedProgress = progress < 0.5 
        ? 2 * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      
      const currentValue = Math.floor(
        prevValueRef.current + (numericValue - prevValueRef.current) * easedProgress
      );
      
      setDisplayValue(currentValue);
      
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayValue(numericValue); // Ensure final value is exact
        hasAnimated.current = true;
      }
    };

    prevValueRef.current = displayValue;
    startTimeRef.current = undefined;
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [value, shouldAnimate]);

  // Reset animation state when shouldAnimate becomes false
  useEffect(() => {
    if (!shouldAnimate) {
      hasAnimated.current = false;
      setDisplayValue(0);
    }
  }, [shouldAnimate]);

  return (
    <>
      {displayValue.toLocaleString()}
      {value.replace(/\d+/g, '')} {/* Append suffix */}
    </>
  );
};

const AchievementsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const achievements = [
    { number: "25", label: "Exporting Countries" },
    { number: "80%", label: "On Time Delivery" },
    { number: "35+", label: "Years of Combined Experience" },
    { number: "450+", label: "Clients" },
    { number: "9000+", label: "Products" },
    { number: "20+", label: "Major Machinery" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
          // Only trigger animation when section is sufficiently visible
          setIsVisible(true);
          setHasTriggered(true);
        } else if (!entry.isIntersecting && entry.intersectionRatio < 0.1) {
          // Reset when section is completely out of view
          setIsVisible(false);
          // Don't reset hasTriggered to prevent re-animation on re-entry
        }
      },
      { 
        threshold: [0, 0.1, 0.3, 0.5, 0.7, 1],
        rootMargin: '-50px 0px -50px 0px' // Only trigger when section is well into view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-10 sm:py-20 px-4 bg-primary text-white overflow-hidden sm:min-h-[120vh] flex items-end"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="images.png"
          alt="Industrial machinery background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto w-[95%]">
        <div className="text-left mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-white transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-8'
          }`}>
            Our Achievements
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-16">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className={`text-left transition-all duration-1000 ${
                isVisible 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-12'
              }`}
              style={{ 
                transitionDelay: `${index * 0.1 + 0.2}s` // Stagger animation after title
              }}
            >
              <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-none">
                <AnimatedNumber 
                  value={achievement.number} 
                  shouldAnimate={isVisible && hasTriggered}
                />
              </div>
              <div className="text-lg md:text-xl text-white/90 leading-tight">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;