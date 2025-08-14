import { Card } from "@/components/ui/card";
import layerImage from "/public/Layer.png";

interface SparePartProps {
  number: string;
  title: string;
  imageSrc?: string;
  customCss?: string;
}

const SparePart = ({ number, title, imageSrc, customCss }: SparePartProps) => (
  <Card className="p-4 bg-[#EDEDED] border-catalog-card-border hover:shadow-md transition-shadow z-10  ">
    <div className="space-y-6 z-10">
      <div>
        <div className="text-sm font-medium text-catalog-number md:text-xl md:font-bold text-[#BDBDBD]">
          {number}.
        </div>
        <div className="text-sm font-medium text-catalog-text uppercase tracking-wide md:text-xl md:font-bold text-[#BDBDBD] max-w-[90%]">
          {title}
        </div>
      </div>
      <div className="h-64 bg-[#EDEDED] rounded-md flex items-center justify-center">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            className={`h-full w-full object-contain ${customCss}`}
          />
        ) : (
          <div className="text-gray-400 text-xs text-center">
            Image placeholder
          </div>
        )}
      </div>
    </div>
  </Card>
);

const ChillingTank = () => {
  const spareParts = [
    { number: "01", title: "FREON COMPRESSOR", imageSrc: "/chilling/1.png" },
    { number: "02", title: "EXPANSION VALVE", imageSrc: "/chilling/2.png" },
    { number: "03", title: "CHILLING UNIT FILTER", imageSrc: "/chilling/3.png" },
    { number: "04", title: "TEMPERATURE INCATOR", imageSrc: "/chilling/4.png" },
    {
      number: "05",
      title: "CONDENSER",
      imageSrc: "/chilling/5.png",
      customCss: "rotate-[-60deg]",
    },
    {
      number: "06",
      title: "OUTERCASE",
      imageSrc: "/chilling/6.png",
      customCss: "",
    },
    {
      number: "07",
      title: "INNER COIL",
      imageSrc: "/chilling/7.png",
      customCss: "",
    },
    {
      number: "08",
      title: "OUTER COIL",
      imageSrc: "/chilling/8.png",
      customCss: "",
    },
  ];

  return (
    <div
      id="chilling-tank-section"
      className="relative w-full bg-background px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pb-12 mt-20 scroll-mt-28"
    >
      {/* Header Section */}
      <div className="mb-8 z-1 flex flex-col lg:flex-row lg:gap-32">
        <div className="md:max-w-[60%]">
          <h1 className="text-lg font-bold text-catalog-header mb-4">
            03.
            <br />
            CHILLING TANK & CHILLING UNIT
          </h1>

          <div className="text-sm text-catalog-text leading-relaxed mb-6">
            <p className="sm:max-w-[80%] text-justify">
              Working in conjunction with a chilling tank, Freon gases
              industrial Refrigerant type chilling unit with Thermostatic
              Cooling water Tank and Air coil for cooling cools the water to a
              low temperature (6-10°C). This chilled water then cools the
              compressed air, causing moisture and CO2 to condense and be
              separated. It is an important stage for initial moisture and CO2
              removal, contributing to overall air purity before finer
              purification.This equipment will improve the efficiency of the
              Molecular Sieve Battery and longevity of the Molecular Sieves.
              Spares such as compressor parts, valves, and thermostats are
              available.
            </p>
          </div>
        </div>
        <div className="">
          <img src="/chilling/6.png" alt="" className="h-[300px]"/>
        </div>
      </div>

      {/* Spares Section */}
      <div className="space-y-6 z-1">
        <h2 className="text-xl font-bold text-catalog-header text-[#797979]">
          SPARES
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {spareParts.map((part) => (
            <SparePart
              key={part.number}
              number={part.number}
              title={part.title}
              imageSrc={part.imageSrc}
              customCss={part?.customCss}
            />
          ))}
        </div>
      </div>
      <div
        className="absolute top-[-200px] left-[-100px] w-[2500px] h-[2500px] bg-no-repeat bg-contain pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage: `url(${layerImage})`,
        }}
      />
    </div>
  );
};

export default ChillingTank;
