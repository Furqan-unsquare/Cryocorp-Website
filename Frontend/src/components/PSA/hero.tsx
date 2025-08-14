import React, { useState } from "react";
import { MessageCircle, Phone, User, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigation } from '../../contexts/NavigationContext';
import { useNavigate } from "react-router-dom";

const FlipCard = ({ 
    imageSrc, 
    title, 
    subtitle, 
    detailCard, 
    className = "",
    imageClassName = "",
    externalLink,
}: { 
    imageSrc: string;
    title: string;
    subtitle?: string;
    detailCard: any;
    className?: string;
    imageClassName?: string;
    externalLink?: string;
}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    
    const handleCardClick = () => {
        if (externalLink) {
            window.open(externalLink, '_blank', 'noopener,noreferrer');
        } else {
            setIsFlipped(!isFlipped);
        }
    };
    
    return (
        <div 
            className={`relative ${className}`}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            style={{ perspective: '1000px' }}
        >
            <div 
                className={`relative w-full h-full transition-transform duration-500`}
                style={{
                    transformStyle: 'preserve-3d',
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
            >
                {/* Front Card */}
                <div 
                    className="absolute inset-0 cursor-pointer"
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    <div className="relative w-full h-full overflow-hidden shadow-lg">
                        <img
                            src={imageSrc}
                            alt={title}
                            className={`w-full h-full object-fit ${imageClassName}`}
                        />
                        <div className="absolute inset-0 bg-[#1A365EB2]/70" />
                        <div className="absolute z-10 bottom-4 left-4 text-white text-lg font-bold tracking-wide lg:text-lg text-sm">
                            {title}
                            {subtitle && <div className="text-sm lg:text-sm text-xs">{subtitle}</div>}
                        </div>
                        {/* External Link Indicator */}
                        {externalLink && (
                            <div onClick={handleCardClick} className="absolute top-4 right-4 text-white">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                                </svg>
                            </div>
                        )}
                    </div>
                </div>
                
                {/* Back Card */}
                <div 
                    className="absolute inset-0 cursor-pointer"
                    style={{ 
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                    }}
                >
                    <div className="relative w-full h-full bg-[#1A365E] text-white p-4 overflow-y-auto lg:p-4 p-2">
                        <div className="space-y-3 lg:space-y-3 space-y-2">
                            <div className="border-b border-blue-300 pb-2">
                                <h3 className="font-bold text-sm lg:text-sm text-xs">{detailCard.title}</h3>
                                <p className="text-xs text-blue-200 mt-1 lg:text-xs text-[10px]">{detailCard.subtitle}</p>
                            </div>
                            
                            <div className="space-y-2">
                                <h4 className="font-semibold text-xs text-blue-200 lg:text-xs text-[10px]">Technical Overview:</h4>
                                <ul className="text-xs space-y-1 lg:text-xs text-[10px]">
                                    {detailCard.technicalSpecs.map((spec, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-blue-300 mr-2">•</span>
                                            <span>{spec}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="space-y-2">
                                <h4 className="font-semibold text-xs text-blue-200 lg:text-xs text-[10px]">Key Features:</h4>
                                <ul className="text-xs space-y-1 lg:text-xs text-[10px]">
                                    {detailCard.keyFeatures.map((feature, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-blue-300 mr-2">•</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="mt-3">
                                <p className="text-xs text-blue-100 lg:text-xs text-[10px]">{detailCard.description}</p>
                            </div>

                            {/* External Link Indicator */}
                            {externalLink && (
                                <div onClick={handleCardClick} className="absolute top-4 right-4 text-white">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ASUPage = () => {
    const { currentPage, updateCurrentPage } = useNavigation();
    const navigate = useNavigate();

    // Function to handle navigation with URL update
    const handlePageNavigation = (direction: 'next' | 'prev') => {
        const productRoutes = ['asu', 'psa', 'lbu', 'next'];
        let newPage: number;
        
        if (direction === 'next') {
            newPage = currentPage === 4 ? 1 : currentPage + 1;
        } else {
            newPage = currentPage === 1 ? 4 : currentPage - 1;
        }
        
        updateCurrentPage(newPage);
        navigate(`/products/${productRoutes[newPage - 1]}`);
    };
    
    // Detail cards data
    const detailCards = {
        tot: {
            title: "TOT SERIES OXYGEN PLANT",
            subtitle: "ONSITE COMPACT OXYGEN GENERATOR",
            technicalSpecs: [
                "Oxygen Flow: 18 lpm (≈3 'D' cylinders/day)",
                "Oxygen Purity: 93±3%",
                "Oxygen Pressure: 4.5 bar g",
                "Dimensions: 1230mm x 1490mm x 2000mm",
                "Weight: 500kg",
                "Certifications: ISO 13485-1, NFPA 99(21), CE"
            ],
            keyFeatures: [
                "Reliable PSA tech with high-purity output (93±3%)",
                "Automated operation with energy-saving displays",
                "Compact, mobile, and space-efficient design",
                "Zero CO₂ emissions, zero transport footprint",
                "No explosive materials or storage risks",
                "Cuts operating and logistics costs—no waste"
            ],
            description: "The TOT Series by Summits Pyronics Pvt. Ltd. offers a compact, plug-and-play PSA oxygen generation system tailored for small hospitals, clinics, wellness centers, veterinary care, and O₂ consumption needs. Trusted choice for dependable on-site medical oxygen supply."
        },
        oxylife: {
            title: "OXYGEN GENERATOR - OXYLIFE",
            subtitle: "MEDICAL GRADE OXYGEN SOLUTION",
            technicalSpecs: [
                "Flow Rate: Up to 1250 LPM",
                "Purity: 93±3%",
                "Pressure: Up to 5 bar g",
                "Performance: Tested at -10°C ambient",
                "Compliant with medical pressure requirements"
            ],
            keyFeatures: [
                "Plug-and-play system with fast ROI",
                "Advanced PLC controls and energy economizer",
                "Uniform gas flow over 2core for maximum efficiency",
                "Built-in alarms for air quality monitoring",
                "Stainless steel interconnecting piping",
                "Complies with WHO-ISO 7137-3, HTM 02-01, and NFPA 99C"
            ],
            description: "A compact, PSA-based oxygen plant delivering up to 1250 LPM at 93±3% purity. Designed for hospitals, clinics, and industrial needs. Built for dependability and energy efficiency, the OxyLife system ensures reliable 24×7 oxygen generation with low environmental impact."
        },
        nitropak: {
            title: "NITROPAK - NITROGEN GENERATOR PLANT",
            subtitle: "HIGH-PURITY NITROGEN SOLUTION",
            technicalSpecs: [
                "Core Tech: Pressure Swing Adsorption (PSA)",
                "Purity Control: On-demand, high-purity nitrogen",
                "Pre-Treatment: Integrated Air Compressor & Filtration",
                "Proven: Surge and Storage Tanks for peak demand buffering"
            ],
            keyFeatures: [
                "Proven PSA-based NitroPAK for consistent output",
                "Automated air-intake ensures long PSA life and optimal performance",
                "Built-in surge and storage tanks for reliable pressures and flow",
                "Eliminates cylinder-rental, delivery fees, and nitrogen loss",
                "Faster ROI, lower CapEx & OpEx",
                "Total control over operational parameters and cost"
            ],
            description: "A high-efficiency, on-site nitrogen solution powered by advanced PSA technology. NitroPAK delivers dependable performance, ensuring high availability. Built for reducing dependency on external supply chains and driving down long-term costs."
        },
        maps: {
            title: "MAPS SERIES - NITROGEN GENERATOR",
            subtitle: "INDUSTRIAL NITROGEN SOLUTION",
            technicalSpecs: [
                "Nitrogen Purity: 99.5%",
                "Output Pressure: 5 bar",
                "Models Available:",
                "• N-Flow: 15 lpm (0.9 m³/hr)",
                "• Compressor: 2 HP / 1.5 kW",
                "• Pressure: 7 bar g",
                "• Size: 350 x 650 x 800 mm",
                "• N-Flow: 30 lpm (1.8 m³/hr)",
                "• Compressor: 3 HP / 2.2 kW"
            ],
            keyFeatures: [
                "99.5% food-grade nitrogen with stable purity",
                "Compact footprint, designed for plug-and-play next to your packing line",
                "Fully automatic with auto cut-off when idle",
                "PSA technology with molecular sieve beds",
                "Fastest ROI vs. cylinder dependency—low CapEx & OpEx",
                "Minimal maintenance, maximum uptime"
            ],
            description: "Tested method to extend shelf-life and preserve freshness in products like snacks, meats, coffee, beverages, and edible oils. Designed for on-floor integration with food packaging machines, MAP units ensure purity, freshness, and extended shelf life."
        }
    };

    return (
        <div id="psa" className="h-[2000px] bg-white pt-6 lg:pt-8 pb-20 sm:pb-0" >
            {/* Main Content */}
            <main className="relative z-10 left-0 sm:pr-40 lg:ml-64 lg:left-20 lg:pr-40 ml-0 left-0 pr-4">
                <div className="container mx-auto px-4 py-12 lg:py-12 py-6">
                    <div className="grid grid-cols-12 gap-4 min-h-[80vh] lg:grid-cols-12 grid-cols-1">
                        {/* Main Content Area */}
                        <div className="col-span-8 lg:col-span-7 col-span-1 sm:pl-6 sm:border-l-2 border-[#5b88c9]">
                            {/* Section Numbers */}
                            <div className="flex items-center space-x-8 mb-5 lg:mb-8 mb-4">
                                <div className="text-2xl font-bold lg:text-2xl text-lg">02.</div>
                            </div>

                            {/* Main Heading */}
                            <div className="mb-8 lg:mb-8 mb-4">
                                <h1 className="text-5xl font-bold text-black mb-2 lg:text-5xl text-3xl">PSA Technology</h1>
                                <h2 className="text-xl text-gray-700 lg:text-xl text-lg">Gas Production & Distributions</h2>
                            </div>

                            {/* Description */}
                            <div className="w-full pt-24 lg:pt-24 pt-8 text-justify">
                                <p className="text-gray-600 leading-relaxed lg:text-base text-sm">
                                    Pressure Swing Adsorption (PSA) is an advanced technology designed to generate high-purity Oxygen or Nitrogen directly on-site — safely, efficiently, and on demand. Using selective adsorbents like Zeolite, the PSA process filters compressed air by trapping unwanted gases such as nitrogen and CO₂, allowing only the desired gas to pass through. 
                                    This smart separation method ensures continuous, reliable gas production without relying on external supply chains.
                                </p>
                                <p className="text-gray-600 leading-relaxed mt-4 lg:text-base text-sm">
                                    Choosing a PSA plant means lower operational costs, reduced dependency on high-pressure cylinders, and enhanced safety. It also supports a greener footprint by eliminating transport-related emissions. Whether you're running a hospital, a manufacturing line, or a remote facility, PSA systems deliver flexibility, control, and long-term sustainability — right where you need it.
                                </p>
                            </div>

                            {/* Level Tags */}
                            <div className="text-gray-400 hidden sm:block text-xs sm:text-sm font-bold space-y-1 pl-4 pt-32 lg:pt-32 pt-16">
                                <p>LEVEL 1</p>
                            </div>
                        </div>

                        {/* Right Side - PSU and Social Icons */}
                        <div className="col-span-5 flex flex-col gap-5 lg:col-span-5 lg:flex col-span-1 hidden">
                            {/* PSU Text */}
                            <div className="flex items-center ml-80">
                                <div className="text-2xl font-bold text-gray-300">03.</div>
                            </div>
                            <div className="text-right">
                                <div className="text-6xl font-bold text-gray-200 tracking-wider pb-60">LIQU</div>
                            </div>

                            {/* Navigation Arrows */}
                            <div className="flex space-x-2 justify-end mt-8">
                                <div 
                                    onClick={() => handlePageNavigation('prev')} 
                                    className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer"
                                >
                                    <ChevronLeft size={20} />
                                </div>
                                <div 
                                    onClick={() => handlePageNavigation('next')} 
                                    className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer"
                                >
                                    <ChevronRight size={20} />
                                </div>
                            </div>
                        </div>

                        {/* Mobile Navigation */}
                        <div className="lg:hidden flex justify-center space-x-2 col-span-4">
                            <div 
                                onClick={() => handlePageNavigation('prev')} 
                                className="w-10 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer"
                            >
                                <ChevronLeft size={18} />
                            </div>
                            <div 
                                onClick={() => handlePageNavigation('next')} 
                                className="w-10 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer"
                            >
                                <ChevronRight size={20} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Bottom-Left Background Image */}
            <div
                className="absolute top-80 left-0 w-[800px] h-[800px] bg-no-repeat bg-contain pointer-events-none lg:block hidden"
                style={{
                    backgroundImage: `url('/Layer.png')`
                }}
            />
            <div className="absolute top-2 left-2 text-white text-xs font-bold tracking-wide">LEVEL 1</div>
            
            {/* Desktop Industrial Plant Images Section with Flip Animation */}
            <div className="absolute top-[999px] left-64 -ml-60 right-0 h-[800px] z-10 lg:block hidden">
                <div className="relative h-full w-full">
                    {/* TOT SERIES OXYGEN PLANT */}
                    <FlipCard
                        imageSrc="/PSA/tot.png"
                        title="TOT SERIES OXYGEN"
                        subtitle="PLANT- ONSITE COMPACT OXYGEN GENERATOR"
                        detailCard={detailCards.tot}
                        className="absolute top-0 left-[460px] w-[280px] h-[400px] z-20"
                        externalLink="https://www.instagram.com/reel/DMIGQBvpsgf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                    />

                    {/* OXYGEN GENERATOR - OXYLIFE */}
                    <FlipCard
                        imageSrc="/PSA/oxygen.png"
                        title="OXYGEN GENERATOR-"
                        subtitle="OXYLIFE"
                        detailCard={detailCards.oxylife}
                        className="absolute top-[-200px] left-[800px] w-[400px] h-[280px] z-20"
                        externalLink="https://www.instagram.com/reel/DMIGz6Ip8pB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                    />

                    {/* NITROPAK - NITROGEN GENERATOR PLANT */}
                    <FlipCard
                        imageSrc="/PSA/generator.png"
                        title="NitroPAK-"
                        subtitle="NITROGEN GENERATOR PLANT"
                        detailCard={detailCards.nitropak}
                        className="absolute left-[290px] top-[-250px] w-[450px] h-[250px] z-20"
                        externalLink="https://www.instagram.com/reel/DMIEkmop-yq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                    />

                    {/* MAPS SERIES - NITROGEN GENERATOR */}
                    <FlipCard
                        imageSrc="/PSA/nitrogen.png"
                        title="MAPS SERIES-"
                        subtitle="NITROGEN GENERATOR"
                        detailCard={detailCards.maps}
                        className="absolute top-[-410px] right-[-770px] w-[350px] h-[350px] z-20"
                        externalLink="https://www.instagram.com/reel/DMH8sE4pB7w/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                    />
                </div>
            </div>

            {/* Mobile Plant Images Section with Flip Animation */}
            <div className="lg:hidden block px-4 mt-8">
                <div className="space-y-6">
                    {/* TOT SERIES OXYGEN PLANT */}
                    <FlipCard
                        imageSrc="/PSA/tot.png"
                        title="TOT SERIES OXYGEN"
                        subtitle="PLANT- ONSITE COMPACT OXYGEN GENERATOR"
                        detailCard={detailCards.tot}
                        className="w-full h-48"
                        externalLink="https://www.instagram.com/reel/DMIGQBvpsgf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                    />

                    {/* OXYGEN GENERATOR - OXYLIFE */}
                    <FlipCard
                        imageSrc="/PSA/generator.png"
                        title="OXYGEN GENERATOR-"
                        subtitle="OXYLIFE"
                        detailCard={detailCards.oxylife}
                        className="w-full h-48"
                        externalLink="https://www.instagram.com/reel/DMIGz6Ip8pB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                    />

                    {/* NITROPAK - NITROGEN GENERATOR PLANT */}
                    <FlipCard
                        imageSrc="/PSA/generator.png"
                        title="NitroPAK-"
                        subtitle="NITROGEN GENERATOR PLANT"
                        detailCard={detailCards.nitropak}
                        className="w-full h-48"
                        externalLink="https://www.instagram.com/reel/DMIEkmop-yq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                    />

                    {/* MAPS SERIES - NITROGEN GENERATOR */}
                    <FlipCard
                        imageSrc="/PSA/nitrogen.png"
                        title="MAPS SERIES-"
                        subtitle="NITROGEN GENERATOR"
                        detailCard={detailCards.maps}
                        className="w-full h-48"
                        externalLink="https://www.instagram.com/reel/DMH8sE4pB7w/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                    />
                </div>
            </div>
        </div>
    );
};

export default ASUPage;
