import { ChevronLeft, ChevronRight, Subtitles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      company: "SCG",
      subtitle:"Shreeji Carbonics",
      role: "Purchase Executive",
      quote: "You all are doing the best!",
      img: "testimonial1",
    },
    {
      company: "NELION",
      subtitle: "NELION EXPORTS",
      role: "Export Manager",
      quote: "We are happy with the product and quality.",
      img: "testimonial2",
    },
    {
      company: "VG",
      subtitle: "Verma Gases",
      role: "Owner",
      quote: "You have material available whenever we want!",
      img: "testimonial3",
    },
    {
      company: "ABC Corp",
      subtitle:"Oxford Cryogenics",
      role: "Owner",
      quote: "Product and service is good.",
      img: "testimonial4",
    },
    {
      company: "XYZ Ltd",
      subtitle: "Mittal corp Ltd",
      role: "Sr. Manager",
      quote: "Fast delivery & if required engineer then will be supported.",
      img: "testimonial5",
    },
    {
      company: "Tech Innovators",
      subtitle:"Viraj Profile Ltd.",
      role: "Engineer",
      quote: "Your product and service are good.",
      img: "testimonial6",
    },
    {
      company: "GreenTech",
      subtitle:"Habesha steel mills",
      role: "Plant Manager",
      quote: "Your service is very good.",
      img: "testimonial7",
    },
    {
      company: "Beni Impex",
      subtitle: "Beni Impex",
      role: "Owner",
      quote: "rate",
      img: "testimonial8",
    },
    {
      company: "RedStone",
      subtitle:"ARV Engineer",
      role: "Purchase Manager",
      quote: "rate",
      img: "testimonial9",
    },
    {
      company: "SilverPeak",
      subtitle: "Southern Gas Ltd.",
      role: "Plant Engineer",
      quote: "rate",
      img: "testimonial10",
    },
    {
      company: "GoldLine",
      subtitle:"DPKG",
      role: "Owner",
      quote: "rate",
      img: "testimonial11",
    },
    {
      company: "PurpleSky",
      subtitle: "Apex Solution",
      role: "Owner",
      quote: "rate",
      img: "testimonial12",
    },
    {
      company: "OrangeBloom",
      subtitle: "Mohit Ispat Ltd.",
      role: "Purchase Manager",
      quote: "rate",
      img: "testimonial13",
    },
    {
      company: "IndigoWave",
      subtitle: "Electrotherm India Ltd.",
      role: "Deputy General Manager",
      quote: "rate",
      img: "testimonial14",
    },
  ];

  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 3;

  const scrollToIndex = (index) => {
    if (!containerRef.current) return;
    const maxIndex = Math.max(testimonials.length - cardsPerView, 0);
    const newIndex = Math.min(Math.max(index, 0), maxIndex);
    setCurrentIndex(newIndex);
    const cardWidth = containerRef.current.children[0]?.clientWidth || 0;
    const gap = 24;
    containerRef.current.scrollTo({
      left: newIndex * (cardWidth + gap),
      behavior: "smooth",
    });
  };

  const handlePrev = () => scrollToIndex(currentIndex - 1);
  const handleNext = () => scrollToIndex(currentIndex + 1);

  // Auto-slide every 5 seconds
useEffect(() => {
  const interval = setInterval(() => {
    const isLast = currentIndex >= testimonials.length - cardsPerView;
    scrollToIndex(isLast ? 0 : currentIndex + 1);
  }, 3000); // 5000ms = 5 seconds

  return () => clearInterval(interval); // Cleanup
}, [currentIndex, testimonials.length]);


  return (
    <section className="py-12 px-4 sm:px-6 md:px-20 bg-white">
      <div className="mx-auto">
        <div className=" mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 ">Client</h1>
          <h3 className="text-3xl font-bold text-[#5FC9D8]  mb-8">
            Testimonials
          </h3>
        </div>
        <div className="flex justify-end mb-6 gap-2">
          <Button
            variant="outline"
            size="sm"
            className="rounded-full w-10 h-10 p-0"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <ChevronLeft size={16} />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full w-10 h-10 p-0"
            onClick={handleNext}
            disabled={currentIndex >= testimonials.length - cardsPerView}
          >
            <ChevronRight size={16} />
          </Button>
        </div>
        <div
          ref={containerRef}
          className="flex overflow-x-auto md:overflow-x-hidden scroll-smooth snap-x snap-mandatory"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col justify-between w-[90%] sm:w-[75%] md:w-[calc(33.333%-1rem)] snap-start p-4 border border-gray-900 shadow-sm hover:shadow-md transition-shadow bg-white"
            >
              <div className="mb-4">
                <img
                  src={`/Testimonial/${testimonial.img}.png`}
                  alt={`${testimonial.company} logo`}
                  className="h-16 w-auto mb-2"
                />
                {testimonial.subtitle && (
                  <p className="text-[20px] font-medium text-gray-500">
                    {testimonial.subtitle}
                  </p>
                )}
                <p className="text-[20px] font-medium text-gray-600">{testimonial.role}</p>
              </div>
              {testimonial.quote == "rate"?<button className="px-4 py-2 font-medium text-2xl w-[120px] rounded-full border-[3px] border-[#5FC9D8] text-[#5FC9D8]">5 stars</button>:<blockquote className="text-[#5FC9D8] text-[35px] font-light">
                "{testimonial.quote}"
              </blockquote>}
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
