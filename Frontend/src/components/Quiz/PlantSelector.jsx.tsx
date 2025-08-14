import React from 'react';

const PlantSelector = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-around items-center gap-10 p-10">
      {/* Left Section - Text and Buttons */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          WHICH PLANT DO YOU OWN ?
        </h2>

        <div className="flex flex-col space-y-4">
          <button className="bg-[#002c2c] text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wide hover:bg-[#014040] transition">
            AIR SEPARATION UNIT(ASU)
          </button>
          <button className="bg-[#002c2c] text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wide hover:bg-[#014040] transition">
            PRESSURE SWING ADSORPTION(PSA)
          </button>
          <button className="bg-[#002c2c] text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wide hover:bg-[#014040] transition">
            CRYOGENIC LIQUID BOTTLING UNIT
          </button>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="w-full max-w-lg rounded-2xl overflow-hidden shadow-lg">
        <img
          src="/about/plant.jpg" // Replace with your image path
          alt="Plant"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default PlantSelector;
