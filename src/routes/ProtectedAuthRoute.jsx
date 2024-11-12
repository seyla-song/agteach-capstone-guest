import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedAuthRoute({ children }) {
  const { isAuthenticated, isVerified } = useSelector((state) => state.auth);
  const { pathname } = useLocation();
  const signupStage = localStorage.getItem("signupStage");

  // Handle intermediate signup stages for authenticated users
  if (isAuthenticated) {
    if (signupStage === "additionalInfo" && pathname === "/auth/signup/info") {
      return children;
    }
    if (
      !isVerified &&
      signupStage === "verification" &&
      pathname === "/auth/signup/verification"
    ) {
      return children;
    }
  }

  // Allow unauthenticated users with no signupStage to access signup/login pages
  if (!isAuthenticated && signupStage === null) {
    return children;
  }

  // Redirect verified users trying to access verification page
  if (
    isVerified &&
    (signupStage === "complete" ||
      signupStage === "additionalInfo" ||
      signupStage === null) &&
    pathname === "/auth/signup/verification"
  ) {
    return <Navigate to="/" replace />;
  }

  // Redirect cases for authenticated users
  if (
    isAuthenticated &&
    (signupStage === "complete" ||
      signupStage === null ||
      signupStage === "verification") &&
    pathname.includes("/auth")
  ) {
    return <Navigate to="/" replace />;
  }

  // Default case: Allow access
  return children;
}
