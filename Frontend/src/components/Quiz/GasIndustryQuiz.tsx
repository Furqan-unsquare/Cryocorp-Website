import React from "react";

const GasIndustryQuiz = () => {
  return (
    <div className="bg-white px-6 py-12 md:px-16 lg:px-24">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left: Image Section */}
        <div className="lg:w-1/2">
          <div className="w-full h-[500px] rounded-lg flex items-center justify-center text-white text-lg font-medium">
            <img src="/about/quiz1.jpg" alt="" className="h-[500px] rounded-3xl"/>
          </div>
        </div>

        {/* Right: Text Section */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
            <span className="text-red-600">LAUNCH SUCCESSFULLY</span>, <br />
            <span className="text-red-600">BUILD PROFITABLY</span>, AND <br />
            <span className="text-gray-900">
              GROW STRATEGICALLY IN THE GAS INDUSTRY
            </span>
          </h2>
          <p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed">
            Take the first step by assessing your gas plant investment options
            through our startup readiness quiz. Evaluate your business potential
            and market opportunities in the industrial gas sector with our New
            Entrant Gas Plant Selection Quiz. This strategic assessment guides
            you through key decision factors and reveals the optimal plant
            configuration for your specific business goals and investment
            capacity.
          </p>
          <button  onClick={() => window.open('/quiz/NewPlant.html', '_blank')} className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
            TAKE THE QUIZ
          </button>
        </div>
      </div>
    </div>
  );
};

export default GasIndustryQuiz;
