import React from "react";
import Hero from "@/components/About/hero";
import Image from "@/components/About/image";
import OurVision from "@/components/About/OurVision"
import OurMission from "@/components/About/OurMission";
import OurValues from "@/components/About/OurValues";
import Founders from "@/components/About/Founders";
import Certifications from "@/components/About/Certifications";
const Products: React.FC = () => {
    return (
        <>
            <Hero />
            <Image />
            <OurVision/>
            <OurMission/>
            <OurValues/>
            <Founders/>
            <Certifications/>
        </>
    );
};

export default Products;
