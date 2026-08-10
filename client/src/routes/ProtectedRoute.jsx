import { Navigate } from "react-router-dom";
import { useGetMeQuery } from "../features/auth/authApi";

export default function ProtectedRoute({ children, allowedRoles }) {
  const { data, isLoading, isError } = useGetMeQuery();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0B1220] flex items-center justify-center">
        <h1 className="text-white text-xl">Loading...</h1>
      </div>
    );
  }

  if (isError || !data?.data) {
    return <Navigate to="/login" replace />;
  }

  const user = data.data;

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/login" replace />;
  }

  return children;
}