import React from "react";
import layerImage from '/public/Layer_2.png';

const productData = [
  {
    title: "Cryogenic Storage Tanks",
    description:
      "These tanks are major components of the Liquid Refilling Bottling Plant. Their use is to store industrial gases like Oxygen (LOX), Nitrogen (LNG), Argon (LAR), and Carbon Dioxide (LCO) in their liquid form. They are used for storing other gases like LPG. These tanks can have a capacity of up to 40 KL and are typically vertical, with a horizontal option available. They are designed for cryogenic temperatures (-196°C) and pressures up to 40 bar. Placement of a Liquid Tank is a central part of the system.",
    image: "/LBU/LBU1.png", // Adjust path as needed
  },
  {
    title: "Ambient Liquid Vapourizer",
    description:
      "These are major components of the plant. They are vaporization systems specifically for industrial gases like Oxygen (LOX), Nitrogen (LNG), Argon (LAR), and Carbon Dioxide. Their use is to convert the liquid gas back into a gaseous state. They can handle flow rates ranging from 30 to 2,500 Nm³/hr. Their placement is after and connected to the Liquid Tank, suggesting they are located downstream of the storage.",
    image: "/LBU/LBU3.png",
  },
  {
    title: "Liquid Oxygen/ Nitrogen Pumps",
    description:
      "These are a major component of the Liquid Refilling Bottling Plant. Their use is for transferring liquid gages - Oxygen, Nitrogen, Argon, or Carbon Dioxide. CRYO CORP offers Liquid Oxygen Pumps suitable for a capacity range from 200 cu.m/hr up to 400 cu.m/hr. Their placement is part of the overall system for handling the liquid from the storage tank. CryoCorp offers best quality both Liquid Oxygen Pumps and Liquid Nitrogen Pumps for Bottling Units also as per customsied specifications. ",
    image: "/LBU/LBU2.png",
  },
];

const LiquidProductsSection: React.FC = () => {
  return (
    <section className="px-4 py-10 max-w-6xl mx-auto space-y-20 relative">
      {productData.map((product, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center gap-8 ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-[350px] object-contain z-45"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-[32px] text-right text-gray-800 mb-3">
              {product.title}
            </h3>
            <p className="text-gray-700 text-base leading-relaxed text-justify">
              {product.description}
            </p>
          </div>
        </div>
      ))}

      {/* Footer Note */}
      <div id="level-3" className="w-full flex justify-center mb-10">
                <div className="mb-10 sm:w-[80%] pl-4 border-l-[2px] border-gray-400 flex flex-col justify-between gap-10 sm:gap-20">
                    <p className="text-sm opacity-70 text-catalog-text text-justify leading-relaxed max-w-[90%]">
                        At Cryo Corp, we take pride in supporting liquid bottling gas plant owners with a comprehensive range of high-performance system components. Whether upgrading, expanding, or starting fresh — our tailored solutions offer long-term value. With strict quality standards like ASME and EN 13458, our team ensures reliability, efficiency, and safety — all designed to maximize performance and uptime for oxygen, nitrogen, argon, CO₂, dry air, and more.
                    </p>
                    <h1 className="text-lg font-bold text-catalog-header mb-4 opacity-70">LEVEL 2</h1>
                </div>
            </div>
            <div
                className="absolute top-[200px] left-[550px] w-[1000px] h-[1200px] bg-no-repeat bg-contain pointer-events-none z-0 lg:block hidden"
                style={{
                    backgroundImage: `url(${layerImage})`
                }}
            />
    </section>
  );
};

export default LiquidProductsSection;
