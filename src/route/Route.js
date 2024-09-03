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
  SignUpPage,
  WishlistPage,
  AgAiPage,
  RootLayout,
  PaymentPage,
} from './index';

export const router = createBrowserRouter([
  {
    path: '/',
    // element: <RootLayout />,
    element: <AgAiPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'search', element: <SearchResultPage /> },
      { path: 'cart', element: <CartPage /> },
      { path: 'mylearning', element: <MyLearningPage /> },
      { path: 'agai', element: <AgAiPage /> },
      { path: 'wishlist', element: <WishlistPage /> },
      { path: 'guest-profile', element: <GuestProfilePage /> },
      { path: 'instructor-profile', element: <InstructorProfilePage /> },
      { path: 'courses/:coursesId', element: <CourseDetailPage /> },
      {
        path: 'courses/:coursesId/watch/:videoId',
        element: <CourseVideoPage />,
      },
      { path: 'marketplace', element: <MarketPlacePage /> },
      { path: 'marketplace/:productId', element: <ProductDetailPage /> },
    ],
  },
  { path: 'payment', element: <PaymentPage /> },
  { path: 'login', element: <LoginPage /> },
  { path: 'signup', element: <SignUpPage /> },
  { path: 'info', element: <PersonalInformationPage /> },
]);
