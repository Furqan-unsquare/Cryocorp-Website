import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaArrowRight } from "react-icons/fa6";

const Benefits = () => {
  const [showReliabilityModal, setShowReliabilityModal] = useState(false);
  const [showCostModal, setShowCostModal] = useState(false);
  const [showMaintenanceModal, setShowMaintenanceModal] = useState(false);
  const [showEfficiencyModal, setShowEfficiencyModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
const [touchEndX, setTouchEndX] = useState(0);
  const ModalWrapper = ({ children, onClose }) => (
    <motion.div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );

  const handleTouchStart = (e: React.TouchEvent) => {
  setTouchStartX(e.touches[0].clientX);
};

const handleTouchMove = (e: React.TouchEvent) => {
  setTouchEndX(e.touches[0].clientX);
};

const handleTouchEnd = () => {
  const swipeDistance = touchStartX - touchEndX;
  if (swipeDistance > 50) {
    // Swipe Left
    nextSlide();
  } else if (swipeDistance < -50) {
    // Swipe Right
    prevSlide();
  }
};
  const ModalContent = ({ children }) => (
    <motion.div
      className="relative w-full max-w-7xl h-full max-h-[90vh] bg-white rounded-lg border-2 border-gray-200 shadow-2xl overflow-hidden"
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "100vw" }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 200,
        duration: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
  const features = [
    {
      number: "01",
      title: "Reliability",
      description: "Eliminate Plant Downtime",
      image:
        "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400",
      colorClass: "text-benefit-01",
    },
    {
      number: "02",
      title: "Cost",
      description: "Reduce Operations Cost",
      image:
        "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400",
      colorClass: "text-benefit-02",
    },
    {
      number: "03",
      title: "Maintenance",
      description: "Extend Equipment Lifespan",
      image:
        "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=400",
      colorClass: "text-benefit-03",
    },
    {
      number: "04",
      title: "Efficiency",
      description: "Ensure Production Continuity",
      image:
        "https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&w=400",
      colorClass: "text-benefit-04",
    },
  ];

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setShowReliabilityModal(false);
        setShowCostModal(false);
        setShowMaintenanceModal(false);
        setShowEfficiencyModal(false);
      }
    };

    if (
      showReliabilityModal ||
      showCostModal ||
      showMaintenanceModal ||
      showEfficiencyModal
    ) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [
    showReliabilityModal,
    showCostModal,
    showMaintenanceModal,
    showEfficiencyModal,
  ]);

  const handleReliabilityClick = () => {
    setShowReliabilityModal(true);
  };

  const handleCostClick = () => {
    setShowCostModal(true);
  };

  const handleMaintenanceClick = () => {
    setShowMaintenanceModal(true);
  };

  const handleEfficiencyClick = () => {
    setShowEfficiencyModal(true);
  };

  const nextSlide = () => {
  setCurrentSlide((prev) => (prev + 1) % features.length);
};

const prevSlide = () => {
  setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
};

const ReliabilityModal = () => (
  <ModalWrapper onClose={() => setShowReliabilityModal(false)}>
    <ModalContent>
      <div className="fixed inset-0 z-[99999] bg-black/50 flex items-center justify-center p-4 sm:p-8 overflow-y-auto">
        <div className="relative w-full max-w-7xl h-full sm:h-full max-h-none sm:max-h-[90vh] bg-white rounded-lg border-2 border-gray-200 shadow-2xl overflow-hidden animate-slide-in-right">
          <div className="absolute inset-0">
            <img
              src="benefits/benefits2.png"
              alt="Reliability Process Flow"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="absolute inset-0 bg-blue-900/70" />
          <button
            onClick={() => setShowReliabilityModal(false)}
            className="absolute top-6 right-6 z-20 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors"
          >
            <X className="h-6 w-6 text-white" />
          </button>
          <div className="relative z-10 h-full flex items-center p-4 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-[20%_80%] gap-4 sm:gap-8 w-full items-center">
              <div className="text-left space-y-4 sm:space-y-6">
                <div className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-none">
                  01
                </div>
                <div className="space-y-2 sm:space-y-4">
                  <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
                    Reliability
                  </h2>
                  <p className="text-sm sm:text-xl lg:text-2xl text-white/90 leading-relaxed">
                    Eliminate Plant Downtime
                  </p>
                  <ol className="text-white/90 list-decimal pl-4 marker:font-bold space-y-1 sm:space-y-2">
                    <li className="text-xs sm:text-base"> Cut-out downtime</li>
                    <li className="text-xs sm:text-base"> 24-hour crisis response</li>
                    <li className="text-xs sm:text-base"> Save up to $463 per avoided shutdown</li>
                  </ol>
                  <p className="text-xs sm:text-base sm:text-left text-white/90">
                    Take our quick Assessment Test to evaluate your plant's efficiency and start saving costs today!
                  </p>
                  <button onClick={() => window.location.href = "/quiz"} className="bg-white text-black px-4 sm:px-6 py-2 sm:py-3 flex items-center gap-2 rounded-full hover:bg-gray-300 transition-colors text-sm sm:text-base border border-black">
                    <p>Take test</p>
                    <FaArrowRight/>
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center lg:justify-end">
                <div className="text-white text-[38px]">Struggling with costly unplanned downtime? </div>
                <div className="rounded-lg">
                  <img
                    src="benefits/benefits1.png"
                    alt="Reliability Process Flow"
                    className="w-full max-w-full sm:w-[800px] h-auto sm:h-[400px] rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalContent>
  </ModalWrapper>
);

