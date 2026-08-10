import {
  CreditCard,
  Receipt,
  Database,
  Cpu,
  HardDrive,
  Plus,
  Download,
  MoreVertical,
  ShieldCheck,
} from "lucide-react";

const invoices = [
  {
    id: "INV-2024-09",
    date: "Sep 12, 2024",
    amount: "$4,999.00",
  },
  {
    id: "INV-2024-08",
    date: "Aug 12, 2024",
    amount: "$5,120.00",
  },
  {
    id: "INV-2024-07",
    date: "Jul 12, 2024",
    amount: "$4,999.00",
  },
];

export default function Billing() {
  return (
    <div className="w-full text-slate-200">

      {/* Header */}
      <div className="flex items-start justify-between mb-6">

        <div>
          <h1 className="text-[36px] font-bold">
            Billing & Subscriptions
          </h1>

          <p className="text-base text-slate-300 mt-1">
            Manage your workspace plan, usage limits, and payment methods.
          </p>
        </div>

        <div className="flex gap-3 pt-3">

          <button className="h-9 px-4 rounded-md border border-[#40516A] bg-[#071625] text-sm font-mono hover:bg-[#17283B]">
            View Pricing
          </button>

          <button className="h-9 px-4 rounded-md bg-indigo-600 hover:bg-indigo-500 text-sm font-mono">
            Upgrade Plan
          </button>

        </div>
      </div>

      {/* Top Section */}
      <div className="grid grid-cols-1 xl:grid-cols-[330px_1fr] gap-4">

        {/* Current Plan */}
        <div className="rounded-xl border border-[#40516A] bg-[#152436] p-6">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-1 text-xs font-mono tracking-widest">
              <ShieldCheck size={15} />
              CURRENT PLAN
            </div>

            <span className="px-2 py-1 rounded bg-[#334155] text-xs font-mono">
              Active
            </span>

          </div>

          <h2 className="text-[50px] leading-none font-semibold mt-3">
            Enterprise
          </h2>

          <div className="flex items-end justify-between mt-10">

            <span className="text-sm">
              Billed Annually
            </span>

            <span className="text-[27px] font-semibold">
              $4,999
              <span className="text-base font-normal">
                /mo
              </span>
            </span>

          </div>

          <div className="border-t border-[#33465C] mt-3 pt-3 text-sm">
            Renews on Oct 12, 2024
          </div>

        </div>

        {/* Resource Usage */}
        <div className="rounded-xl border border-[#40516A] bg-[#152436] p-6">

          <div className="flex items-center justify-between">

            <h2 className="text-[28px] font-semibold flex items-center gap-2">
              <span className="text-slate-300">◯</span>
              Resource Usage
            </h2>

            <span className="px-3 py-1 rounded bg-[#26384D] text-xs font-mono">
              Current Billing Cycle
            </span>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">

            <UsageItem
              icon={<Cpu size={16} />}
              title="LLM Tokens"
              percentage="82%"
              used="4.1B used"
              limit="5.0B limit"
              width="82%"
            />

            <UsageItem
              icon={<Cpu size={16} />}
              title="Compute Hours"
              percentage="45%"
              used="450 hrs"
              limit="1,000 hrs"
              width="45%"
            />

            <UsageItem
              icon={<HardDrive size={16} />}
              title="Vector Storage"
              percentage="94%"
              used="940 GB"
              limit="1 TB limit"
              width="94%"
              warning
            />

          </div>
        </div>
      </div>

      {/* Invoice + Payment */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-4">

        {/* Next Invoice */}
        <div className="rounded-xl border border-[#40516A] bg-[#152436] p-6">

          <div className="flex items-center justify-between">

            <h2 className="text-[27px] font-semibold flex items-center gap-2">
              <Receipt size={22} />
              Next Invoice
            </h2>

            <span className="text-xs font-mono">
              Due Oct 12
            </span>

          </div>

          <div className="border-t border-[#33465C] mt-4 pt-4 space-y-3">

            <InvoiceLine
              label="Enterprise Base Plan"
              amount="$4,999.00"
            />

            <InvoiceLine
              label="Additional Storage (Overage)"
              amount="$120.50"
            />

            <InvoiceLine
              label="Premium Support"
              amount="$500.00"
            />

          </div>

          <div className="border-t border-[#33465C] mt-6 pt-4 flex items-end justify-between">

            <span className="text-sm font-mono">
              Total Estimated
            </span>

            <span className="text-[34px] font-semibold text-violet-300">
              $5,619.50
            </span>

          </div>

        </div>

        {/* Payment Methods */}
        <div className="rounded-xl border border-[#40516A] bg-[#152436] p-6">

          <div className="flex items-center justify-between">

            <h2 className="text-[27px] font-semibold flex items-center gap-2">
              <CreditCard size={23} />
              Payment Methods
            </h2>

            <button className="text-xs font-mono flex items-center gap-1 hover:text-white">
              <Plus size={14} />
              Add New
            </button>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">

            <PaymentCard
              type="VISA"
              lastFour="4242"
              expiry="12/25"
              defaultCard
            />

            <PaymentCard
              type="AMEX"
              lastFour="1005"
              expiry="08/26"
            />

          </div>

        </div>
      </div>

      {/* Billing History */}
      <div className="rounded-xl border border-[#40516A] bg-[#152436] mt-8 overflow-hidden">

        <div className="px-4 py-4 flex items-center justify-between">

          <h2 className="text-[27px] font-semibold">
            Billing History
          </h2>

          <button className="h-8 px-3 rounded-md border border-[#40516A] flex items-center gap-2 text-xs font-mono">
            <Download size={14} />
            Export CSV
          </button>

        </div>

        {/* Table Header */}
        <div className="grid grid-cols-[1.2fr_1.2fr_1fr_1fr_80px] px-4 py-3 bg-[#101D2D] border-y border-[#33465C] text-[11px] font-mono tracking-widest text-slate-300">

          <span>INVOICE ID</span>
          <span>DATE</span>
          <span>AMOUNT</span>
          <span>STATUS</span>
          <span>RECEIPT</span>

        </div>

        {/* Rows */}
        {invoices.map((invoice) => (
          <div
            key={invoice.id}
            className="grid grid-cols-[1.2fr_1.2fr_1fr_1fr_80px] px-4 py-4 border-b border-[#263648] items-center text-sm"
          >

            <span className="font-mono">
              {invoice.id}
            </span>

            <span>
              {invoice.date}
            </span>

            <span className="font-mono">
              {invoice.amount}
            </span>

            <span>
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-[#27364D] border border-[#52627A] text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-300" />
                Paid
              </span>
            </span>

            <button className="text-slate-400 hover:text-white">
              <Download size={15} />
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

/* ================================
   Components
================================ */

function UsageItem({
  icon,
  title,
  percentage,
  used,
  limit,
  width,
  warning,
}) {
  return (
    <div>

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-2 text-sm font-mono">
          {icon}
          {title}
        </div>

        <span
          className={`text-sm font-mono ${
            warning ? "text-red-300" : ""
          }`}
        >
          {percentage}
        </span>

      </div>

      <div className="h-2 bg-[#071625] rounded-full mt-2 overflow-hidden">

        <div
          className={`h-full rounded-full ${
            warning
              ? "bg-red-300"
              : "bg-violet-300"
          }`}
          style={{ width }}
        />

      </div>

      <div className="flex justify-between mt-2 text-xs font-mono text-slate-300">

        <span>{used}</span>
        <span>{limit}</span>

      </div>

    </div>
  );
}

function InvoiceLine({ label, amount }) {
  return (
    <div className="flex justify-between text-sm">
      <span>{label}</span>
      <span className="font-mono">{amount}</span>
    </div>
  );
}

function PaymentCard({
  type,
  lastFour,
  expiry,
  defaultCard,
}) {
  return (
    <div
      className={`relative rounded-lg border p-4 h-[118px] ${
        defaultCard
          ? "border-[#7081A0] bg-[#26384B]"
          : "border-[#40516A] bg-[#071625]"
      }`}
    >

      {defaultCard && (
        <span className="absolute right-0 top-0 px-2 py-1 bg-violet-300 text-indigo-900 text-[10px] font-mono">
          DEFAULT
        </span>
      )}

      <div className="flex justify-between">

        <span className="text-xl font-bold">
          {type}
        </span>

        <MoreVertical size={16} />
      </div>

      <div className="mt-3 font-mono text-sm">
        •••• •••• •••• {lastFour}
      </div>

      <div className="flex justify-between text-xs font-mono mt-1">
        <span>Expires {expiry}</span>
        <span>Acme Corp</span>
      </div>

    </div>
  );
}