import {
  KeyRound,
  Copy,
  Trash2,
  FileText,
  Link2,
  Lock,
  Save,
  Code2,
  ChevronRight,
} from "lucide-react";

const apiKeys = [
  {
    name: "Production App",
    token: "sk_live_51M****************xyz",
    date: "Oct 12,\n2023",
    active: true,
  },
  {
    name: "Staging Environment",
    token: "sk_test_51M****************abc",
    date: "Nov 05,\n2023",
    active: false,
  },
];

const webhookEvents = [
  {
    time: "14:32:01.442",
    method: "POST",
    endpoint: "/webhooks/builderos",
    event: "(agent.run.completed)",
    status: "200 OK",
    latency: "142ms",
  },
  {
    time: "14:30:15.120",
    method: "POST",
    endpoint: "/webhooks/builderos",
    event: "(agent.run.completed)",
    status: "200 OK",
    latency: "138ms",
  },
  {
    time: "14:28:55.901",
    method: "POST",
    endpoint: "/webhooks/builderos",
    event: "(agent.run.failed) - Connection Timeout",
    status: "500 ERR",
    latency: "5004ms",
    error: true,
  },
  {
    time: "14:20:05.333",
    method: "POST",
    endpoint: "/webhooks/builderos",
    event: "(agent.run.completed)",
    status: "200 OK",
    latency: "155ms",
  },
  {
    time: "14:15:22.001",
    method: "POST",
    endpoint: "/webhooks/builderos",
    event: "(agent.run.completed)",
    status: "200 OK",
    latency: "140ms",
  },
];

