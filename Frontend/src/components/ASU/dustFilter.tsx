import { Card } from "@/components/ui/card";

interface SparePartProps {
  number: string;
  title: string;
  imageSrc?: string;
  customCss?: string;
}

const SparePart = ({ number, title, imageSrc, customCss }: SparePartProps) => (
  <Card className="p-4 bg-[#EDEDED] border-catalog-card-border hover:shadow-md transition-shadow  ">
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

const DustFilter = () => {
  const spareParts = [
    {
      number: "01",
      title: "ACTIVATED CARBON FILTER",
      imageSrc: "/dustFilter/1.png",
    },
    { number: "02", title: "DUST FILTER", imageSrc: "/dustFilter/2.png" },
    { number: "03", title: "ACTIVATED CARBON", imageSrc: "/dustFilter/3.png" },
    {
      number: "04",
      title: "COMPLETE ASSEMBLY OF DUST & ACTIVATED CARBON FILTER",
      imageSrc: "/dustFilter/4.png",
      customCss: "rotate-[45deg]",
    },
  ];

  return (
    <div
      id="dust-filter-section"
      className="w-full bg-background px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pb-12 mt-20 scroll-mt-28"
    >
      {/* Header Section */}
      <div className="mb-8 flex flex-col lg:flex-row lg:gap-32">
        <div className="sm:max-w-[60%]">
          <h1 className="text-lg font-bold text-catalog-header mb-4">
            05.
            <br />
            DUST FILTER AND OIL ABSORBER
          </h1>

          <div className="text-sm text-catalog-text leading-relaxed mb-6">
            <p className="sm:max-w-[80%] text-justify">
              Situated in the process after the chiiling tank, these units
              remove dust, oil, and other contaminants from the compressed cool
              air. Acticated Carbon oil absorber filter is made of M.S. capsule
              shape vessel with activated filter carbon with 2 Nos. sand filters
              inside. This equipment assists absorption of Hydro carbons in the
              process air. The Dust Ceramic Filter: -This equipment is made of
              M.S and in cylindrical in shape. It consists of micro-ceramic
              filters to avoid entry of dust to the MSB . This purification step
              is critical for protecting downstream equipment and ensuring the
              air entering the separation process is clean. Spare parts,
              including filter elements and carbon, are available.
            </p>
          </div>
        </div>
        <div className="sm:mt-10">
          <img src="/dustFilter/main.png" alt="" />
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

export default DustFilter;
