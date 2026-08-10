import {
  UserPlus,
  Search,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

const members = [
  {
    initials: "AS",
    name: "Alice Smith",
    email: "alice@builder.os",
    role: "Administrator",
    active: "Just now",
  },
  {
    initials: "BJ",
    name: "Bob Jones",
    email: "bob@builder.os",
    role: "Editor",
    active: "2 hours ago",
  },
  {
    initials: "CD",
    name: "Carol Danvers",
    email: "carol@builder.os",
    role: "Editor",
    active: "1 day ago",
  },
];

const activities = [
  {
    title: "Role Updated",
    text: "Alice Smith upgraded Bob Jones to Editor",
    time: "10 mins ago",
  },
  {
    title: "SSO Policy Changed",
    text: "System admin enforced Okta login",
    time: "2 hours ago",
  },
  {
    title: "New Member Joined",
    text: "Carol Danvers accepted invitation",
    time: "1 day ago",
  },
];

export default function Settings() {
  return (
    <div className="w-full text-slate-200">

      {/* Header */}
      <div className="border-b border-[#334155] pb-4">

        <h1 className="text-4xl font-bold">
          Global Settings
        </h1>

        <p className="text-slate-300 mt-2">
          Manage workspace configuration, access controls, security policies,
          and monitor system activity.
        </p>

      </div>

      {/* Tabs */}
      <div className="flex gap-8 mt-5 border-b border-[#334155]">

        {[
          "General",
          "Organization",
          "Team/Users (RBAC)",
          "Security (SSO/2FA)",
          "Audit Logs",
        ].map((tab, index) => (
          <button
            key={tab}
            className={`pb-3 text-sm font-mono ${
              index === 2
                ? "text-violet-300 border-b-2 border-violet-300"
                : "text-slate-300"
            }`}
          >
            {tab}
          </button>
        ))}

      </div>

      {/* Main */}
      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_323px] gap-6 mt-6">

        {/* LEFT */}
        <div>

          {/* Invite */}
          <section className="rounded-xl border border-[#40516A] bg-[#172638] p-6">

            <div className="flex items-center gap-2">
              <UserPlus
                size={22}
                className="text-violet-300"
              />

              <h2 className="text-xl font-semibold">
                Invite Members
              </h2>
            </div>

            <p className="text-slate-300 mt-2">
              Add new users to your organization and assign their initial roles.
            </p>

            <label className="block text-xs font-mono tracking-widest mt-6">
              Email Addresses
            </label>

            <textarea
              rows={4}
              placeholder="colleague1@example.com, colleague2@example.com..."
              className="w-full mt-2 rounded-lg border border-[#40516A] bg-[#061423] p-4 outline-none resize-none placeholder:text-slate-500 focus:border-violet-400"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">

              <div>
                <label className="text-xs font-mono">
                  Assign Role
                </label>

                <select className="w-full mt-2 h-13 rounded-lg border border-[#40516A] bg-[#061423] px-4 outline-none">
                  <option>Editor (Standard)</option>
                  <option>Administrator</option>
                  <option>Viewer</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-mono">
                  Default Workspace
                </label>

                <select className="w-full mt-2 h-13 rounded-lg border border-[#40516A] bg-[#061423] px-4 outline-none">
                  <option>Engineering Core</option>
                  <option>Customer Support</option>
                  <option>Data Platform</option>
                </select>
              </div>

            </div>

            <div className="flex justify-end mt-6">

              <button className="px-7 py-2.5 rounded-md bg-indigo-600 hover:bg-indigo-500 font-mono text-sm">
                Send Invitations
              </button>

            </div>

          </section>

          {/* Active Members */}
          <section className="rounded-xl border border-[#40516A] bg-[#172638] mt-6 overflow-hidden">

            <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">

              <div>
                <h2 className="text-xl font-semibold">
                  Active Members
                </h2>

                <p className="text-slate-300 mt-1">
                  Manage existing access across 42 active users.
                </p>
              </div>

              <div className="relative">

                <Search
                  size={17}
                  className="absolute left-3 top-3 text-slate-400"
                />

                <input
                  placeholder="Filter users..."
                  className="h-10 w-64 rounded-md border border-[#40516A] bg-[#061423] pl-10 pr-3 outline-none"
                />

              </div>

            </div>

            <div className="grid grid-cols-[1.5fr_1fr_1fr_90px] px-6 py-3 bg-[#142334] border-y border-[#334155] text-xs font-mono">

              <span>USER</span>
              <span>ROLE</span>
              <span>LAST ACTIVE</span>
              <span>ACTIONS</span>

            </div>

            {members.map((member) => (
              <div
                key={member.email}
                className="grid grid-cols-[1.5fr_1fr_1fr_90px] items-center px-6 py-4 border-b border-[#263648]"
              >

                <div className="flex items-center gap-3">

                  <div className="w-9 h-9 rounded-full bg-[#293752] flex items-center justify-center text-sm">
                    {member.initials}
                  </div>

                  <div>
                    <p className="font-medium">
                      {member.name}
                    </p>

                    <p className="text-sm text-slate-400">
                      {member.email}
                    </p>
                  </div>

                </div>

                <span
                  className={`w-fit px-2 py-1 rounded border text-xs ${
                    member.role === "Administrator"
                      ? "border-violet-400 text-violet-300 bg-violet-500/10"
                      : "border-slate-600 text-slate-300"
                  }`}
                >
                  {member.role}
                </span>

                <span className="text-sm">
                  {member.active}
                </span>

                <button className="text-slate-400 hover:text-white">
                  •••
                </button>

              </div>
            ))}

          </section>

        </div>

        {/* RIGHT */}
        <div className="space-y-6">

          {/* Role Distribution */}
          <section className="rounded-xl border border-[#40516A] bg-[#172638] p-6">

            <h2 className="text-xl font-semibold">
              Role Distribution
            </h2>

            <RoleBar
              name="Administrators"
              count="4"
              width="12%"
            />

            <RoleBar
              name="Editors"
              count="28"
              width="68%"
            />

            <RoleBar
              name="Viewers"
              count="10"
              width="28%"
            />

            <button className="w-full mt-6 h-10 rounded-md border border-[#40516A] bg-[#172638] hover:bg-[#213247] flex items-center justify-center gap-2 font-mono text-sm">
              <ShieldCheck size={16} />
              Manage Custom Roles
            </button>

          </section>

          {/* Recent Activity */}
          <section className="rounded-xl border border-[#40516A] bg-[#172638] p-6">

            <div className="flex justify-between items-center">

              <h2 className="text-xl font-semibold">
                Recent Activity
              </h2>

              <RefreshCw
                size={17}
                className="text-slate-400"
              />

            </div>

            <div className="relative mt-7">

              <div className="absolute left-[7px] top-2 bottom-0 w-px bg-[#334155]" />

              <div className="space-y-8">

                {activities.map((activity, index) => (
                  <div
                    key={activity.title}
                    className="relative pl-6"
                  >

                    <div
                      className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                        index === 0
                          ? "border-violet-300 bg-violet-300"
                          : "border-slate-600 bg-[#172638]"
                      }`}
                    />

                    <h3 className="font-medium">
                      {activity.title}
                    </h3>

                    <p className="text-sm text-slate-300 font-mono mt-1">
                      {activity.text}
                    </p>

                    <p className="text-xs text-slate-500 font-mono mt-1">
                      {activity.time}
                    </p>

                  </div>
                ))}

              </div>

            </div>

            <button className="w-full mt-8 pt-5 border-t border-[#334155] text-sm font-mono text-violet-300">
              View Full Audit Log →
            </button>

          </section>

        </div>

      </div>

    </div>
  );
}

function RoleBar({ name, count, width }) {
  return (
    <div className="mt-6">

      <div className="flex justify-between text-sm">
        <span>{name}</span>
        <span>{count}</span>
      </div>

      <div className="h-1.5 bg-[#061423] rounded-full mt-2">

        <div
          className="h-full bg-violet-300 rounded-full"
          style={{ width }}
        />

      </div>

    </div>
  );
}