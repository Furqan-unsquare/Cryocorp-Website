import { Card } from "@/components/ui/card";

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

const LiquidOxygen = () => {
  const spareParts = [
    { number: "01", title: "s.s.liner", imageSrc: "/liquidOxygen/1.png" },
    { number: "02", title: "s.s.piston", imageSrc: "/liquidOxygen/2.png", customCss: "rotate-45"  },
    {
      number: "03",
      title: "brass gland nut & cylinder head nut",
      imageSrc: "/liquidOxygen/3.png",
    },
    {
      number: "04",
      title: "piston rings with guide",
      imageSrc: "/liquidOxygen/4.png",
    },
    {
      number: "05",
      title: "non-return valves",
      imageSrc: "/liquidOxygen/5.png",
    },
    { number: "06", title: "gland packing", imageSrc: "/liquidOxygen/6.png", customCss: "-rotate-90"  },
    { number: "07", title: "oil wiper rings", imageSrc: "/liquidOxygen/7.png" },
    { number: "08", title: "coldend assembly", imageSrc: "/liquidOxygen/8.png" },
    {
      number: "09",
      title: "cross head",
      imageSrc: "/liquidOxygen/10.png",
      customCss: "",
    },
    {
      number: "10",
      title: "connecting rod with crank shaft",
      imageSrc: "/liquidOxygen/9.png",
      customCss: "mt-24",
    },
    { number: "11", title: "crank shaft", imageSrc: "/liquidOxygen/11.png" },
  ];

  return (
    <div id="liquid-oxygen-pump-section" className="w-full bg-background px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pb-12 mt-20 scroll-mt-28">
      {/* Header Section */}
      <div className="mb-8 flex flex-col items-center  lg:flex-row lg:gap-20">
        <div className="sm:max-w-[60%]">
        <h1 className="text-lg font-bold text-catalog-header mb-4">
          09.
          <br />
          Liquid Oxygen Pump & Liquid Nitrogen Pump
        </h1>

        <div className="text-sm text-catalog-text leading-relaxed mb-6">
          <p className="sm:max-w-[80%] text-justify">
            These pumps are typically the final stage within the Air Separation
            Unit, responsible for transferring liquid oxygen or nitrogen from
            storage. The Liquid Oxygen Pump, for instance, pumps liquid oxygen
            for gasification and filling into cylinders at high pressure. Liquid
            Oxygen Horizontal single acting pump with Piston, Pump Piston Ring,
            Safety Devices, Non-return Valves ,Motor with pulley , V-Belts, Belt
            Guard, Inter Connecting pipes with A.S.U suitable for filling oxygen
            / Nitrogen. CryoCorp manufactures Liquid Oxygen Pumps and Liquid
            Nitrogen Pumps under its own brand, in-house at our faciltiy in
            Vasai. Various spare parts of the pumps such as liners, pistons,
            rings, valves, and seals, are readily available in-stock to maintain
            pump's performance.
          </p>
        </div>

        </div>
        <div className="overflow-hidden">
          <img src="/liquidOxygen/liquidoxygen.png" alt="" className="sm:h-[300px]"/>
        </div>
      </div>

      {/* Spares Section */}
      <div className="space-y-6">
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
    </div>
  );
};

export default LiquidOxygen;
