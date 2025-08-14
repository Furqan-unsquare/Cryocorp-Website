import React from "react";

const categories = [
  {
    title: "Cryogenic Storage & Transfer Equipments",
    description:
      "Ensure safe and efficient transfer of cryogenic liquids. Includes high-quality stainless steel pipework and a variety of essential valves. Maintain critical low temperatures and prevent leaks in storage and distribution systems. Available for diverse gases and plant configurations.",
    parts: [
      { label: "Vacuum Insulated Pipelines", image: "/LBU/pipeline.png" },
      { label: "Cryogenic Valves", image: "/LBU/valves.png" },
    ]
  },
  {
    title: "Compression & Pumping",
    description:
      "Critical components for reliable operation of pumps and compressors. Seals, gaskets, O-rings, and gland packing prevent costly leaks. Bearings and connecting rods support smooth rotational movement for peak performance.",
    parts: [
      { label: "Pump Seals & Bearings", image: "/LBU/pump-seals.png" },
    ]
  },
  {
    title: "Instrumentation Controls",
    description:
      "Provide real-time data for monitoring key plant parameters. Essential for maintaining safe and efficient operations. Includes Pressure Gauges, Temperature Sensors (RTD), Flow Meters, and Level Indicators. Crucial for accurate process control and performance optimization.",
    parts: [
      { label: "Pressure Gauges", image: "/LBU/gauges.png" },
      { label: "Temperature Switches", image: "/LBU/temp-switch.png" },
      { label: "Temperature Sensors", image: "/LBU/temp-sensor-1.png" },
      { label: "Temperature Sensors", image: "/LBU/temp-sensor-2.png" },
    ]
  },
  {
    title: "Safety Equipments",
    description:
      "Guard against over-pressurization with Safety Relief Valves and Bursting Discs. Cryogenic gaskets, seals, O-rings, and gland packing ensure leak-free connections for safety. Maintain stringent safety standards and protect personnel and equipment.",
    parts: [
      { label: "Safety Relief Valves", image: "/LBU/relief-valves.png" },
      { label: "Bursting Discs", image: "/LBU/discs.png" },
      { label: "Cryogenic Gaskets and Seals", image: "/LBU/gaskets.png" },
    ]
  },
  {
    title: "Filling & Bottling",
    description:
      "Flexible Pigtails and Connectors Key components for safe and precise cylinder filling. Check Valves/NRVs ensure unidirectional flow, preventing backflow. Flexible pigtails and connectors provide crucial links between cylinders and filling manifolds. Built for high-pressure applications and compliance with safety standards.",
    parts: [
      { label: "Check Valves and NRVs", image: "/LBU/nrvs.png" },
    ]
  },
  {
    title: "Vapourisation Spares",
    description:
      "Facilitate efficient heat transfer in vapourisers and heat exchangers. Constructed from durable Aluminium or Stainless Steel to ensure longevity. Essential for converting liquid gases into usable gaseous form. Maintain optimal performance of your vapourisation systems.",
    parts: [
      { label: "Vaporiser Fins and Tubes", image: "/LBU/vapour-fins.png" },
    ]
  },
];

const SparePartsGrid: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto p-6 space-y-10">
      {categories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="grid lg:grid-cols-3 gap-6">
          {/* Left column - Category description */}
          <div className="lg:col-span-1">
            <h3 className="md:text-3xl text-[#5FC9D8] mb-2">
              {category.title}
            </h3>
            <p className="text-sm text-[#4EA3AF] mt-10 text-justify">{category.description}</p>
          </div>

          {/* Right section - Parts grid */}
          <div className="lg:col-span-2">
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {category.parts.map((part, partIndex) => (
                <div
                  key={partIndex}
                  className="bg-[#5FC9D8] min-h-[200px] rounded-xl p-4 flex flex-col items-center text-center shadow hover:shadow-md transition duration-300"
                >
                  <p className="text-sm text-left font-medium text-gray-100">{part.label}</p>
                  <img
                    src={part.image}
                    alt={part.label}
                    className="h-30  object-contain mt-4"
                  />
                </div>
              ))}

              {/* Fill empty spots if parts are less than 4 */}
              {Array.from({ length: 4 - category.parts.length }).map((_, idx) => (
                <div key={`empty-${idx}`} className="invisible" />
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SparePartsGrid;