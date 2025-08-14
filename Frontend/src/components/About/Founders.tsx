import React from "react";

const Founders = () => {
  return (
    <div className="bg-[#1A365E] relative pt-20 overflow-hidden">
        <div className="absolute md:block md:h-[800px] w-[600px]">
            <img src="/about/founder-bg2.png" alt="" className="h-full w-full opacity-60"/>
        </div>
        <div className="absolute bottom-0 right-0 md:block md:h-[800px] w-[600px] ">
            <img src="/about/founder-bg.png" alt="" className="h-full w-full opacity-60"/>
        </div>
      <div className="min-h-[1800px] md:min-h-[1800px] min-h-auto text-white flex flex-col items-center px-4 md:px-0">
        <div className="w-full md:w-1/2">
          <div className="flex flex-col text-center md:text-left">
            <div className="text-[40px] md:text-[60px] font-semibold">Meet</div>
            <div className="text-[40px] md:text-[100px] font-semibold">The Founders</div>
          </div>
        </div>
        
        {/* First Founder - Ashish Goyal */}
        <div className="flex flex-col md:flex-row md:mt-40 py-5 w-full">
          <div className="w-full md:w-1/2 relative flex justify-center md:block">
            <img
              src="/about/founder1.png"
              alt=""
              className="md:absolute md:top-[-260px] md:left-[150px] h-[350px] md:h-[600px] z-1 relative top-0"
            />
            <div className="hidden md:block md:absolute md:bottom-[-290px] md:left-[70px] text-center mt-4 md:mt-0 relative bottom-0 left-0">
              <img src="/about/quote2.png" alt="" className="relative z-2 mx-auto md:mx-0" />
              <div className="md:absolute md:top-5 text-black p-4 md:p-10 text-[12px] md:text-[14px] italic z-3 relative top-0 bg-white md:bg-transparent text-left rounded-lg md:rounded-none shadow-md md:shadow-none mt-2 md:mt-0">
                "Leading CryoCorp, I want to be your trusted partner, providing end-to-end solutions that keep your plants running efficiently. My focus is on understanding exact needs of the clients, eliminating plant downtime and boosting profits by delivering reliable products and responsive technical support."
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <div className="text-[24px] md:text-[28px] font-semibold text-center md:text-left">Ashish Goyal</div>
            <div className="text-[16px] md:text-[20px] mb-4 text-center md:text-left">Managing Director</div>
            <div className="w-full md:w-[80%] opacity-70 text-justify md:text-left md:px-0">
              Leads the company with over 28 years of experience in the
              industrial gas sector. A graduate in <span className="italic">Engineering from Mumbai
              University's Shah and Anchor Kutchi College of Engineering</span>, he
              also holds <span className="italic">a Post Graduate Diploma in Export-Import Management
              from NMIMS University, Mumbai.</span> His strong technical foundation
              supports his experience in providing end-to-end solutions to
              clients for industrial gas machinery. He is known as the go-to
              person for end-to-end solutions, driving our vision to be a global
              leader in Gas engineering. His leadership ensures we deliver
              high-quality, reliable, and customized solutions worldwide,
              embodying our core values.
            </div>
          </div>
        </div>

        {/* Second Founder - Dr. Jaya Goyal */}
        <div className="flex flex-col-reverse md:flex-row pb-20 md:pb-0  md:mt-80 py-5 w-full">
          <div className="w-full md:w-1/2 items-end mt-8 md:mt-0">
            <div className="text-[24px] md:text-[28px] font-semibold text-center  md:ml-[490px] ">Dr. Jaya Goyal</div>
            <div className="text-[16px] md:text-[20px] mb-4 text-center md:text-center md:ml-[500px]">Managing Partner</div>
            <div className="w-full md:w-[80%] opacity-70  text-justify md:text-right md:px-0 md:ml-[100px]">
               Brings over 17 years of experience in driving innovation through best practices in technology, process design, and marketing. With an M.Sc. and a Ph.D, her academic background enriches her approach to strategic development and operational excellence. Jaya’s leadership strengthens CryoCorp’s commitment to using inclusive HR practices, Tech Automation & AI to be world class Indian MSME company. Her deep experience in research consultancy and higher education aligns closely with CryoCorp’s values of Innovation and Sustainability. Together with Ashish, she drives CryoCorp’s mission to engineer impactful solutions for industries worldwide.
            </div>
          </div>
          <div className="w-full md:w-1/2 relative flex justify-center md:block">
            <img
              src="/about/founder2.png"
              alt=""
              className="md:absolute md:top-[-250px] md:right-[210px] h-[400px] md:h-[600px] relative top-0 right-0"
            />
            <div className="hidden md:block md:absolute md:bottom-[-270px] md:left-[-50px] text-center mt-4 md:mt-0 relative bottom-0 left-0">
              <img src="/about/quote1.png" alt="" className="relative mx-auto md:mx-0 h-[310px]" />
              <div className="md:absolute md:top-0 text-black p-4 md:p-10 text-[12px] md:text-[.9rem] lg:text-[14px] lg:ml-3 italic relative top-0 left-5 bg-white md:bg-transparent text-left rounded-lg md:rounded-none shadow-md md:shadow-none mt-2 md:mt-0">
                "As Managing Partner, I am committed to infusing innovation and best practices into everything we do at CryoCorp. By embracing technology and strategic design, we aim to deliver sustainable and advanced gas solutions to industries worldwide. We strive for continuous improvement, ensuring we meet our mission and support our clients' growth journey."
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founders;