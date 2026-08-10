import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-[#0B1220] flex">
      {/* Left Side */}
      <div className="hidden lg:flex w-1/2 relative items-center justify-center overflow-hidden border-r border-white/10">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-indigo-600 blur-[180px] opacity-20" />

        <div className="relative z-10 max-w-md">
          <h1 className="text-5xl font-bold text-white">
            BuilderOS
          </h1>

          <p className="mt-6 text-slate-400 text-lg">
            Enterprise AI Platform for building,
            deploying and managing intelligent
            applications.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6">
        <Outlet />
      </div>
    </div>
  );
}