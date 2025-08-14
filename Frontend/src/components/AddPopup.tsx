import React, { useState, useEffect } from "react";
import { X, Play, MessageCircle, Search, Calendar, Phone, Mic } from "lucide-react";

const StepwisePopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const steps = [
    {
      id: 1,
      step: "Step 1",
      title: "Test",
      subtitle: "Assess your plant efficiency",
      description: "Take our comprehensive quiz to evaluate your current plant performance and identify areas for improvement.",
      gradient: "from-teal-500 to-cyan-500",
      icon: <Play className="w-5 h-5" />,
      actions: [
        {
          text: "TEST LINK",
          path: "/quiz",
          primary: true
        }
      ]
    },
    {
      id: 2,
      step: "Step 2", 
      title: "Clarify",
      subtitle: "Get answers on doubts or questions",
      description: "Connect with our AI-powered voice and text agents to clarify any questions about your plant operations.",
      gradient: "from-cyan-500 to-blue-500",
      icon: <MessageCircle className="w-5 h-5" />,
      actions: [
        {
          text: "WhatsApp Chat",
          path: "/whatsapp",
          primary: false,
          icon: <MessageCircle className="w-4 h-4" />
        },
        // {
        //   text: "CALL", 
        //   path: "/whatsapp",
        //   primary: false,
        //   icon: <Phone className="w-4 h-4" />
        // }
      ]
    },
    {
      id: 3,
      step: "Step 3",
      title: "Explore", 
      subtitle: "Search for the spares and send us enquiry",
      description: "Browse our comprehensive spare parts catalog and submit inquiries for the components you need.",
      gradient: "from-teal-600 to-green-500",
      icon: <Search className="w-5 h-5" />,
      actions: [
        {
          text: "LINK TO APP",
          path: "https://www.appsheet.com/start/aa652aa4-fbf5-4527-a453-574efcd9aa28",
          primary: true
        }
      ]
    },
    {
      id: 4,
      step: "Step 4",
      title: "Connect",
      subtitle: "Schedule a free consultation",
      description: "Book a complimentary consultation with our experts to discuss your specific requirements and solutions.",
      gradient: "from-cyan-600 to-teal-600", 
      icon: <Calendar className="w-5 h-5" />,
      actions: [
        {
          text: "BOOK NOW",
          path: "https://calendly.com/admin-cryocorp/new-meeting",
          primary: true
        }
      ]
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => setShowPopup(false);

  const handleNavigation = (path) => {
    closePopup();
    window.location.href = path;
    setTimeout(() => {
      console.log(`Navigate to: ${path}`);
    }, 300);
  };

  return (
    <>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        
        @keyframes slideIn {
          from { 
            opacity: 0;
            transform: translateY(-50px) scale(0.95);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes slideOut {
          from { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          to { 
            opacity: 0;
            transform: translateY(50px) scale(0.95);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      
      {showPopup && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4"
          style={{
            animation: showPopup ? 'fadeIn 0.3s ease-out' : 'fadeOut 0.3s ease-out'
          }}
        >
          <div
            className="relative bg-white rounded-3xl shadow-2xl max-w-lg sm:max-w-6xl w-full max-h-[80vh] sm:max-h-none mx-4 overflow-y-auto transform transition-all duration-300"
            style={{
              animation: showPopup ? 'slideIn 0.4s ease-out' : 'slideOut 0.4s ease-out'
            }}
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 sm:top-6 sm:right-6 z-20 bg-white/90 hover:bg-white rounded-full p-1.5 sm:p-3 transition-all hover:scale-110 shadow-lg border border-teal-100 group"
            >
              <X className="w-4 h-4 text-teal-600 group-hover:text-teal-700" />
            </button>

            {/* Header */}
            <div className="bg-gradient-to-r from-slate-700 via-teal-700 to-cyan-600 p-3 sm:p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 to-cyan-400/10 backdrop-blur-3xl"></div>
              <div className="relative z-10">
                <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-3">
                  Your Journey to Plant Optimization
                </h1>
                <p className="text-teal-100 text-sm sm:text-lg">Follow these simple steps to maximize your industrial gas solutions</p>
              </div>
            </div>

            {/* Steps Grid (Scrollable Wrapper) */}
            <div className="overflow-y-auto max-h-[60vh] sm:max-h-none">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
                {steps.map((step, index) => (
                  <div
                    key={step.id}
                    className="relative p-3 sm:p-6 border-b md:border-b-0 md:border-r border-gray-100 last:border-r-0 hover:bg-gradient-to-br hover:from-teal-50 hover:to-cyan-50 transition-all duration-300 group"
                    style={{
                      animation: `slideUp 0.5s ease-out ${index * 0.1}s both`
                    }}
                  >
                    {/* Step Header */}
                    <div className={`inline-flex items-center gap-1 sm:gap-2 mb-2 sm:mb-4 px-2 sm:px-4 py-1 rounded-full bg-gradient-to-r ${step.gradient} text-white text-xs font-bold shadow-lg transform group-hover:scale-105 transition-transform`}>
                      {step.icon}
                      <span>{step.step}</span>
                    </div>

                    {/* Step Content */}
                    <div className="mb-12 sm:mb-12">
                      <h3 className="text-base sm:text-xl font-bold text-gray-800 mb-1 group-hover:text-teal-700 transition-colors">{step.title}</h3>
                      <p className="text-xs text-teal-600 font-semibold mb-1 sm:mb-3">{step.subtitle}</p>
                      <p className="text-xs text-gray-600 leading-relaxed">{step.description}</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2 absolute bottom-4">
                      {step.actions.map((action, actionIndex) => (
                        <button
                          key={actionIndex}
                          onClick={() => handleNavigation(action.path)}
                          className={`w-full py-1.5 sm:py-3 px-3 sm:px-5 rounded-xl font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-1 sm:gap-2 shadow-lg hover:shadow-xl ${
                            action.primary
                              ? `bg-gradient-to-r ${step.gradient} text-white hover:shadow-teal-200/50`
                              : `bg-gradient-to-r ${step.gradient} text-white hover:shadow-teal-200/50`
                          }`}
                        >
                          {action.icon && action.icon}
                          <span className="text-xs font-bold">{action.text}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="hidden md:block bg-gradient-to-r from-teal-50 to-cyan-50 p-3 sm:p-6 text-center border-t border-teal-100">
              <div className="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-4 text-xs text-teal-700">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                  No credit card required
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                  Free consultation
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                  Expert guidance for industrial gas solutions
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StepwisePopup;
