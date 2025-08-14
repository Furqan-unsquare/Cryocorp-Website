import React from 'react';

const OurMission = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-white py-12 sm:py-20 px-4 sm:px-6 md:px-32">
      {/* === Animated Background Blobs === */}
      <div className="absolute inset-0 z-0">
        {/* Light Green Blob */}
        <div
          className="absolute w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full opacity-80 animate-bounce-x blur-2xl"
          style={{
            background: `radial-gradient(circle at 30% 30%, #A1FFCE 0%, #58D68D 60%, transparent 80%)`,
            top: '10%',
            right: '35%',
            filter: 'blur(100px)',
          }}
        />

        {/* Teal Blob */}
        <div
          className="absolute w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full opacity-80 animate-bounce-y blur-2xl"
          style={{
            background: `radial-gradient(circle at 70% 30%, #58D68D 0%, #138D75 60%, transparent 80%)`,
            top: '30%',
            right: '20%',
          }}
        />

        {/* Dark Blue Blob */}
        <div
          className="absolute w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full opacity-70 animate-bounce-x blur-2xl"
          style={{
            background: `radial-gradient(circle at 50% 50%, #0B3C5D 0%, #1B263B 70%, transparent 90%)`,
            top: '30%',
            right: '5%',
          }}
        />
      </div>

      {/* Blurred white overlay */}
      <div className="absolute inset-0 z-10 backdrop-blur-2xl bg-white/30" />

      {/* === Content === */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mb-12 sm:mb-20">
          {[
            {
              id: '01',
              title: 'Our Focus',
              desc: 'We deliver comprehensive products and services for oxygen plants across India — and proudly takes Indian-made oxygen plant solutions to the global stage.',
            },
            {
              id: '02',
              title: 'Our Approach',
              desc: 'We’re all about creating a superior customer experience through a growth model grounded in sustainability, trust, and long-term value. No shortcuts — just systems that work and partnerships that last.',
            },
            {
              id: '03',
              title: 'Our Ecosystem',
              desc: 'From our skilled in-house experts to our supportive clients and a nationwide network of chosen vendors, we’re building a powerful, people-first ecosystem that thrives on collaboration and shared growth.',
            },
          ].map((item) => (
            <div key={item.id}>
              <h3 className="md:text-[#A1D5B1] text-[#5c946d] text-xl sm:text-[50px] font-bold mb-1 sm:mb-4">{item.id}</h3>

              <h4 className="md:text-[#A1D5B1] text-[#5c946d] text-sm font-semibold mb-1">{item.title}</h4>
              <p className="text-sm text-gray-800 md:text-lg font-light text-justify">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <p className="text-base text-[#80B791] mb-3 max-w-lg md:mt-52">
          At CryoCorp, our mission stems from a deep commitment to strengthen the oxygen infrastructure through
          purpose-driven partnerships and progress.
        </p>

        {/* Heading */}
        <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold text-[#80B791] drop-shadow-sm leading-tight break-words">
          Our Mission
        </h2>
      </div>
    </section>
  );
};

export default OurMission;
