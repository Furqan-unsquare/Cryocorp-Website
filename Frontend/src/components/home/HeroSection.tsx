import { Button } from "@/components/ui/button";
import {
  FaWhatsapp,
  FaTelegram,
  FaDiscord,
  FaInstagram,
  FaFacebookMessenger,
} from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Custom CSS for individual blob animations */}
      <style jsx>{`
        @keyframes blob1-path {
          0% {
            top: 10%;
            left: 25%;
            transform: scale(1) rotate(0deg);
          }
          25% {
            top: 5%;
            left: 35%;
            transform: scale(1.1) rotate(90deg);
          }
          50% {
            top: 15%;
            left: 45%;
            transform: scale(0.9) rotate(180deg);
          }
          75% {
            top: 20%;
            left: 30%;
            transform: scale(1.05) rotate(270deg);
          }
          100% {
            top: 10%;
            left: 25%;
            transform: scale(1) rotate(360deg);
          }
        }

        @keyframes blob2-path {
          0% {
            top: 30%;
            left: 35%;
            transform: scale(1) rotate(0deg);
          }
          25% {
            top: 35%;
            left: 55%;
            transform: scale(1.15) rotate(45deg);
          }
          50% {
            top: 25%;
            left: 65%;
            transform: scale(0.85) rotate(90deg);
          }
          75% {
            top: 40%;
            left: 50%;
            transform: scale(1.1) rotate(180deg);
          }
          100% {
            top: 30%;
            left: 35%;
            transform: scale(1) rotate(360deg);
          }
        }

        @keyframes blob3-path {
          0% {
            top: 30%;
            right: 60%;
            transform: scale(1) rotate(0deg);
          }
          25% {
            top: 25%;
            right: 15%;
            transform: scale(0.9) rotate(120deg);
          }
          50% {
            top: 35%;
            right: 5%;
            transform: scale(1.2) rotate(240deg);
          }
          75% {
            top: 40%;
            right: 15%;
            transform: scale(0.95) rotate(300deg);
          }
          100% {
            top: 30%;
            right: 60%;
            transform: scale(1) rotate(360deg);
          }
        }

        @keyframes blob4-path {
          0% {
            top: 10%;
            left: 5%;
            transform: scale(1) rotate(0deg);
          }
          25% {
            top: 40%;
            left: 45%;
            transform: scale(1.1) rotate(60deg);
          }
          50% {
            top: 35%;
            left: 35%;
            transform: scale(0.9) rotate(120deg);
          }
          75% {
            top: 40%;
            left: 50%;
            transform: scale(1.05) rotate(240deg);
          }
          100% {
            top: 10%;
            left: 5%;
            transform: scale(1) rotate(360deg);
          }
        }

        .blob1 {
          animation: blob1-path 8s ease-in-out infinite;
        }
        .blob2 {
          animation: blob2-path 10s ease-in-out infinite 2s;
        }
        .blob3 {
          animation: blob3-path 12s ease-in-out infinite 1s;
        }
        .blob4 {
          animation: blob4-path 9s ease-in-out infinite 3s;
        }
      `}</style>

      {/* Animated Background Gradients */}
      <div className="absolute inset-0 z-0">
        {/* Light Green Blob */}
        <div
          className="blob1 absolute w-[400px] h-[400px] rounded-full opacity-80 blur-sm"
          style={{
            background: `radial-gradient(circle at 30% 30%, #A1FFCE 0%, #58D68D 60%, transparent 80%)`,
            willChange: "transform, top, left",
          }}
        />

        {/* Teal Blob */}
        <div
          className="blob2 absolute w-[400px] h-[400px] rounded-full opacity-80 blur-sm"
          style={{
            background: `radial-gradient(circle at 70% 30%, #58D68D 0%, #138D75 60%, transparent 80%)`,
            willChange: "transform, top, left",
          }}
        />

        {/* Dark Teal Blob */}
        <div
          className="blob3 absolute w-[400px] h-[400px] rounded-full opacity-70 blur-sm"
          style={{
            background: `radial-gradient(circle at 30% 70%, #138D75 0%, #0E6655 60%, transparent 80%)`,
            willChange: "transform, top, right",
          }}
        />

        {/* Dark Blue Blob */}
        <div
          className="blob4 absolute w-[400px] h-[400px] rounded-full opacity-70 blur-sm"
          style={{
            background: `radial-gradient(circle at 50% 50%, #0B3C5D 0%, #1B263B 70%, transparent 90%)`,
            willChange: "transform, top, left",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="backdrop-blur-2xl bg-white/20 relative z-20 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Glass Container */}
        <div className="p-8 md:p-12 shadow-2xl max-w-4xl mx-auto text-left">
          <div className="animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl text-left font-semibold text-slate-700 sm:mb-8 max-w-3xl mx-auto z-50 relative pb-10">
              Welcome to{" "}
              <span className="text-black font-bold">CRYOCORP O2 LLP,</span>{" "}
              <br />
              one-stop-shop for industrial gas solutions <br />
              using air separation technology.
            </h1>
            <Button
              onClick={() => (window.location.href = "/#cta")}
              size="lg"
              className="bg-[#59C6D3] hover:bg-secondary rounded-3xl text-primary-foreground px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 z-50 relative"
            >
              Let's connect
            </Button>
            <div className="flex justify-start pl-2 space-x-4 mt-4">
              <Button
                onClick={() =>
                  window.open(
                    "https://whatsapp.com/channel/0029Vao5Mx8DTkKAYtRf382R",
                    "_blank"
                  )
                }
                size="icon"
                className="bg-green-500 hover:bg-green-600 rounded-full text-white"
              >
                <FaWhatsapp />
              </Button>
              <Button
                onClick={() => {
                  const isMobile = /iPhone|iPad|iPod|Android/i.test(
                    navigator.userAgent
                  );

                  if (isMobile) {
                    // Mobile profile link
                    window.open(
                      "https://www.instagram.com/cryocorp_?igsh=OWN6bnR4NDEwNzVw",
                      "_blank"
                    );
                  } else {
                    // Desktop DM link
                    window.open(
                      "https://www.instagram.com/direct/t/17842207418289786/",
                      "_blank"
                    );
                  }
                }}
                size="icon"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full text-white"
              >
                <FaInstagram />
              </Button>

              <Button
                onClick={() =>
                  window.open("https://m.me/cryocorp.co.in", "_blank")
                }
                size="icon"
                className="bg-indigo-500 hover:bg-indigo-600 rounded-full text-white"
              >
                <FaFacebookMessenger />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
