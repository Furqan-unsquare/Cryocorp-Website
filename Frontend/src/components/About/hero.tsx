import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  FaWhatsapp,
  FaTelegram,
  FaDiscord,
  FaRocketchat,
} from "react-icons/fa";

const HeroSection = () => {
  const [showFull, setShowFull] = useState(false);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Animated Background Gradಸ್ಮಾರ್ಟಫೋನ Gradients */}
      <div className="absolute inset-0 z-0">
        {/* Light Green Blob */}
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-80 animate-bounce-x blur-sm"
          style={{
            background: `radial-gradient(circle at 30% 30%, #A1FFCE 0%, #58D68D 60%, transparent 80%)`,
            top: "30%",
            left: "25%",
          }}
        />

        {/* Teal Blob */}
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-80 animate-bounce-y blur-sm"
          style={{
            background: `radial-gradient(circle at 70% 30%, #58D68D 0%, #138D75 60%, transparent 80%)`,
            top: "40%",
            left: "15%",
          }}
        />

        {/* Dark Teal Blob */}
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-70 animate-bounce-diagonal blur-sm"
          style={{
            background: `radial-gradient(circle at 30% 70%, #138D75 0%, #0E6655 60%, transparent 80%)`,
            top: "50%",
            left: "10%",
          }}
        />

        {/* Dark Blue Blob */}
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-70 animate-bounce-x blur-sm"
          style={{
            background: `radial-gradient(circle at 50% 50%, #0B3C5D 0%, #1B263B 70%, transparent 90%)`,
            top: "60%",
            left: "3%",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="backdrop-blur-2xl sm:pt-24 bg-white/20 relative z-20 flex flex-col items-center justify-start min-h-screen px-4 sm:px-6 md:px-20 text-center py-16 sm:pb-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-2">
          {/* Left column */}
          <div className="h-full">
            <div className="sm:p-8 text-left max-w-[90%] md:max-w-[70%]">
              <h2 className="text-[38px] font-thin mb-4 pt-10">
                Together we can build a world of positive consumption
              </h2>
            </div>
            <div>
              <img src="/about/arrow.png" alt="" className="sm:h-[700px]" />
            </div>
          </div>

          {/* Right column */}
          <div className="sm:p-8 mt-4 sm:mt-0 text-[#1A365E] text-justify">
            <h2 className="text-2xl font-medium mb-4">Our Story</h2>
            <p className="pb-2">
              Our journey began in 1996, when Cryo Sales Corporation was founded
              in Mumbai, India—the very hub where many of the country's first
              air separation plants were conceived. The foundation was laid by
              Late Mr. N.M. Goyal, a seasoned mechanical engineer from the
              1960s, who brought with him decades of manufacturing experience
              from pioneering institutions like INOX and Sanghi. His deep
              knowledge of cryogenic engineering and Indian ASU plants shaped
              the early DNA of the company. For over a decade, served customers
              with precision parts, technical advice, and machinery for
              Indian-make ASUs and PSA plants.
            </p>
            <p className="pb-2">
              In 2011, a generational shift marked the beginning of a bold new
              chapter. Under the leadership of Ashish Goyal, the company was
              renamed Cryo Corp. From there, CryoCorp’s reputation grew
              organically—by word of mouth, plant to plant, district to
              district. As demand for refurbished ASU plants and precision
              spares surged, we began exporting to international
              markets—particularly in Africa, the Middle East, and Southeast
              Asia—where Indian-make ASUs had become the backbone of oxygen and
              nitrogen production in steel, medical, and industrial
              applications.
            </p>
            <div className="md:block hidden">
              <p className="pb-2">
                In 2022, the company's constitution changed from
                proprietorship to Limited Liability Partnership - CryoCorp O2
                LLP to ensure a robust growth in exports and being registered
                as a legal entity. During this time, CryoCorp® was a
                registered trademark, symbolizing trust, consistency, and
                engineering excellence in the cryogenic and gas plant
                industry. It assures clients that every product bearing the
                CryoCorp® name meets rigorous standards and decades of
                expertise.
              </p>
              <p className="pb-2">
                The defining moment in our journey came during the COVID-19
                pandemic, when our equipment was air-lifted by the Indian Air
                Force to oxygen-starved zones in Kashmir and other remote
                regions. With ASUs restarting under emergency demand, CryoCorp
                stood as a trusted supplier—delivering life-sustaining oxygen
                machinery and parts when every second counted.
              </p>
              <p className="pb-2">
                Today, CryoCorp O2 LLP is one of India's most dependable B2B
                partners for spares, machinery, and turnkey projects, related
                to ASUs and PSA units. We serve over 25 countries, with a
                product portfolio exceeding 9,000 products, and continue to
                support both aging and new-generation plants with unmatched
                speed, accuracy, and care.
              </p>
              <p className="pb-2">
                Ashish Goyal, the firm’s driving force, is actively engaged
                with institutions like the <span className="italic font-semibold">Engineering Export Promotion
                Council (EEPC)</span> and <span className="italic font-semibold">Business Coaching India (BCI)</span>, and has
                formerly served with <span className="italic font-semibold">AIIGMA (All India Industrial Gas
                Manufacturers Association)</span> —helping shape India’s industrial
                gas export vision.
              </p>
              <p className="pb-2">
                From plant operators to procurement professionals, from legacy
                plant owners to emerging global players—CryoCorp remains your
                trusted partner and a one-stop-shop for cryogenic machinery
                solutions.
              </p>
            </div>
            <div className="md:hidden">
              {showFull && (
                <>
                  <p className="pb-2">
                    In 2022, the company's constitution changed from
                    proprietorship to Limited Liability Partnership - CryoCorp O2
                    LLP to ensure a robust growth in exports and being registered
                    as a legal entity. During this time, CryoCorp® was a
                    registered trademark, symbolizing trust, consistency, and
                    engineering excellence in the cryogenic and gas plant
                    industry. It assures clients that every product bearing the
                    CryoCorp® name meets rigorous standards and decades of
                    expertise.
                  </p>
                  <p className="pb-2">
                    The defining moment in our journey came during the COVID-19
                    pandemic, when our equipment was air-lifted by the Indian Air
                    Force to oxygen-starved zones in Kashmir and other remote
                    regions. With ASUs restarting under emergency demand, CryoCorp
                    stood as a trusted supplier—delivering life-sustaining oxygen
                    machinery and parts when every second counted.
                  </p>
                  <p className="pb-2">
                    Today, CryoCorp O2 LLP is one of India's most dependable B2B
                    partners for spares, machinery, and turnkey projects, related
                    to ASUs and PSA units. We serve over 25 countries, with a
                    product portfolio exceeding 9,000 products, and continue to
                    support both aging and new-generation plants with unmatched
                    speed, accuracy, and care.
                  </p>
                  <p className="pb-2">
                    Ashish Goyal, the firm’s driving force, is actively engaged
                    with institutions like the <span className="italic font-semibold">Engineering Export Promotion
                    Council (EEPC)</span> and <span className="italic font-semibold">Business Coaching India (BCI)</span>, and has
                    formerly served with <span className="italic font-semibold">AIIGMA (All India Industrial Gas
                    Manufacturers Association)</span> —helping shape India’s industrial
                    gas export vision.
                  </p>
                  <p className="pb-2">
                    From plant operators to procurement professionals, from legacy
                    plant owners to emerging global players—CryoCorp remains your
                    trusted partner and a one-stop-shop for cryogenic machinery
                    solutions.
                  </p>
                </>
              )}
              <button
                onClick={() => setShowFull(!showFull)}
                className="md:hidden px-4 py-2 border-2 rounded-md mt-2 border-gray-600"
              >
                {showFull ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sliding Text Animation */}
      <div className="hidden absolute bottom-20 left-0 w-full overflow-hidden z-20">
        <div className="animate-text-slide whitespace-nowrap">
          <span className="text-6xl md:text-8xl font-bold text-primary/10 uppercase tracking-wider">
            INDUSTRIAL GAS SOLUTIONS • AIR SEPARATION TECHNOLOGY • CRYOGENIC
            SYSTEMS •
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;