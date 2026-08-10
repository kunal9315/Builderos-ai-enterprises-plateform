import {
  FolderPlus,
  Upload,
  Database,
  FileText,
  Braces,
  Cpu,
  Filter,
  ArrowDownUp,
  Grid2X2,
  List,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const files = [
  {
    name: "customer_support_guidelines_v2.pdf",
    info: "Parsed · 14 pages",
    type: "Document",
    size: "2.4 MB",
    used: "Support Bot",
    extra: "+1",
    date: "2 hours ago",
    icon: "pdf",
  },
  {
    name: "finetuning_conversations_q3.json",
    info: "Ready · 15k rows",
    type: "Dataset",
    size: "45.8 MB",
    used: "Unused",
    date: "Yesterday",
    icon: "json",
  },
  {
    name: "product_inventory_catalog.csv",
    info: "Synced · 4 mins ago",
    type: "Tabular",
    size: "12.1 MB",
    used: "Sales Assistant",
    date: "Oct 12, 2023",
    icon: "csv",
  },
  {
    name: "API Documentation",
    info: "14 items",
    type: "Folder",
    size: "--",
    used: "Dev Bot",
    date: "Oct 10, 2023",
    icon: "folder",
  },
];

export default function Files() {
  return (
    <div className="w-full text-slate-200">

      {/* Header */}
      <div className="flex items-start justify-between mb-6">

        <div>
          <div className="flex items-center gap-2 text-sm font-mono text-slate-400 mb-2">
            <span>Files</span>
            <span>›</span>
            <span className="text-slate-200">All Files</span>
          </div>

          <h1 className="text-[38px] font-bold">
            Data Assets
          </h1>

          <p className="text-base text-slate-300 mt-1">
            Manage training data, knowledge bases, and fine-tuning assets.
          </p>
        </div>

        <div className="flex gap-3 pt-5">

          <button className="h-10 px-4 rounded-md border border-[#40516A] bg-[#0B1929] flex items-center gap-2 text-sm hover:bg-[#152438]">
            <FolderPlus size={16} />
            New Folder
          </button>

          <button className="h-10 px-4 rounded-md bg-indigo-600 hover:bg-indigo-500 flex items-center gap-2 text-sm font-semibold">
            <Upload size={16} />
            Upload Files
          </button>

        </div>
      </div>

      {/* Search / top navigation */}
      <div className="hidden" />

      {/* Storage + Categories */}
      <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 gap-4 mb-6">

        {/* Storage */}
        <div className="rounded-xl border border-[#40516A] bg-[#1D2939] p-4">

          <div className="flex items-center justify-between">
            <span className="text-xs font-mono tracking-[0.15em]">
              STORAGE USAGE
            </span>

            <Database size={18} />
          </div>

          <div className="mt-5">
            <span className="text-[27px] font-semibold">
              142.5
            </span>

            <span className="text-sm text-slate-300 ml-1">
              GB / 500 GB
            </span>
          </div>

          {/* Storage bar */}
          <div className="h-2 rounded-full bg-[#071625] mt-4 overflow-hidden flex">
            <div className="w-[17%] bg-indigo-500" />
            <div className="w-[8%] bg-emerald-400" />
            <div className="w-[5%] bg-yellow-400" />
          </div>

          <div className="space-y-2 mt-4 text-xs">

            <StorageRow
              color="bg-indigo-500"
              label="Raw Storage"
              value="75 GB"
            />

            <StorageRow
              color="bg-emerald-400"
              label="Vector DB"
              value="50 GB"
            />

            <StorageRow
              color="bg-yellow-400"
              label="Models/Cache"
              value="17.5 GB"
            />

          </div>
        </div>

        {/* Documents */}
        <CategoryCard
          icon={<FileText size={22} />}
          iconClass="text-indigo-300"
          count="124"
          title="Documents"
          subtitle="PDF, DOCX, TXT"
        />

        {/* Datasets */}
        <CategoryCard
          icon={<Braces size={22} />}
          iconClass="text-emerald-400"
          count="42"
          title="Datasets"
          subtitle="JSONL, CSV"
        />

        {/* Embeddings */}
        <CategoryCard
          icon={<Cpu size={22} />}
          iconClass="text-yellow-400"
          count="8"
          title="Embeddings"
          subtitle="Vector stores"
        />

        {/* Filter */}
        <button className="rounded-xl border border-dashed border-[#40516A] bg-[#1D2939] hover:bg-[#243346] flex flex-col items-center justify-center min-h-[190px]">

          <div className="w-8 h-8 rounded-full border-2 border-slate-300 flex items-center justify-center">
            <span className="text-xl">+</span>
          </div>

          <span className="mt-3 text-sm font-mono">
            New Filter
          </span>

        </button>

      </div>

      {/* Files Table */}
      <div className="rounded-xl border border-[#40516A] bg-[#1D2939] overflow-hidden">

        {/* Toolbar */}
        <div className="h-[76px] px-4 flex items-center justify-between border-b border-[#33465C]">

          <div className="flex items-center gap-2">

            <button className="h-9 px-4 rounded-md border border-[#40516A] bg-[#071625] flex items-center gap-2 text-xs font-mono">
              <Filter size={14} />
              Filter
            </button>

            <button className="h-9 px-4 rounded-md border border-[#40516A] bg-[#071625] flex items-center gap-2 text-xs font-mono">
              <ArrowDownUp size={14} />
              Sort: Date Added
            </button>

          </div>

          <div className="flex items-center gap-2">

            <button className="w-9 h-9 rounded-md flex items-center justify-center hover:bg-[#26384D]">
              <Grid2X2 size={17} />
            </button>

            <button className="w-9 h-9 rounded-md bg-[#0B2035] text-indigo-300 flex items-center justify-center">
              <List size={17} />
            </button>

          </div>

        </div>

        {/* Table Header */}
        <div className="grid grid-cols-[45px_minmax(260px,2.3fr)_1fr_100px_1.1fr_140px] px-4 py-3 bg-[#192738] border-b border-[#33465C] text-[10px] font-mono tracking-[0.15em] text-slate-400">

          <span>
            <input type="checkbox" />
          </span>

          <span>NAME</span>
          <span>TYPE</span>
          <span>SIZE</span>
          <span>USED IN AGENTS</span>
          <span>DATE ADDED</span>

        </div>

        {/* Rows */}
        {files.map((file) => (
          <FileRow
            key={file.name}
            file={file}
          />
        ))}

        {/* Footer */}
        <div className="h-12 px-4 flex items-center justify-between border-t border-[#33465C]">

          <span className="text-xs font-mono text-slate-300">
            Showing 1 to 4 of 124 files
          </span>

          <div className="flex gap-3">

            <button className="text-slate-500 hover:text-white">
              <ChevronLeft size={17} />
            </button>

            <button className="text-slate-300 hover:text-white">
              <ChevronRight size={17} />
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}


/* ---------------- Components ---------------- */

function StorageRow({ color, label, value }) {
  return (
    <div className="flex items-center justify-between">

      <div className="flex items-center gap-2">

        <span className={`w-2 h-2 rounded-full ${color}`} />

        <span>{label}</span>

      </div>

      <span className="font-mono">
        {value}
      </span>

    </div>
  );
}


function CategoryCard({
  icon,
  iconClass,
  count,
  title,
  subtitle,
}) {
  return (
    <div className="rounded-xl border border-[#40516A] bg-[#1D2939] p-4 min-h-[190px] flex flex-col justify-between">

      <div className="flex items-start justify-between">

        <div
          className={`w-11 h-11 rounded-lg bg-[#071D31] flex items-center justify-center ${iconClass}`}
        >
          {icon}
        </div>

        <span className="px-2 py-1 rounded bg-[#071D31] text-xs font-mono">
          {count}
        </span>

      </div>

      <div>

        <h3 className="text-sm font-semibold">
          {title}
        </h3>

        <p className="text-xs text-slate-300 mt-1">
          {subtitle}
        </p>

      </div>

    </div>
  );
}


function FileRow({ file }) {
  const iconMap = {
    pdf: {
      icon: <FileText size={19} />,
      color: "text-red-400",
    },
    json: {
      icon: <Braces size={19} />,
      color: "text-yellow-400",
    },
    csv: {
      icon: <Database size={19} />,
      color: "text-emerald-400",
    },
    folder: {
      icon: <FolderPlus size={19} />,
      color: "text-slate-200",
    },
  };

  const fileIcon = iconMap[file.icon];

  return (
    <div className="grid grid-cols-[45px_minmax(260px,2.3fr)_1fr_100px_1.1fr_140px] items-center px-4 min-h-[72px] border-b border-[#33465C] hover:bg-[#243346] transition">

      <span>
        <input type="checkbox" />
      </span>

      {/* Name */}
      <div className="flex items-center gap-3">

        <div className="w-9 h-9 rounded-md bg-[#263646] flex items-center justify-center">
          <span className={fileIcon.color}>
            {fileIcon.icon}
          </span>
        </div>

        <div>

          <p className="text-sm font-medium">
            {file.name}
          </p>

          <p className="text-[11px] text-slate-300 font-mono">
            {file.info}
          </p>

        </div>

      </div>

      {/* Type */}
      <span className="text-sm">
        {file.type}
      </span>

      {/* Size */}
      <span className="text-sm">
        {file.size}
      </span>

      {/* Used */}
      <div>

        {file.used === "Unused" ? (
          <span className="text-xs italic text-slate-400">
            Unused
          </span>
        ) : (
          <div className="flex items-center gap-2">

            <span className="px-2 py-1 rounded bg-indigo-500/20 border border-indigo-500/30 text-xs text-indigo-200">
              {file.used}
            </span>

            {file.extra && (
              <span className="px-2 py-1 rounded bg-[#071625] text-xs">
                {file.extra}
              </span>
            )}

          </div>
        )}

      </div>

      {/* Date */}
      <span className="text-sm text-slate-300">
        {file.date}
      </span>

    </div>
  );
}