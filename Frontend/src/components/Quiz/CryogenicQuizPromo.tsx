import React from 'react';

const CryogenicQuizPromo = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-around items-center gap-10 lg:gap-0 p-10 mt-24">
      {/* Left Content */}
      <div className="max-w-xl space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 leading-snug">
          <span className="text-red-600">ENHANCE PRODUCTIVITY,</span><br />
          <span className="text-red-500">CUT OPERATING COSTS,</span><br />
          <span className="text-[#002c2c]">AND STREAMLINE OPERATIONS<br />WITH YOUR CRYOGENIC<br />LIQUID BOTTLING UNIT</span>
        </h2>

        <p className="text-gray-700 text-sm leading-relaxed">
          Take the first step by evaluating your cryogenic bottling system through our comprehensive assessment quiz.<br />
          Uncover the efficiency potential and performance opportunities of your existing cryogenic liquid bottling unit with our specialized Cryogenic Bottling System Evaluation Quiz. This diagnostic tool examines your current operations and highlights the substantial financial and operational benefits of optimizing your bottling processes.
        </p>

        <button  onClick={() => window.location.href = "/quiz-form/LBU"} className="bg-[#002c2c] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#014040] transition">
          TAKE THE QUIZ
        </button>
      </div>

      {/* Right Image */}
      <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-lg">
        <img
          src="/about/quiz4.jpg"
          alt="Cryogenic Bottling"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default CryogenicQuizPromo;
