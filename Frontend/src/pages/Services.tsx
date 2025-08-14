import Hero from "@/components/services/hero";
import Image from "@/components/services/image";
import Image2 from "@/components/services/image2";
import Card from "@/components/services/card";
import Project from "@/components/services/projects";
import Project2 from "@/components/services/Grid";
import CTA from "@/components/CTA";

const services = () => {
  return (
  <div  className="min-h-screen">
      <Hero />
      <Image />
      <Card />
      <Image2 />
      <Project />
      <Project2 />
      <CTA />
    </div>
  );
};

export default services;
