import { createBrowserRouter } from 'react-router-dom';
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
  LoginPromptComponent,
  VerificationPage,
  SuccessPayment,
  FailPayment,
} from './index';

import ProtectedRoute from './ProtectedRoute';

import AuthRootLayout from './AuthRoot';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,

    children: [
      { index: true, element: <HomePage /> },
      { path: 'search', element: <SearchResultPage /> },
      {
        path: 'mylearning',
        element: <ProtectedRoute pageName="course" />,
        children: [{ index: true, element: <MyLearningPage /> }],
      },
      { path: 'agai', element: <AgAiPage /> },
      {
        path: 'wishlist',
        element: <ProtectedRoute pageName="wishlist" />,
        children: [{ index: true, element: <WishlistPage /> }],
      },
      { path: 'cart', element: <CartPage /> },
      { path: 'mylearning', element: <MyLearningPage /> },
      { path: 'agai', element: <AgAiPage /> },
      { path: 'wishlist', element: <WishlistPage /> },
      { path: 'guest-profile', element: <GuestProfilePage /> },
      { path: 'instructor-profile/:id', element: <InstructorProfilePage /> },
      { path: 'courses/:coursesId', element: <CourseDetailPage /> },
      { path: 'marketplace', element: <MarketPlacePage /> },
      { path: 'marketplace/:productId', element: <ProductDetailPage /> },
      { path: 'not-login', element: <LoginPromptComponent /> },
      { path: '*', element: <ErrorPage /> },
    ],
  },
  {
    path: 'courses/:coursesId/watch/:videoId',
    element: <CourseVideoPage />,
  },
  {
    path: 'success-payment',
    element: <SuccessPayment />,
  },
  {
    path: 'fail-payment',
    element: <FailPayment />,
  },
  {
    path: 'auth/',
    element: <AuthRootLayout />,
    children: [
      { path: 'signup', element: <SignupPage /> },
      { path: 'signup/info', element: <PersonalInformationPage /> },
      { path: 'signup/verification', element: <VerificationPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'forgot-password', element: <ForgotPasswordPage /> },
      { path: 'reset-password/:resetToken', element: <ResetPasswordPage /> },
    ],
  },
]);
