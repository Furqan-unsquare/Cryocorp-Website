import React from "react";
import { MessageCircle, Phone, User, ChevronLeft, ChevronRight } from "lucide-react";
import layerImage from '/public/Layer.png';
import { useNavigation } from '../../contexts/NavigationContext';
import { useNavigate } from "react-router-dom";

// Card component to handle flip animation and content
const PlantCard = ({ title, imageSrc, frontContent, backContent, positionStyle }) => {
    const [isFlipped, setIsFlipped] = React.useState(false);

    // Check if this card should have text positioned at top-right
    const isTopRightCard = title === "ASU Nitrogen Plant" || title === "Second Hand ASU Plant";

    return (
        <div 
            className="flip-card relative"
            style={positionStyle}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
                <div className="flip-card-front relative w-full h-full overflow-hidden shadow-lg">
                    <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-blue-300/40" />
                    <div className={`absolute text-white text-2xl font-bold tracking-wide ${
                        isTopRightCard 
                            ? 'top-4 right-4 text-right max-w-[60%]' 
                            : 'bottom-4 left-4'
                    }`}>
                        {frontContent}
                    </div>
                </div>
                <div className="flip-card-back absolute w-full h-full overflow-hidden bg-[#5FC9D8] text-white flex flex-col">
                    {title === "ASU Oxygen Plant" ? (
                        <div className="flex flex-col justify-between">
                            {/* Top section */}
                            <div className="flex-1 p-4 pb-2">
                                <div className="text-sm leading-relaxed text-justify">
                                    <p>Our <strong>ASU Oxygen Plants</strong> are engineered for high-purity oxygen generation. Designed for reliability and scalability, they feature semi-automatic operations with optional PLC/SCADA automation and user-friendly interfaces. We provide complete erection and commissioning to ensure seamless integration and peak performance.</p>
                                </div>
                            </div>
                            {/* Bottom section */}
                            <div className="flex-1 p-4 pt-16 bg-[#5FC9D8]">
                                <div className="text-sm leading-relaxed text-justify">
                                    <p>offer capacities from <strong>80 to 600 cu.m/hr</strong>,</p>
                                    <p>low maintenance cycles — once every <strong>6-9 months</strong>.</p>
                                </div>
                            </div>
                        </div>
                    ) : title === "ASU Nitrogen Plant" ? (
                        <>
                            {/* Top section */}
                            <div className="flex-1 p-4 pb-2">
                                <div className="text-sm leading-relaxed text-justify">
                                    <p>Similar to our oxygen systems, <strong>ASU Nitrogen Plants</strong> are of high-purity nitrogen. With extended operating cycles and options for remote monitoring and automation, these plants are built for consistency and ease of use. Our end-to-end installation and commissioning services ensure quick deployment and reliable operation from day one.</p>
                                </div>
                            </div>
                            {/* Bottom section */}
                            <div className="flex-1 p-4 pt-36 bg-[#5FC9D8] flex items-center">
                                <div className="text-sm leading-relaxed text-justify">
                                    <p>Deliver <strong>80 to 600 cu.m/hr</strong></p>
                                </div>
                            </div>
                        </>
                    ) : title === "New ASU Plant" ? (
                        <div className="p-4 bg-[#5FC9D8] h-full">
                            <div className="text-sm leading-relaxed text-justify">
                                <p>Available in <strong>25, 45, and 100 cu.m/hr</strong>, these <strong>New ASU Plants</strong> offer a quick 15-minute start-up, automated valve controls, and integrated safety systems for precise and secure operation. Designed for reliability, they include advanced pressure monitoring, with maintenance tailored to the specific demands of gas handling.</p>
                            </div>
                        </div>
                    ) : (
                        <div className="p-4 bg-[#5FC9D8] h-full">
                            <div className="text-sm leading-relaxed text-justify">
                                <p>These projects involve <strong>Second-Hand Oxygen/Nitrogen plants</strong>, relevant for capacities typically ranging from <strong>50 to 400 cubic meters</strong>. A key aspect is the detailed evaluation of the plant's current condition and technical suitability to ensure reliability. The degree of automation and ease of operation would depend on the specific plant acquired. Comprehensive turnkey support includes dismantling, transportation, reinstallation, and commissioning services at the new site.</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const ASUPage: React.FC = () => {
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

    // Updated card contents to match the image structure
    const cardContents = {
        "ASU Oxygen Plant": {
            section1: "Our ASU Oxygen Plants are engineered for high-purity oxygen generation. Designed for reliability and scalability, they feature semi-automatic operations with optional PLC/SCADA automation and user-friendly interfaces. We provide complete erection and commissioning to ensure seamless integration and peak performance.",
            section2: "offer capacities from 80 to 600 cu.m/hr, low maintenance cycles — once every 6-9 months."
        },
        "ASU Nitrogen Plant": {
            section1: "Similar to our oxygen systems, ASU Nitrogen Plants are of high-purity nitrogen. With extended operating cycles and options for remote monitoring and automation, these plants are built for consistency and ease of use. Our end-to-end installation and commissioning services ensure quick deployment and reliable operation from day one.",
            section2: "Deliver 80 to 600 cu.m/hr"
        },
        "New ASU Plant": "Available in 25, 45, and 100 cu.m/hr, these New ASU Plants offer a quick 15-minute start-up, automated valve controls, and integrated safety systems for precise and secure operation. Designed for reliability, they include advanced pressure monitoring, with maintenance tailored to the specific demands of gas handling.",
        "Second Hand ASU Plant": "These projects involve Second-Hand Oxygen/Nitrogen plants, relevant for capacities typically ranging from 50 to 400 cubic meters. A key aspect is the detailed evaluation of the plant's current condition and technical suitability to ensure reliability. The degree of automation and ease of operation would depend on the specific plant acquired. Comprehensive turnkey support includes dismantling, transportation, reinstallation, and commissioning services at the new site."
    };

    return (
        <div id="asu" className=" sm:min-h-[180vh] lg:min-h-[190vh] xl:min-h-[220vh] bg-white relative mb-10 pt-6 lg:pt-8">
            {/* Main Content */}
            <main className="relative z-10 sm:ml-64 left-0 sm:pr-40 lg:ml-64 lg:left-20 lg:pr-40 ml-0 pr-4">
                <div className="container mx-auto px-4 md:py-12 lg:py-12 py-6">
                    <div className="grid grid-cols-12 gap-4 min-h-[80vh] lg:grid-cols-12 grid-cols-1">
                        {/* Main Content Area */}
                        <div className="col-span-8 lg:col-span-7 col-span-1 sm:pl-6 sm:border-l-2 border-[#5b88c9]">
                            {/* Section Numbers */}
                            <div className="flex items-center space-x-8 mb-5 lg:mb-8 mb-4">
                                <div className="md:text-2xl font-bold lg:text-2xl text-lg">01.</div>
                            </div>

                            {/* Main Heading */}
                            <div className="md:mb-8 lg:mb-8 mb-4">
                                <h1 className="text-5xl font-bold text-black mb-2 lg:text-5xl text-3xl">ASU Technology</h1>
                                <h2 className="md:text-xl font-bold text-gray-900 lg:text-xl text-lg">Gas Production & Distributions</h2>
                            </div>

                            {/* Description */}
                            <div className="w-full md:pt-24 lg:pt-24 pt-8">

                                <p className="text-gray-600 leading-relaxed lg:text-base text-sm  text-justify">
                                    <span className="italic">Air Separation Unit (ASU) </span>technology is at the heart of CryoCorp's operations — a cutting-edge process
                                    where atmospheric air is compressed, cooled, and separated into its key components: oxygen, nitrogen,
                                    and argon. These gases are then purified, liquefied, or stored in gaseous form depending on industrial
                                    needs.
                                </p>
                            </div>

                            {/* Level Tags */}
                            <div className="text-gray-600 hidden sm:block text-xs sm:text-sm font-black space-y-1 pl-4 lg:pt-32 pt-16">
                                <a className="sm:block" href="#level-1">LEVEL 1</a>
                                <a className="sm:block" href="#level-2">LEVEL 2</a>
                                <a className="sm:block" href="#level-3">LEVEL 3</a>
                            </div>
                        </div>

                        {/* Right Side - PSU and Social Icons */}
                        <div className="col-span-5 flex flex-col gap-5 lg:col-span-5 lg:flex col-span-1 hidden">
                            {/* PSU Text */}
                            <div className="flex items-center ml-80">
                                <div className="text-2xl font-bold text-gray-300">02.</div>
                            </div>
                            <div className="text-right">
                                <div className="text-6xl font-bold text-gray-200 tracking-wider pb-60">PSA</div>
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
                                <ChevronRight size={18} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Bottom-Left Background Image */}
            <div
                className="absolute top-80 left-0 w-[800px] h-[800px] bg-no-repeat bg-contain pointer-events-none lg:block hidden"
                style={{
                    backgroundImage: `url(${layerImage})`
                }}
            />
            <div className="absolute top-2 left-2 text-white text-xs font-bold tracking-wide">LEVEL 1</div>

            {/* Industrial Plant Images Section */}
            <div id="level-1" className="absolute top-[1000px] left-0 ml-60 right-0 h-[600px] z-10 lg:block hidden scroll-mt-32">
                <p className="font-bold">LEVEL 1</p>
                <div className="relative sm:h-full w-full">
                    <PlantCard 
                        title="ASU Oxygen Plant" 
                        imageSrc="/ASU/ASU.jpg" 
                        frontContent="ASU Oxygen Plant" 
                        backContent={cardContents["ASU Oxygen Plant"]} 
                        positionStyle={{ position: 'absolute', top: 0, width: '390px', height: '288px' }} 
                    />
                    <PlantCard 
                        title="ASU Nitrogen Plant" 
                        imageSrc="/ASU/asu4.png" 
                        frontContent="ASU Nitrogen Plant" 
                        backContent={cardContents["ASU Nitrogen Plant"]} 
                        positionStyle={{ position: 'absolute', top: 0, left: '420px', width: '380px', height: '380px' }} 
                    />
                    <PlantCard 
                        title="New ASU Plant" 
                        imageSrc="/ASU/asu2.png" 
                        frontContent="New ASU Plant" 
                        backContent={cardContents["New ASU Plant"]} 
                        positionStyle={{ position: 'absolute', top: '300px', left: '80px', width: '308px', height: '174px' }} 
                    />
                    <PlantCard 
                        title="Second Hand ASU Plant" 
                        imageSrc="/ASU/asu3.png" 
                        frontContent="Second Hand ASU Plant" 
                        backContent={cardContents["Second Hand ASU Plant"]} 
                        positionStyle={{ position: 'absolute', top: '250px', left: '830px', width: '300px', height: '256px' }} 
                    />
                </div>
            </div>

            {/* Mobile Plant Images Section */}
            <div className="lg:hidden block px-4">
                <div className="space-y-6">
                    <PlantCard 
                        title="ASU Oxygen Plant" 
                        imageSrc="/ASU/ASU.jpg" 
                        frontContent="ASU Oxygen Plant" 
                        backContent={cardContents["ASU Oxygen Plant"]} 
                        positionStyle={{ width: '100%', height: '192px' }} 
                    />
                    <PlantCard 
                        title="ASU Nitrogen Plant" 
                        imageSrc="/ASU/asu4.png" 
                        frontContent="ASU Nitrogen Plant" 
                        backContent={cardContents["ASU Nitrogen Plant"]} 
                        positionStyle={{ width: '100%', height: '192px' }} 
                    />
                    <PlantCard 
                        title="New ASU Plant" 
                        imageSrc="/ASU/asu2.png" 
                        frontContent="New ASU Plant" 
                        backContent={cardContents["New ASU Plant"]} 
                        positionStyle={{ width: '100%', height: '192px' }} 
                    />
                    <PlantCard 
                        title="Second Hand ASU Plant" 
                        imageSrc="/ASU/asu3.png" 
                        frontContent="Second Hand ASU Plant" 
                        backContent={cardContents["Second Hand ASU Plant"]} 
                        positionStyle={{ width: '100%', height: '192px' }} 
                    />
                </div>
            </div>
        </div>
    );
};

// CSS for flip animation
const styles = `
    .flip-card {
        perspective: 1000px;
    }
    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        transition: transform 0.6s;
        transform-style: preserve-3d;
    }
    .flip-card-inner.flipped {
        transform: rotateY(180deg);
    }
    .flip-card-front, .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
    }
    .flip-card-back {
        transform: rotateY(180deg);
        overflow-y: auto;
        max-height: 100%;
    }
`;

const styleSheet = new CSSStyleSheet();
styleSheet.replaceSync(styles);
document.adoptedStyleSheets = [styleSheet];

export default ASUPage;