export default function Developers() {
  return (
    <div className="w-full text-slate-200">

      {/* Header */}
      <div className="flex items-start justify-between mb-5">

        <div>
          <h1 className="text-[36px] font-bold">
            API Management Hub
          </h1>

          <p className="text-base text-slate-300 mt-1">
            Manage your API keys, configure webhooks, and monitor real-time integrations.
          </p>
        </div>

        <button className="h-10 px-5 mt-3 rounded-md bg-indigo-600 hover:bg-indigo-500 flex items-center gap-2 text-sm font-mono">
          <KeyRound size={16} />
          Generate New Key
        </button>

      </div>

      {/* API Keys + Documentation */}
      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,2fr)_323px] gap-6">

        {/* API Keys */}
        <section className="rounded-xl border border-[#40516A] bg-[#152436] overflow-hidden">

          <div className="h-[58px] px-4 flex items-center justify-between border-b border-[#33465C]">

            <h2 className="text-[20px] font-semibold flex items-center gap-2">
              <KeyRound size={19} />
              Active API Keys
            </h2>

            <span className="px-3 py-1 rounded border border-[#40516A] bg-[#071625] text-xs font-mono">
              Usage: 42% of quota
            </span>

          </div>

          {/* Table Header */}
          <div className="grid grid-cols-[165px_1fr_105px_65px] px-4 py-3 bg-[#101D2D] border-b border-[#33465C] text-[11px] font-mono tracking-widest">

            <span>NAME</span>
            <span>TOKEN</span>
            <span>CREATED</span>
            <span>ACTIONS</span>

          </div>

          {apiKeys.map((key) => (
            <div
              key={key.name}
              className="grid grid-cols-[165px_1fr_105px_65px] px-4 py-4 border-b border-[#263648] items-center min-h-[92px]"
            >

              <div className="flex items-start gap-2">

                <span
                  className={`w-2 h-2 rounded-full mt-2 ${
                    key.active
                      ? "bg-violet-300"
                      : "bg-slate-600"
                  }`}
                />

                <span className="text-sm font-mono whitespace-pre-line">
                  {key.name}
                </span>

              </div>

              <span className="text-sm font-mono text-slate-300">
                {key.token}
              </span>

              <span className="text-sm font-mono whitespace-pre-line">
                {key.date}
              </span>

              <div className="flex flex-col gap-3">

                <button className="text-slate-300 hover:text-white">
                  <Copy size={16} />
                </button>

                <button className="text-slate-300 hover:text-red-400">
                  <Trash2 size={16} />
                </button>

              </div>

            </div>
          ))}

        </section>

        {/* Documentation */}
        <section className="rounded-xl border border-[#40516A] bg-[#152436] p-4">

          <h2 className="text-[20px] font-semibold flex items-center gap-2">
            <FileText size={19} />
            Documentation
          </h2>

          <div className="space-y-3 mt-5">

            <DocCard
              title="Quickstart Guide"
              description="Get up and running in 5 minutes."
            />

            <DocCard
              title="Authentication"
              description="Learn how to authenticate requests."
            />

          </div>

          {/* Install Command */}
          <div className="mt-5 h-11 rounded-md border border-[#40516A] bg-[#071625] flex items-center justify-between px-3">

            <code className="text-xs font-mono">
              $ npm install @builderos/node
            </code>

            <button className="text-slate-400 hover:text-white">
              <Copy size={15} />
            </button>

          </div>

        </section>

      </div>

      {/* Webhook Configuration */}
      <section className="rounded-xl border border-[#40516A] bg-[#152436] mt-6">

        <div className="px-4 py-4 border-b border-[#33465C] flex items-center justify-between">

          <h2 className="text-[20px] font-semibold flex items-center gap-2">
            <Link2 size={20} />
            Webhook Configuration
          </h2>

          <span className="text-xs font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-violet-300" />
            Listening
          </span>

        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 p-4">

          {/* Left */}
          <div>

            <label className="block text-xs font-mono mb-2">
              Endpoint URL
            </label>

            <div className="h-10 rounded-md border border-[#40516A] bg-[#071625] flex items-center px-3">

              <Link2 size={14} className="mr-3 text-slate-400" />

              <input
                value="https://api.yourdomain.com/webhooks/builderos"
                readOnly
                className="w-full bg-transparent outline-none text-sm font-mono"
              />

            </div>

            <div className="flex items-center justify-between mt-4 mb-2">

              <label className="text-xs font-mono">
                Signing Secret
              </label>

              <button className="text-[11px] text-violet-300">
                Reveal
              </button>

            </div>

            <div className="h-10 rounded-md border border-[#40516A] bg-[#071625] flex items-center px-3">

              <Lock
                size={14}
                className="mr-3 text-slate-500"
              />

              <input
                type="password"
                value="builderos-secret-key-123456789"
                readOnly
                className="w-full bg-transparent outline-none text-sm"
              />

            </div>

          </div>

          {/* Right */}
          <div>

            <label className="block text-xs font-mono mb-2">
              Events to send
            </label>

            <div className="rounded-md border border-[#40516A] bg-[#071625] p-3 space-y-2">

              <CheckOption
                label="agent.run.completed"
                checked
              />

              <CheckOption
                label="agent.run.failed"
                checked
              />

              <CheckOption
                label="project.created"
              />

              <CheckOption
                label="billing.invoice.paid"
              />

            </div>

          </div>

        </div>

        <div className="px-4 pb-4 flex justify-end">

          <button className="h-9 px-4 rounded-md border border-[#40516A] bg-[#071625] hover:bg-[#1C2B3D] flex items-center gap-2 text-sm font-mono">
            <Save size={15} />
            Save Changes
          </button>

        </div>

      </section>

      {/* Recent Webhook Events */}
      <section className="rounded-xl border border-[#40516A] bg-[#07111E] mt-6 overflow-hidden">

        <div className="h-[42px] px-4 flex items-center justify-between border-b border-[#40516A] bg-[#152436]">

          <h2 className="text-xs font-mono tracking-widest flex items-center gap-2">
            <Code2 size={14} />
            RECENT WEBHOOK EVENTS
          </h2>

          <div className="flex gap-3 text-slate-400">
            <span>▥</span>
            <span>☰</span>
          </div>

        </div>

        <div className="font-mono text-xs">

          {webhookEvents.map((event, index) => (
            <div
              key={`${event.time}-${index}`}
              className={`grid grid-cols-[105px_55px_190px_1fr_70px_55px] items-center px-4 py-2 border-b border-[#172536] ${
                event.error
                  ? "border-l-2 border-l-red-400 bg-red-500/5"
                  : ""
              }`}
            >

              <span className="text-slate-500">
                {event.time}
              </span>

              <span className="text-violet-300">
                {event.method}
              </span>

              <span className="text-slate-200">
                {event.endpoint}
              </span>

              <span className={event.error ? "text-red-300" : "text-slate-300"}>
                {event.event}
              </span>

              <span
                className={`text-center px-1 py-0.5 rounded ${
                  event.error
                    ? "text-red-300 bg-red-500/10"
                    : "text-violet-200 bg-violet-500/10"
                }`}
              >
                {event.status}
              </span>

              <span className="text-right text-slate-400">
                {event.latency}
              </span>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
}

/* =========================
   Small Components
========================= */

function DocCard({ title, description }) {
  return (
    <button className="w-full text-left rounded-md border border-[#33465C] bg-[#071625] p-3 hover:bg-[#0D1C2C]">

      <div className="flex items-center justify-between">

        <div>
          <h3 className="text-sm font-semibold font-mono">
            {title}
          </h3>

          <p className="text-xs text-slate-300 mt-1">
            {description}
          </p>
        </div>

        <ChevronRight size={17} />

      </div>

    </button>
  );
}

function CheckOption({ label, checked = false }) {
  return (
    <label className="flex items-center gap-2 text-xs font-mono cursor-pointer">

      <input
        type="checkbox"
        defaultChecked={checked}
        className="accent-violet-400"
      />

      {label}

    </label>
  );
}