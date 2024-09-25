import { Outlet } from "react-router-dom";
import NotLoginStateComponent from "../components/LoginPromptComponent";
import { useDispatch, useSelector } from "react-redux";
import { checkLoginStatus } from "../features/auth/authSlice";
import { useIsLoginQuery } from "../services/api/authApi";

/**
 * A protected route component that conditionally renders an Outlet or a NotLoginStateComponent based on the user's authentication status.
 *
 * @param {string} pageName - The name of the page being protected.
 * @return {JSX.Element} The rendered Outlet or NotLoginStateComponent.
 */

export default function ProtectedRoute({ pageName }) {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <NotLoginStateComponent pageName={pageName} />
  );
}
