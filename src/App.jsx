import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Route";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/theme";
import { CssBaseline } from "@mui/material";
import { useDispatch } from "react-redux";
import { useIsLoginQuery } from "./services/api/authApi";
import { checkLoginStatus } from "./features/auth/authSlice";
import { useEffect } from "react";
import { setEmail } from "./features/auth/userSlice";

function App() {
  const dispatch = useDispatch();
  const { data } = useIsLoginQuery();

  useEffect(() => {
    if (data) {
      dispatch(
        checkLoginStatus({
          isAuthenticated: data?.IsAuthenticated,
          isVerified: data?.IsVerify,
        })
      );
      dispatch(setEmail(data?.email));
    }
  }, [data, dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
