import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles'; // Import ThemeProvider
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import PersonalInfoForm from './pages/PersonalInformation';
import theme from './theme/theme'; // Import your custom theme

const App = () => {
  return (
    <ThemeProvider theme={theme}> 
      <CssBaseline /> 
      <Container component="main" maxWidth="xs">
        {/* <LogIn /> */}
        {/* <SignUp/> */}
        <PersonalInfoForm />
      </Container>
    </ThemeProvider>
  );
};

export default App;

