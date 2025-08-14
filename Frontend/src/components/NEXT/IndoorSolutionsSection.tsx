"use client";
import React from "react";

type Section = {
  id: string;
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
};

const sections: Section[] = [
  {
    id: "relaxair",
    title: "01. RelaxAir",
    image: "/NEXT/relaxair.png",
    description: `In today's world, the quality of the air we breathe indoors directly impacts the well-being, productivity, and comfort of employees, guests, patients, and visitors across various institutions. High levels of carbon dioxide and volatile organic compounds (VOCs) can lead to fatigue, reduced concentration, and a less healthy environment. 

For businesses operating offices, hotels, corporate spaces, hospitals, wedding halls, and similar venues, ensuring superior indoor air quality isn't just a comfort factor—it's a critical investment in human capital and customer experience. Imagine providing an environment where everyone feels more alert, healthy, and comfortable throughout their stay or workday.

Introducing RelaxAir, your advanced Indoor CO₂ Capturing System designed to significantly improve indoor air quality. RelaxAir effectively captures CO from the air, helping you achieve Indoor Air Quality Below 500 PPM CO₂, a level widely recognized as excellent. Beyond just CO₂, the system is also VOCs Free, contributing to a cleaner, healthier atmosphere. You can have confidence knowing that RelaxAir operates in accordance with ASHRAE, NIOSH, and OSHA standards, demonstrating its commitment to recognized indoor air quality benchmarks. With different variants available to suit various space requirements and a range of applications perfectly matched to institutional needs, RelaxAir offers a powerful, compliant, and efficient solution to elevate the air quality in your business environment.`,
  },
  {
    id: "dryers",
    title: "02. Medical Air Dryers",
    image: "/NEXT/medical-dryers.png",
    description: `In a hospital environment, where patient health, safety, and the reliable operation of critical medical equipment are paramount, the quality of compressed air is a fundamental requirement. Impure air, contaminated with moisture or oil, poses significant risks – it can compromise sterile environments, accelerate wear and tear on sensitive medical devices, and potentially impact patient outcomes. For hospital administrators and technical staff, ensuring a consistent supply of clean, dry compressed air is not just a matter of efficiency, but a crucial element in maintaining the highest standards of care and protecting valuable assets. Investing in a dependable air treatment solution is a vital decision that safeguards both operations and the well-being of those entrusted to your care.

Introducing the Summits Pneuzorb series Compact Air Dryers, engineered to deliver the high-quality compressed air essential for hospital applications. These dryers efficiently remove moisture and contaminants using premium grade desiccant to produce dry compressed air. They feature Pleated Borosilicate depth filter media upfront to capture bulk moisture and oil, with an optional Oil check apparatus available for precise measurement of oil content down to 0.1 to 0.2mg/m3. Key operational benefits include a Moisture Indicator for immediate verification of outlet air quality, ensuring you always meet the required standards. The design incorporates robust components and utilizes filtered dry air for valve actuation, contributing to extended Mean Time Between Maintenance (MTBM) – crucial for continuous hospital operations. Furthermore, the integrated Purge Economizer offers potential savings, aligning with institutional budgetary considerations while delivering reliable performance rated as per ISO 7183-2007.`,
    reverse: true,
  },
];

const IndoorSolutionsSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20 sm:pb-0 sm:py-12 md:pt-60 space-y-24">
      {sections.map((sec) => (
        <div
          key={sec.id}
          className={`flex flex-col-reverse lg:flex-row ${
            sec.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          } items-center gap-10`}
        >
          {/* Image */}
          <div className="lg:w-1/2">
            <img
              src={sec.image}
              alt={sec.title}
              className="w-full max-w-md mx-auto object-contain z-90"
            />
          </div>

          {/* Text */}
          <div className="lg:w-1/2 text-gray-700 space-y-4">
            <h2 className={`text-3xl  text-black ${sec.reverse ? "text-right" : "text-left"}`}>
              {sec.title}
            </h2>

            {sec.description.split("\n").map((para, i) => (
              <p key={i} className="text-sm leading-relaxed text-justify">
                {para.trim()}
              </p>
            ))}
          </div>
        </div>
      ))}
      <div className={`flex flex-col-reverse lg:flex-row items-center gap-10`}>
          {/* Image */}
          <div className="lg:w-1/2">
            <img
              src={"/NEXT/hydrogen-tanks.png"}
              alt={"03. Hydrogen Storage Tanks, Hydrogen Filling Manifolds and Hydrogen Compressors"}
              className="w-full max-w-md mx-auto object-contain"
            />
            <img
              src={"/NEXT/tanks.png"}
              alt={"03. Hydrogen Storage Tanks, Hydrogen Filling Manifolds and Hydrogen Compressors"}
              className="w-full max-w-md mx-auto object-contain"
            />
          </div>

          {/* Text */}
          <div className="lg:w-1/2 text-gray-700 space-y-4">
            <h2 className="text-3xl text-black text-justify">03. Hydrogen Storage Tanks, Hydrogen Filling Manifolds and Hydrogen Compressors</h2>
            {`Hydrogen Buffer Tanks: Ensure your hydrogen storage is both reliable and compliant with industry standards. Our Hydrogen Buffer Tanks are engineered for demanding industrial applications, featuring a substantial 60 cu.mr capacity and a robust vertical design. Manufactured strictly to the ASME SEC.VIII DIV.1 – Latest Edition code, these tanks boast main shells constructed from SA 516 GR 70N + NACE+ HIC material for enhanced durability and corrosion resistance. Designed for a maximum working pressure of 19.5 kg/cm² with an operating pressure of 15 kg/cm²g, they include a 1.5 mm corrosion allowance and undergo full radiography for shells. Each tank is supplied complete with essential safety valves and pressure gauges, providing a critical layer of security for your hydrogen infrastructure.

Hydrogen Manifolds: Streamline your hydrogen cylinder management and ensure consistent flow with our precision-engineered Hydrogen Manifold Lines. Configured to handle a significant flow of 450cum3/Hr Hydrogen Gas, our quoted manifold line is designed for 3 x 22 cylinders. These systems are built with durable SS piping and incorporate high-pressure components, including manifold valves rated for a working pressure of 165 kg/cm2, safety valves, and pressure gauges with a range up to 420 kg/cm2. Complete with associated connectors and supports, these manifolds provide a reliable and efficient solution for aggregating and distributing hydrogen from multiple cylinders within your plant.

Hydrogen Compressors: Achieve the high pressures needed for your hydrogen applications with our reliable Oil-lubricated, water-cooled, reciprocating Hydrogen Gas Compressors. Specifically, we offer a compressor with a capacity of 450 M³/Hr, designed to efficiently boost hydrogen pressure from a suction of 15 Kg/cm² up to a discharge pressure of 200Kg/cm². Featuring a three-stage single-acting design (Model: VHL-450/200-15), this compressor comes with a comprehensive scope of supply, including a control panel with pressure gauges and manual unloading valves, inter and after coolers, safety valves for each stage, and critical safety trips such as high temperature and high pressure trips for the final stage, as well as lubrication failure and cooling water flow failure switches.`.split("\n").map((para, i) => (
              <p key={i} className="text-sm leading-relaxed">
                {para.trim()}
              </p>
            ))}
          </div>
        </div>
    </section>
  );
};

export default IndoorSolutionsSection;
