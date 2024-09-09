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
  ErrorPage,
  LoginPromptComponent,
} from "./index";
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,

    children: [
      { index: true, element: <HomePage /> },
      { path: "search", element: <SearchResultPage /> },
      {
        path: 'cart',
        element: <ProtectedRoute pageName="cart" />, 
        children: [{ index: true, element: <CartPage /> }],
      },
      {
        path: 'mylearning',
        element: <ProtectedRoute pageName="course" />, 
        children: [{ index: true, element: <MyLearningPage /> }],
      },
      { path: "agai", element: <AgAiPage /> },
      {
        path: 'wishlist',
        element: <ProtectedRoute pageName="wishlist" />, 
        children: [{ index: true, element: <WishlistPage /> }],
      },
      { path: "guest-profile", element: <GuestProfilePage /> },
      { path: "instructor-profile", element: <InstructorProfilePage /> },
      { path: "courses/:coursesId", element: <CourseDetailPage /> },
      { path: "marketplace", element: <MarketPlacePage /> },
      { path: "marketplace/:productId", element: <ProductDetailPage /> },
      { path: "not-login", element: <LoginPromptComponent /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
  {
    path: "courses/:coursesId/watch/:videoId",
    element: <CourseVideoPage />,
  },
  { path: "payment", element: <PaymentPage /> },
  { path: "login", element: <LoginPage /> },
  { path: "signup", element: <SignupPage /> },
  { path: "info", element: <PersonalInformationPage /> },
  { path: "forgot-password", element: <ForgotPasswordPage /> },
  { path: "reset-password", element: <ResetPasswordPage /> },
]);
