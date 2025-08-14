// src/pages/ProductsContainer.tsx
import React, { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { NavigationProvider } from "../contexts/NavigationContext";
import Products from "./ASU";
import Products2 from "./PSA";
import Products3 from "./LBU";
import Products4 from "./NEXT";
import { useNavigation } from "../contexts/NavigationContext";
import { PageTransition } from "../components/PageTransition";
import CTA from "@/components/CTA";
import { useParams } from "react-router-dom";

const ProductsContainerInner = () => {
  const { currentPage, updateCurrentPage } = useNavigation();
  const { productType } = useParams();

  // Map URL parameters to page numbers
  const getPageFromProductType = (type) => {
    switch (type) {
      case 'asu': return 1;
      case 'psa': return 2;
      case 'lbu': return 3;
      case 'next': return 4;
      default: return 1;
    }
  };

  // Update current page based on URL parameter
  useEffect(() => {
    if (productType) {
      const pageNumber = getPageFromProductType(productType);
      updateCurrentPage(pageNumber);
    }
  }, [productType, updateCurrentPage]);

  return (
    <div className={`bg-white relative overflow-hidden pt-16 lg:pt-16 xl:pt-16 sm:pt-32 transition-all duration-300`}>
      <AnimatePresence mode="wait">
        {currentPage === 1 && (
          <PageTransition key="page-1" pageIndex={1}>
            <Products />
          </PageTransition>
        )}
        {currentPage === 2 && (
          <PageTransition key="page-2" pageIndex={2}>
            <Products2 />
          </PageTransition>
        )}
        {currentPage === 3 && (
          <PageTransition key="page-3" pageIndex={3}>
            <Products3 />
          </PageTransition>
        )}
        {currentPage === 4 && (
          <PageTransition key="page-4" pageIndex={4}>
            <Products4 />
          </PageTransition>
        )}
      </AnimatePresence>
    </div>
  );
};

const ProductsContainer = () => {
  return (
    <>
      <NavigationProvider>
        <ProductsContainerInner />
      </NavigationProvider>
      <CTA />
    </>
  );
};

export default ProductsContainer;
