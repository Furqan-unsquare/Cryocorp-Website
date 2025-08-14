import React from "react";
import { MessageCircle, Phone, User, ChevronLeft, ChevronRight } from "lucide-react";
import layerImage from '/public/Layer.png';
import { useNavigation } from '../../contexts/NavigationContext';
import { useNavigate } from "react-router-dom";

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

    return (
        <div className="min-h-screen bg-white relative pt-6 lg:pt-8" style={{ minHeight: '145vh' }}>
            {/* Main Content */}
            <main className="relative z-10 sm:ml-64 left-0 sm:pr-40 lg:ml-64 lg:left-20 lg:pr-40 ml-0 left-0 pr-4">
                <div className="container mx-auto px-4 md:py-12 lg:py-12 py-6">
                    <div className="grid grid-cols-12 gap-4 min-h-[80vh] lg:grid-cols-12 grid-cols-1">
                        {/* Main Content Area */}
                        <div className="col-span-8 lg:col-span-7 col-span-1 sm:pl-6 sm:border-l-2 border-[#5b88c9]">
                            {/* Section Numbers */}
                            <div className="flex items-center space-x-8 mb-5 lg:mb-8 mb-4">
                                <div className="text-2xl font-bold lg:text-2xl text-lg">03.</div>
                            </div>

                            {/* Main Heading */}
                            <div className="mb-8 lg:mb-8 mb-4">
                                <h1 className="text-5xl font-bold text-black mb-2 lg:text-5xl text-3xl">LIQUID BOTTLING</h1>
                                <h1 className="text-5xl font-bold text-black mb-2 lg:text-5xl text-3xl">UNIT</h1>
                            </div>

                            {/* Description */}
                            <div className="w-full pt-24 lg:pt-24 pt-8 text-justify">
                                <p className="text-gray-600 leading-relaxed lg:text-base text-sm">
                                    Industrial gases like Oxygen, Nitrogen, Argon, and Carbon Dioxide are frequently transported in their liquid form from large production facilities.
                                    This liquid is stored in large cryogenic tanks for subsequent distribution. 
                                    A Liquid Refilling Bottling System is essential for transferring these bulk liquid gases from the storage tanks into smaller cylinders, which are then distributed to end-users like hospitals or industrial sites. Keeping up with industry demand, companies like Cryo Corp provide the necessary machinery and equipment for this crucial step in the liquid gas supply chain.
                                </p>
                                <p className="text-gray-600 leading-relaxed mt-4 lg:text-base text-sm">
                                    A complete Liquid Refilling Bottling Plant offered by Cryo Corp includes major components such as Cryogenic Storage Tanks for various liquid gases like Liquid Oxygen, Liquid Nitrogen, Liquid Argon, Liquid CO2 and other gases which can hold up to 40 KL. The system also incorporates Ambient Liquid Vapourizers to convert the liquid gas back into a gaseous state when needed, handling flow rates from 30 to 2,500 Nm³/hr. Furthermore, it includes Liquid Pumps designed specifically for transferring Oxygen, Nitrogen, Argon, or Carbon Dioxide liquids, with capacities ranging up to 400 cu.m/hr. Cryo Corp also offers complete service support, including the erection and commissioning of these bottling units at the client's location.
                                </p>
                            </div>

                            {/* Level Tags */}
                            <div className="text-gray-400 hidden sm:block text-xs sm:text-sm font-bold space-y-1 pl-4 pt-16 lg:pt-16 pt-8">
                                <p>LEVEL 1</p>
                                <p>LEVEL 2</p>
                            </div>
                        </div>

                        {/* Right Side - Next Section and Navigation */}
                        <div className="col-span-5 flex flex-col gap-5 lg:col-span-5 lg:flex col-span-1 hidden">
                            {/* Next Section Number */}
                            <div className="flex items-center ml-80">
                                <div className="text-2xl font-bold text-gray-300">04.</div>
                            </div>
                            <div className="text-right">
                                <div className="text-6xl font-bold text-gray-200 tracking-wider pb-60">NEXT</div>
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
        </div>
    );
};

export default ASUPage;
