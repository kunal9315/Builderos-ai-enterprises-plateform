import {
  Bot,
  Database,
  Package,
  MoreHorizontal,
  Users,
  Clock3,
  GitCommit,
  SlidersHorizontal,
  Grid2X2,
} from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Customer Support AI",
    projectId: "PRJ-8492",
    description:
      "Omnichannel generative AI agent handling L1 and L2 customer inquiries...",
    icon: Bot,
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
    border: "border-t-emerald-500",
    status: "PROD",
    statusColor: "text-emerald-400",
    statusBg: "bg-emerald-500/10",
    firstLabel: "Agents",
    firstValue: "3 Active",
    secondLabel: "Success Rate",
    secondValue: "94.2%",
    footerIcon: Clock3,
    footer: "Deployed 2h ago",
  },
  {
    id: 2,
    name: "DocQA Engine",
    projectId: "PRJ-9011",
    description:
      "Internal RAG system querying legacy technical documentation for engineering onboarding.",
    icon: Database,
    iconColor: "text-yellow-400",
    iconBg: "bg-yellow-500/10",
    border: "border-t-yellow-500",
    status: "STAGING",
    statusColor: "text-yellow-400",
    statusBg: "bg-yellow-500/10",
    firstLabel: "Agents",
    firstValue: "1 Active",
    secondLabel: "Test Cov.",
    secondValue: "78%",
    footerIcon: GitCommit,
    footer: "Commit 8f9a2b",
  },
  {
    id: 3,
    name: "Inventory Predictor",
    projectId: "PRJ-9104",
    description:
      "Predictive model analyzing seasonal trends to automate supply chain reordering.",
    icon: Package,
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10",
    border: "border-t-blue-500",
    status: "DEV",
    statusColor: "text-blue-400",
    statusBg: "bg-blue-500/10",
    firstLabel: "Pipeline",
    firstValue: "Training",
    secondLabel: "",
    secondValue: "",
    footerIcon: Clock3,
    footer: "Draft saved",
  },
];

function ProjectCard({ project }) {
  const Icon = project.icon;
  const FooterIcon = project.footerIcon;

  return (
    <div
      className={`min-h-[300px] rounded-lg border border-[#2A3749] ${project.border} border-t-[3px] bg-[#1D2939] p-5 flex flex-col hover:border-[#40516A] transition`}
    >
      {/* Header */}
      <div className="flex justify-between items-start gap-3">
        <div className="flex gap-4 min-w-0">
          <div
            className={`w-11 h-11 rounded-md ${project.iconBg} flex items-center justify-center shrink-0`}
          >
            <Icon size={22} className={project.iconColor} />
          </div>

          <div className="min-w-0">
            <div className="flex items-start gap-2">
              <h2 className="text-xl font-semibold text-slate-200 leading-7">
                {project.name}
              </h2>

              <span
                className={`mt-1 rounded-full px-2.5 py-1 text-[10px] font-semibold ${project.statusBg} ${project.statusColor}`}
              >
                ● {project.status}
              </span>
            </div>

            <p className="text-xs text-slate-600 mt-1 tracking-widest">
              {project.projectId}
            </p>
          </div>
        </div>

        <button className="text-slate-500 hover:text-white">
          <MoreHorizontal size={18} />
        </button>
      </div>

      {/* Description */}
      <p className="text-[15px] leading-6 text-slate-300 mt-6">
        {project.description}
      </p>

      {/* Metrics */}
      <div className="flex gap-10 mt-6">
        <div>
          <p className="text-[11px] text-slate-600 uppercase tracking-widest">
            {project.firstLabel}
          </p>

          <p className="text-sm text-slate-200 mt-1">
            {project.firstValue}
          </p>
        </div>

        {project.secondLabel && (
          <div>
            <p className="text-[11px] text-slate-600 uppercase tracking-widest">
              {project.secondLabel}
            </p>

            <p
              className={`text-sm mt-1 ${
                project.secondValue === "78%"
                  ? "text-yellow-400"
                  : "text-slate-200"
              }`}
            >
              {project.secondValue}
            </p>
          </div>
        )}
      </div>

      <div className="flex-1" />

      {/* Footer */}
      <div className="border-t border-[#2A3749] pt-4 mt-5 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-7 h-7 rounded-full bg-[#34465C] border-2 border-[#1D2939] flex items-center justify-center">
            <Users size={13} className="text-slate-300" />
          </div>

          <div className="w-7 h-7 -ml-2 rounded-full bg-[#25384C] border-2 border-[#1D2939] flex items-center justify-center">
            <Bot size={13} className="text-slate-300" />
          </div>

          {project.id === 1 && (
            <div className="w-7 h-7 -ml-2 rounded-full bg-[#10263A] border-2 border-[#1D2939] flex items-center justify-center text-[9px] text-slate-300">
              +2
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-600">
          <FooterIcon size={13} />
          {project.footer}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-start justify-between gap-6">
        <div>
          <h1 className="text-[38px] font-bold leading-tight text-slate-200">
            Projects
          </h1>

          <p className="text-base text-slate-300 mt-1">
            Manage AI initiatives, deployments, and connected agents.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Tabs */}
          <div className="flex h-9 rounded-md overflow-hidden border border-[#2A3749] bg-[#1B2738]">
            <button className="px-4 text-xs text-white bg-[#26364B]">
              My Projects
            </button>

            <button className="px-4 text-xs text-slate-300 hover:bg-[#26364B]">
              Team
            </button>

            <button className="px-4 text-xs text-slate-300 hover:bg-[#26364B]">
              Archived
            </button>
          </div>

          <button className="w-9 h-9 rounded-md border border-[#2A3749] bg-[#111C2B] flex items-center justify-center text-slate-300 hover:text-white">
            <SlidersHorizontal size={16} />
          </button>

          <button className="w-9 h-9 rounded-md border border-[#2A3749] bg-[#111C2B] flex items-center justify-center text-slate-300 hover:text-white">
            <Grid2X2 size={16} />
          </button>
        </div>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-7">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </div>
  );
}