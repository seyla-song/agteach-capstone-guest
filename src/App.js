import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./route/Route";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/theme";
import { CssBaseline } from "@mui/material";
import { useDispatch } from "react-redux";
import { useIsLoginQuery } from "./services/api/authSlice";
import { checkLoginStatus } from "./store/slices/authSlice";

function App() {
  const dispatch = useDispatch();
  const { isSuccess } = useIsLoginQuery();
  dispatch(checkLoginStatus(isSuccess));
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
