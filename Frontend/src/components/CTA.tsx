import React from 'react';
import { FaRobot, FaWhatsappSquare } from 'react-icons/fa';

function CTA() {
  return (
    <div id="cta" className="w-full bg-background lg:mt-40">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">

        {/* Column 1 - Left Side */}
        <div className="bg-white p-6 md:p-0 sm:ml-6 lg:pl-20 text-black h-full border-b  md:col-span-2">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">LET'S GROW TOGETHER</h2>

          <p className="text-md font-medium leading-relaxed mb-1">
            Have questions about our industrial gas solutions, products, or services?
          </p>
          <p className="text-md leading-relaxed mb-4">
            We would love to hear from you and discuss.
          </p>

          <div className="mb-4">
            <h3 className="font-medium mb-1">Reach out to us.</h3>
            <p className="text-md leading-relaxed">
              We believe in building lasting relationships with our clients!
            </p>
          </div>

          <div className="mb-4 max-w-[50%]">
            <h3 className="font-medium mb-1">Send Us a Message</h3>
            <p className="text-md leading-relaxed">
              Fill out the form and we will get back to you shortly. <br />
            </p>
          </div>

          <button className="border-2 border-black bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-colors">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfW25lcHJaqzTeg97xtwD1a0QWDNvg0o3RfDWFetrnbd0GFSA/viewform" target='_blank'>
              Click here
            </a>
          </button>
        </div>

        {/* Column 2 - Get in Touch */}
        <div className="bg-white mb-4 px-6 md:px-8 text-black md:col-span-2 shadow-sm xl:border-l border-gray-500 h-full">
          <h3 className="font-bold text-2xl mb-4">Get in Touch</h3>

          <div className="space-y-4 text-md">
            <div className="flex flex-wrap gap-2 items-center">
          <p className="text-base font-medium">General Inquiries:</p>
          <a
            className="flex items-center gap-1 text-blue-700 px-3 py-1 border border-gray-300 hover:text-blue-900 hover:bg-gray-100 rounded-full"
            href="https://chatgpt.com/g/g-68650921e3b48191b61d8b06a7978505-cryogenic-solutions-assistant"
            target="_blank"
          >
            <FaRobot /> GPT
          </a>
          <a
            className="flex items-center gap-1 text-green-700 px-3 py-1 border border-gray-300 hover:text-green-900 hover:bg-gray-100 rounded-full"
            href="https://api.whatsapp.com/send?phone=917710089939"
            target="_blank"
          >
            <FaWhatsappSquare /> WhatsApp Chat
          </a>
        </div>

           <div>
              <p><span className='font-semibold'>WhatsApp For Business:</span> <a href="https://wa.me/917710049939" target="_blank" className=" hover:underline">+91 7710049939</a></p>
            </div>

            <div>
              <p><span className='font-semibold'>Sales & General Inquiries:</span> <a href="mailto:admin@cryocorp.co.in" className="hover:underline">admin@cryocorp.co.in</a></p>
            </div>
        
            <div>
              <p><span className='font-semibold'>Dispatch or Quotation Inquiries:</span> <a href="mailto:crm@cryocorp.in" className=" hover:underline">crm@cryocorp.in</a></p>
            </div>

            <div>
              <p><span className='font-semibold'>Schedule a Call -</span> <a
                href="https://calendly.com/admin-cryocorp/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className='text-blue-800 font-semibold'
                >
                Calendly
              </a></p>
            </div>
        
            <div>
            <p>
  <span className='font-semibold'>Call Us:</span>{' '}
  <a href="tel:+917738069949" className="hover:underline">
    +91 7738069949
  </a>
</p>
</div>

            
          <p className="text-md">
            <span className='font-semibold'>During Business Hours: </span> Monday – Saturday: 09:30 AM to 6:00 PM IST
          </p>
          </div>
        </div>

        {/* Column 3 - Calendly CTA */}
        <div className="relative overflow-hidden h-full min-h-[400px] md:min-h-[500px] lg:min-h-[400px] col-span-1 lg:col-span-1">
          <div className="absolute inset-0">
            <img
              src="/images/cta-bg.png"
              alt="Industrial team meeting"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 p-6 md:p-8 text-gray-100 text-center h-full flex flex-col justify-center items-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white flex items-center justify-center mb-6 shadow-lg">
              <img
                src="/calendly.png"
                alt="Calendly Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              />
            </div>

            <div className="mb-4 max-w-[50%] md:max-w-[100%]">
              <p className="text-xs sm:text-sm mb-1">You can also schedule a meeting</p>
              <p className="text-xs sm:text-sm">appointment at your convenience using our online calendar.</p>
            </div>

            <h3 className="text-base sm:text-lg font-bold mb-6 max-w-[50%] md:max-w-[100%]">
              Get in touch with our team today!
            </h3>

            <button className="bg-white/20 backdrop-blur-sm border-4 border-white max-w-[200px] mx-auto text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-300">
              <a
                href="https://calendly.com/admin-cryocorp/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a slot
              </a>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CTA;