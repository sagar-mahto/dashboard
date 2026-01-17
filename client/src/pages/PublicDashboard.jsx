import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUsers,
  FaChartLine,
  FaDollarSign,
  FaTasks,
} from "react-icons/fa";

const GlassCard = ({ title, value, icon }) => {
  return (
    <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl p-6 shadow-xl flex items-center justify-between hover:bg-white/30 transition">
      <div>
        <p className="text-white/80 text-sm">{title}</p>
        <h2 className="text-3xl font-bold text-white mt-1">
          {value}
        </h2>
      </div>
      <div className="text-4xl text-white/90">
        {icon}
      </div>
    </div>
  );
};

const PublicDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row">

      <div className="lg:w-1/2 w-full bg-gradient-to-br from-black via-gray-900 to-black flex flex-col justify-center px-6 sm:px-10 py-12 text-white">
        <h1 className="text-4xl sm:text-5xl font-extrabold drop-shadow-lg">
          Welcome to the Dashboard
        </h1>

        <p className="text-gray-300 mt-4 max-w-md">
          Sign in or create an account to unlock full access and real-time insights.
        </p>

        <div className="mt-6 flex gap-4">
          <button
            onClick={() => navigate("/login")}
            className="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/signup")}
            className="px-6 py-3 rounded-lg border border-white text-white font-semibold hover:bg-white hover:text-black transition"
          >
            Sign Up
          </button>
        </div>

        <div className="mt-10 flex gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-white/70 animate-pulse"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-white/40 animate-pulse"></div>
        </div>
      </div>

      <div className="lg:w-1/2 w-full bg-gray-100 p-6 sm:p-10 flex items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full bg-gradient-to-br from-black via-gray-900 to-black rounded-3xl p-6 sm:p-8">
          <GlassCard title="Total Users" value="—" icon={<FaUsers />} />
          <GlassCard title="Revenue" value="—" icon={<FaDollarSign />} />
          <GlassCard title="Growth" value="—" icon={<FaChartLine />} />
          <GlassCard title="Active Tasks" value="—" icon={<FaTasks />} />
        </div>
      </div>

    </div>
  );
};

export default PublicDashboard;
