import { NavLink } from "react-router-dom";

export default function SidebarItem({
  icon: Icon,
  label,
  path,
}) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-lg px-4 py-3 transition-all ${
          isActive
            ? "bg-[#1A2538] text-white"
            : "text-slate-400 hover:bg-[#151E2E] hover:text-white"
        }`
      }
    >
      <Icon size={18} />

      <span className="text-sm font-medium">
        {label}
      </span>
    </NavLink>
  );
}