import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuizModal: React.FC<QuizModalProps> = ({ isOpen, onClose }) => {
  const { link } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        navigate("/");
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

  const handleClose = () => {
    navigate("/quiz");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={handleClose}></div>

      {/* Modal content */}
      <div className="relative z-10 w-full max-w-lg bg-white backdrop-blur-xl rounded-2xl shadow-2xl p-8 mx-4">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
          aria-label="Close"
        >
          &times;
        </button>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-[#1A365E] mb-6">
          Start Your Plant Efficiency Test
        </h2>

        {/* Form */}
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            // const name = (e.target as any).name.value;
            const email = (e.target as any).email.value;
            // store the data in backend
            await axios.post("https://api.cryocorp.in/api/email/emails", {
              email,
            });
            window.location.href = `/quiz/${link}.html`;
            console.log("Submitted:", { email });
            onClose();
          }}
          className="space-y-5"
        >
          {/* <div>
            <label className="block mb-1 text-sm font-medium text-[#1A365E]">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div> */}
          <div>
            <label className="block mb-1 text-sm font-medium text-[#1A365E]">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#59C6D3] hover:bg-cyan-500 text-white font-semibold py-2 rounded-lg transition"
          >
            Start Quiz
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuizModal;
