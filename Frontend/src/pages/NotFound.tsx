import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => (
  <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 px-4">
    <div className="max-w-md w-full text-center">
      <h1 className="text-9xl font-extrabold text-[#59C6D3] tracking-tight drop-shadow-md select-none mb-4">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-500 mb-6">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-block bg-[#59C6D3] hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg shadow transition duration-200"
      >
        Go Home
      </Link>
    </div>
  </div>
);

export default NotFound;
