import {
  UploadCloud,
  RefreshCw,
  Search,
  MoreVertical,
  FileText,
  FileType,
  Database,
  Target,
  Link2,
  RotateCcw,
} from "lucide-react";

const documents = [
  {
    name: "Q3_Financial_Report.pdf",
    source: "Manual Upload",
    chunks: "1,240",
    status: "Indexed",
    type: "pdf",
  },
  {
    name: "Engineering_Onboarding.md",
    source: "Github Repo",
    chunks: "85",
    status: "Chunking",
    type: "md",
  },
  {
    name: "Product_Roadmap_2024",
    source: "Notion Integration",
    chunks: "--",
    status: "Failed",
    type: "notion",
  },
];

export default function Knowledge() {
  return (
    <div className="w-full min-h-full text-slate-200">
      {/* Header */}
      <div className="flex items-start justify-between border-b border-[#263447] pb-5">
        <div>
          <h1 className="text-[38px] font-bold leading-tight">
            Knowledge Base
          </h1>

          <p className="text-base text-slate-300 mt-2">
            Manage documents, configure vector stores, and test RAG retrieval.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="h-10 px-4 rounded-md border border-[#40516A] bg-[#0B1929] text-sm font-medium text-slate-200 flex items-center gap-2 hover:bg-[#152438]">
            <RefreshCw size={16} />
            Sync Notion
          </button>

          <button className="h-10 px-4 rounded-md bg-indigo-600 hover:bg-indigo-500 text-sm font-semibold text-white flex items-center gap-2">
            <UploadCloud size={16} />
            Upload Files
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-[minmax(0,1fr)_318px] gap-6 mt-6">
        {/* Left Column */}
        <div className="min-w-0">
          {/* Upload Area */}
          <div className="h-[270px] rounded-xl border-2 border-dashed border-[#40516A] bg-[#172638] flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full border border-[#40516A] bg-[#182B40] flex items-center justify-center">
              <UploadCloud
                size={30}
                className="text-indigo-300"
              />
            </div>

            <h2 className="text-[24px] font-semibold mt-5">
              Drag & Drop Documents
            </h2>

            <p className="text-sm text-slate-300 mt-2">
              Supports PDF, Markdown, TXT, and CSV up to 50MB
            </p>

            <button className="mt-4 h-9 px-4 rounded-md border border-[#40516A] bg-[#25374B] text-sm font-medium hover:bg-[#30455D]">
              Browse Files
            </button>
          </div>

          {/* Document Corpus */}
          <div className="mt-6 rounded-xl border border-[#2B4057] bg-[#142437] overflow-hidden">
            {/* Corpus Header */}
            <div className="h-[68px] px-4 flex items-center justify-between border-b border-[#2B4057]">
              <h2 className="text-xl font-semibold">
                Document Corpus
              </h2>

              <div className="relative w-[205px]">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  placeholder="Filter files..."
                  className="w-full h-9 rounded-md border border-[#40516A] bg-[#071625] pl-9 pr-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-[2fr_1fr_0.7fr_1fr_30px] px-4 py-3 border-b border-[#2B4057] text-[11px] tracking-[0.16em] text-slate-400">
              <span>FILENAME</span>
              <span>SOURCE</span>
              <span>CHUNKS</span>
              <span>STATUS</span>
              <span>ACTIONS</span>
            </div>

            {/* Rows */}
            {documents.map((doc, index) => (
              <DocumentRow
                key={doc.name}
                document={doc}
                last={index === documents.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Vector Store Settings */}
          <div className="rounded-xl border border-[#2B4057] bg-[#172638] p-5">
            <div className="flex items-center gap-3">
              <Database
                size={22}
                className="text-slate-200"
              />

              <h2 className="text-xl font-semibold">
                Vector Store Settings
              </h2>
            </div>

            {/* Provider */}
            <div className="mt-6">
              <label className="block text-[11px] tracking-[0.16em] text-slate-300 mb-2">
                PROVIDER
              </label>

              <select className="w-full h-11 rounded-md border border-[#40516A] bg-[#071625] px-3 text-sm text-slate-200 outline-none focus:border-indigo-500">
                <option>Pinecone (Managed)</option>
                <option>Qdrant</option>
                <option>Weaviate</option>
              </select>
            </div>

            {/* Embedding */}
            <div className="mt-4">
              <label className="block text-[11px] tracking-[0.16em] text-slate-300 mb-2">
                EMBEDDING MODEL
              </label>

              <select className="w-full h-11 rounded-md border border-[#40516A] bg-[#071625] px-3 text-sm text-slate-200 outline-none focus:border-indigo-500">
                <option>text-embedding-3-large (OpenAI)</option>
                <option>text-embedding-3-small</option>
                <option>Voyage Embed</option>
              </select>
            </div>

            {/* Chunk Size */}
            <div className="mt-5">
              <div className="flex justify-between">
                <label className="text-[11px] tracking-[0.16em] text-slate-300">
                  CHUNK SIZE
                </label>

                <span className="text-sm font-mono text-slate-300">
                  512 tokens
                </span>
              </div>

              <input
                type="range"
                min="128"
                max="1024"
                defaultValue="512"
                className="w-full mt-4 accent-indigo-500"
              />
            </div>

            {/* Chunk Overlap */}
            <div className="mt-5">
              <div className="flex justify-between">
                <label className="text-[11px] tracking-[0.16em] text-slate-300">
                  CHUNK OVERLAP
                </label>

                <span className="text-sm font-mono text-slate-300">
                  50 tokens
                </span>
              </div>

              <input
                type="range"
                min="0"
                max="200"
                defaultValue="50"
                className="w-full mt-4 accent-indigo-500"
              />
            </div>

            <button className="w-full h-9 mt-5 rounded-md border border-[#40516A] bg-[#25374B] text-sm font-medium hover:bg-[#30455D]">
              Apply Configuration
            </button>
          </div>

          {/* Search Preview */}
          <div className="rounded-xl border border-[#40516A] bg-[#172638] p-5">
            <div className="flex items-center gap-3">
              <Target
                size={22}
                className="text-indigo-300"
              />

              <h2 className="text-xl font-semibold">
                Search Preview
              </h2>
            </div>

            <p className="text-sm text-slate-300 mt-5 leading-5">
              Test semantic retrieval against your indexed corpus.
            </p>

            <div className="relative mt-4">
              <input
                defaultValue="What are the Q3 revenue figures?"
                className="w-full h-11 rounded-md border border-[#40516A] bg-[#071625] px-3 pr-10 text-sm text-slate-200 outline-none focus:border-indigo-500"
              />

              <Search
                size={16}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
            </div>

            {/* Result 1 */}
            <div className="mt-4 rounded-md border border-[#40516A] border-l-4 border-l-indigo-400 bg-[#0B1929] p-3">
              <div className="flex justify-between text-[11px] font-mono text-slate-400">
                <span>Q3_Financial_Report.pdf</span>
                <span>Score 0.92</span>
              </div>

              <p className="text-sm text-slate-200 mt-3 leading-6">
                ...The{" "}
                <span className="bg-indigo-500/20 px-1">
                  Q3 revenue figures
                </span>{" "}
                exceeded expectations, reaching $4.2M, representing ...
              </p>
            </div>

            {/* Result 2 */}
            <div className="mt-3 rounded-md border border-[#40516A] bg-[#0B1929] p-3">
              <div className="text-[11px] font-mono text-slate-400">
                Product_Roadmap_2024
                <span className="float-right">
                  Score 0.74
                </span>
              </div>

              <p className="text-sm text-slate-300 mt-3 leading-6">
                ...budget allocations for Q3 emphasize scaling the sales...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DocumentRow({ document, last }) {
  return (
    <div
      className={`grid grid-cols-[2fr_1fr_0.7fr_1fr_30px] items-center px-4 py-4 min-h-[78px] ${
        !last ? "border-b border-[#2B4057]" : ""
      }`}
    >
      {/* Filename */}
      <div className="flex items-center gap-3 min-w-0">
        {document.type === "pdf" && (
          <FileType
            size={22}
            className="text-red-400 shrink-0"
          />
        )}

        {document.type === "md" && (
          <FileText
            size={22}
            className="text-indigo-300 shrink-0"
          />
        )}

        {document.type === "notion" && (
          <FileText
            size={22}
            className="text-slate-300 shrink-0"
          />
        )}

        <span className="text-sm text-slate-200 truncate">
          {document.name}
        </span>
      </div>

      {/* Source */}
      <span className="text-sm text-slate-300">
        {document.source}
      </span>

      {/* Chunks */}
      <span className="text-sm text-slate-300">
        {document.chunks}
      </span>

      {/* Status */}
      <div>
        {document.status === "Indexed" && (
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 border border-indigo-400/20 px-2.5 py-1 text-xs text-indigo-300">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-300" />
            Indexed
          </span>
        )}

        {document.status === "Chunking" && (
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-500/10 border border-slate-400/20 px-2.5 py-1 text-xs text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            Chunking
          </span>
        )}

        {document.status === "Failed" && (
          <span className="inline-flex items-center gap-2 rounded-full bg-red-500/10 border border-red-400/30 px-2.5 py-1 text-xs text-red-300">
            <span className="w-1.5 h-1.5 rounded-full bg-red-300" />
            Failed
          </span>
        )}
      </div>

      {/* Actions */}
      <button className="text-slate-400 hover:text-white">
        {document.status === "Failed" ? (
          <RotateCcw size={16} />
        ) : (
          <MoreVertical size={17} />
        )}
      </button>
    </div>
  );
}