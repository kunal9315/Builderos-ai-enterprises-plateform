import {
  Search,
  Folder,
  FileText,
  Filter,
  History,
  Save,
  Rocket,
  MoreVertical,
  Upload,
  Plus,
  ChevronRight,
} from "lucide-react";

const prompts = [
  {
    name: "Main Persona",
    type: "file",
    active: true,
  },
  {
    name: "Escalation Policy",
    type: "file",
  },
];

const variants = [
  {
    title: "Variant A (Control)",
    model: "gpt-4-turbo",
    color: "border-t-[#858CB0]",
    badgeColor: "text-slate-300",
    tokens: "~142",
    variables: 2,
    content: (
      <>
        <p>
          You are a helpful customer support assistant for Acme Corp.
          <br />
          Always maintain a professional and polite tone.
        </p>

        <p className="mt-7">Context:</p>

        <p>
          {"{{user_history}}"}
        </p>

        <p className="mt-7">Current Query:</p>

        <p>
          {"{{current_query}}"}
        </p>

        <p className="mt-7">Instructions:</p>

        <p>
          1. Identify the user's main intent.
          <br />
          2. If the issue is related to billing, suggest they visit
          acme.com/billing.
          <br />
          3. Otherwise, attempt to resolve the issue using the provided
          context.
        </p>
      </>
    ),
  },
  {
    title: "Variant B (Challenger)",
    model: "claude-3-opus",
    color: "border-t-emerald-500",
    badgeColor: "text-emerald-400",
    tokens: "~118",
    variables: 2,
    content: (
      <>
        <p>
          Act as a senior customer success manager for Acme Corp. Your goal
          is to resolve issues quickly while ensuring high customer
          satisfaction.
        </p>

        <p className="mt-7">Relevant History:</p>

        <p>
          {"{{user_history}}"}
        </p>

        <p className="mt-7">Query:</p>

        <p>
          {"{{current_query}}"}
        </p>

        <p className="mt-7">Constraints:</p>

        <p>
          - Keep answers under 3 paragraphs.
          <br />
          - Never invent policies.
          <br />
          - For billing, direct strictly to acme.com/billing.
        </p>

        <p className="mt-7">
          Think step-by-step before answering.
        </p>
      </>
    ),
  },
];

