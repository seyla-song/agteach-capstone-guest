import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './route/Route';
import { ThemeProvider } from '@emotion/react';
import theme from './theme/theme';
import SignUp from './pages/LoginSignup/SignUp';
import Login from './pages/LoginSignup/LogIn';
import PersonalInfoForm from './pages/LoginSignup/PersonalInformation';
import ForgotPassword from './pages/LoginSignup/ForgotPassword';
import ResetPassword from './pages/LoginSignup/ResetPassword';


function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <RouterProvider router={router} /> */}
      {/* <SignUp /> */}
      {/* <Login /> */}
      {/* <PersonalInfoForm /> */}
      <ForgotPassword />
      <ResetPassword/>


    </ThemeProvider>
  );
}

export default App;
