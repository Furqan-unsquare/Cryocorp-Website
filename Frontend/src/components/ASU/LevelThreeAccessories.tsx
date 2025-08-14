import { Card } from "@/components/ui/card";
import { useState } from "react";

const SpareCard = ({ imageSrc, number, detailCard }: { imageSrc?: string, number: string, detailCard: any }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    
    return (
        <div 
            className="relative h-64 perspective-1000"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <div className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                {/* Front Card */}
                <Card className="absolute inset-0 p-4 bg-[#EDEDED] border-catalog-card-border h-64 flex items-center justify-center backface-hidden">
                    <div className="absolute top-0 left-2 font-bold md:text-lg md:font-bold text-[#BDBDBD]">0{number}.</div>
                    {imageSrc ? (
                        <img
                            src={imageSrc}
                            alt="Spare part"
                            className="h-full w-full object-contain p-4"
                        />
                    ) : (
                        <div className="text-gray-400 text-xs text-center">Image Placeholder</div>
                    )}
                </Card>
                
                {/* Back Card */}
                <Card className="absolute inset-0 p-4 bg-[#EDEDED] border-catalog-card-border h-64 flex flex-col justify-between backface-hidden rotate-y-180">
                    <div>
                        <div className="font-bold">0{number}.</div>
                        <div className="font-bold text-sm mb-2">{detailCard.title}</div>
                    </div>
                    <div className="text-xs leading-relaxed">
                        {detailCard.description}
                    </div>
                </Card>
            </div>
        </div>
    );
};

const TitleCard = ({ titles, number }: { titles: string[], number: string[] }) => (
    <Card className="p-4 bg-white border-catalog-card-border h-64 flex items-end justify-start">
        <div className="text-sm text-catalog-text space-y-1 uppercase tracking-wide">
            {titles.map((title, index) => (
                <p key={index} className="font-bold md:text-sm md:font-bold text-[#BDBDBD]">
                    <span className="">
                        {number[index]}
                    </span>{" "}
                    {title}
                </p>
            ))}
        </div>
    </Card>
);

