export default function AgentCard({
  name,
  description,
  status,
  active,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left rounded-lg px-3 py-3 transition-all ${
        active
          ? "bg-[#1C2A3D] border border-[#40506A]"
          : "hover:bg-[#111C2D]"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-sm font-semibold text-[#E2E8F0] truncate">
            {name}
          </h3>

          <p className="text-sm text-slate-400 mt-1">
            {description}
          </p>
        </div>

        <span
          className={`mt-1 w-2.5 h-2.5 rounded-full shrink-0 ${
            status === "online"
              ? "bg-emerald-400"
              : status === "busy"
              ? "bg-amber-400"
              : "bg-slate-600"
          }`}
        />
      </div>
    </button>
  );
}