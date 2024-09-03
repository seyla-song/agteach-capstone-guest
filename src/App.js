import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./route/Route";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/theme";

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

