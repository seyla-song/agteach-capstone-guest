import { Outlet } from "react-router-dom";
import Navigation from "../components/Header";

function RootLayout() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}

export default RootLayout;