export default function Prompts() {
  return (
    <div className="h-full min-h-[calc(100vh-68px)] bg-[#061321] text-slate-200">

      {/* Page Header */}
      <div className="flex items-center justify-between mb-5">

        <div>
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-1">
            <Folder size={15} />
            <span>Projects</span>

            <ChevronRight size={14} />

            <span className="text-slate-200">
              Customer Support Bot
            </span>
          </div>

          <h1 className="text-[34px] font-bold">
            Prompt Engineering
          </h1>
        </div>

        <div className="flex items-center gap-2">

          <button className="h-10 px-4 rounded-md border border-[#40516A] bg-[#0B1929] flex items-center gap-2 text-sm hover:bg-[#152438]">
            <Upload size={16} />
            Import
          </button>

          <button className="h-10 px-4 rounded-md bg-indigo-600 hover:bg-indigo-500 flex items-center gap-2 text-sm font-semibold">
            <Plus size={17} />
            New Prompt
          </button>

        </div>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-[240px_minmax(0,1fr)] gap-5">

        {/* Prompt Library */}
        <aside className="border border-[#263447] bg-[#0B1929] rounded-lg overflow-hidden">

          <div className="h-11 px-3 bg-[#26384D] flex items-center justify-between">
            <span className="text-sm font-semibold tracking-wide">
              LIBRARY
            </span>

            <Filter size={16} className="text-slate-300" />
          </div>

          <div className="p-3">

            {/* Search */}
            <div className="relative mb-4">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                placeholder="Filter..."
                className="w-full h-9 rounded-md border border-[#40516A] bg-[#071625] pl-9 pr-3 text-sm outline-none focus:border-indigo-500"
              />
            </div>

            {/* System Instructions */}
            <div className="flex items-start justify-between mb-2">
              <div className="flex gap-2">
                <Folder size={17} />
                <span className="text-sm leading-4">
                  System
                  <br />
                  Instructions
                </span>
              </div>

              <span className="text-xs bg-[#17283A] px-2 py-0.5 rounded">
                3
              </span>
            </div>

            {prompts.map((prompt, index) => (
              <button
                key={prompt.name}
                className={`w-full flex items-center gap-2 rounded-md px-3 py-2 text-sm text-left ${
                  index === 0
                    ? "bg-[#293B51] text-indigo-200"
                    : "text-slate-300 hover:bg-[#17283A]"
                }`}
              >
                <FileText size={15} />
                {prompt.name}
              </button>
            ))}

            {/* RAG Templates */}
            <div className="flex items-center justify-between mt-5">
              <div className="flex items-center gap-2">
                <Folder size={17} />
                <span className="text-sm">
                  RAG Templates
                </span>
              </div>

              <span className="text-xs bg-[#17283A] px-2 py-0.5 rounded">
                12
              </span>
            </div>

            {/* Tags */}
            <p className="text-[10px] tracking-[0.18em] text-slate-400 mt-5 mb-2">
              TAGS
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 rounded-full border border-[#40516A] text-[10px]">
                production
              </span>

              <span className="px-2 py-1 rounded-full border border-[#40516A] text-[10px]">
                testing
              </span>

              <span className="px-2 py-1 rounded-full border border-[#40516A] text-[10px]">
                gpt-4
              </span>
            </div>

          </div>
        </aside>

        {/* Editor */}
        <main className="min-w-0">

          {/* Editor Toolbar */}
          <div className="h-11 flex items-center justify-between mb-2">

            <div className="flex items-center gap-3">

              <span className="px-3 py-1.5 rounded-md bg-[#33445A] text-sm font-mono">
                v2.4.1
              </span>

              <span className="px-3 py-1 rounded-full border border-indigo-300 text-xs text-indigo-200">
                ● Active A/B Test
              </span>

              <div className="w-px h-6 bg-[#34465C]" />

              <button className="flex items-center gap-2 text-sm text-slate-300">
                <History size={16} />
                View History
              </button>

            </div>

            <div className="flex items-center gap-2">

              <button className="h-9 px-4 rounded-md border border-[#40516A] flex items-center gap-2 text-sm hover:bg-[#152438]">
                <Save size={15} />
                Save
              </button>

              <button className="h-9 px-4 rounded-md bg-indigo-600 hover:bg-indigo-500 flex items-center gap-2 text-sm font-semibold">
                <Rocket size={15} />
                Deploy
              </button>

            </div>

          </div>

          {/* Variant Cards */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">

            {variants.map((variant) => (
              <VariantCard
                key={variant.title}
                variant={variant}
              />
            ))}

          </div>
        </main>
      </div>
    </div>
  );
}

function VariantCard({ variant }) {
  return (
    <div
      className={`h-[calc(100vh-190px)] min-h-[650px] flex flex-col rounded-lg border border-[#263447] border-t-4 ${variant.color} bg-[#071625] overflow-hidden`}
    >

      {/* Variant Header */}
      <div className="h-10 px-3 bg-[#293A4E] flex items-center justify-between shrink-0">

        <div className="flex items-center gap-3">

          <span className={`font-mono text-sm font-bold ${variant.badgeColor}`}>
            {variant.title}
          </span>

          <span className="px-2 py-0.5 rounded bg-[#0B1929] text-[11px] font-mono text-slate-300">
            {variant.model}
          </span>

        </div>

        <MoreVertical size={17} className="text-slate-300" />

      </div>

      {/* Prompt Content */}
      <div className="flex-1 overflow-y-auto px-5 py-5 text-[17px] leading-7 text-slate-200">

        {variant.content}

      </div>

      {/* Footer */}
      <div className="h-9 px-3 bg-[#071321] border-t border-[#263447] flex items-center justify-between shrink-0">

        <span className="text-xs font-mono text-slate-300">
          Tokens: {variant.tokens}
        </span>

        <span className="text-xs font-mono text-slate-300">
          Variables: {variant.variables}
        </span>

      </div>

    </div>
  );
}