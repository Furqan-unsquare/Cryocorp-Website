import { Card } from "@/components/ui/card";

interface SparePartProps {
  number: string;
  title: string;
  imageSrc?: string;
  extraText?: string;
}

const SparePart = ({ number, title, imageSrc, extraText }: SparePartProps) => (
  <Card className="p-4 bg-[#EDEDED] border-catalog-card-border hover:shadow-md transition-shadow  ">
    <div className="space-y-7">
      <div>
        <div className="text-sm font-medium text-catalog-number md:text-xl md:font-bold text-[#BDBDBD]">
          {number}.
        </div>
        <div className="text-sm font-medium text-catalog-text uppercase tracking-wide md:text-xl md:font-bold text-[#BDBDBD] max-w-[90%]">
          {title}
        </div>
        <div className="font-bold text-[12px] text-[#BDBDBD]">{extraText}</div>
      </div>
      <div className="h-64 bg-[#EDEDED] rounded-md flex items-center justify-center">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            className="max-h-full max-w-full object-contain"
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

const T = () => {
  const spareParts = [
    {
      number: "01",
      title: "Vertical Coil",
      imageSrc: "/t/1.png",
      extraText: 'Sizes- 1", 1.5", 2" and 2.5" depending on capacity.',
    },
    {
      number: "02",
      title: "Side by Side Coil",
      imageSrc: "/t/2.png",
      extraText: 'size - 1", 1.5", 2" and 2.5" depending on capacity.',
    },
    {
      number: "03",
      title: "Complete After Cooler with Coil",
      imageSrc: "/t/3.png",
    },
    {
      number: "04",
      title: "COMPLETE CASCADE COOLER WITH S2S COIL",
      imageSrc: "/t/4.png",
    },
  ];

  return (
    <div id="after-cooler-section" className="w-full bg-background px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pb-12 mt-20 scroll-mt-28">
      {/* Header Section */}
      <div className="mb-8 flex flex-col lg:flex-row">
        <div className="sm:max-w-[60%]">
        <h1 className="text-lg font-bold text-catalog-header mb-4">
          02.
          <br />
          After Cooler & Cascade Cooler
        </h1>

        <div className="text-sm text-catalog-text leading-relaxed mb-6">
          <p className="sm:max-w-[80%] text-justify">
            These components are positioned after the air compressor and work to
            significantly cool the compressed air. The after cooler is specially
            designed vertical type of tank with MS coils fabricated using
            Schedule 80 Pipes. The main function is to start the cooling process
            of the pressured gas for the purification process. The cascade
            cooler is a specially designed container consisting of High Pressure
            M.S. Coils fabricated using Schedule 80 in two separated chambers.
            The process air thatpasses through this Cooler is cooled through
            incoming Nitrogen (from A.S.U). Essential spare parts like Vertical
            coils for after cooler and coild for cascade cooler..
          </p>
        </div>
        </div>
        <div className="">
          <img src="/t/3.png" alt="" className="h-[200px] sm:h-full mx-auto"/>
        </div>
        <div>
          <img src="/t/4.png" alt="" className="h-[200px] sm:h-full mx-auto"/>
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
              extraText={part.extraText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default T;
