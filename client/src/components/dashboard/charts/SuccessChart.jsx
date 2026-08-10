import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Success", value: 94 },
  { name: "Failed", value: 6 },
];

const COLORS = ["#7C3AED", "#334155"];

export default function SuccessChart() {
  return (
    <div className="bg-[#111C2D] border border-[#223148] rounded-2xl p-6">

      <h2 className="text-white text-lg font-semibold">
        Success Rate
      </h2>

      <div className="h-72">

        <ResponsiveContainer width="100%" height="100%">
          <PieChart>

            <Pie
              data={data}
              innerRadius={60}
              outerRadius={90}
              dataKey="value"
            >

              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}

            </Pie>

          </PieChart>
        </ResponsiveContainer>

      </div>

      <h1 className="text-center text-4xl font-bold text-white">
        94%
      </h1>

    </div>
  );
}