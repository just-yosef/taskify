import React from "react";
import StatCard from "./StatCard";

interface StatItem {
  title: string;
  value: string | number;
}

interface StatsGridProps {
  stats: StatItem[];
}

const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => {
  if (!stats || stats.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        لا توجد بيانات متاحة حالياً
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {stats.map((card, i) => (
        <StatCard key={i} title={card.title} value={card.value} />
      ))}
    </div>
  );
};

export default StatsGrid;
