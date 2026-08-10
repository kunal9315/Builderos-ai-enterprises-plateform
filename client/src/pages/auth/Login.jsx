import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useLoginMutation } from "../../features/auth/authApi";
import { setCredentials } from "../../features/auth/authSlice";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await login(data).unwrap();

      dispatch(setCredentials(res.data.user));

      toast.success("Login Successful");

      if (res.data.user.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      toast.error(err?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="w-full max-w-md">
      <h2 className="text-4xl font-bold text-white">
        Welcome Back
      </h2>

      <p className="text-slate-400 mt-2">
        Sign in to continue to BuilderOS
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5 mt-10"
      >
        <div>
          <label className="text-sm text-slate-400">
            Email
          </label>

          <input
            {...register("email")}
            type="email"
            placeholder="Enter your email"
            className="mt-2 w-full rounded-xl bg-[#111827] border border-slate-700 px-4 py-3 text-white outline-none focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="text-sm text-slate-400">
            Password
          </label>

          <input
            {...register("password")}
            type="password"
            placeholder="Enter your password"
            className="mt-2 w-full rounded-xl bg-[#111827] border border-slate-700 px-4 py-3 text-white outline-none focus:border-indigo-500"
          />
        </div>

        <button
          disabled={isLoading}
          className="w-full rounded-xl bg-indigo-600 py-3 font-semibold hover:bg-indigo-500 transition disabled:opacity-60"
        >
          {isLoading ? "Signing In..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}