const CostModal = () => (
  <ModalWrapper onClose={() => setShowCostModal(false)}>
    <ModalContent>
      <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 sm:p-8 overflow-y-auto">
        <div className="relative w-full max-w-7xl h-full sm:h-full max-h-none sm:max-h-[90vh] bg-white rounded-lg border-2 border-gray-200 shadow-2xl overflow-hidden animate-slide-in-right">
          <div className="absolute inset-0">
            <img
              src="benefits/benefits3.png"
              alt="Cost Reduction Background"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="absolute inset-0 bg-[rgba(179,210,214,0.7)]"></div>
          <button
            onClick={() => setShowCostModal(false)}
            className="absolute top-6 right-6 z-20 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors"
          >
            <X className="h-6 w-6 text-white" />
          </button>
          <div className="relative z-10 h-full flex items-center p-4 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-[20%_80%] gap-4 sm:gap-6 w-full items-center">
              <div className="text-left space-y-4 sm:space-y-8">
                <div className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-none">
                  02
                </div>
                <div className="space-y-2 sm:space-y-4">
                  <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
                    Cost
                  </h2>
                  <p className="text-sm sm:text-xl lg:text-2xl text-white/90 leading-relaxed">
                    Reduce Operations Cost
                  </p>
                  <p className="text-sm sm:text-base text-justify text-white/90">
                    Ready to see how much you can save? 
                  </p>
                  <p className="text-sm sm:text-base text-justify text-white/90">
                    Take our quick Plant Assessment and start cutting costs today! 
                  </p>
                  <button onClick={() => window.location.href = "/quiz"} className="bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center gap-2 hover:bg-gray-300 transition-colors text-sm sm:text-base border border-black">
                    <p>Take test</p>
                    <FaArrowRight/>
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-center justify-between lg:justify-end">
                <div className="text-white text-[30px]">Worried about high maintenance bills and surprise breakdowns?</div>
                <div className="rounded-lg">
                  <img
                    src="benefits/benefits4.png"
                    alt="Cost Analysis Chart"
                    className="w-full max-w-full sm:w-[630px] h-auto sm:h-[500px] rounded-lg shadow-lg object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalContent>
  </ModalWrapper>
);

const MaintenanceModal = () => (
  <ModalWrapper onClose={() => setShowMaintenanceModal(false)}>
    <ModalContent>
      <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 sm:p-8 overflow-y-auto">
        <div className="relative w-full max-w-7xl h-full sm:h-full max-h-none sm:max-h-[90vh] bg-white rounded-lg border-2 border-gray-200 shadow-2xl overflow-hidden animate-slide-in-right">
          <div className="absolute inset-0">
            <img
              src="benefits/benefits5.png"
              alt="Maintenance Background"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="absolute inset-0 bg-[rgba(156,203,171,0.7)]" />
          <button
            onClick={() => setShowMaintenanceModal(false)}
            className="absolute top-6 right-6 z-20 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors"
          >
            <X className="h-6 w-6 text-white" />
          </button>
          <div className="relative z-10 h-full flex items-center p-4 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-[20%_80%] gap-4 sm:gap-6 w-full items-center">
              <div className="text-left space-y-4 sm:space-y-4">
                <div className="text-3xl sm:text-4xl lg:text-7xl font-bold text-white leading-none">
                  03
                </div>
                <div className="space-y-2 sm:space-y-4">
                  <h2 className="text-2xl sm:text-3xl lg:text-6xl font-bold text-white leading-tight">
                    Maintenance
                  </h2>
                  <p className="text-sm sm:text-lg lg:text-2xl text-white leading-relaxed">
                    Extend Equipment Lifespan
                  </p>
                  <ol className="text-white list-decimal pl-4 marker:font-bold space-y-1 sm:space-y-2">
                    <li className="text-xs sm:text-base"> Prolonged equipment lifespan with fewer breakdowns</li>
                    <li className="text-xs sm:text-base"> Reduced spare parts consumption due to quality maintenance</li>
                    <li className="text-xs sm:text-base"> Improved operational efficiency and cost savings</li>
                  </ol>
                  <p className="text-xs sm:text-base text-white">
                    Take our quick Assessment Test to evaluate your plant's efficiency and start saving costs today!
                  </p>
                  <button onClick={() => window.location.href = "/quiz"} className="bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center gap-2 hover:bg-gray-300 transition-colors text-sm sm:text-base border border-black">
                    <p>Take test</p>
                    <FaArrowRight/>
                  </button>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="rounded-lg p-4">
                  <img
                    src="benefits/benefits-6.png"
                    alt="Maintenance Process"
                    className="w-full sm:w-[500px] h-auto sm:h-[400px] rounded-lg shadow-lg object-cover overflow-visible"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalContent>
  </ModalWrapper>
);

