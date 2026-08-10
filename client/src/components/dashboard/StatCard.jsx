import { ArrowUpRight } from "lucide-react";

export default function StatCard({
  title,
  value,
  change,
  icon: Icon,
}) {
  return (
    <div className="bg-[#111C2D] border border-[#223148] rounded-2xl p-5 hover:border-indigo-500 transition-all">

      <div className="flex justify-between items-start">

        <div>
          <p className="text-slate-400 text-sm">
            {title}
          </p>

          <h2 className="text-3xl font-bold text-white mt-3">
            {value}
          </h2>
        </div>

        <div className="w-11 h-11 rounded-xl bg-[#1B2A40] flex items-center justify-center">
          <Icon size={22} className="text-indigo-400" />
        </div>

      </div>

      <div className="mt-6 flex items-center gap-2 text-green-400 text-sm">

        <ArrowUpRight size={16} />

        {change}

      </div>

    </div>
  );
}