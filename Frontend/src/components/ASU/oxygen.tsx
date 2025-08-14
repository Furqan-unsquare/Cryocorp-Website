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

const Oxygen = () => {
  const spareParts = [
    { number: "01", title: "cylindeer valves", imageSrc: "/oxygen/1.png" },
    { number: "02", title: "s.s.spindles", imageSrc: "/oxygen/2.png" },
    { number: "03", title: "brass bull nose & nuts", imageSrc: "/oxygen/3.png" },
    { number: "04", title: "spindle keys", imageSrc: "/oxygen/4.png" },
    {
      number: "05",
      title: "copper tubes for pig tail connection",
      imageSrc: "/oxygen/5.png",
      customCss: "rotate-[-90deg]",
    },
    { number: "06", title: "manifold valves", imageSrc: "/oxygen/6.png" },
    { number: "07", title: "pressure gauges", imageSrc: "/oxygen/7.png" },
    {
      number: "08",
      title: "safety valves",
      imageSrc: "/oxygen/8.png",
      customCss: "rotate-[90deg]",
    },
  ];

  return (
    <div id="oxygen-nitrogen-manifold-section" className="relative w-full bg-background px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pb-12 mt-20 scroll-mt-28">
      {/* Header Section */}
      <div className="mb-8 flex flex-col items-center  lg:flex-row lg:gap-20">
        <div className="sm:max-w-[60%]">
        <h1 className="text-lg font-bold text-catalog-header mb-4">
          10.
          <br />
          Oxygen and Nitrogen Manifold
        </h1>

        <div className="text-sm text-catalog-text leading-relaxed mb-6">
          <p className="sm:max-w-[80%] text-justify">
            This component serves as the final stage in the plant process where
            gaseous oxygen is filled into cylinders. It is essential for the
            controlled and safe transfer of high-pressure oxygen to cylinders,
            with spares like valves and gauges ensuring operational reliability.
            CryoCorp manufactures Oxygen, Nitrogen and Hyrdogen Manifolds under
            its own brand, in-house at our faciltiy in Vasai.
          </p>
        </div>

        </div>
        <div className="overflow-hidden">
          <img src="/oxygen/oxygen.png" alt="" className="sm:h-[300px]"/>
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
              customCss={part.customCss}
            />
          ))}
        </div>
      </div>
      <div
        className="absolute top-[400px] left-0 w-[1800px] h-[1800px] bg-no-repeat bg-contain pointer-events-none opacity-40 rotate-90"
        style={{
          backgroundImage: `url(${layerImage})`,
        }}
      />
    </div>
  );
};

export default Oxygen;
