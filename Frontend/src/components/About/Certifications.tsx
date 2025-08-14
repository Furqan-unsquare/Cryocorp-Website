import React from 'react';

const Certifications = () => {
  return (
    <section className="bg-white px-4 sm:px-6 md:px-32 py-12 sm:py-16 text-[#1A365E] font-sans">
      <div className="max-w-7xl mx-auto text-[#1A365E] text-[15px]">
        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold">Certifications</h2>
        <h3 className="text-lg sm:text-2xl lg:text-4xl font-bold sm:mb-2">& Quality Checks</h3>
        <p className="text-xs sm:text-sm font-semibold sm:mb-4">
          Excellence isn’t a claim — it’s a standard we prove.
        </p>
        <p className="text-xs sm:text-sm mb-8 sm:mb-4  leading-relaxed">
          Every solution goes through rigorous quality checks and adheres to certified
          industry standards, ensuring reliability, safety, and performance at every level.
        </p>

        {/* Paragraphs */}
        <div className="space-y-5 text-xs sm:text-sm leading-relaxed text-justify">
          <p>
            CryoCorp O2 LLP is a <span className="font-semibold">registered Micro Enterprise under India’s MSME framework</span>,
            a status that underscores our commitment to supporting small-scale, high-impact
            engineering in the cryogenic sector. The company is also registered with
            India’s top B2G marketplace – <span className="italic">GeM portal</span>.
          </p>

          <p>
            We are a recurring member of the <span className="font-semibold">Engineering Export Promotion Council (EEPC) – Western Region</span>,
            backed by the <span className="italic">Ministry of Commerce & Industry</span>, that positions them
            within a robust network of Indian exporters, facilitating global trade opportunities and adherence to international standards.
          </p>

          <p>
            We are actively pursuing <span className="font-semibold">ISO 9001 certification</span>, with completion anticipated in 2025,
            to further validate our dedication to quality management systems. Additionally, our
            products undergo testing in <span className="italic font-semibold">NABL-accredited laboratories</span> wherever applicable,
            ensuring compliance with stringent national and international benchmarks.
          </p>

          <p>
            Our strategic partnership with <span className='font-semibold'>Summits Hygronics Pvt . Ltd</span>, a leading PSA plant manufacturer, enhances our offerings;
            their facilities boast <span className="italic">ISO 9001, ISO 14001, and ISO 13485</span>
            certifications, along with PESO approvals, reinforcing our collective commitment to excellence and safety in gas generation solutions.
          </p>

          {/* <p>
            <span className="font-semibold">Ashish Goyal</span>, Managing Director of CryoCorp O2 LLP, earned a certification from
            <span className="font-semibold"> Business Coaching India (BCI)</span>, a premier institution renowned for empowering
            entrepreneurs to streamline operations and amplify profitability. BCI has guided over 22,000 business owners across various sectors—including manufacturing and exports—
            to achieve significant growth and operational excellence. This certification reflects Ashish’s commitment to continuous improvement and strategic leadership. Clients of
            CryoCorp benefit from this expertise through enhanced operational efficiency, robust quality management, and a customer-centric approach. Ashish’s training ensures that
            CryoCorp remains agile, responsive, and aligned with global best practices, providing clients with reliable and innovative solutions in the cryogenic machinery sector.
          </p> */}
        </div>

        {/* Other Certificates */}
        <div className="mt-12">
          <h4 className="text-sm sm:text-base font-bold mb-3 uppercase">Other Certificates</h4>
          <ul className="text-sm sm:text-base font-semibold space-y-1 underline text-[#1A365E]">
            {/* <li><a href="https://drive.google.com/file/d/11w5nJiA2OJHKo0ZUpTVwN-_j11D866DS/view" target="_blank" rel="noopener noreferrer">BCI</a></li> */}
            <li><a href="https://drive.google.com/file/d/1H5nQ0M0a2KlKXeWBkjGuDl2wGFB4XOGM/view" target="_blank" rel="noopener noreferrer">Trademark</a></li>
            <li><a href="https://drive.google.com/file/d/1NdVqAChMvHOtm4Gt-koep5n-SIuVKeBe/view" target="_blank" rel="noopener noreferrer">Udyog Aadhar</a></li>
            <li><a href="https://drive.google.com/file/d/1fuzVtutXPLGXFJs33peOamVkmCjAgBU9/view" target="_blank" rel="noopener noreferrer">EEPC</a></li>
            <li><a href="https://drive.google.com/file/d/1q8iMxPQb2lSipRSXUC_l_pWDrfpF7TAm/view" target="_blank" rel="noopener noreferrer">IMC</a></li>
            <li><a href="https://drive.google.com/file/d/1NyNE3-nrPjF_bPIXzXSBk06YiiQgCzlS/view" target="_blank" rel="noopener noreferrer">Channel Partner Agreement Certificate with Summits Hygronics Pvt. Ltd.</a></li> 
          </ul>
        </div>

        {/* Logos */}
        <div className="grid grid-cols-2 mb-10 sm:mb-0 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-items-center h-[200px] mt-12">
          <img src="/about/logo1.png" alt="Logo 1" className="h-16 sm:h-28 object-contain" />
          <img src="/about/logo2.png" alt="Logo 2" className="h-20 sm:h-36 object-contain" />
          <img src="/about/logo3.png" alt="Logo 3" className="h-20 sm:h-28 object-contain" />
          <img src="/about/logo4.png" alt="Logo 4" className="h-10 sm:h-16 object-contain" />
          <img src="/about/logo5.png" alt="Logo 5" className="h-20 sm:h-40 object-contain" />
        </div>
      </div>
    </section>
  );
};

export default Certifications;
