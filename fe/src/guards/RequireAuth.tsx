import { useAppSelector } from "../services/redux/store";
import { Navigate, Outlet } from "react-router-dom";

const Authentication = () => {
  const { user } = useAppSelector((state) => state.global);
  if (!user.isAuthenticated) return <Navigate to="/" />;
  return <Outlet />;
};

export default Authentication;
