import {
  Download,
  MoreVertical,
  Copy,
  Users,
} from "lucide-react";

const prompts = [
  ["#p_8f92a1", "GPT-4o", "450ms", "$0.04"],
  ["#p_3b4c5d", "Claude 3.5 Sonnet", "320ms", "$0.02"],
  ["#p_99e4f2", "GPT-3.5-Turbo", "120ms", "$0.001"],
  ["#p_1a2b3c", "Gemini 1.5 Pro", "1200ms", "$0.05"],
  ["#p_7d8e9f", "Claude 3 Haiku", "180ms", "$0.005"],
];

const users = [
  {
    initials: "AK",
    name: "Alex K.",
    type: "(Prod Key)",
    tokens: "1.2M Tokens",
    cost: "$142.50",
    change: "↑12%",
    positive: false,
  },
  {
    initials: "MR",
    name: "Maria R.",
    type: "(Dev)",
    tokens: "850K Tokens",
    cost: "$89.20",
    change: "↓5%",
    positive: true,
  },
  {
    initials: "SYS",
    name: "Batch Job",
    type: "(Cron)",
    tokens: "3.4M Tokens",
    cost: "$310.00",
    change: "−0%",
    positive: true,
  },
  {
    initials: "TJ",
    name: "Tim J.",
    type: "(Test)",
    tokens: "45K Tokens",
    cost: "$5.40",
    change: "↑45%",
    positive: false,
  },
];

export default function Analytics() {
  return (
    <div className="w-full text-slate-200">

      {/* Header */}
      <div className="flex items-start justify-between mb-6">

        <div>
          <h1 className="text-[36px] font-bold">
            Deep Dive Analytics
          </h1>

          <p className="text-base text-slate-300 mt-1">
            Real-time telemetry and cost intelligence across all deployments.
          </p>
        </div>

        <div className="flex items-center gap-2 pt-3">

          <button className="h-9 px-4 rounded-md border border-[#40516A] bg-[#071625] text-sm font-mono">
            Last 24 Hours
          </button>

          <button className="w-9 h-9 rounded-md border border-[#40516A] bg-[#263548] flex items-center justify-center">
            <Download size={16} />
          </button>

        </div>
      </div>

      {/* Top Analytics */}
      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,2fr)_330px] gap-4">

        {/* Token Burn */}
        <section className="rounded-xl border border-[#40516A] bg-[#101F30] p-4 h-[225px]">

          <div className="flex items-start justify-between">

            <div>
              <p className="text-xs font-mono tracking-widest">
                TOKEN BURN RATE
              </p>

              <div className="flex items-center gap-2 mt-1">
                <span className="text-[27px] font-semibold">
                  42.8M
                </span>

                <span className="text-xs text-emerald-400">
                  ↗ 12.4%
                </span>
              </div>
            </div>

            <div className="flex gap-5 text-xs font-mono">

              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-violet-300" />
                Input
              </span>

              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-slate-300" />
                Output
              </span>

            </div>
          </div>

          <TokenChart />

        </section>

        {/* Spend */}
        <section className="rounded-xl border border-[#40516A] bg-[#101F30] p-4 h-[225px]">

          <div className="flex items-center justify-between">

            <h2 className="text-xs font-mono tracking-widest">
              SPEND BY PROVIDER
            </h2>

            <Copy size={16} className="text-slate-400" />

          </div>

          <div className="text-[28px] font-semibold mt-4">
            $3,429.50
          </div>

          <ProviderBar
            name="OpenAI"
            amount="$2,104"
            percentage="61%"
            width="61%"
          />

          <ProviderBar
            name="Anthropic"
            amount="$857"
            percentage="25%"
            width="25%"
          />

          <ProviderBar
            name="Google"
            amount="$468"
            percentage="14%"
            width="14%"
          />

        </section>

      </div>

      {/* Middle */}
      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] gap-4 mt-4">

        {/* Agent Health */}
        <section className="rounded-xl border border-[#40516A] bg-[#101F30] h-[405px] overflow-hidden">

          <div className="px-4 pt-4">

            <div className="flex items-start justify-between">

              <div>
                <h2 className="text-sm font-mono tracking-widest">
                  AGENT HEALTH & PERFORMANCE
                </h2>

                <p className="text-xs font-mono mt-1">
                  Success vs Error rates per workflow
                </p>
              </div>

              <MoreVertical size={18} />

            </div>

          </div>

          <PerformanceChart />

          <div className="border-t border-[#263648] mx-4 pt-3 flex justify-center gap-6 text-xs font-mono">

            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-violet-300" />
              Success
            </span>

            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d99c98]" />
              Error / Timeout
            </span>

          </div>

        </section>

        {/* Top Prompts */}
        <section className="rounded-xl border border-[#40516A] bg-[#101F30] h-[405px] overflow-hidden">

          <div className="px-4 py-4 border-b border-[#263648] flex justify-between">

            <h2 className="text-sm font-mono tracking-widest">
              TOP PERFORMING PROMPTS
            </h2>

            <Copy size={15} />

          </div>

          <div className="grid grid-cols-[1fr_1.3fr_100px_70px] px-4 py-3 bg-[#142334] text-[11px] font-mono">

            <span>Prompt Hash</span>
            <span>Model</span>
            <span>Avg Latency</span>
            <span>Cost</span>

          </div>

          {prompts.map((prompt, index) => (
            <div
              key={prompt[0]}
              className="grid grid-cols-[1fr_1.3fr_100px_70px] px-4 py-4 border-b border-[#263648] text-sm"
            >

              <span className="font-mono text-violet-200">
                {prompt[0]}
              </span>

              <span>{prompt[1]}</span>

              <span
                className={
                  index === 2
                    ? "text-emerald-400"
                    : index === 3
                    ? "text-red-300"
                    : ""
                }
              >
                {prompt[2]}
              </span>

              <span>{prompt[3]}</span>

            </div>
          ))}

          <button className="w-full py-3 text-xs font-mono hover:text-violet-300">
            View All Prompts
          </button>

        </section>

      </div>

      {/* High Cost Users */}
      <section className="rounded-xl border border-[#40516A] bg-[#101F30] mt-4 overflow-hidden">

        <div className="px-4 py-4 border-b border-[#263648] flex justify-between">

          <h2 className="text-sm font-mono tracking-widest">
            HIGH COST USERS / KEYS
          </h2>

          <Users size={17} />

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">

          {users.map((user) => (
            <UserCostCard
              key={user.initials}
              user={user}
            />
          ))}

        </div>

      </section>

    </div>
  );
}

