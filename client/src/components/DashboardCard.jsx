import React from "react";

const DashboardCard = ({ title, value, icon, bg = "bg-white" }) => {
  return (
    <div
      className={`${bg} rounded-2xl shadow-lg p-6 flex items-center justify-between hover:scale-[1.02] transition`}
    >
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <h2 className="text-3xl font-bold text-gray-900 mt-1">
          {value}
        </h2>
      </div>

      <div className="text-4xl text-black/80">
        {icon}
      </div>
    </div>
  );
};

export default DashboardCard;
