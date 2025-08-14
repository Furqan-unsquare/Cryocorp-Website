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

const AirSeperation = () => {
  const spareParts = [
    {
      number: "01",
      title: "TEMPERATURE SCANNER",
      imageSrc: "/airSeperation/1.png",
    },
    {
      number: "02",
      title: "LIQUID LEVEL GAUGE",
      imageSrc: "/airSeperation/2.png",
    },
    { number: "03", title: "RTD SENSOR", imageSrc: "/airSeperation/3.png" },
    {
      number: "04",
      title: "ISOLATION VALVES",
      imageSrc: "/airSeperation/4.png",
    },
    { number: "05", title: "PRESSURE GAUGES", imageSrc: "/airSeperation/5.png" },
    {
      number: "06",
      title: "EXPANSION VALVES",
      imageSrc: "/airSeperation/6.png",
      customCss: "rotate-[-30deg]",
    },
    { number: "07", title: "PERLITE POWDER", imageSrc: "/airSeperation/7.png" },
    {
      number: "08",
      title: "SAFETY VALVES FOR TOP AND BOTTOM COLUMS",
      imageSrc: "/airSeperation/8.png",
    },
    {
      number: "09",
      title:
        "ANGLE TYPE MANIFOLD VALVE FOR OUTLET OF HIGH PURITY OXYGEN AND NITORGRN AT 165 KG/CM2 PRESSURE",
      imageSrc: "/airSeperation/9.png",
    },
  ];

  return (
    <div id="air-separation-column-section" className="relative w-full bg-background px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pb-12 mt-20 scroll-mt-28">
      {/* Header Section */}
      <div className="mb-8 flex flex-col items-center  lg:flex-row lg:gap-40">
        <div className="sm:max-w-[60%]">
        <h1 className="text-lg font-bold text-catalog-header mb-4">
          07.
          <br />
          Air Seperation Column
        </h1>

        <div className="text-sm text-catalog-text leading-relaxed mb-6">
          <p className="sm:max-w-[80%] text-justify">
            Positioned after the Chilling Unit, this battery is crucial for
            removing remaining moisture and CO2 from the air. It consists of 2
            vessels inter-connected with pipeline of Nitrogen and Air Electric
            Heater for regeneration, Temperature Sensor and Control panel with
            automatic temperature control. This assist in the removal of
            moisture, carbon-dioxide, traces of Carbon Monoxide and other
            hydrocarbons present n the process air. Each vessel of Molecular
            Battery isfilled with molecular sieve of 1.5/3 mm type 13-X. This is
            a regenerative type capacity 400m3/hr to 2000 m3/hr and 12 hour
            regeneration cycle... Its proper functioning is vital to prevent
            blockages in the Air Separation Column caused by ice or dry ice,
            thus maintaining purity and preventing plant stoppage. A variety of
            spare parts, including molecular sieves and various valves, are
            available.
          </p>
        </div>

        </div>
        <div className="overflow-hidden">
          <img src="/airSeperation/airseperation.png" alt="" className="sm:h-[300px]"/>
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
      <div
        className="absolute top-0 right-[-500px] w-[3000px] h-[5000px] bg-no-repeat bg-contain pointer-events-none opacity-30 rotate-90"
        style={{
          backgroundImage: `url(${layerImage})`,
        }}
      />
    </div>
  );
};

export default AirSeperation;
