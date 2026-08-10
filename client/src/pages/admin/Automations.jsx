import {
  Search,
  SlidersHorizontal,
  UserRound,
  CalendarDays,
  Shield,
  Server,
} from "lucide-react";

const auditLogs = [
  {
    timestamp: "2023-10-27 14:32:01.452",
    eventId: "evt_89x2jf90",
    identity: "jdoe@enterprise.com",
    type: "user",
    action: "IAM.UpdatePolicy",
    resource: "arn:aws:iam::123456789012:role/admin",
  },
  {
    timestamp: "2023-10-27 14:31:12.891",
    eventId: "evt_11z9kl42",
    identity: "svc_ci_cd_pipeline",
    type: "service",
    action: "S3.PutObject",
    resource: "arn:aws:s3:::prod-build-artifacts",
  },
  {
    timestamp: "2023-10-27 14:28:45.002",
    eventId: "evt_55q7wx88",
    identity: "unknown_user",
    type: "user",
    action: "AUTH.FailedLogin",
    resource: "BuilderOS Dashboard",
    danger: true,
  },
  {
    timestamp: "2023-10-27 14:15:22.110",
    eventId: "evt_22p4nm99",
    identity: "svc_monitoring",
    type: "service",
    action: "KMS.Decrypt",
    resource: "arn:aws:kms:us-east-1:1234/key/8a...",
  },
];

export default function AuditLogs() {
  return (
    <div className="w-full min-h-screen text-slate-200">

      {/* Page Header */}
      <div className="flex items-start justify-between mb-6">

        <div>
          <h1 className="text-4xl font-bold text-white">
            Enterprise Audit Logs
          </h1>

          <p className="text-slate-300 mt-2">
            Comprehensive trail of user activity, system changes, and access events.
          </p>
        </div>

        <button className="flex items-center gap-2 px-5 py-2.5 rounded-md border border-slate-600 bg-[#0b1828] hover:bg-[#172638] font-mono text-sm">
          <SlidersHorizontal size={16} />
          Filters
        </button>

      </div>


      {/* Filters */}
      <section className="rounded-lg border border-slate-700 bg-[#101f30] p-4 mb-6">

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">

          {/* User / Service */}
          <div>
            <label className="block text-xs font-mono tracking-widest mb-2">
              User / Service
            </label>

            <div className="relative">

              <UserRound
                size={16}
                className="absolute left-3 top-3 text-slate-400"
              />

              <input
                type="text"
                placeholder="Search identity..."
                className="w-full h-10 rounded-md border border-slate-700 bg-[#070f1b] pl-10 pr-3 outline-none focus:border-violet-400"
              />

            </div>
          </div>


          {/* Action */}
          <div>
            <label className="block text-xs font-mono tracking-widest mb-2">
              Action Type
            </label>

            <select className="w-full h-10 rounded-md border border-slate-700 bg-[#070f1b] px-3 outline-none focus:border-violet-400">
              <option>All Actions</option>
              <option>Authentication</option>
              <option>IAM</option>
              <option>Storage</option>
              <option>Database</option>
              <option>Security</option>
            </select>
          </div>


          {/* Resource */}
          <div>
            <label className="block text-xs font-mono tracking-widest mb-2">
              Resource
            </label>

            <select className="w-full h-10 rounded-md border border-slate-700 bg-[#070f1b] px-3 outline-none focus:border-violet-400">
              <option>All Resources</option>
              <option>BuilderOS Dashboard</option>
              <option>AWS IAM</option>
              <option>S3</option>
              <option>KMS</option>
            </select>
          </div>


          {/* Time Range */}
          <div>
            <label className="block text-xs font-mono tracking-widest mb-2">
              Time Range
            </label>

            <button className="w-full h-10 rounded-md border border-slate-700 bg-[#070f1b] px-3 flex items-center gap-2 text-left">
              <CalendarDays size={16} />
              Last 24 Hours
            </button>
          </div>

        </div>

      </section>


      {/* Logs Table */}
      <section className="rounded-lg border border-slate-700 bg-[#101f30] overflow-hidden">

        {/* Table Header */}
        <div className="overflow-x-auto">

          <div className="min-w-[1050px]">

            <div className="grid grid-cols-[220px_130px_210px_180px_minmax(300px,1fr)] px-5 py-3 bg-[#0d1a2a] border-b border-slate-700 text-xs font-mono tracking-widest text-slate-400">

              <span>TIMESTAMP (UTC)</span>
              <span>EVENT ID</span>
              <span>IDENTITY</span>
              <span>ACTION</span>
              <span>RESOURCE</span>

            </div>


            {/* Rows */}
            {auditLogs.map((log) => (
              <AuditRow
                key={log.eventId}
                log={log}
              />
            ))}

          </div>

        </div>


        {/* Footer */}
        <div className="border-t border-slate-700 px-5 py-5 text-sm font-mono text-slate-300">
          Showing 1–50 of 10,244 events
        </div>

      </section>

    </div>
  );
}


function AuditRow({ log }) {
  return (
    <div
      className={`grid grid-cols-[220px_130px_210px_180px_minmax(300px,1fr)] items-center px-5 py-3.5 border-b border-slate-800 text-sm ${
        log.danger
          ? "bg-red-500/[0.06]"
          : "hover:bg-[#172638]"
      }`}
    >

      {/* Timestamp */}
      <span className="font-mono text-slate-300">
        {log.timestamp}
      </span>


      {/* Event ID */}
      <span className="font-mono text-violet-300">
        {log.eventId}
      </span>


      {/* Identity */}
      <div className="flex items-center gap-2">

        <div
          className={`w-7 h-7 rounded-md flex items-center justify-center ${
            log.type === "service"
              ? "bg-indigo-600"
              : "bg-[#253447]"
          }`}
        >
          {log.type === "service" ? (
            <Server size={14} />
          ) : (
            <UserRound size={14} />
          )}
        </div>

        <span className="truncate">
          {log.identity}
        </span>

      </div>


      {/* Action */}
      <span>
        <span
          className={`inline-block px-2 py-1 rounded border font-mono text-xs ${
            log.danger
              ? "border-red-400/30 bg-red-500/10 text-red-300"
              : "border-slate-600 bg-[#1b2b3e] text-slate-200"
          }`}
        >
          {log.action}
        </span>
      </span>


      {/* Resource */}
      <span className="font-mono text-slate-300 truncate">
        {log.resource}
      </span>

    </div>
  );
}