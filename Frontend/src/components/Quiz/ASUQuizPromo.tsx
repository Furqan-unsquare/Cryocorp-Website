import React from 'react';

const ASUQuizPromo = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-around items-center gap-10 lg:gap-0 p-10 mt-24">
      {/* Left Section - Text */}
      <div className="max-w-xl space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 leading-snug">
          <span className="text-red-600">OPTIMIZE PERFORMANCE,</span><br />
          <span className="text-red-500">LOWER EXPENSES,</span><br />
          <span className="text-gray-800">AND GAIN INDEPENDENCE WITH YOUR<br />ASU GAS PLANT</span>
        </h2>

        <p className="text-gray-700 text-sm leading-relaxed">
          Take the first step by evaluating your asu gas plant’s efficiency through our assessment quiz. <br />
          Discover the potential optimization opportunities and cost savings of your existing air separation unit with our ASU Performance Evaluation Quiz. This assessment helps you identify areas for improvement in your current operations and reveals the untapped financial and operational benefits of enhanced ASU management.
        </p>

        <button  onClick={() => window.location.href = "/quiz-form/ASU"} className="bg-[#002c2c] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#014040] transition">
          TAKE THE QUIZ
        </button>
      </div>

      {/* Right Section - Image */}
      <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-lg">
        <img
          src="/about/quiz2.jpg"
          alt="ASU Plant"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default ASUQuizPromo;