const EfficiencyModal = () => (
  <ModalWrapper onClose={() => setShowEfficiencyModal(false)}>
    <ModalContent>
      <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 sm:p-8 overflow-y-auto">
        <div className="relative w-full max-w-7xl h-full sm:h-full max-h-none sm:max-h-[90vh] bg-white rounded-lg border-2 border-gray-200 shadow-2xl overflow-hidden animate-slide-in-right">
          <div className="absolute inset-0">
            <img
              src="benefits/benefits7.png"
              alt="Efficiency Background"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="absolute inset-0 bg-[rgba(80,83,84,0.7)]" />
          <button
            onClick={() => setShowEfficiencyModal(false)}
            className="absolute top-6 right-6 z-20 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors"
          >
            <X className="h-6 w-6 text-white" />
          </button>
          <div className="relative z-10 h-full flex items-center p-4 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-[20%_80%] gap-4 sm:gap-6 w-full items-center">
              <div className="text-left space-y-2">
                <div className="text-5xl sm:text-6xl lg:text-5xl font-bold text-white leading-none">
                  04
                </div>
                <div className="space-y-2 sm:space-y-2">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                    Efficiency
                  </h2>
                  <p className="text-sm sm:text-lg lg:text-xl text-white/90 leading-relaxed">
                    Ensure Production Continuity
                  </p>
                  <ol className="text-white/90 list-decimal pl-4 marker:font-bold space-y-1 sm:space-y-2">
                    <li className="text-xs sm:text-base"> Consistent oxygen purity (93-95% for PSA, 99%+ for ASU)</li>
                    <li className="text-xs sm:text-base"> Uninterrupted operations and fast problem resolution</li>
                    <li className="text-xs sm:text-base"> Avoid production delays and financial losses from breakdowns (up to ₹75,000 saved per incident)</li>
                    <li className="text-xs sm:text-base"> International safety standards for peace of mind</li>
                  </ol>
                  <p className="text-sm sm:text-base text-justify text-white/90">
                    Take our quick Assessment Test to evaluate your plant's efficiency and start saving costs today!
                  </p>
                  <button onClick={() => window.location.href = "/quiz"} className="bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center gap-2 hover:bg-gray-300 transition-colors text-sm sm:text-base border border-black border border-black">
                    <p>Take test</p>
                    <FaArrowRight/>
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-center justify-between lg:justify-end text-white space-y-4 sm:space-y-6">
                <div className="hidden sm:block text-[48px]">What Sets Us Apart</div>
                <div className="rounded-lg max-w-full">
                  <img
                    src="benefits/benefits8.png"
                    alt="Efficiency Dashboard"
                    className="w-full max-w-[800px] h-auto object-contain rounded-lg shadow-lg"
                  />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 text-center mt-2 sm:mt-3 px-2">
                  <div className="max-w-[120px] mx-auto">
                    <p className="font-medium text-xs sm:text-sm leading-tight">Zero Downtime</p>
                    <p className="text-white/70 text-[8px] sm:text-[10px] leading-snug mt-1">Minimizing interruptions with fast service</p>
                  </div>
                  <div className="max-w-[120px] mx-auto">
                    <p className="font-medium text-xs sm:text-sm leading-tight">Smart Optimization</p>
                    <p className="text-white/70 text-[8px] sm:text-[10px] leading-snug mt-1">Boosting output and efficiency</p>
                  </div>
                  <div className="max-w-[120px] mx-auto">
                    <p className="font-medium text-xs sm:text-sm leading-tight">Proactive Maintenance</p>
                    <p className="text-white/70 text-[8px] sm:text-[10px] leading-snug mt-1">Preventing features with regular check-ups</p>
                  </div>
                  <div className="max-w-[120px] mx-auto">
                    <p className="font-medium text-xs sm:text-sm leading-tight">No Waiting for Spares</p>
                    <p className="text-white/70 text-[8px] sm:text-[10px] leading-snug mt-1">Ensuring parts availability for repairs</p>
                  </div>
                  <div className="max-w-[120px] mx-auto">
                    <p className="font-medium text-xs sm:text-sm leading-tight">Expert Team</p>
                    <p className="text-white/70 text-[8px] sm:text-[10px] leading-snug mt-1">Providing skilled engineers and training</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalContent>
  </ModalWrapper>
);

  const getClickHandler = (title) => {
    switch (title) {
      case "Reliability":
        return handleReliabilityClick;
      case "Cost":
        return handleCostClick;
      case "Maintenance":
        return handleMaintenanceClick;
      case "Efficiency":
        return handleEfficiencyClick;
      default:
        return undefined;
    }
  };

  return (
    <>
      <section className="py-20 bg-background sm:min-h-screen">
  <div className="w-full px-8 lg:px-16">
    {/* Desktop Grid - hidden on mobile */}
    <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
      {features.map((feature, index) => (
        <div
          key={feature.number}
          className="flip-card h-[400px] lg:h-[700px] w-full"
        >
          <div className="flip-card-inner w-full h-full">
            {/* Front of the card */}
            <Card
              className="flip-card-front absolute w-full h-full border-0 shadow-none bg-background flex flex-col justify-center items-start px-2 lg:px-4 xl:px-8 2xl:px-12 py-20 cursor-pointer hover:bg-accent/10 transition-colors"
              onClick={getClickHandler(feature.title)}
            >
              <div
                className={`text-8xl lg:text-9xl font-bold mb-8 ${feature.colorClass} leading-none`}
              >
                {feature.number}
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
                {feature.title}
              </h3>
              <p className="text-md text-muted-foreground mb-12 leading-relaxed">
                {feature.description}
              </p>
              <Button
                variant="outline"
                size="lg"
                className="border-border text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 rounded-full px-8 py-3 text-lg font-medium"
              >
                View More <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Card>

            {/* Back of the card with image */}
            <Card
              className="flip-card-back absolute w-full h-full border-0 overflow-hidden shadow-none cursor-pointer hover:opacity-90 transition-opacity"
              onClick={getClickHandler(feature.title)}
            >
              <div className="relative w-full h-full">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
                <div className="absolute inset-0 flex flex-col justify-center p-12">
                  <div className="text-6xl lg:text-7xl font-bold text-white mb-4 leading-none">
                    {feature.number}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-white/90 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      ))}
    </div>

    {/* Mobile Carousel - visible only on mobile */}
    <div className="md:hidden">
      <div className="relative">
        {/* Carousel Container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {features.map((feature, index) => (
              <div
                key={feature.number}
                className="w-full flex-shrink-0 shadow-lg rounded-lg border-2 border-gray-100"
              >
                <div className="flip-card h-[400px] w-full ">
                  <div className="flip-card-inner w-full h-full">
                    {/* Front of the card */}
                    <Card
                      className="flip-card-front absolute w-full h-full border-0 shadow-none bg-background flex flex-col justify-center items-center px-8 py-12 cursor-pointer hover:bg-accent/10 transition-colors"
                      onClick={getClickHandler(feature.title)}
                    >
                      <div
                        className={`text-6xl font-bold mb-6 ${feature.colorClass} leading-none`}
                      >
                        {feature.number}
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-3 leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                        {feature.description}
                      </p>
                       <Button
                variant="outline"
                size="lg"
                className="border-border text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 rounded-full px-8 py-3 text-lg font-medium"
              >
                View More <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
                    </Card>

                    {/* Back of the card with image */}
                    <Card
                      className="flip-card-back absolute w-full h-full border-0 overflow-hidden shadow-none cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={getClickHandler(feature.title)}
                    >
                      <div className="relative w-full h-full">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
                        <div className="absolute inset-0 flex flex-col justify-end p-8">
                          <div className="text-5xl font-bold text-white mb-3 leading-none">
                            {feature.number}
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                            {feature.title}
                          </h3>
                          <p className="text-base text-white/90 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-primary' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Modals */}
      <AnimatePresence>
        {showReliabilityModal && <ReliabilityModal />}
        {showCostModal && <CostModal />}
        {showMaintenanceModal && <MaintenanceModal />}
        {showEfficiencyModal && <EfficiencyModal />}
      </AnimatePresence>
    </>
  );
};

export default Benefits;
