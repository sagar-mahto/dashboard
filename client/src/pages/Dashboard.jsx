import React from "react";
import { useNavigate } from "react-router-dom";
import DashboardCard from "../components/DashboardCard";
import {
  FaUsers,
  FaChartLine,
  FaDollarSign,
  FaTasks,
  FaSignOutAlt,
} from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("name") || "User"

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row">
      
      {/* LEFT SECTION */}
      <div className="lg:w-1/2 w-full bg-gradient-to-br from-black via-gray-900 to-black px-6 sm:px-10 py-10 text-white relative">

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="absolute top-6 right-6 flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          <FaSignOutAlt />
          <span className="hidden sm:inline">Logout</span>
        </button>

        {/* CENTER CONTENT */}
        <div className="h-full flex flex-col items-center justify-center text-center">
          
          <p className="text-gray-400 text-sm sm:text-base mb-3 uppercase tracking-widest">
            Welcome back
          </p>

          {/* 🔥 BIG USERNAME */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent drop-shadow-xl mb-4">
            {username}
          </h1>

          <h2 className="mt-12 text-2xl sm:text-3xl font-semibold text-gray-300">
            Dashboard
          </h2>

          <p className="mt-6 max-w-md text-gray-400 text-sm sm:text-base">
            Manage your data, track growth, and control everything from one place.
          </p>

          {/* Animated Dots */}
          <div className="mt-10 flex gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-white/70 animate-pulse"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-white/40 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="lg:w-1/2 w-full bg-gray-100 p-6 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
          Overview
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <DashboardCard title="Total Users" value="1,245" icon={<FaUsers />} />
          <DashboardCard title="Revenue" value="$18,500" icon={<FaDollarSign />} />
          <DashboardCard title="Growth" value="24%" icon={<FaChartLine />} />
          <DashboardCard title="Active Tasks" value="32" icon={<FaTasks />} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
