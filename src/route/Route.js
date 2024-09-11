import { createBrowserRouter } from "react-router-dom";
import {
  HomePage,
  SearchResultPage,
  MarketPlacePage,
  CourseDetailPage,
  CartPage,
  CourseVideoPage,
  GuestProfilePage,
  InstructorProfilePage,
  LoginPage,
  MyLearningPage,
  PersonalInformationPage,
  ProductDetailPage,
  SignupPage,
  WishlistPage,
  AgAiPage,
  RootLayout,
  PaymentPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  VerificationPage,
} from "./index";
import AuthRootLayout from "./AuthRoot";

export const router = createBrowserRouter([
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
      { path: "guest-profile", element: <GuestProfilePage /> },
      { path: "instructor-profile", element: <InstructorProfilePage /> },
      { path: "courses/:coursesId", element: <CourseDetailPage /> },
      { path: "marketplace", element: <MarketPlacePage /> },
      { path: "marketplace/:productId", element: <ProductDetailPage /> },
    ],
  },
  {
    path: "courses/:coursesId/watch/:videoId",
    element: <CourseVideoPage />,
  },
  { path: "payment", element: <PaymentPage /> },
  { path: "login", element: <LoginPage /> },
  {
    path: "auth/", // Authentication routes layout
    element: <AuthRootLayout />,
    children: [
      { path: "signup", element: <SignupPage /> },
      { path: "info", element: <PersonalInformationPage /> },
      { path: "verification", element: <VerificationPage /> },
    ],
  },
  { path: "info", element: <PersonalInformationPage /> },
  { path: "forgot-password", element: <ForgotPasswordPage /> },
  { path: "reset-password", element: <ResetPasswordPage /> },
]);
