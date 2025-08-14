import React from 'react';

const PSASystemQuiz = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-around items-center gap-10 lg:gap-0 p-10 mt-24">
      {/* Left Section - Image */}
      <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-lg">
        <img
          src="/about/quiz3.jpg"
          alt="PSA System"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right Section - Text */}
      <div className="max-w-xl space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 leading-snug">
          <span className="text-red-600">MAXIMIZE OUTPUT, MINIMIZE COSTS,</span><br />
          <span className="text-gray-800">AND OPTIMIZE PERFORMANCE WITH YOUR</span><br />
          <span className="text-[#002c2c]">PSA SYSTEM</span>
        </h2>

        <p className="text-gray-700 text-sm leading-relaxed">
          Take the first step by evaluating your Pressure Swing Adsorption unit through our assessment quiz.<br />
          Discover the untapped potential and efficiency gains of your existing PSA system with our Pressure Swing Adsorption Performance Assessment Quiz. This evaluation tool helps you benchmark your current operations and reveals the significant financial and operational advantages of optimizing your PSA unit.
        </p>

        <button  onClick={() => window.location.href = "/quiz-form/PSA"} className="bg-[#002c2c] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#014040] transition">
          TAKE THE QUIZ
        </button>
      </div>
    </div>
  );
};

export default PSASystemQuiz;
