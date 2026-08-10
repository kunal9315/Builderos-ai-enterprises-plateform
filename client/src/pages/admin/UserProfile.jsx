import {
  Bell,
  CircleUserRound,
  Edit3,
  KeyRound,
  LockKeyhole,
  Shield,
  UserRound,
  Eye,
  CheckCircle2,
  Clock3,
  Monitor,
} from "lucide-react";

export default function UserProfile() {
  return (
    <div className="w-full min-h-screen text-slate-200">

      {/* Page Header */}
      <div className="border-b border-slate-700 pb-6 mb-7">

        <div className="flex items-center gap-3 text-sm font-mono text-violet-300 mb-5">
          <span>Settings</span>
          <span className="text-slate-500">›</span>
          <span>User Profile</span>
        </div>

        <h1 className="text-4xl font-bold text-white">
          Account Management
        </h1>

        <p className="text-slate-300 mt-2">
          Manage your personal profile, security preferences, and API access.
        </p>

      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-10">

        {/* ================= PROFILE ================= */}
        <section className="border-t border-slate-600 pt-6">

          <div className="flex items-center justify-between">

            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <UserRound className="text-violet-300" size={25} />
              Profile Identity
            </h2>

            <button className="text-violet-300 hover:text-violet-200 font-semibold">
              Edit
            </button>

          </div>

          {/* Avatar */}
          <div className="flex justify-center mt-5 mb-8">

            <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-r from-violet-400 via-indigo-500 to-violet-300">

              <div className="w-full h-full rounded-full bg-[#071525] flex items-center justify-center">

                <CircleUserRound
                  size={75}
                  strokeWidth={1.2}
                  className="text-violet-300"
                />

              </div>

            </div>

          </div>

          {/* Name */}
          <div className="text-center mb-7">

            <h3 className="text-xl font-semibold text-white">
              Admin
            </h3>

            <p className="text-slate-400 font-mono text-sm">
              Enterprise Administrator
            </p>

          </div>

          {/* Email */}
          <div className="mb-5">

            <label className="block text-xs font-mono tracking-widest mb-2">
              EMAIL ADDRESS
            </label>

            <div className="flex items-center justify-between h-11 rounded-md border border-slate-600 bg-[#071525] px-3">

              <span className="text-slate-200">
                admin@builderos.ai
              </span>

              <CheckCircle2
                size={18}
                className="text-violet-300"
              />

            </div>

          </div>

          {/* Timezone */}
          <div>

            <label className="block text-xs font-mono tracking-widest mb-2">
              TIMEZONE
            </label>

            <select className="w-full h-11 rounded-md border border-slate-600 bg-[#071525] px-3 text-slate-200 outline-none focus:border-violet-400">

              <option>
                Pacific Time (PT) - Los Angeles
              </option>

              <option>
                Eastern Time (ET) - New York
              </option>

              <option>
                UTC
              </option>

              <option>
                India Standard Time (IST)
              </option>

            </select>

          </div>

        </section>


        {/* ================= SECURITY ================= */}
        <section className="border-t border-slate-600 pt-6">

          <h2 className="text-2xl font-semibold flex items-center gap-3 mb-5">
            <Shield
              size={25}
              className="text-violet-300"
            />
            Security Settings
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Password */}
            <div className="rounded-lg border border-slate-600 bg-[#122236] p-5">

              <div className="flex items-center justify-between">

                <h3 className="font-semibold">
                  Password
                </h3>

                <LockKeyhole
                  size={18}
                  className="text-violet-300"
                />

              </div>

              <p className="text-slate-400 text-sm mt-3 leading-6">
                Last changed 45 days ago. We recommend updating it regularly.
              </p>

              <button className="w-full mt-4 h-9 rounded-md border border-slate-600 hover:bg-slate-800 font-mono text-sm">
                Change Password
              </button>

            </div>


            {/* 2FA */}
            <div className="rounded-lg border border-slate-600 bg-[#122236] p-5">

              <div className="flex items-center justify-between">

                <h3 className="font-semibold">
                  Two-Factor Auth (2FA)
                </h3>

                <span className="text-xs px-2 py-1 rounded border border-violet-400 text-violet-300 bg-violet-500/10">
                  ACTIVE
                </span>

              </div>

              <p className="text-slate-400 text-sm mt-3 leading-6">
                Authenticator app configured. Backup codes generated.
              </p>

              <button className="w-full mt-4 h-9 rounded-md border border-slate-600 hover:bg-slate-800 font-mono text-sm">
                Manage 2FA
              </button>

            </div>

          </div>

        </section>


        {/* ================= API KEYS ================= */}
        <section className="border-t border-slate-600 pt-6">

          <div className="flex items-center justify-between mb-5">

            <h2 className="text-2xl font-semibold flex items-center gap-3">

              <KeyRound
                size={24}
                className="text-violet-300"
              />

              Personal API Keys

            </h2>

            <button className="px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 font-mono text-sm">
              + Create Key
            </button>

          </div>


          {/* Table Header */}
          <div className="grid grid-cols-4 gap-4 border-b border-slate-600 pb-3 text-xs font-mono text-slate-400">

            <span>NAME</span>
            <span>KEY PREFIX</span>
            <span>CREATED</span>
            <span>LAST USED</span>

          </div>


          {/* Key 1 */}
          <div className="grid grid-cols-4 gap-4 items-center py-5 border-b border-slate-700">

            <div className="flex items-center gap-2">

              <span className="w-2.5 h-2.5 rounded-full bg-violet-300" />

              <span className="font-medium">
                CLI Access Token
              </span>

            </div>

            <span className="font-mono text-sm text-slate-400">
              bld_pk_8x...
            </span>

            <span className="text-sm">
              Oct 12, 2023
            </span>

            <span className="text-sm">
              2 hours ago
            </span>

          </div>


          {/* Key 2 */}
          <div className="grid grid-cols-4 gap-4 items-center py-5">

            <div className="flex items-center gap-2">

              <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />

              <span className="font-medium">
                Zapier Integration
              </span>

            </div>

            <span className="font-mono text-sm text-slate-400">
              bld_pk_2...
            </span>

            <span className="text-sm">
              Sep 05, 2023
            </span>

            <span className="text-sm">
              Never
            </span>

          </div>

        </section>


        {/* ================= NOTIFICATIONS ================= */}
        <section className="border-t border-slate-600 pt-6">

          <h2 className="text-2xl font-semibold flex items-center gap-3 mb-5">

            <Bell
              size={25}
              className="text-violet-300"
            />

            Notifications

          </h2>


          <NotificationItem
            title="Deployment Alerts"
            description="Receive emails when a model deployment succeeds or fails."
            enabled={true}
          />

          <NotificationItem
            title="Billing Notifications"
            description="Invoices, usage threshold alerts, and payment issues."
            enabled={true}
          />

          <NotificationItem
            title="Marketing & News"
            description="Product updates, newsletters, and beta invitations."
            enabled={false}
          />

        </section>


        {/* ================= SECURITY ACTIVITY ================= */}
        <section className="border-t border-slate-600 pt-6">

          <div className="flex items-center justify-between mb-6">

            <h2 className="text-2xl font-semibold flex items-center gap-3">

              <Eye
                size={25}
                className="text-violet-300"
              />

              Security Activity Log

            </h2>

            <button className="text-xs font-mono text-violet-300 hover:text-violet-200">
              VIEW ALL
            </button>

          </div>


          <div className="relative">

            {/* Timeline */}
            <div className="absolute left-3 top-2 bottom-2 w-px bg-slate-600" />


            <Activity
              icon={<Monitor size={15} />}
              title="New Login (Mac OS, Chrome)"
              description="IP: 192.168.1.42 • San Francisco, CA"
              time="Just now"
              active
            />

            <Activity
              icon={<KeyRound size={15} />}
              title="API Key Created"
              description='Key named "CLI Access Token" was generated.'
              time="2 hours ago"
            />

            <Activity
              icon={<Shield size={15} />}
              title="2FA Configured"
              description="Authenticator app successfully linked to account."
              time="Oct 10, 2023"
            />

          </div>

        </section>

      </div>

    </div>
  );
}