/* =========================
   Token Chart
========================= */

function TokenChart() {
  return (
    <div className="relative h-[135px] mt-2">

      <div className="absolute inset-0 flex flex-col justify-between">

        <div className="border-t border-[#263648]" />
        <div className="border-t border-[#263648]" />
        <div className="border-t border-[#263648]" />
        <div className="border-t border-[#263648]" />

      </div>

      <svg
        viewBox="0 0 800 140"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >

        <path
          d="M0 110 C100 100 150 95 230 88 S350 60 450 58 S550 105 630 95 S720 55 800 50 L800 140 L0 140 Z"
          fill="rgba(150,140,230,0.12)"
        />

        <path
          d="M0 110 C100 100 150 95 230 88 S350 60 450 58 S550 105 630 95 S720 55 800 50"
          fill="none"
          stroke="#c7c0ff"
          strokeWidth="2"
        />

        <path
          d="M0 122 C100 115 180 110 250 100 S360 80 450 75 S550 115 620 108 S730 80 800 65"
          fill="none"
          stroke="#b9c0ce"
          strokeWidth="1.5"
        />

      </svg>

      <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[10px] text-slate-500 font-mono">
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
        <span>Sun</span>
      </div>

    </div>
  );
}

/* =========================
   Performance Chart
========================= */

function PerformanceChart() {
  const bars = [
    ["Data Ext.", 110, 20],
    ["Summarizer", 82, 12],
    ["Code Gen", 55, 38],
    ["Classifier", 125, 5],
    ["Web Scrape", 45, 58],
    ["QA Bot", 100, 15],
  ];

  return (
    <div className="h-[285px] px-5 pt-8 flex items-end justify-between gap-4">

      {bars.map(([name, success, error]) => (
        <div
          key={name}
          className="flex-1 h-full flex flex-col justify-end items-center"
        >

          <div className="w-full flex flex-col justify-end h-[170px]">

            <div
              className="w-full bg-[#d59b97] rounded-t-sm"
              style={{ height: error }}
            />

            <div
              className="w-full bg-gradient-to-t from-[#36425A] to-[#c4c0ff]"
              style={{ height: success }}
            />

          </div>

          <span className="text-[10px] font-mono mt-2 rotate-[-40deg] origin-top">
            {name}
          </span>

        </div>
      ))}

    </div>
  );
}

/* =========================
   Provider
========================= */

function ProviderBar({
  name,
  amount,
  percentage,
  width,
}) {
  return (
    <div className="mt-4">

      <div className="flex justify-between text-xs font-mono">

        <span>{name}</span>

        <span>
          {amount} ({percentage})
        </span>

      </div>

      <div className="h-1.5 rounded-full bg-[#263648] mt-1">

        <div
          className="h-full rounded-full bg-violet-300"
          style={{ width }}
        />

      </div>

    </div>
  );
}

/* =========================
   User Cost
========================= */

function UserCostCard({ user }) {
  return (
    <div className="p-5 border-r border-[#263648] min-h-[150px]">

      <div className="flex items-center gap-3">

        <div className="w-11 h-11 rounded-full bg-[#27364B] border border-[#52627A] flex items-center justify-center font-semibold text-sm">
          {user.initials}
        </div>

        <div>

          <div className="font-semibold">
            {user.name}
          </div>

          <div className="text-sm">
            {user.type}
          </div>

          <div className="text-sm mt-1">
            {user.tokens}
          </div>

        </div>

        <div className="ml-auto text-right">

          <div className="text-lg font-semibold">
            {user.cost}
          </div>

          <div
            className={`text-xs mt-2 ${
              user.positive
                ? "text-emerald-400"
                : "text-red-300"
            }`}
          >
            {user.change}
          </div>

        </div>

      </div>

    </div>
  );
}