import React from "react";
import StatCard from "./StatCard";

interface StatItem {
  title: string;
  value: string | number;
}

interface StatsGridProps {
  stats: {
    postedJobs: number;
    totalSpend: string;
    newOffers: number;
    freelancers: number;
  };
}
export async function StatsGrid({
  stats: { postedJobs, newOffers, freelancers, totalSpend },
}: StatsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {["Posted Jobs", "New Offers", "Freelancers", "Total Spend"].map(
        (card, i) => (
          <StatCard
            key={i}
            title={card}
            value={[postedJobs, newOffers, freelancers, totalSpend][i]!}
          />
        )
      )}
    </div>
  );
}

export default StatsGrid;