const LevelThreeAccessories = () => {
    // Detail cards data
    const detailCards = {
        1: {
            title: "INDUSTRIAL OXYGEN, NITROGEN & ACETYLENE CYLINDERS",
            description: "These are fundamental components for storing and transporting compressed industrial gases at pressures up to 200 bar. Cylinders are integral to both ASU and bottling units, enabling the safe storage and transport of gases."
        },
        2: {
            title: "VALVE GUARDS FOR CYLINDERS",
            description: "This component is used to protect the cylinder valve fitted on the high pressure cylinder. It helps to prevent the damage of the valve component which can result in dangerous leakage of compressed oxygen/nitrogen accidentally causing damage to the plant as well as manpower engaged in the operations during the manifold systems."
        },
        3: {
            title: "CYLINDER VALVES",
            description: "These valves, which can be spindle or wheel operated, are used to regulate the flow of gas into and out of cylinders. Their proper function is crucial for the safe and controlled operation of industrial gas systems, ensuring secure connections for filling manifolds. The come in SS 304 stainless steel forged bodies and are tested up to 200 kg/cm2."
        },
        4: {
            title: "ON-LINE ANALYSERS",
            description: "These devices, such as oxygen or nitrogen purity analysers, are used to measure the purity of the gases being produced. They are essential for quality control, ensuring the gas meets the required purity standards for various applications."
        },
        5: {
            title: "HYDRO CYLINDER TESTING UNIT",
            description: "Periodic testing of high-pressure gas cylinders has become mandatory across many Indian states. This test using specialized equipment, necessary in the gas industry, is an essential part of the QC process for ensuring the safety and structural integrity of the cylinders."
        },
        6: {
            title: "COOLING TOWER",
            description: "Mentioned as a major component, Cooling Towers are part of the plant's cooling system, contributing to the efficiency of processes like air compression. The cooling tower removes heat from the system, helps ensure reliable performance. We supply FRP Cooling Towers with induced draft rotary sprinklers that are highly efficient with water flow rates ranging from 500 to 1000 LPM and include components like PVC fills and fans."
        },
        7: {
            title: "ELECTRICAL PANEL",
            description: "This system is used for controlling and monitoring electrical operations and control of the plant. It is essential for the plant's automatic control and safe electrical functioning, with common electrical components like starters, contactors, and relays. We also use pre-approved OEM products as per your plant make and size."
        },
        8: {
            title: "PORTA CRYO",
            description: "Porta Cryo: These mobile cryogenic systems are engineered for the secure and portable supply of liquid gases such as oxygen and nitrogen in various environments. Porta Cryo units are built with robust insulation and mobility features, making them ideal for applications requiring on-site gas generation of performance. Minimum quantities to order ranges from ____ to ____."
        },
        9: {
            title: "LIQUID OXYGEN & NITROGEN PORTABLE TANKS",
            description: "These tanks are designed for the safe transport and temporary storage of liquid oxygen and nitrogen at cryogenic temperatures. They are suitable for both stationary and mobile supply units, they ensure uninterrupted gas availability and are built to meet stringent thermal and safety standards. Capacities of these tanks range from ____ to ____."
        }
    };

    return (
        <div className="w-full bg-background px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pb-12 mt-20">
            <style jsx global>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
                .transform-style-preserve-3d {
                    transform-style: preserve-3d;
                }
                .backface-hidden {
                    backface-visibility: hidden;
                }
                .rotate-y-180 {
                    transform: rotateY(180deg);
                }
            `}</style>
            
            {/* Header */}
            <div id="level-3" className="w-full flex justify-center mb-10 scroll-mt-28">
                <div className="mb-10 sm:w-[50%] pl-4 border-l-[2px] border-gray-400 flex flex-col justify-between gap-10 sm:gap-20">
                    <p className="text-sm opacity-70 text-catalog-text leading-relaxed max-w-[90%] text-justify">
                        At Cryo Corp, we offer a wide selection of essential accessories and ancillary components
                        for ASUs and Liquid Bottling Plants for Oxygen, Nitrogen, Argon, and Acetylene gases.
                        We supply everything from industrial cylinders, cylinder valves, and valve guards to advanced
                        on-line analysers, cooling towers, electrical panels, and portable cryogenic tanks.
                        Our products are designed to enhance plant safety, efficiency, and reliability,
                        ensuring seamless operations for your facility.
                    </p>
                    <h1 className="text-lg font-bold text-catalog-header mb-4 opacity-70">LEVEL 3</h1>
                </div>
            </div>
            
            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                {/* Row 1 */}
                <SpareCard imageSrc="/level3/1.png" number={"1"} detailCard={detailCards[1]} />
                <SpareCard imageSrc="/level3/2.png" number={"2"} detailCard={detailCards[2]} />
                <TitleCard titles={["INDUSTRIAL CYLINDERS", "VALVE GUARD", "CYLINDER VALVES"]} number={["01.", "02.","03."]}/>
                <SpareCard imageSrc="/level3/3.png" number={"3"} detailCard={detailCards[3]} />

                {/* Row 2 */}
                <SpareCard imageSrc="/level3/4.png" number={"4"} detailCard={detailCards[4]} />
                <TitleCard titles={["ON-LINE ANALYSERS", "CYLINDER TESTING", "COOLING TOWERS"]} number={["04.", "05.","06."]}/>
                <SpareCard imageSrc="/level3/5.png" number={"5"} detailCard={detailCards[5]} />
                <SpareCard imageSrc="/level3/6.png" number={"6"} detailCard={detailCards[6]} />

                {/* Row 3 */}
                <TitleCard titles={["ELECTRICAL PANEL", "PORTA CRYO", "LIQUID OXYGEN & NITROGEN TANKS"]} number={["07.", "08.","09."]}/>
                <SpareCard imageSrc="/level3/7.png" number={"7"} detailCard={detailCards[7]} />
                <SpareCard imageSrc="/level3/8.png" number={"8"} detailCard={detailCards[8]} />
                <SpareCard imageSrc="/level3/9.png" number={"9"} detailCard={detailCards[9]} />
            </div>
        </div>
    );
};

export default LevelThreeAccessories;