import {
  Search,
  Bell,
  RefreshCw,
  Headphones,
  UserCircle2,
} from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-20 bg-[#0B1424] border-b border-[#1E293B] px-8 flex items-center justify-between">

      {/* Left */}
      <div className="flex items-center gap-6">

        {/* Search */}
        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <input
            placeholder="Search..."
            className="
              w-[300px]
              h-11
              rounded-lg
              bg-[#111C2D]
              border
              border-[#263447]
              pl-11
              pr-4
              text-white
              placeholder:text-slate-500
              outline-none
              focus:border-indigo-500
            "
          />

        </div>

        <span className="text-white font-semibold">
          Prod/Dev
        </span>

      </div>

      {/* Right */}

      <div className="flex items-center gap-4">

        <button className="text-slate-400 hover:text-white transition">
          <RefreshCw size={18} />
        </button>

        <button className="text-slate-400 hover:text-white transition">
          <Bell size={18} />
        </button>

        <button className="text-slate-400 hover:text-white transition">
          <Headphones size={18} />
        </button>

        <div className="w-px h-8 bg-[#263447]" />

        <button
          className="
            border
            border-[#263447]
            rounded-lg
            px-5
            h-11
            text-white
            hover:bg-[#111C2D]
          "
        >
          Notifications
        </button>

        <button
          className="
            bg-gradient-to-r
            from-violet-600
            to-indigo-600
            rounded-lg
            px-6
            h-11
            text-white
            font-medium
            hover:opacity-90
          "
        >
          AI Assistant
        </button>

        <div
          className="
            w-10
            h-10
            rounded-full
            bg-[#1A2538]
            flex
            items-center
            justify-center
          "
        >
          <UserCircle2 />
        </div>

      </div>

    </header>
  );
}