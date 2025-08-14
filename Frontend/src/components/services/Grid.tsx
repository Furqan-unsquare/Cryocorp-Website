import React from "react";

const ProjectGridSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden pb-16 px-4 sm:mt-20">
      {/* Animated Background Blobs - Hidden on mobile */}
      <div className="absolute inset-0 z-0">
        {[
          {
            pos: { top: "20%", left: "60%" },
            gradient:
              "circle at 30% 30%, #A1FFCE 0%, #58D68D 60%, transparent 80%",
            anim: "bounce-x",
            opacity: "opacity-80",
          },
          {
            pos: { top: "40%", left: "45%" },
            gradient:
              "circle at 70% 30%, #58D68D 0%, #138D75 60%, transparent 80%",
            anim: "bounce-y",
            opacity: "opacity-80",
          },
          {
            pos: { top: "40%", left: "25%" },
            gradient:
              "circle at 30% 70%, #138D75 0%, #0E6655 60%, transparent 80%",
            anim: "bounce-diagonal",
            opacity: "opacity-70",
          },
          {
            pos: { top: "50%", left: "5%" },
            gradient:
              "circle at 60% 60%, #0B3C5D 0%, #1B263B 70%, transparent 90%",
            anim: "bounce-x",
            opacity: "opacity-70",
          },
        ].map((blob, i) => (
          <div
            key={i}
            className={`absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full blur-sm ${blob.opacity} animate-${blob.anim}`}
            style={{
              background: `radial-gradient(${blob.gradient})`,
              ...blob.pos,
            }}
          />
        ))}
      </div>

      {/* Overlay - z-10 */}
      <div className="absolute inset-0 z-10 backdrop-blur-2xl bg-white/30" />

      {/* Grid Layout - Responsive adjustments */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto border-b-[0.5px] border-[#1A365E]">
        {/* 1. Large top-left image */}
        <div className="md:col-span-2 row-span-1 overflow-hidden rounded-lg order-1">
          <img
            src="/services/img6.png"
            alt="Project 1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 2. Turn-key content block (moved below img6.png in mobile) */}
        <div
          id="TURN-KEY PROJECTS FOR PLANT RELOCATION"
          className="md:col-span-2 scroll-mt-28 row-span-1 bg-transparent flex flex-col justify-start order-2 md:order-3"
        >
          <div className="p-4 md:p-6">
            <h3 className="text-xl md:text-4xl font-extrabold text-black mb-2 md:mb-4">
              01. TURN-KEY PROJECTS FOR PLANT RELOCATION
            </h3>
            <p className="text-sm md:text-base text-black">
              We are Global Plant Shift Masters who understand that –
            </p>
            <p className="text-sm md:text-base text-black font-medium mb-2 md:mb-4">
              "Your plant moves, Your production doesn't."
            </p>
            <ul className="list-disc list-outside pl-5 text-xs md:text-sm text-black font-medium space-y-1 md:space-y-2">
              <li>End-to-end relocation of ASU/PSA plants across borders</li>
              <li>
                Zero-downtime strategy with pre-mobilization planning & modular
                dismantling
              </li>
              <li>
                Compliance with international safety/logistics standards (ISO,
                CE)
              </li>
            </ul>
            <p className="mt-2 md:mt-4 text-xs md:text-sm text-black font-semibold">
              Audience: Industrial gas manufacturers expanding or restructuring
              globally
            </p>
          </div>
        </div>

        {/* 3. Right-side image + text (img7) */}
        <div
          id="ERECTING & COMMISSIONING FOR PSA PLANTS"
          className="md:col-span-1 row-span-1 bg-transparent flex flex-col overflow-hidden order-3 md:order-2"
        >
          <img
            src="/services/img7.png"
            alt="Project 2"
            className="w-full h-48 md:h-1/2 object-cover"
          />
          <div className="p-4 md:p-6 flex-1">
            <h3 className="text-lg md:text-4xl font-extrabold mb-2 md:mb-4 text-black">
              02. ERECTING & COMMISSIONING FOR PSA PLANTS
            </h3>
            <p className="text-sm md:text-base text-black mb-2 md:mb-4">
              We are known for Precision-Built Gas Solutions, from blueprint to
              first-breath – we engineer certainty.
            </p>
            <p className="font-medium mb-2">
              Key Features of our Projects services include:
            </p>
            <ul className="list-disc list-outside pl-5 text-xs md:text-sm font-medium text-black space-y-1 md:space-y-2">
              <li>
                Custom site drawings for seamless integration into your
                facility.
              </li>
              <li>
                360° commissioning: leak tests, automation calibration, staff
                training.
              </li>
              <li>
                98% on-time delivery rate with 24/7 remote monitoring support.
              </li>
            </ul>
            <p className="mt-2 md:mt-4 text-xs md:text-sm font-semibold text-gray-800">
              Audience: Mining, pharma, or energy firms setting up new gas
              plants.
            </p>
          </div>
        </div>

        {/* 4. Bottom-right: Image + Text */}
        <div
          id="LIQUID BOTTLING COMMISSIONING"
          className="md:col-span-1 row-span-1 bg-transparent flex flex-col order-4"
        >
          <img
            src="/services/img8.png"
            alt="Project 3"
            className="w-full h-48 md:h-1/2 object-cover"
          />
          <div className="p-4 md:p-6 flex-1">
            <h3 className="text-lg md:text-4xl font-extrabold mb-4">
              03. LIQUID BOTTLING PLANT COMMISSIONING
            </h3>
            <p className="text-sm md:text-base text-black mb-2 md:mb-4">
              Your liquid Gold, bottled perfectly, where cryogenic safety meets
              distributing brilliance.
            </p>
            <p className="font-medium mb-2">
              Key Features of the Project Service includes:
            </p>
            <ul className="list-disc list-outside pl-5 text-xs md:text-sm text-black font-medium space-y-1 md:space-y-2">
              <li>
                Expertise in bottling ultra-cold gases (-196°C handling for
                O2/N2/Ar).
              </li>
              <li>
                Explosion-proof storage systems with IoT-based inventory
                tracking.
              </li>
              <li>
                Global certifications: ASME, PED, and country-specific pressure
                vessel codes.
              </li>
            </ul>
            <p className="mt-2 md:mt-4 text-xs md:text-sm text-black font-semibold">
              Audience: LNG terminals, aerospace, and medical gas suppliers.
            </p>
          </div>
        </div>
      </div>

      {/* CTA TEXT SECTION - Responsive text sizing */}
      <div className="relative z-10 mx-auto px-4 md:px-8 lg:px-20 mt-8 md:mt-12 md:pb-10">
        <p
          className="text-lg md:text-2xl lg:text-[29px] font-semibold"
          style={{ color: "#5FC9D8" }}
        >
          Ready to Optimize Every Step of Your Gas Plant Journey?
        </p>
        <p
          className="text-sm md:text-[29px] font-semibold mt-2 md:leading-normal"
          style={{ color: "#5FC9D8" }}
        >
          Relocate confidently with a free ASU Plant Audit, launch faster with
          our PSA Plant Quiz, and bottle smarter with a complimentary Bottling
          Plant Safety Check.
          <br className="hidden md:block" />
          <br className="hidden md:block" />
        </p>
        <div
          className="uppercase tracking-wider block mt-2 md:mt-0 text-sm md:text-base lg:text-[29px]"
          style={{ color: "#5FC9D8" }}
        >
          TAKE THE QUIZZES, UNLOCK INSIGHTS, AND POWER UP YOUR OPERATIONS TODAY.
        </div>

        {/* Take Quiz Button */}
        <button
          onClick={() => window.open("/quiz")}
          className="mt-6 bg-[#5FC9D8] hover:bg-[#4cb0be] text-white font-semibold py-2 px-6 rounded-lg text-sm md:text-base transition duration-300"
        >
          Take Quiz
        </button>
      </div>
    </section>
  );
};

export default ProjectGridSection;
