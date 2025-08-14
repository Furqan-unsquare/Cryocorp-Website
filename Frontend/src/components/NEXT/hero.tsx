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
        <div className="md:min-h-[150px] lg:min-h-[200px] xl:min-h-[300px] bg-white relative pt-6 lg:pt-8">
             {/* Bottom-Left Background Image */}
            <div
                className="absolute top-60 left-0 z-40 w-[800px] h-[800px] bg-no-repeat bg-contain pointer-events-none lg:block hidden"
                style={{
                    backgroundImage: `url(${layerImage})`
                }}/>

            {/* Main Content */}
            <div  className="relative z-10 sm:ml-64 left-0 sm:pr-40 lg:ml-64 lg:left-20 lg:pr-40 ml-0 left-0 pr-4">
                <div className="container mx-auto px-4 py-12 lg:py-12 py-6">
                    <div className="grid grid-cols-12 gap-4 min-h-[56vh] sm:min-h-[80vh] lg:grid-cols-12 grid-cols-1">
                        {/* Main Content Area */}
                        <div className="col-span-8 lg:col-span-7 col-span-1 sm:pl-6 sm:border-l-2 border-[#5b88c9]">
                            {/* Section Numbers */}
                            <div className="flex items-center space-x-8 mb-5 lg:mb-8 mb-4">
                                <div className="text-2xl font-bold lg:text-2xl text-lg">04.</div>
                            </div>

                            {/* Main Heading */}
                            <div className="mb-8 lg:mb-8 mb-4">
                                <h1 className="text-5xl font-bold text-black mb-2 lg:text-5xl text-3xl">NEXT GEN GAS </h1>
                                <h1 className="text-5xl font-bold text-black mb-2 lg:text-5xl text-3xl">SOLUTIONS</h1>
                            </div>

                            {/* Description */}
                            <div className="w-full pt-24 lg:pt-24 pt-8">
                                <p className="text-gray-600 leading-relaxed lg:text-base text-sm text-justify">
                                    Products in this category are aspiratinal products that we are fully equipped of supplying to our clients when the interest is received. These products will be supplied in collaboration with our partners like Summits Hygronics and others.
                                </p>
                            </div>

                            {/* Level Tags */}
                            <div className="text-gray-600 hidden sm:block text-xs sm:text-sm font-bold space-y-1 pl-4  lg:pt-32 pt-8">
                                <p>RELAXAIR</p>
                                <p>MEDICAL AIR DRYERS</p>
                                <p>HYDROGEN STORAGE TANKS & FILLING MANIFOLDS</p>
                            </div>
                        </div>

                        {/* Right Side - Next Section and Navigation */}
                        <div className="md:col-span-5 md:flex flex-col gap-5 lg:col-span-5 lg:flex col-span-1 hidden">
                            {/* Next Section Number */}
                            <div className="flex items-center ml-80">
                                <div className="text-2xl font-bold text-gray-300">01.</div>
                            </div>
                            <div className="text-right">
                                <div className="text-6xl font-bold text-gray-200 tracking-wider pb-60">ASU</div>
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
            </div>
        </div>
    );
};

export default ASUPage;
