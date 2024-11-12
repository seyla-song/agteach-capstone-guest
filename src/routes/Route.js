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
  ForgotPasswordPage,
  ResetPasswordPage,
  ErrorPage,
  VerificationPage,
  SuccessPayment,
  FailPayment,
} from "./index";

import ProtectedRoute from "./ProtectedRoute";
import ProtectedAuthRoute from "./ProtectedAuthRoute";

import AuthRootLayout from "./AuthRoot";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,

    children: [
      { index: true, element: <HomePage /> },
      { path: "search", element: <SearchResultPage /> },
      { path: "agai", element: <AgAiPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "mylearning", element: <MyLearningPage /> },
      { path: "agai", element: <AgAiPage /> },
      { path: "wishlist", element: <WishlistPage /> },
      { path: "instructor-profile/:id", element: <InstructorProfilePage /> },
      { path: "courses/:coursesId", element: <CourseDetailPage /> },
      { path: "marketplace", element: <MarketPlacePage /> },
      { path: "marketplace/:productId", element: <ProductDetailPage /> },
      { path: "*", element: <ErrorPage /> },
      {
        path: "mylearning",
        element: <ProtectedRoute pageName="course" />,
        children: [{ index: true, element: <MyLearningPage /> }],
      },
      {
        path: "wishlist",
        element: <ProtectedRoute pageName="wishlist" />,
        children: [{ index: true, element: <WishlistPage /> }],
      },
      {
        path: "guest-profile",
        element: <ProtectedRoute pageName="profile" />,
        children: [{ index: true, element: <GuestProfilePage /> }],
      },
    ],
  },
  {
    path: "courses/:coursesId/watch/:videoId",
    element: <CourseVideoPage />,
  },
  {
    path: "success-payment",
    element: <SuccessPayment />,
  },
  {
    path: "fail-payment",
    element: <FailPayment />,
  },
  {
    path: "auth/",
    element: <AuthRootLayout />,
    children: [
      {
        path: "signup",
        element: (
          <ProtectedAuthRoute>
            <SignupPage />
          </ProtectedAuthRoute>
        ),
      },
      {
        path: "signup/info",
        element: (
          <ProtectedAuthRoute>
            <PersonalInformationPage />
          </ProtectedAuthRoute>
        ),
      },
      {
        path: "signup/verification",
        element: (
          <ProtectedAuthRoute>
            <VerificationPage />
          </ProtectedAuthRoute>
        ),
      },
      {
        path: "login",
        element: (
          <ProtectedAuthRoute>
            <LoginPage />
          </ProtectedAuthRoute>
        ),
      },
      { path: "forgot-password", element: <ForgotPasswordPage /> },
      { path: "reset-password/:resetToken", element: <ResetPasswordPage /> },
    ],
  },
]);
