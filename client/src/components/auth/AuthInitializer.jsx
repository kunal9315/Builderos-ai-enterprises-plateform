import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useGetMeQuery } from "../../features/auth/authApi";
import { setCredentials } from "../../features/auth/authSlice";

export default function AuthInitializer({ children }) {
  const dispatch = useDispatch();

  const { data, isLoading } = useGetMeQuery();

  useEffect(() => {
    if (data?.data) {
      dispatch(setCredentials(data.data));
    }
  }, [data, dispatch]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0B1220] flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return children;
}