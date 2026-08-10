import {
  Search,
  Webhook,
  Clock3,
  FileText,
  Boxes,
  Bot,
  MoreVertical,
  ChevronDown,
  Maximize2,
  ZoomIn,
  ZoomOut,
  Workflow,
  Variable,
} from "lucide-react";

export default function Workflows() {
  return (
    <div className="h-[calc(100vh-68px)] bg-[#061321] text-slate-200 flex overflow-hidden">

      {/* ================= LEFT NODE LIBRARY ================= */}
      <aside className="w-[280px] shrink-0 border-r border-[#263447] bg-[#0B1929]">

        {/* Header */}
        <div className="h-[62px] px-4 border-b border-[#263447] flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-200">
            Node Library
          </h2>

          <Search size={19} className="text-slate-400" />
        </div>

        <div className="p-4 overflow-y-auto h-[calc(100%-62px)]">

          {/* Triggers */}
          <p className="text-[11px] font-semibold tracking-[0.18em] text-slate-400 mb-3">
            TRIGGERS
          </p>

          <div className="space-y-2">

            <button className="w-full h-[62px] rounded-lg border border-[#2B4057] bg-[#071625] flex items-center gap-3 px-3 hover:bg-[#102033] transition">
              <div className="w-9 h-9 rounded-md bg-emerald-500/10 flex items-center justify-center">
                <Webhook size={19} className="text-emerald-400" />
              </div>

              <span className="text-sm font-medium">
                Webhook
              </span>
            </button>

            <button className="w-full h-[62px] rounded-lg border border-[#2B4057] bg-[#071625] flex items-center gap-3 px-3 hover:bg-[#102033] transition">
              <div className="w-9 h-9 rounded-md bg-yellow-500/10 flex items-center justify-center">
                <Clock3 size={19} className="text-yellow-400" />
              </div>

              <span className="text-sm font-medium">
                Schedule
              </span>
            </button>

          </div>

          {/* AI Operations */}
          <p className="text-[11px] font-semibold tracking-[0.18em] text-slate-400 mt-7 mb-3">
            AI OPERATIONS
          </p>

          <div className="space-y-2">

            <button className="w-full h-[62px] rounded-lg border border-[#2B4057] bg-[#071625] flex items-center gap-3 px-3 hover:bg-[#102033] transition">
              <div className="w-9 h-9 rounded-md bg-indigo-500/10 flex items-center justify-center">
                <FileText size={19} className="text-indigo-400" />
              </div>

              <span className="text-sm font-medium">
                Summarize
              </span>
            </button>

            <button className="w-full h-[62px] rounded-lg border border-[#2B4057] bg-[#071625] flex items-center gap-3 px-3 hover:bg-[#102033] transition">
              <div className="w-9 h-9 rounded-md bg-indigo-500/10 flex items-center justify-center">
                <Boxes size={19} className="text-indigo-400" />
              </div>

              <span className="text-sm font-medium">
                Classify Text
              </span>
            </button>

          </div>

        </div>
      </aside>

      {/* ================= CENTER WORKFLOW CANVAS ================= */}
      <main className="flex-1 relative overflow-hidden">

        {/* Canvas Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#102337 1px, transparent 1px), linear-gradient(90deg, #102337 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Workflow Node */}
        <div className="absolute top-[118px] left-[54px] w-[215px] rounded-xl border border-[#40516A] bg-[#0B1929] shadow-xl">

          <div className="px-3 py-3 border-b border-[#263447] flex items-center justify-between">

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-emerald-500/10 flex items-center justify-center">
                <Webhook size={16} className="text-emerald-400" />
              </div>

              <span className="text-sm font-semibold">
                Catch Hook
              </span>
            </div>

            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          </div>

          <div className="p-3">
            <p className="text-sm text-slate-300">
              POST /api/v1/incoming
            </p>

            <span className="inline-block mt-2 px-2 py-1 rounded bg-[#263447] text-[10px] text-slate-400">
              Trigger
            </span>
          </div>

          {/* Connection Point */}
          <div className="absolute -right-[7px] top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full border-2 border-[#52647D] bg-[#071321]" />

        </div>

        {/* Connector */}
        <div className="absolute top-[193px] left-[267px] w-[190px] h-[110px]">

          <svg
            width="190"
            height="110"
            viewBox="0 0 190 110"
            className="overflow-visible"
          >
            <path
              d="M0 0 C70 0 55 105 185 105"
              fill="none"
              stroke="#59657A"
              strokeWidth="2"
              strokeDasharray="5 5"
            />

            <circle
              cx="185"
              cy="105"
              r="6"
              fill="#071321"
              stroke="#5548FF"
              strokeWidth="2"
            />
          </svg>

        </div>

        {/* Second node partially visible */}
        <div className="absolute top-[215px] left-[430px] w-[190px] rounded-xl border border-indigo-500 bg-[#0B1929] shadow-xl">

          <div className="px-3 py-3 flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-indigo-500/10 flex items-center justify-center">
              <Bot size={16} className="text-indigo-400" />
            </div>

            <span className="text-sm">
              Analyze Payload
            </span>
          </div>

        </div>

        {/* Canvas Controls */}
        <div className="absolute bottom-6 left-6 flex items-center rounded-lg border border-[#263447] bg-[#0B1929] overflow-hidden">

          <button className="w-12 h-12 flex items-center justify-center text-slate-300 hover:bg-[#152438]">
            <ZoomIn size={17} />
          </button>

          <button className="w-12 h-12 flex items-center justify-center text-slate-300 hover:bg-[#152438] border-l border-[#263447]">
            <ZoomOut size={17} />
          </button>

          <button className="w-12 h-12 flex items-center justify-center text-slate-300 hover:bg-[#152438] border-l border-[#263447]">
            <Maximize2 size={17} />
          </button>

        </div>

      </main>

      {/* ================= RIGHT CONFIGURATION ================= */}
      <aside className="w-[335px] shrink-0 border-l border-[#263447] bg-[#0B1929] flex flex-col">

        {/* Header */}
        <div className="h-[62px] px-4 border-b border-[#263447] flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="w-8 h-8 rounded-md bg-indigo-500/10 flex items-center justify-center">
              <Bot size={16} className="text-indigo-400" />
            </div>

            <h2 className="font-semibold">
              Analyze Payload
            </h2>

          </div>

          <MoreVertical
            size={18}
            className="text-slate-400"
          />

        </div>

        {/* Configuration */}
        <div className="flex-1 overflow-y-auto p-5">

          <p className="text-[11px] font-semibold tracking-[0.18em] text-slate-400">
            MODEL CONFIGURATION
          </p>

          {/* Provider */}
          <div className="mt-4">

            <label className="block text-sm text-slate-300 mb-2">
              Provider
            </label>

            <div className="h-11 rounded-lg border border-[#40516A] bg-[#071625] px-3 flex items-center justify-between">
              <span className="text-sm">
                OpenAI
              </span>

              <ChevronDown size={17} className="text-slate-400" />
            </div>

          </div>

          {/* Model */}
          <div className="mt-4">

            <label className="block text-sm text-slate-300 mb-2">
              Model
            </label>

            <div className="h-11 rounded-lg border border-[#40516A] bg-[#071625] px-3 flex items-center justify-between">
              <span className="text-sm">
                gpt-4-turbo-preview
              </span>

              <ChevronDown size={17} className="text-slate-400" />
            </div>

          </div>

          {/* Divider */}
          <div className="border-t border-[#263447] my-7" />

          {/* System Prompt */}
          <div>

            <div className="flex items-center justify-between mb-3">

              <p className="text-[11px] font-semibold tracking-[0.18em] text-slate-400">
                SYSTEM PROMPT
              </p>

              <button className="text-xs text-indigo-400 flex items-center gap-1">
                <Maximize2 size={12} />
                Expand
              </button>

            </div>

            <div className="relative">

              <textarea
                defaultValue={`You are an expert data analyst.
Extract key entities from the
provided payload and format as
strict JSON.`}
                className="w-full h-[138px] resize-none rounded-lg border border-[#40516A] bg-[#071625] p-3 text-sm text-slate-200 leading-5 outline-none focus:border-indigo-500"
              />

              <span className="absolute bottom-2 right-2 rounded bg-[#263447] px-2 py-1 text-[10px] text-slate-400">
                {"{var}"}
              </span>

            </div>

          </div>

          {/* Divider */}
          <div className="border-t border-[#263447] my-7" />

          {/* Parameters */}
          <div>

            <p className="text-[11px] font-semibold tracking-[0.18em] text-slate-400 mb-5">
              PARAMETERS
            </p>

            <div className="flex items-center justify-between">
              <span className="text-sm">
                Temperature
              </span>

              <span className="text-sm font-mono text-slate-300">
                0.7
              </span>
            </div>

            <div className="relative mt-4 h-1 rounded-full bg-[#33465C]">

              <div className="absolute left-0 top-0 h-1 w-[70%] rounded-full bg-[#33465C]" />

              <div className="absolute left-[68%] -top-2 w-4 h-4 rounded-full bg-indigo-500" />

            </div>

          </div>

        </div>

        {/* Test Button */}
        <div className="p-4 border-t border-[#263447]">

          <button className="w-full h-10 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition">
            Test Step
          </button>

        </div>

      </aside>

    </div>
  );
}