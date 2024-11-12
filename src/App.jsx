import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Route";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/theme";
import { CssBaseline } from "@mui/material";
import { useDispatch } from "react-redux";
import { useIsLoginQuery } from "./services/api/authApi";
import { checkLoginStatus } from "./features/auth/authSlice";
import { useEffect, useState } from "react";
import { setEmail } from "./features/auth/userSlice";
import { ContentLoading } from "./components";

function App() {
  const dispatch = useDispatch();
  const { data, isLoading } = useIsLoginQuery();
  const [authLoaded, setAuthLoaded] = useState(false);

  useEffect(() => {
    if (data) {
      dispatch(
        checkLoginStatus({
          isAuthenticated: data?.IsAuthenticated || false,
          isVerified: data?.IsVerify || false,
        })
      );
      dispatch(setEmail(data?.email));
      setAuthLoaded(true);
    }
  }, [data, dispatch]);

  if (isLoading || !authLoaded) {
    return (
      <ContentLoading />
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