/* ================= NOTIFICATION ================= */

function NotificationItem({
  title,
  description,
  enabled,
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-lg border border-slate-600 bg-[#122236] p-4 mb-4">

      <div>

        <h3 className="font-semibold">
          {title}
        </h3>

        <p className="text-sm text-slate-400 mt-1">
          {description}
        </p>

      </div>

      <div
        className={`w-10 h-6 rounded-full p-1 flex items-center ${
          enabled
            ? "bg-indigo-600 justify-end"
            : "bg-slate-700 justify-start"
        }`}
      >

        <div className="w-4 h-4 bg-white rounded-full" />

      </div>

    </div>
  );
}


/* ================= ACTIVITY ================= */

function Activity({
  icon,
  title,
  description,
  time,
  active = false,
}) {
  return (
    <div className="relative pl-10 pb-7">

      <div
        className={`absolute left-0 top-0 w-7 h-7 rounded-full border flex items-center justify-center ${
          active
            ? "bg-violet-500/20 border-violet-300 text-violet-300"
            : "bg-[#122236] border-slate-600 text-slate-400"
        }`}
      >
        {icon}
      </div>

      <div className="flex justify-between gap-4">

        <div>

          <h3 className="font-semibold">
            {title}
          </h3>

          <p className="text-sm text-slate-400 mt-1">
            {description}
          </p>

        </div>

        <span className="text-xs text-slate-400 whitespace-nowrap">
          {time}
        </span>

      </div>

    </div>
  );
}