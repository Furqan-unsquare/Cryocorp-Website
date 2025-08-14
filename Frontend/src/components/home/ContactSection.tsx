import { Button } from "@/components/ui/button";
import GoogleMap from "./GoogleMap";

const ContactSection = () => {
  return (
    <section className="py-10 px-4 sm:px-6 md:px-20 bg-white">
      <div className="mx-auto">
        {/* Google Map Integration */}
        <div className=" animate-fade-in-up">
          <div className="mb-6 text-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Find Us Here</h3>
            <p className="text-slate-600">Visit our Mumbai office or get directions</p>
          </div>
          <GoogleMap />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;