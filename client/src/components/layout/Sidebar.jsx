import { Plus, Grid2x2 } from "lucide-react";
import SidebarItem from "./SidebarItem";
import { sidebarItems } from "../../utils/sidebarData";

export default function Sidebar() {
  return (
    <aside className="w-[300px] h-screen bg-[#0B1424] border-r border-[#1E293B] flex flex-col">

      {/* Logo */}
      <div className="px-6 py-6 border-b border-[#1E293B]">

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center">

            <Grid2x2 className="text-white" size={18} />

          </div>

          <div>
            <h1 className="text-3xl font-bold text-white leading-none">
              BuilderOS
            </h1>

            <p className="text-xs text-slate-400 mt-1">
              Enterprise AI
            </p>
          </div>

        </div>

      </div>

      {/* New Project */}
      <div className="px-4 py-5">

        <button
          className="
          w-full
          bg-[#1A2538]
          hover:bg-[#243248]
          rounded-xl
          py-3
          flex
          items-center
          justify-center
          gap-2
          text-white
          transition
          "
        >
          <Plus size={18} />

          New Project

        </button>

      </div>

      {/* Menu */}
      <div className="flex-1 overflow-y-auto px-2 space-y-1">

         {sidebarItems.map((item) => (
           <SidebarItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            path={item.path}
        />
        ))}

      </div>

    </aside>
  );
}