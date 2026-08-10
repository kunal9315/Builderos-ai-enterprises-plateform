import { useState } from "react";

import AgentList from "../../components/agents/AgentList";
import AgentEditor from "../../components/agents/AgentEditor";
import Playground from "../../components/agents/Playground";

export default function Agents() {
  const [selectedAgent, setSelectedAgent] = useState({
    id: 1,
    name: "Customer Support Lead",
    description: "Handles tier 1 & 2 tickets",
    status: "online",
  });

  return (
    <div className="h-full">

      <div className="grid grid-cols-[310px_430px_1fr] h-[calc(100vh-128px)]">

        {/* Left — Agent List */}
        <AgentList
          selectedAgent={selectedAgent}
          setSelectedAgent={setSelectedAgent}
        />

        {/* Middle — Agent Configuration */}
        <AgentEditor agent={selectedAgent} />

        {/* Right — Playground */}
        <Playground agent={selectedAgent} />

      </div>

    </div>
  );
}