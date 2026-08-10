import {
  Activity,
  AlertTriangle,
  Radio,
  Database,
  Gauge,
  SlidersHorizontal,
  Search,
  PauseCircle,
} from "lucide-react";

const logs = [
  {
    time: "14:02:33.102",
    level: "INFO",
    service: "[AuthService]",
    message: "Successfully validated JWT token for user_id: 8f92a1",
  },
  {
    time: "14:02:34.015",
    level: "INFO",
    service: "[QueryEngine]",
    message:
      "Executing vector search across 1.2M chunks (latency: 12ms)",
  },
  {
    time: "14:02:34.550",
    level: "DEBUG",
    service: "[WorkerPool]",
    message:
      "Scaling up worker nodes to handle queue spike (current: 4, target: 6)",
  },
  {
    time: "14:02:35.122",
    level: "WARN",
    service: "[DB_Connection]",
    message: "Connection pool near capacity (96% utilized)",
  },
  {
    time: "14:02:36.890",
    level: "ERROR",
    service: "[ModelInference]",
    message:
      "Timeout waiting for response from remote provider API (5000ms)",
  },
  {
    time: "14:02:37.001",
    level: "INFO",
    service: "[WebSocket]",
    message:
      "Client disconnected normally (conn_id: cx_9921)",
  },
];

export default function Monitoring() {
  return (
    <div className="w-full h-full text-slate-200">

      {/* Header */}
      <div className="flex items-start justify-between mb-5">

        <div>
          <h1 className="text-[36px] font-bold">
            Live Telemetry
          </h1>

          <p className="text-base text-slate-300 mt-1">
            us-east-1 production cluster • v2.1.4
          </p>
        </div>

        <div className="flex items-center gap-2 pt-5">

          <button className="h-9 px-4 rounded-md border border-[#40516A] bg-[#192738] flex items-center gap-2 text-sm font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Live Sync
          </button>

          <button className="h-9 px-4 rounded-md border border-[#40516A] bg-[#071625] text-sm font-mono">
            Last 15 minutes
          </button>

        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 mb-2">

        <MetricCard
          title="AVG LATENCY"
          value="42"
          suffix="ms"
          icon={<Gauge size={18} />}
          iconClass="text-slate-300"
          footer="↓ 12% vs last hour"
          footerClass="text-emerald-400"
        />

        <MetricCard
          title="ERROR RATE"
          value="0.04"
          suffix="%"
          icon={<AlertTriangle size={18} />}
          iconClass="text-red-300"
          valueClass="text-red-300"
          footer="↑ 0.01% vs last hour"
          footerClass="text-red-400"
        />

        <MetricCard
          title="ACTIVE WEBSOCKETS"
          value="12,408"
          icon={<Radio size={18} />}
          iconClass="text-cyan-400"
          footer="↗ Steady"
          footerClass="text-emerald-400"
        />

        <MetricCard
          title="DB CONNECTIONS"
          value="482"
          suffix="/500"
          icon={<Database size={18} />}
          iconClass="text-yellow-400"
          progress
        />

      </div>

      {/* Charts + Traffic */}
      <div className="grid grid-cols-[minmax(0,2.2fr)_340px] gap-2 mb-2">

        {/* Utilization Chart */}
        <div className="rounded-xl border border-[#40516A] bg-[#1D2939] p-4 h-[270px]">

          <div className="flex items-center justify-between">

            <h2 className="text-sm font-mono tracking-widest">
              GPU / CPU UTILIZATION
            </h2>

            <div className="flex items-center gap-4 text-xs font-mono">

              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                GPU0
              </span>

              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                CPU Avg
              </span>

            </div>
          </div>

          <div className="relative h-[205px] mt-2">

            {/* Grid */}
            <div className="absolute inset-0 flex flex-col justify-between">

              <div className="border-t border-[#33465C]" />
              <div className="border-t border-[#33465C]" />
              <div className="border-t border-[#33465C]" />
              <div className="border-t border-[#33465C]" />

            </div>

            <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[10px] text-slate-500">
              <span>100%</span>
              <span>50%</span>
              <span>0%</span>
            </div>

            {/* SVG chart */}
            <svg
              viewBox="0 0 800 200"
              preserveAspectRatio="none"
              className="absolute left-7 right-0 top-2 bottom-0 w-[calc(100%-28px)] h-full"
            >

              <path
                d="M0 165 C80 150 100 135 180 105 S300 85 390 70 S500 20 580 35 S700 48 800 45 L800 200 L0 200 Z"
                fill="rgba(99,102,241,0.12)"
              />

              <path
                d="M0 165 C80 150 100 135 180 105 S300 85 390 70 S500 20 580 35 S700 48 800 45"
                fill="none"
                stroke="#6366f1"
                strokeWidth="2"
              />

              <path
                d="M0 180 C100 170 150 165 230 145 S350 130 400 165 S500 150 570 95 S690 85 735 155 S770 150 800 105"
                fill="none"
                stroke="#22d3ee"
                strokeWidth="2"
                strokeDasharray="5 5"
              />

            </svg>

          </div>
        </div>

        {/* Traffic Origin */}
        <div className="rounded-xl border border-[#40516A] bg-[#1D2939] p-4 h-[270px]">

          <h2 className="text-sm font-mono tracking-widest">
            TRAFFIC ORIGIN
          </h2>

          <div className="relative mt-2 h-[205px] rounded-md overflow-hidden bg-[#071625]">

            {/* Map-style background */}
            <div className="absolute inset-0 opacity-30">

              <div className="absolute w-[120px] h-[65px] rounded-[50%] bg-slate-500/40 left-5 top-10" />

              <div className="absolute w-[100px] h-[55px] rounded-[50%] bg-slate-500/30 left-28 top-20" />

              <div className="absolute w-[80px] h-[45px] rounded-[50%] bg-slate-500/30 right-8 top-14" />

              <div className="absolute w-[90px] h-[50px] rounded-[50%] bg-slate-500/20 right-20 bottom-8" />

            </div>

            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full">

              <path
                d="M75 75 Q160 35 250 100"
                fill="none"
                stroke="#4c8ba8"
                strokeWidth="1"
              />

              <path
                d="M75 75 Q180 130 285 85"
                fill="none"
                stroke="#4c8ba8"
                strokeWidth="1"
              />

              <path
                d="M250 100 Q290 70 315 140"
                fill="none"
                stroke="#4c8ba8"
                strokeWidth="1"
              />

              <circle cx="75" cy="75" r="3" fill="#22d3ee" />
              <circle cx="250" cy="100" r="3" fill="#22d3ee" />
              <circle cx="315" cy="140" r="3" fill="#22d3ee" />

            </svg>

            {/* Stats */}
            <div className="absolute left-2 right-2 bottom-2 rounded-md border border-[#40516A] bg-[#0B1929]/95 p-2">

              <div className="flex justify-between text-xs font-mono">
                <span>US-East</span>
                <span>45%</span>
              </div>

              <div className="flex justify-between text-xs font-mono">
                <span>EU-West</span>
                <span>32%</span>
              </div>

              <div className="flex justify-between text-xs font-mono">
                <span>AP-South</span>
                <span>23%</span>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Logs */}
      <div className="rounded-xl border border-[#40516A] bg-[#080F19] min-h-[490px] overflow-hidden">

        {/* Logs Toolbar */}
        <div className="h-[54px] px-4 border-b border-[#40516A] bg-[#1D2939] flex items-center justify-between">

          <div className="flex items-center gap-2">

            <span className="text-sm font-mono tracking-widest mr-2">
              LIVE LOGS
            </span>

            <LogFilter
              label="Debug"
              color="text-indigo-200"
              checked
            />

            <LogFilter
              label="Info"
              color="text-indigo-200"
              checked
            />

            <LogFilter
              label="Warn"
              color="text-yellow-400"
              checked
            />

            <LogFilter
              label="Error"
              color="text-red-300"
              checked
            />

          </div>

          <div className="flex items-center gap-3">

            <div className="relative">
              <Search
                size={13}
                className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                placeholder="Grep logs..."
                className="w-[205px] h-7 rounded border border-[#40516A] bg-[#071625] pl-7 text-xs outline-none"
              />
            </div>

            <PauseCircle
              size={15}
              className="text-slate-400"
            />

          </div>
        </div>

        {/* Log Rows */}
        <div className="font-mono text-xs">

          {logs.map((log, index) => (
            <LogRow
              key={`${log.time}-${index}`}
              log={log}
            />
          ))}

        </div>

      </div>
    </div>
  );
}

