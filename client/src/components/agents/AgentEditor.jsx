import { Save, X, FileText, Wrench } from "lucide-react";
import { useState } from "react";

export default function AgentEditor({ agent }) {
  const [model, setModel] = useState("GPT-4o");

  const [instructions, setInstructions] = useState(
    "You are a customer support agent. Help customers resolve their issues clearly and professionally. Be concise, friendly, and accurate."
  );

  const [webSearch, setWebSearch] = useState(true);

  if (!agent) {
    return (
      <div className="h-full flex items-center justify-center bg-[#071321]">
        <p className="text-slate-500">
          Select an agent to configure
        </p>
      </div>
    );
  }

  return (
    <section className="h-full bg-[#071321] border-r border-[#263447] flex flex-col">

      {/* Header */}
      <div className="min-h-[60px] px-5 py-3 border-b border-[#263447] flex items-center justify-between gap-4">

        <div className="min-w-0">
          <h2 className="text-white font-semibold truncate">
            {agent.name}
          </h2>

          <p className="text-xs text-slate-500 mt-1">
            Agent Configuration
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">

          <button className="px-3 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-[#152235] transition">
            <X size={15} className="inline mr-1" />
            Discard
          </button>

          <button className="px-3 py-2 rounded-lg text-sm text-white bg-indigo-600 hover:bg-indigo-500 transition">
            <Save size={15} className="inline mr-1" />
            Save Changes
          </button>

        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-5 space-y-6">

        {/* Core Model */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Core Model
          </label>

          <select
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="w-full h-11 rounded-lg bg-[#0B1828] border border-[#334155] px-3 text-sm text-white outline-none focus:border-indigo-500"
          >
            <option>GPT-4o</option>
            <option>GPT-4o Mini</option>
            <option>Claude Sonnet</option>
            <option>Gemini Pro</option>
          </select>
        </div>

        {/* System Instructions */}
        <div>
          <div className="flex items-center justify-between mb-2">

            <label className="text-sm font-medium text-slate-300">
              System Instructions
            </label>

            <span className="text-xs text-slate-500">
              {instructions.length} chars
            </span>

          </div>

          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            rows={7}
            className="w-full resize-none rounded-lg bg-[#0B1828] border border-[#334155] px-3 py-3 text-sm text-slate-200 outline-none focus:border-indigo-500 leading-6"
          />
        </div>

        {/* Knowledge Base */}
        <div>

          <div className="flex items-center justify-between mb-3">

            <label className="text-sm font-medium text-slate-300">
              Knowledge Base
            </label>

            <button className="text-xs text-indigo-400 hover:text-indigo-300">
              + Add
            </button>

          </div>

          <div className="space-y-2">

            <div className="flex items-center gap-3 rounded-lg border border-[#263447] bg-[#0B1828] p-3">

              <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                <FileText size={17} className="text-indigo-400" />
              </div>

              <div>
                <p className="text-sm text-white">
                  Product Documentation
                </p>

                <p className="text-xs text-slate-500 mt-1">
                  124 documents
                </p>
              </div>

            </div>

            <div className="flex items-center gap-3 rounded-lg border border-[#263447] bg-[#0B1828] p-3">

              <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                <FileText size={17} className="text-indigo-400" />
              </div>

              <div>
                <p className="text-sm text-white">
                  Support FAQs
                </p>

                <p className="text-xs text-slate-500 mt-1">
                  48 documents
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* Tools */}
        <div>

          <label className="block text-sm font-medium text-slate-300 mb-3">
            Tools
          </label>

          <div className="flex items-center justify-between rounded-lg border border-[#263447] bg-[#0B1828] p-3">

            <div className="flex items-center gap-3">

              <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                <Wrench size={17} className="text-indigo-400" />
              </div>

              <div>
                <p className="text-sm text-white">
                  Web Search
                </p>

                <p className="text-xs text-slate-500 mt-1">
                  Search the web for current information
                </p>
              </div>

            </div>

            <button
              onClick={() => setWebSearch(!webSearch)}
              className={`relative w-10 h-5 rounded-full transition ${
                webSearch
                  ? "bg-indigo-600"
                  : "bg-slate-700"
              }`}
            >
              <span
                className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition ${
                  webSearch
                    ? "left-5"
                    : "left-0.5"
                }`}
              />
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}