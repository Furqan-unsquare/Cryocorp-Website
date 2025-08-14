import React from "react";
import AsuTechnologyPanel from "@/components/NEXT/hero";
import IndoorSolutionsSection from "@/components/NEXT/IndoorSolutionsSection";
import { useNavigation } from "@/contexts/NavigationContext";
import { useNavigate } from "react-router-dom";

const Products: React.FC = () => {
    const { updateCurrentPage, currentPage } = useNavigation();
    const navigate = useNavigate();

    // Function to handle navigation with URL update
    const handlePageNavigation = (pageNumber: number, route: string) => {
        updateCurrentPage(pageNumber);
        navigate(`/products/${route}`);
    };

    return (
        <div className="relative">
            <div className="hidden sm:block absolute z-10 top-[70px] left-0 px-6 pt-[12px] w-64">
                <div className="flex flex-col h-full">
                    {/* Top Left List */}
                    <div className="hidden sm:block space-y-2 text-xs sm:text-sm font-bold text-gray-400 mb-auto">
                        <a 
                            className={`block cursor-pointer transition-colors hover:text-[#59C6D3] ${
                                currentPage === 1 ? 'text-[#59C6D3]' : ''
                            }`}
                            onClick={() => handlePageNavigation(1, 'asu')}
                        >
                            01. ASU TECHNOLOGY
                        </a>
                        <a 
                            className={`block cursor-pointer transition-colors hover:text-[#59C6D3] ${
                                currentPage === 2 ? 'text-[#59C6D3]' : ''
                            }`}
                            onClick={() => handlePageNavigation(2, 'psa')}
                        >
                            02. PSA TECHNOLOGY
                        </a>
                        <a 
                            className={`block cursor-pointer transition-colors hover:text-[#59C6D3] ${
                                currentPage === 3 ? 'text-[#59C6D3]' : ''
                            }`}
                            onClick={() => handlePageNavigation(3, 'lbu')}
                        >
                            03. LIQUID BOTTLING UNIT
                        </a>
                        <a 
                            className={`block cursor-pointer transition-colors hover:text-[#59C6D3] ${
                                currentPage === 4 ? 'text-[#59C6D3]' : ''
                            }`}
                            onClick={() => handlePageNavigation(4, 'next')}
                        >
                            04. NEXT GEN GAS SOLUTIONS
                        </a>
                    </div>

                    {/* Vertical Line Container */}
                    <div className="relative flex-1 my-4">
                        {/* Vertical Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-400 opacity-50" />
                    </div>

                    {/* Bottom Section */}
                    <div className="flex mt-auto pb-32">
                        {/* Numbers */}
                        <div className="text-gray-400 hidden sm:block text-xs sm:text-sm space-y-1 font-semibold w-8 pt-[300px]">
                            {/* <p>01.</p>
                            <p>02.</p>
                            <p>03.</p> */}
                        </div>
                    </div>
                </div>
            </div>
            <AsuTechnologyPanel />
            <IndoorSolutionsSection />
        </div>
    );
};

export default Products;
