import StatCard from "../../components/dashboard/StatCard";
import { stats } from "../../constants/dashboardData";

import TokenChart from "../../components/dashboard/charts/TokenChart";
import SuccessChart from "../../components/dashboard/charts/SuccessChart";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-white">
        Executive Overview
      </h1>

      <p className="text-slate-400 mt-2">
        System Health & AI Infrastructure Metrics
      </p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
        {stats.map((item) => (
          <StatCard
            key={item.title}
            {...item}
          />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">
        <div className="xl:col-span-2">
          <TokenChart />
        </div>

        <SuccessChart />
      </div>
    </div>
  );
}
