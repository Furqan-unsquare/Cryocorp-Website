import React from 'react';

const Hero = () => {
  return (
    <div id="services" className="min-h-screen bg-gray-50 flex flex-col lg:flex-row pt-24 w-full">
      {/* Left Column - Main Content */}
      <div className="lg:flex-[3] p-6 sm:p-10 lg:p-12">
        <div className="mb-8 pt-10 sm:pt-16 lg:pt-24">
          <p className="text-gray-500 text-sm sm:text-xl font-bold opacity-45">Services & Projects</p>
          <h1 className="text-3xl sm:text-7xl font-bold text-gray-900 mb-6">Services</h1>
          <p className="text-gray-600 leading-relaxed text-base sm:text-lg text-justify">
            At Cryo Corp, we deliver comprehensive solutions for industrial gas plant owners,
            specializing in ASU, Oxygen, Nitrogen, and Acetylene systems. We offer end-to-end services,
            from expert plant installation and commissioning to annual maintenance contracts,
            refurbishment, and upgradation. Our team is committed to maximizing your plant’s performance
            with on-site troubleshooting, reliable spare parts supply, operator training, and consultancy
            for optimization and safety.
          </p>
        </div>
      </div>

      {/* Right Column - Navigation */}
      <div className="lg:flex-[1] w-full bg-gray-50 p-6 sm:p-8 border-t lg:border-t-0 ">
        <div className="space-y-6 lg:border-l-2 border-[#2a548e] pl-5">
          <div className="text-left pt-8 sm:pt-12">
            <p className="text-xs text-black mb-2 font-extrabold">CRITICAL MANAGEMENT</p>
            <p className="text-xs text-black font-extrabold">CONSULTANCY (CMC)</p>
          </div>

          <div className="sm:pt-16">
            {[
              "PSA OXYGEN PLANT",
              "PSA NITROGEN PLANT",
              "ASU OXYGEN PLANT",
              "ASU NITROGEN PLANT",
              "ACETYLENE PLANT",
              "LIQUID BOTTLING UNIT",
            ].map((item, idx) => (
              <div
                key={item}
                className="flex items-center justify-between py-1 border-b border-gray-100"
              >
                <span className="text-sm font-bold text-gray-500"><a href={`#servicecards`}>{item}</a></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
