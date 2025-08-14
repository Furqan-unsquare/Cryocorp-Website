import React from "react";
import HeroSection from "@/components/Quiz/HeroSection";
import GasIndustryQuiz from "@/components/Quiz/GasIndustryQuiz";
import PlantSelector from "@/components/Quiz/PlantSelector.jsx";
import ASUQuizPromo from "@/components/Quiz/ASUQuizPromo";
import PSASystemQuiz from "@/components/Quiz/PSASystemQuiz";
import CryogenicQuizPromo from "@/components/Quiz/CryogenicQuizPromo";
import WhoAreYou from "@/components/Quiz/WhoAreYou";

const Quiz: React.FC = () => {
  return (
    <>
{/*       
      <GasIndustryQuiz />
      <PlantSelector />
      <ASUQuizPromo />
      <PSASystemQuiz />
      <CryogenicQuizPromo /> */}
      <WhoAreYou/>
      {/* <HeroSection /> */}
    </>
  );
};

export default Quiz;
