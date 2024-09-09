import { Outlet } from "react-router-dom";
import NotLoginStateComponent from "../components/LoginPromptComponent";

export default function ProtectedRoute({ pageName }) {
  const isAuthenticated = true;

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <NotLoginStateComponent pageName={pageName} />
  );
}
