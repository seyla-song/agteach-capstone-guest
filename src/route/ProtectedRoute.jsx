import { Outlet } from "react-router-dom";
import NotLoginStateComponent from "../components/LoginPromptComponent";
import { useSelector } from "react-redux";

/**
 * A protected route component that conditionally renders an Outlet or a NotLoginStateComponent based on the user's authentication status.
 *
 * @param {string} pageName - The name of the page being protected.
 * @return {JSX.Element} The rendered Outlet or NotLoginStateComponent.
 */

export default function ProtectedRoute({ pageName }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <NotLoginStateComponent pageName={pageName} />
  );
}
