import { Outlet } from "react-router-dom";
import NotLoginStateComponent from "../components/LoginPromptComponent";


/**
 * A protected route component that conditionally renders an Outlet or a NotLoginStateComponent based on the user's authentication status.
 *
 * @param {string} pageName - The name of the page being protected.
 * @return {JSX.Element} The rendered Outlet or NotLoginStateComponent.
 */

export default function ProtectedRoute({ pageName }) {
  const isAuthenticated = false;

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <NotLoginStateComponent pageName={pageName} />
  );
}
