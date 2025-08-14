import React, { useState } from "react";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaShoppingCart,
} from "react-icons/fa";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    if (!email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      const res = await fetch(" https://api.cryocorp.in/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        toast.success("Thank you for subscribing!");
        setEmail("");
      } else {
        const data = await res.json();
        toast.error(data.message || "Subscription failed.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div className="w-full">
      {/* Main Footer */}
      <footer className="bg-[#DDEAEB] px-9 pt-6 md:pb-6 mb-0">
        <div className="md:mr-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Logo and Let's Talk */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-20">
            <div>
              <div className="flex items-center mb-10">
                <a href="/">
                  <img src="/logo.png" alt="Logo" className="h-14" />
                </a>
              </div>

              <div className="">
                <p className="text-[17px] mb-2 font-extralight text-[#8B8D8E]">
                  Got a project in mind?
                </p>
                <h3 className="text-5xl font-thin mb-2 text-[#8B8D8E]">
                  Let's Talk
                </h3>
                <div className="items-center text-xs">
                  <span className="mr-2 text-[#8B8D8E]">
                    All Rights Reserved © Cryo Corp O2 LLP
                  </span>
                  <div className="flex gap-4 text-teal-500">
                    <a href="/privacy-policy">
                      <p>Privacy Policy</p>
                    </a>
                    <a href="/disclaimer">
                      <p>Disclaimer</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-[17px] text-[#8B8D8E] md:mb-4">Office Address</h4>
                <div className="text-gray-600 text-sm space-y-1">
                  <p>Unit no. 10, Swastik Chambers, S. G. Barve</p>
                  <p>Marg, Off Sion-Trombay Road, Chembur,</p>
                  <p>Mumbai - 400071</p>
                  <p>Maharashtra, INDIA</p>
                </div>
            </div>
            </div>
            <div className="md:flex justify-between">
              {/* Address */}
              <div>
                <h4 className="font-medium text-[17px] text-[#8B8D8E] md:mb-4">Factory and Warehouse Address</h4>
                <div className="text-gray-600 text-sm space-y-1">
                  <p>CryoCorp O2 LLP</p>
                  <p>Gala No. 32, Shubham Industrial Estate</p>
                  <p>Azad Nagar, Golani Naka, Waliv</p>
                  <p>Vasai East – 401208, District Thane</p>
                  <p>Maharashtra, India</p>
                </div>

                <div className="flex space-x-4 mt-6">
                  <div className="flex items-center justify-center transition-colors cursor-pointer hover:text-teal-500">
                    <a
                      href="https://www.instagram.com/cryocorp_/"
                      target="_blank"
                    >
                      <FaInstagram size={25} className="text-red-500" />
                    </a>
                  </div>
                  <div className="flex items-center justify-center transition-colors cursor-pointer hover:text-teal-500">
                    <a
                      href="https://www.facebook.com/cryocorp.co.in"
                      target="_blank"
                    >
                    <FaFacebook size={25} className="text-blue-500" />
                    </a>
                  </div>
                  <div className="flex items-center justify-center transition-colors cursor-pointer hover:text-teal-500">
                    <a
                      href="https://www.linkedin.com/company/cryocorp-o2-llp/?viewAMember=true"
                      target="_blank"
                    >
                      <FaLinkedin size={25} className="text-blue-700" />
                    </a>
                  </div>
                  <div className="flex items-center justify-center transition-colors cursor-pointer hover:text-teal-500">
                    <a href="https://x.com/cryocorp_02_LLP" target="_blank">
                      <FaTwitter size={25} className="text-gray-900" />
                    </a>
                  </div>
                  {/* <div className="flex items-center justify-center transition-colors cursor-pointer hover:text-teal-500">
                  <FaShoppingCart size={25} className="text-gray-500" />
                </div> */}
                </div>
              </div>

              {/* Subscribe */}
              <div className="mt-5 sm:mt-0 mr-14">
                <h4 className="font-medium text-[17px] text-[#8B8D8E] md:mb-4">Subscribe</h4>
                <p className="text-gray-600 text-sm mb-4">
                  To get notified about our new solutions!
                </p>

                <div className="flex">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                  <Button
                    onClick={handleSubmit}
                    className="bg-teal-500 text-white px-4 py-2 rounded-r-lg hover:bg-teal-600 transition-colors ml-2"
                  >
                    GO
                  </Button>
                </div>
                <Button className="bg-teal-500 text-white px-4 py-2 rounded-r-lg hover:bg-teal-600 transition-colors mt-2">
                  <a
                    href="https://whatsapp.com/channel/0029Vao5Mx8DTkKAYtRf382R"
                    target="_blank"
                  >
                    Join Our WhatsApp Community
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="md:relative md:mt-6 pb-4 md:pb-1">
            <img
              src="/images/arrow.png"
              alt=""
              className="hidden md:block absolute h-8 left-[45%] top-[10px]"
            />
            <nav className="flex justify-center flex-wrap gap-4 pb-4 sm:pb-0 text-xs pr-10 md:text-sm pt-4 md:ml-[400px]">
              <a
                href="products"
                className="text-teal-500 hover:text-teal-600 transition-colors"
              >
                Products
              </a>
              <a
                href="/services"
                className="text-teal-500 hover:text-teal-600 transition-colors"
              >
                Services
              </a>
              <a
                href="/Resources"
                className="text-teal-500 hover:text-teal-600 transition-colors"
              >
                Resource Hub
              </a>
              <a
                href="/about"
                className="text-teal-500 hover:text-teal-600 transition-colors"
              >
                About Us
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
