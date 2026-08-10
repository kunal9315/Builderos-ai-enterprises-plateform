import {
  SlidersHorizontal,
  Download,
  RefreshCw,
  Plus,
  Activity,
  Cloud,
  Brain,
  Database,
} from "lucide-react";

const providers = [
  {
    name: "OpenAI",
    models: "4 Models Available",
    status: "Healthy",
    icon: Activity,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    name: "Anthropic",
    models: "2 Models Available",
    status: "Healthy",
    icon: Brain,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  {
    name: "Azure OpenAI",
    models: "Rate Limited",
    status: "Degraded",
    icon: Cloud,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
];

const models = [
  {
    provider: "OpenAI",
    providerColor: "bg-emerald-400",
    name: "gpt-4-turbo-preview",
    context: "128K",
    pricing: "0.01 / 0.03",
    latency: "450ms",
    latencyWidth: "35%",
    latencyColor: "bg-indigo-300",
  },
  {
    provider: "OpenAI",
    providerColor: "bg-emerald-400",
    name: "gpt-3.5-turbo",
    context: "16K",
    pricing: "0.001 / 0.002",
    latency: "150ms",
    latencyWidth: "12%",
    latencyColor: "bg-emerald-400",
  },
  {
    provider: "Anthropic",
    providerColor: "bg-orange-400",
    name: "claude-3-opus-20240229",
    context: "200K",
    pricing: "0.015 / 0.075",
    latency: "650ms",
    latencyWidth: "48%",
    latencyColor: "bg-orange-400",
  },
  {
    provider: "Local",
    providerColor: "bg-slate-400",
    name: "llama3-8b-instruct",
    context: "8K",
    pricing: "0.00 / 0.00",
    latency: "300ms",
    latencyWidth: "25%",
    latencyColor: "bg-indigo-300",
  },
];

export default function Models() {
  return (
    <div className="w-full text-slate-200">

      {/* Header */}
      <div className="flex items-start justify-between border-b border-[#263447] pb-5">

        <div>
          <h1 className="text-[38px] font-bold leading-tight">
            Model & Provider Hub
          </h1>

          <p className="text-base text-slate-300 mt-2">
            Manage AI providers, configure models, and monitor API consumption.
          </p>
        </div>

        <div className="flex items-center gap-3">

          <button className="h-10 px-4 rounded-md border border-[#40516A] bg-[#0B1929] flex items-center gap-2 text-sm hover:bg-[#152438]">
            <RefreshCw size={16} />
            Sync Providers
          </button>

          <button className="h-10 px-4 rounded-md bg-indigo-600 hover:bg-indigo-500 flex items-center gap-2 text-sm font-semibold">
            <Plus size={17} />
            Add Provider
          </button>

        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-[325px_minmax(0,1fr)] gap-6 mt-6">

        {/* LEFT */}
        <div className="space-y-6">

          {/* Connected Providers */}
          <div className="rounded-xl border border-[#40516A] bg-[#1D2939] p-5">

            <div className="flex items-start justify-between">

              <h2 className="text-[27px] leading-8 font-semibold">
                Connected
                <br />
                Providers
              </h2>

              <span className="rounded-md bg-[#0B1929] px-3 py-2 text-[10px] font-mono text-slate-400">
                5
                <br />
                ACTIVE
              </span>

            </div>

            <div className="space-y-2 mt-5">

              {providers.map((provider) => {
                const Icon = provider.icon;

                return (
                  <div
                    key={provider.name}
                    className="h-[66px] rounded-lg border border-[#40516A] bg-[#071625] px-3 flex items-center justify-between"
                  >

                    <div className="flex items-center gap-3">

                      <div
                        className={`w-10 h-10 rounded-md ${provider.bg} flex items-center justify-center`}
                      >
                        <Icon
                          size={21}
                          className={provider.color}
                        />
                      </div>

                      <div>
                        <p className="text-sm font-semibold">
                          {provider.name}
                        </p>

                        <p className="text-xs text-slate-300">
                          {provider.models}
                        </p>
                      </div>

                    </div>

                    <div
                      className={`flex items-center gap-1 text-[11px] ${
                        provider.status === "Healthy"
                          ? "text-emerald-400"
                          : "text-yellow-400"
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${
                          provider.status === "Healthy"
                            ? "bg-emerald-400"
                            : "bg-yellow-400"
                        }`}
                      />

                      {provider.status}
                    </div>

                  </div>
                );
              })}

            </div>
          </div>

          {/* Global Settings */}
          <div className="rounded-xl border border-[#40516A] bg-[#1D2939] p-5">

            <div className="flex items-center gap-3 mb-5">
              <SlidersHorizontal size={20} />

              <h2 className="text-[25px] leading-8 font-semibold">
                Global Inference
                <br />
                Settings
              </h2>
            </div>

            {/* Presets */}
            <div className="grid grid-cols-3 gap-1">

              <button className="h-7 rounded border border-indigo-300 text-xs text-indigo-200">
                Precise
              </button>

              <button className="h-7 rounded border border-[#40516A] text-xs text-slate-300">
                Balanced
              </button>

              <button className="h-7 rounded border border-[#40516A] text-xs text-slate-300">
                Creative
              </button>

            </div>

            {/* Temperature */}
            <div className="mt-5">

              <div className="flex justify-between text-xs font-mono">
                <span>Temperature</span>
                <span>0.2</span>
              </div>

              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                defaultValue="0.2"
                className="w-full mt-3 accent-indigo-400"
              />

            </div>

            {/* Top P */}
            <div className="mt-5">

              <div className="flex justify-between text-xs font-mono">
                <span>Top P</span>
                <span>0.95</span>
              </div>

              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                defaultValue="0.95"
                className="w-full mt-3 accent-indigo-400"
              />

            </div>

          </div>
        </div>

        {/* RIGHT */}
        <div className="rounded-xl border border-[#40516A] bg-[#1D2939] overflow-hidden min-h-[718px]">

          {/* Table Header */}
          <div className="h-[72px] px-5 border-b border-[#40516A] flex items-center justify-between">

            <h2 className="text-[27px] font-semibold">
              Active Models Database
            </h2>

            <div className="flex items-center gap-4 text-slate-400">
              <SlidersHorizontal size={17} />
              <Download size={17} />
            </div>

          </div>

          {/* Columns */}
          <div className="grid grid-cols-[1.1fr_1.25fr_0.9fr_1fr_1fr_55px] px-4 py-3 bg-[#162333] border-b border-[#263447] text-[10px] tracking-[0.15em] text-slate-400">

            <span>PROVIDER</span>
            <span>MODEL NAME</span>
            <span>CONTEXT<br />(TOKENS)</span>
            <span>PRICING<br />($/1K)</span>
            <span>LATENCY P95</span>
            <span>ACTIONS</span>

          </div>

          {/* Rows */}
          {models.map((model) => (
            <div
              key={model.name}
              className="grid grid-cols-[1.1fr_1.25fr_0.9fr_1fr_1fr_55px] items-center px-4 py-4 min-h-[90px] border-b border-[#263447]"
            >

              {/* Provider */}
              <div className="flex items-center gap-2 text-sm">
                <span
                  className={`w-2 h-2 rounded-full ${model.providerColor}`}
                />
                {model.provider}
              </div>

              {/* Model */}
              <div className="text-sm leading-6 text-slate-200">
                {model.name}
              </div>

              {/* Context */}
              <div className="text-sm">
                {model.context}
              </div>

              {/* Pricing */}
              <div className="text-sm leading-6">
                {model.pricing}
              </div>

              {/* Latency */}
              <div className="flex items-center gap-2">

                <div className="w-[70px] h-1 bg-[#071625] rounded-full overflow-hidden">
                  <div
                    className={`h-full ${model.latencyColor}`}
                    style={{
                      width: model.latencyWidth,
                    }}
                  />
                </div>

                <span className="text-[11px] text-slate-400">
                  {model.latency}
                </span>

              </div>

              {/* Action */}
              <div />

            </div>
          ))}

        </div>
      </div>
    </div>
  );
}