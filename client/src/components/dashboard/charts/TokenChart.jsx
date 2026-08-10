import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", value: 180 },
  { day: "Tue", value: 250 },
  { day: "Wed", value: 220 },
  { day: "Thu", value: 310 },
  { day: "Fri", value: 420 },
  { day: "Sat", value: 380 },
  { day: "Sun", value: 500 },
];

export default function TokenChart() {
  return (
    <div className="bg-[#111C2D] border border-[#223148] rounded-2xl p-6">

      <h2 className="text-white text-lg font-semibold">
        Token Throughput
      </h2>

      <p className="text-slate-400 text-sm mb-5">
        Weekly AI usage
      </p>

      <div className="h-72">

        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <XAxis dataKey="day" stroke="#64748b" />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#7c3aed"
              fill="#7c3aed33"
            />
          </AreaChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}