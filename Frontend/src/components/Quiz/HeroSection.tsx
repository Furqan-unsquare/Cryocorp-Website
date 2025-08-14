import React from "react";

const PlantPotential = () => {
  return (
    <div id="quiz" className="bg-white px-6 py-12 md:px-16 lg:px-24 mt-20">
      <div className="flex flex-col lg:flex-row items-start gap-10 mb-12">
        {/* Left Section */}
        <div className="flex flex-col items-center justify-center gap-10 mx-auto md:w-[40%]">
          <h2 className="text-2xl font-semibold text-gray-800">
            WHICH PLANT DO YOU OWN ?
          </h2>

          <div className="flex flex-col space-y-4">
            <button
              onClick={() => (window.location.href = "/quiz-form/ASU")}
              className="bg-[#002c2c] text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wide hover:bg-[#014040] transition"
            >
              AIR SEPARATION UNIT(ASU)
            </button>
            <button
              onClick={() => (window.location.href = "/quiz-form/PSA")}
              className="bg-[#002c2c] text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wide hover:bg-[#014040] transition"
            >
              PRESSURE SWING ADSORPTION(PSA)
            </button>
            <button
              onClick={() => (window.location.href = "/quiz-form/LBU")}
              className="bg-[#002c2c] text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wide hover:bg-[#014040] transition"
            >
              CRYOGENIC LIQUID BOTTLING UNIT
            </button>
          </div>
        </div>

        {/* Right Section - Images */}
        <div className="lg:w-full grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[400px] overflow-hidden">
          {/* Left image - tall image */}
          <div className="overflow-hidden h-[300px] md:h-[500px] bg-gray-300">
            <img
              src="/about/first1.png"
              alt="Main Plant"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right stacked images */}
          <div className="grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 gap-4 h-full">
            <div className="overflow-hidden md:mt-[-20px] h-full">
              <img
                src="/about/second.jpg"
                alt="Engineer Operating Tank"
                className="object-cover w-full h-[90%]"
              />
            </div>
            <div className="overflow-hidden md:mt-[-40px] h-full bg-gray-300">
              <img
                src="/about/third.jpg"
                alt="Engineer in Industrial Area"
                className="object-cover w-full h-[90%]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Icons Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {/* Optimize */}
        <div className="flex flex-col justify-center items-center">
          <div className="text-3xl mb-4">
            <img src="/quiz/settings.png" alt="" className="h-12" />
          </div>
          <h3 className="font-semibold text-lg mb-2">OPTIMIZE</h3>
          <p className="text-sm text-gray-600">
            Pinpoint Bottlenecks And Fine-Tune Operations For Maximum
            Efficiency.
          </p>
        </div>

        {/* Improve */}
        <div className="flex flex-col justify-center items-center">
          <div className="text-3xl mb-4">
            <img src="/quiz/improve.png" alt="" className="h-12" />
          </div>
          <h3 className="font-semibold text-lg mb-2">IMPROVE</h3>
          <p className="text-sm text-gray-600">
            Identify Quick Wins And Long-Term Upgrades For Better Performance.
          </p>
        </div>

        {/* Monitor */}
        <div className="flex flex-col justify-center items-center">
          <div className="mb-4">
            <img src="/quiz/monitor.png" alt="" className="h-12" />
          </div>
          <h3 className="font-semibold text-lg mb-2">MONITOR</h3>
          <p className="text-sm text-gray-600">
            Unlock Real-Time Insights To Proactively Manage Purity And Power
            Use.
          </p>
        </div>

        {/* Scale */}
        <div className="flex flex-col justify-center items-center">
          <div className="mb-4">
            <img src="/quiz/scale.png" alt="" className="h-12" />
          </div>
          <h3 className="font-semibold text-lg mb-2">SCALE</h3>
          <p className="text-sm text-gray-600">
            Plan Confidently For Plant Expansion Or Capacity Upgrades.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlantPotential;
