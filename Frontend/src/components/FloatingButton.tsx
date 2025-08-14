import React, { useEffect, useState } from 'react';
import { FaWhatsapp, FaRocketchat, FaTimes } from 'react-icons/fa';
import AIwidget from './AIwidget';

function FloatingButton() {
  const [showAIWidget, setShowAIWidget] = useState(false);
  const [loading, setLoading] = useState(true); // Start with loading = true

  useEffect(() => {
    // Simulate AIwidget preloading
    const preloadTimer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust time if needed

    return () => clearTimeout(preloadTimer);
  }, []);

  const handleDiscordClick = () => {
    setShowAIWidget(true);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* AI Widget (preloaded but hidden) */}
      {(loading || showAIWidget) && (
        <div
          className={`fixed bottom-0 left-[14vw] md:right-[4vw] -mr-16 rounded-xl drop-shadow-2xl px-2 transition-all z-10 duration-300 
          ${showAIWidget ? 'opacity-100 pointer-events-auto scale-100' : 'opacity-0 pointer-events-none scale-95'}`}
          
        >
          <div className="flex justify-between items-center py-2 px-3">
            <button
              onClick={() => setShowAIWidget(false)}
              className="absolute left-[-40px] mt-[130vh] ml-2 md:ml-[65vw] text-gray-500 hover:text-gray-900 transition-colors duration-300 z-10 p-1 rounded-full shadow-lg bg-gray-100"
              aria-label="Close AI Widget"
            >
              <FaTimes className="text-xl" />
            </button>

            {loading && (
              <div className="-mr-10 animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-gray-600" />
            )}
          </div>

          <div className="relative p-4 h-[10vh] w-full flex items-center justify-center overflow-auto" 
          style={{ minHeight: '85vh', width: '85vw' }}>
            <AIwidget />
          </div>
        </div>
      )}

      {/* Buttons */}
      <div className={`flex flex-col items-end z-0 gap-4 ${showAIWidget ? 'mb-32' : ''}`}>
        {/* WhatsApp */}
        <a
          href="https://api.whatsapp.com/send?phone=917710089939"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300 border-2 border-green-300 hover:border-green-200 overflow-hidden group"
          aria-label="Contact us on WhatsApp"
        >
          <FaWhatsapp className="text-2xl relative z-10" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
        </a>

        {/* Telegram */}
        <a
  href="https://chatgpt.com/g/g-68650921e3b48191b61d8b06a7978505-cryogenic-solutions-assistant"
  target="_blank"
  rel="noopener noreferrer"
  className="relative bg-white w-14 h-14 bg-gradient-to-br rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300 border-2 border-blue-300 hover:border-blue-200 overflow-hidden group"
  aria-label="Connect with Telegram Bot"
>
  {/* Image (base layer) */}
  <img
    className="h-6 z-0"
    src="data:image/png;base64,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"
    alt=""
  />

  {/* Overlay (top layer) */}
  <div className="absolute inset-0 z-10 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer pointer-events-none" />
</a>

       

        {/* Discord */}
        {!showAIWidget && !loading && (
          <button
            onClick={handleDiscordClick}
            className="relative w-14 h-14 bg-white rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300 hover:border-purple-200 overflow-hidden group"
            aria-label="Open AI Widget"
          >
            <img
              src="data:image/png;base64,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"
              alt="elevenlab"
              className="absolute inset-0 w-full h-full object-cover rounded-full"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
          </button>
        )}
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default FloatingButton;
