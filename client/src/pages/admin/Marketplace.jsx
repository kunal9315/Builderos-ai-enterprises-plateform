import {
  Search,
  SlidersHorizontal,
  Headphones,
  Activity,
  Shield,
  Star,
  Download,
} from "lucide-react";

const items = [
  {
    title: "Tier 1 L1 Resolver",
    description:
      "Autonomous support agent trained on Zendesk transcripts to resolve common customer issues.",
    type: "Agent",
    rating: "4.9",
    reviews: "1.2k",
    installs: "8.5k",
    price: "Free",
    icon: Headphones,
    iconColor: "text-indigo-300",
  },
  {
    title: "SQL Query Optimizer",
    description:
      "Analyzes slow-running queries and suggests structural improvements or optimizations.",
    type: "Workflow",
    rating: "4.7",
    reviews: "845",
    installs: "3.2k",
    price: "$15/mo",
    icon: Activity,
    iconColor: "text-indigo-300",
  },
  {
    title: "OWASP Top 10 Context",
    description:
      "Embedded vector database containing modern security patterns to augment your applications.",
    type: "Knowledge Base",
    rating: "4.9",
    reviews: "2.1k",
    installs: "12k",
    price: "Free",
    icon: Shield,
    iconColor: "text-orange-300",
  },
];

const categories = [
  "All Items",
  "Customer Support",
  "Data Analysis",
  "Content Gen",
  "Security",
];

export default function Marketplace() {
  return (
    <div className="w-full text-slate-200">

      {/* Header */}
      <div className="flex items-start justify-between">

        <div>
          <h1 className="text-[36px] font-bold">
            Marketplace
          </h1>

          <p className="text-base text-slate-300 mt-1">
            Discover and deploy pre-built AI agents and templates.
          </p>
        </div>

        <div className="flex items-center gap-2">

          <div className="relative">
            <Search
              size={17}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search marketplace..."
              className="w-[275px] h-10 rounded-md border border-[#40516A] bg-[#071625] pl-10 pr-3 text-sm outline-none focus:border-indigo-500"
            />
          </div>

          <button className="h-10 px-4 rounded-md border border-[#40516A] bg-[#071625] flex items-center gap-2 text-sm font-mono hover:bg-[#152438]">
            <SlidersHorizontal size={16} />
            Filter
          </button>

        </div>
      </div>

      {/* Categories */}
      <div className="mt-8 border-b border-[#263447]">

        <div className="flex items-center gap-9">

          {categories.map((category, index) => (
            <button
              key={category}
              className={`pb-3 text-sm font-mono ${
                index === 0
                  ? "text-slate-200 border-b-2 border-indigo-300"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

      </div>

      {/* Marketplace Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">

        {items.map((item) => {
          const Icon = item.icon;

          return (
            <MarketplaceCard
              key={item.title}
              item={item}
              Icon={Icon}
            />
          );
        })}

      </div>
    </div>
  );
}

function MarketplaceCard({ item, Icon }) {
  return (
    <div className="rounded-xl border border-[#40516A] bg-[#1D2939] p-4 hover:border-[#526782] transition">

      {/* Top */}
      <div className="flex items-start justify-between">

        <div className="w-12 h-12 rounded-lg bg-[#263648] border border-[#40516A] flex items-center justify-center">
          <Icon
            size={23}
            className={item.iconColor}
          />
        </div>

        <span className="px-2 py-1 rounded bg-[#263648] border border-[#40516A] text-[10px] font-mono">
          {item.type}
        </span>

      </div>

      {/* Content */}
      <h2 className="text-[25px] font-semibold mt-4">
        {item.title}
      </h2>

      <p className="text-[15px] leading-6 text-slate-300 mt-2 h-[48px] overflow-hidden">
        {item.description}
      </p>

      {/* Stats */}
      <div className="flex items-center gap-5 mt-5 text-xs font-mono">

        <div className="flex items-center gap-1">
          <Star
            size={14}
            className="text-slate-300"
          />
          {item.rating} ({item.reviews})
        </div>

        <div className="flex items-center gap-1">
          <Download size={14} />
          {item.installs} Installs
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-[#33465C] mt-5 pt-3 flex items-center justify-between">

        <span className="text-base font-semibold">
          {item.price}
        </span>

        <button className="h-8 px-4 rounded-md bg-indigo-600 hover:bg-indigo-500 text-sm font-mono">
          Deploy
        </button>

      </div>

    </div>
  );
}