import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const token = localStorage.getItem("adminToken");

  return token ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default PrivateRoutes;
