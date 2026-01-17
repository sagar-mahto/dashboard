import React from "react";
import { useNavigate } from "react-router-dom";
import { FaExclamationTriangle, FaArrowLeft } from "react-icons/fa";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row">

      <div className="lg:w-1/2 w-full bg-gradient-to-br from-black via-gray-900 to-black flex flex-col justify-center px-6 sm:px-10 py-12 text-white">
        <h1 className="text-6xl sm:text-7xl font-extrabold drop-shadow-lg">
          404
        </h1>

        <p className="text-xl sm:text-2xl text-gray-300 mt-4 max-w-md">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-8 flex gap-3">
          <div className="w-3 h-3 rounded-full bg-white animate-pulse"></div>
          <div className="w-3 h-3 rounded-full bg-white/70 animate-pulse"></div>
          <div className="w-3 h-3 rounded-full bg-white/40 animate-pulse"></div>
        </div>
      </div>

      <div className="lg:w-1/2 w-full bg-gray-100 flex items-center justify-center px-6">
        <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-md w-full">

          <FaExclamationTriangle className="text-5xl text-black mx-auto mb-4" />

          <h2 className="text-2xl font-bold text-gray-800">
            Page Not Found
          </h2>

          <p className="text-gray-500 mt-3">
            You may have entered an incorrect URL or the page has been removed.
          </p>

          <button
            onClick={() => navigate("/login")}
            className="mt-6 w-full flex items-center justify-center gap-2 bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition"
          >
            <FaArrowLeft />
            Go to Login
          </button>

        </div>
      </div>

    </div>
  );
};

export default ErrorPage;
