"use client";
import React from "react";

type GridItem = {
  title: string;
  subtitle: string;
  type: "Products" | "Services";
  image: string;
  className: string;
  blueOverlay?:string;
  fontColor?:string;
  id?:string;
};

const gridItems: GridItem[] = [
  {
    title: "ASU Technology - Gas Production and Distribution",
    subtitle: "Products:",
    type: "Products",
    image: "/bento/asu.png",
    className: "col-span-2 row-span-2 h-[400px]",
    blueOverlay:"absolute inset-0 bg-blue-900 bg-opacity-50",
    id:"/products/asu"
  },
  {
    title: "PSA Technology",
    subtitle: "Products:",
    type: "Products",
    image: "/bento/psa.png",
    className: "col-span-1 row-span-1 h-[250px]",
    blueOverlay:"absolute inset-0 bg-blue-900 bg-opacity-50",
    id:"/products/psa"
  },
  {
    title: "Maintenance Solutions",
    subtitle: "Services:",
    type: "Services",
    image: "/bento/maintenance.png",
    className: "col-span-1 row-span-1 h-[250px]",
    blueOverlay:"absolute inset-0 bg-[#a3d9c9]/50",
    fontColor:"text-black",
    id:"/services/#services"
  },
  {
    title: "Plant Installation & Commissioning",
    subtitle: "Services:",
    type: "Services",
    image: "/bento/plant.png",
    className: "col-span-2 row-span-2 row-start-3 row-start-2 h-[250px] -mt-14",
    blueOverlay:"absolute inset-0 bg-[#a3d9c9]/50",
    fontColor:"text-black",
    id:"/services/#plants"
  },
  {
    title: "Liquid Bottling Plants - Storage & Distribution",
    subtitle: "Products:",
    type: "Products",
    image: "/bento/liquid.png",
    className: "col-span-2 row-span-2 h-[400px]",
    blueOverlay:"absolute inset-0 bg-blue-900 bg-opacity-50",
    id:"/products/lbu"
  },
];

const IndustrialGrid = () => {
  return (
    <div className="bg-slate-50 sm:pt-20">
      {/* Mobile Layout (single column) */}
      <div className="block lg:hidden">
        <div className="flex flex-col gap-4 p-4 max-w-md mx-auto">
          {gridItems.map((item, index) => (
            <div
            onClick={() => { window.location.href = item.id}}
              key={index}
              className="relative rounded-2xl overflow-hidden bg-cover bg-center text-white flex items-end p-4 h-[250px] cursor-pointer"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <div className={`relative z-10 ${item?.fontColor}`}>
                <p className="text-sm font-semibold">{item.subtitle}</p>
                <h3 className="text-lg font-bold leading-tight">{item.title}</h3>
              </div>
              <div className={`${item?.blueOverlay}`}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Layout (original grid) */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 max-w-4xl mx-auto">
          {gridItems.map((item, index) => (
            <div
              onClick={() => { window.location.href = item.id}}
              key={index}
              className={`cursor-pointer relative rounded-2xl overflow-hidden bg-cover bg-center text-white flex items-end p-4 ${item.className}`}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <div className={`relative z-10 ${item?.fontColor}`}>
                <p className="text-sm font-semibold">{item.subtitle}</p>
                <h3 className="text-lg font-bold leading-tight">{item.title}</h3>
              </div>
              <div className={`${item?.blueOverlay}`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustrialGrid;