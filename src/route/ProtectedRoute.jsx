import { Outlet } from "react-router-dom";
import NotLoginStateComponent from "../components/LoginPromptComponent";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useIsLoginQuery } from "../services/api/authSlice";
import { checkLoginStatus } from "../store/slices/authSlice";

/**
 * A protected route component that conditionally renders an Outlet or a NotLoginStateComponent based on the user's authentication status.
 *
 * @param {string} pageName - The name of the page being protected.
 * @return {JSX.Element} The rendered Outlet or NotLoginStateComponent.
 */

export default function ProtectedRoute({ pageName }) {
  const dispatch = useDispatch();
  const { isSuccess } = useIsLoginQuery();
  console.log(isSuccess);
  
  dispatch(checkLoginStatus(isSuccess));
  const { isAuthenticated } = useSelector((state) => state.auth);

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <NotLoginStateComponent pageName={pageName} />
  );
}
