import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import SearchResultPage from "./pages/SearchResult";
import MarketPlacePage from "./pages/MarketPlace";
import CourseDetailPage from "./pages/CourseDetail";
import CartPage from "./pages/Cart";
import CourseVideoPage from "./pages/CourseVideo";
import GuestProfilePage from "./pages/GuestProfile";
import InstructorProfilePage from "./pages/InstructorProfile";
import LoginPage from "./pages/LogIn";
import MyLearningPage from "./pages/MyLearning";
import PersonalInformationPage from "./pages/PersonalInformation";
import ProductDetailPage from "./pages/ProductDetail";
import SignUpPage from "./pages/SignUp";
import WishlistPage from "./pages/Wishlist";
import AgAiPage from "./pages/AgAI";
import RootLayout from "./pages/Root";
import ProductRootLayout from "./pages/ProductRoot";
import PaymentPage from "./pages/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "search", element: <SearchResultPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "mylearning", element: <MyLearningPage /> },
      { path: "agai", element: <AgAiPage /> },
      { path: "wishlist", element: <WishlistPage /> },
      { path: "guest", element: <GuestProfilePage /> },
      { path: "instructor", element: <InstructorProfilePage /> },
      {
        path: "courses/:courseId",
        element: <CourseDetailPage />,
        children: [{ path: "watch/:videoId", element: <CourseVideoPage /> }],
      },
      {
        path: "/",
        element: <ProductRootLayout />,
        children: [
          { path: "marketplace", element: <MarketPlacePage /> },
          { path: "marketplace/:productId", element: <ProductDetailPage /> },
        ],
      },
    ],
  },
  { path: "payment", element: <PaymentPage /> },
  { path: "login", element: <LoginPage /> },
  { path: "signup", element: <SignUpPage /> },
  { path: "info", element: <PersonalInformationPage /> },
]);

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <RouterProvider router={router} />
  );
}

export default App;
