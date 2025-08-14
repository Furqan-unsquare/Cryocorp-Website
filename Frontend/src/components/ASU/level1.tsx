import React from "react";

const IndustrialDiagram: React.FC = () => {
  return (
    <div id="level-2" className="bg-white p-4 shadow-lg scroll-mt-28">
       <div className="text-black font-bold text-sm">
        After Cooler & Cascade Cooler
      </div>
      {/* Header Text */}
      <div className="mb-6 max-w-4xl mx-auto border-l-[0.5px] border-[#1A365E] pl-5 text-justify">
       

        <p className="text-gray-700 text-sm leading-relaxed pt-2">
          At <span className="italic">CryoCorp</span>, our <strong className="italic">ASU (Air Separation Unit) Plants</strong>{" "}
          transform atmospheric air into high-purity industrial gases through a
          precise and highly efficient cryogenic process. It starts with
          compressing and cooling the air, followed by advanced purification to
          remove moisture, oil, and CO₂. The purified air is then chilled to
          cryogenic temperatures and sent into distillation columns, where
          oxygen and nitrogen are separated based on their unique boiling
          points.
        </p>
        <p className="text-gray-700 text-sm leading-relaxed mt-3">
          Behind the scenes, a carefully engineered system of air compressors,
          heat exchangers, expansion engines, and insulated cold boxes work
          seamlessly to ensure reliability and safety. From automated controls
          to liquid oxygen pumps and cylinder filling stations, every step is
          designed for performance, precision, and long-term operational ease.
        </p>
        <p className="text-gray-700 text-sm leading-relaxed mb-6">
          This is the science of air—delivered with CryoCorp's commitment to
          quality and innovation.
        </p>
        <div className="mb-4 max-w-4xl mx-auto">
          <span className="text-gray-600 py-1 text-[16px] font-bold rounded">
            LEVEL 2
          </span>
        </div>
      </div>

      {/* Level 2 Badge */}

      {/* Industrial Diagram - Full Width */}
      <div className="w-full mt-20">
        <div>
        <img
          src="/ASU/big-diagram.png"
          alt="ASU Industrial Process Diagram"
          className="w-full h-auto"
        />
        </div>
      </div>
    </div>
  );
};

export default IndustrialDiagram;
