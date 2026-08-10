import { Plus, Search } from "lucide-react";
import { useState } from "react";

import AgentCard from "./AgentCard";

const agents = [
  {
    id: 1,
    name: "Customer Support Lead",
    description: "Handles tier 1 & 2 tickets",
    status: "online",
  },
  {
    id: 2,
    name: "Data Analyst Bot",
    description: "SQL query generator",
    status: "idle",
  },
  {
    id: 3,
    name: "Code Reviewer",
    description: "PR analysis agent",
    status: "busy",
  },
];

export default function AgentList({
  selectedAgent,
  setSelectedAgent,
}) {
  const [search, setSearch] = useState("");

  const filteredAgents = agents.filter((agent) =>
    agent.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="h-full bg-[#071321] border-r border-[#263447] flex flex-col">

      {/* Header */}
      <div className="h-[60px] px-4 flex items-center justify-between border-b border-[#263447]">
        <h2 className="text-sm font-semibold tracking-widest text-slate-200">
          AGENTS
        </h2>

        <button className="text-slate-300 hover:text-white transition">
          <Plus size={18} />
        </button>
      </div>

      {/* Search */}
      <div className="p-3">
        <div className="relative">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search agents..."
            className="w-full h-11 rounded-md border border-[#334155] bg-[#081625] pl-9 pr-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-indigo-500"
          />
        </div>
      </div>

      {/* Agent list */}
      <div className="px-3 space-y-1 overflow-y-auto">
        {filteredAgents.map((agent) => (
          <AgentCard
            key={agent.id}
            {...agent}
            active={selectedAgent?.id === agent.id}
            onClick={() => setSelectedAgent(agent)}
          />
        ))}
      </div>

    </section>
  );
}