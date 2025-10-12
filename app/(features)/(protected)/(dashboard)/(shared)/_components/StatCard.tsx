import React from "react";

interface StatCardProps {
  title: string;
  value: string | number;
}

const StatCard: React.FC<StatCardProps> = ({ title, value }) => {
  return (
    <div className="bg-white border-sky-soft rounded-2xl p-4 text-center transition hover:shadow-md hover:-translate-y-1 duration-200">
      <h3 className="text-sm font-[rubicRegular] text-blue-500 font-semibold">{title}</h3>
      <p className="text-2xl font-bold mt-2 text-gray-800">{value}</p>
    </div>
  );
};

export default StatCard;
