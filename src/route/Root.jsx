import { Outlet } from "react-router-dom";
import Navigation from "../components/Header";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayout;
