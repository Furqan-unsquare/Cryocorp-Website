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

const Expansion = () => {
  const spareParts = [
    {
      number: "01",
      title: "cylinder head.With allo steel liners and ss piston",
      imageSrc: "/expansion/1.png",
    },
    {
      number: "02",
      title: "ball valve assembly with it compnents",
      imageSrc: "/expansion/2.png",
    },
    {
      number: "03",
      title: "teflon piston rings with tension rings",
      imageSrc: "/expansion/3.png",
    },
    {
      number: "04",
      title: "valve block & its integral parts",
      imageSrc: "/expansion/4.png",
    },
    {
      number: "05",
      title: "push pump and its intergrall parts",
      imageSrc: "/expansion/5.png",
    },
    {
      number: "06",
      title: "solenoid valve with magneto coil",
      imageSrc: "/expansion/6.png",
    },
    {
      number: "07",
      title: "puppet valves with its supporting accessoroes",
      imageSrc: "/expansion/7.png",
    },
    {
      number: "08",
      title: "cranshaft assembly with conneting rod and beraings",
      imageSrc: "/expansion/8.png",
    },
  ];

  return (
    <div
      id="expansion-engine-section"
      className="w-full bg-background px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pb-12 mt-20 scroll-mt-28"
    >
      {/* Header Section */}
      <div className="mb-8 flex flex-col items-center lg:flex-row lg:gap-40">
        <div className="sm:max-w-[60%]">
          <h1 className="text-lg font-bold text-catalog-header mb-4">
            08.
            <br />
            Expansion Engine
          </h1>

          <div className="text-sm text-catalog-text leading-relaxed mb-6">
            <p className="sm:max-w-[80%] text-justify">
              Located before the Air Separation Unit, is a vertical single
              acting, dry running with hydraulic valve control , bursting disc
              for safety, complete with Flywheel ,Pressure Gauges, Motor, Motor
              Pulley, VBelts, Belt Guard, Slide Rails, Inter Connecting Copper
              Pipes (Inlet & outlet with A.S.U) including motors & starters.
              This engine plays a critical role in cooling the air by expanding
              it, causing a significant temperature drop to around -150°C. This
              chilling effect provides the low temperatures necessary for the
              air separation process. Expansion Engine has important spares like
              cylinder heads, pistons, valves, and bearings are readily
              available, in-stock, to ensure its efficient operation and
              optimize plant production. CryoCorp manufactures Expansion Engines
              under its own brand, in-house at our faciltiy in Vasai.
            </p>
          </div>
        </div>
        <div className="overflow-hidden">
          <img
            src="/expansion/expansion.png"
            alt=""
            className="sm:h-[300px]"
          />
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expansion;