/* ---------------- Components ---------------- */

function MetricCard({
  title,
  value,
  suffix,
  icon,
  iconClass,
  footer,
  footerClass,
  valueClass = "text-slate-200",
  progress,
}) {
  return (
    <div className="rounded-xl border border-[#40516A] bg-[#1D2939] p-4 h-[128px]">

      <div className="flex items-center justify-between">

        <span className="text-[11px] font-mono tracking-widest">
          {title}
        </span>

        <span className={iconClass}>
          {icon}
        </span>

      </div>

      <div className={`mt-3 text-[34px] font-semibold ${valueClass}`}>
        {value}

        {suffix && (
          <span className="text-[19px]">
            {suffix}
          </span>
        )}
      </div>

      {progress ? (
        <div className="mt-2">

          <div className="h-2 rounded-full bg-[#071625] overflow-hidden">
            <div className="h-full w-[96%] bg-yellow-400 rounded-full" />
          </div>

        </div>
      ) : (
        <p className={`text-xs font-mono mt-2 ${footerClass}`}>
          {footer}
        </p>
      )}

    </div>
  );
}

function LogFilter({ label, color, checked }) {
  return (
    <label
      className={`px-2 py-1 rounded bg-[#26384D] flex items-center gap-1 text-xs ${color}`}
    >
      <input
        type="checkbox"
        defaultChecked={checked}
        className="accent-indigo-400"
      />

      {label}
    </label>
  );
}

function LogRow({ log }) {
  const levelClass = {
    INFO: "text-cyan-400",
    DEBUG: "text-slate-400",
    WARN: "text-yellow-400",
    ERROR: "text-red-400",
  };

  return (
    <div
      className={`grid grid-cols-[115px_60px_150px_1fr] px-4 py-2 border-b border-[#182535] ${
        log.level === "ERROR"
          ? "bg-red-500/5 border-l-2 border-l-red-400"
          : ""
      }`}
    >

      <span className="text-slate-500">
        {log.time}
      </span>

      <span className={levelClass[log.level]}>
        {log.level}
      </span>

      <span className="text-slate-400">
        {log.service}
      </span>

      <span className="text-slate-200">
        {log.message}
      </span>

    </div>
  );
}