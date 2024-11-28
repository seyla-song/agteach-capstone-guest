import { Container, Box, Stack, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Logout from "../assets/Authentication/logout.svg";
import { useTranslation } from "react-i18next";

/**
 * A React functional component that renders a login prompt with a message and a login button.
 *
 * @param {string} pageName - The name of the page to be displayed in the message.
 * @return {JSX.Element} The JSX element representing the login prompt.
 */

export default function LoginPromptComponent({ pageName }) {
  const [t] = useTranslation("global");
  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Box
        margin={"auto"}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Box
          component="img"
          src={Logout}
          alt="logout"
          sx={{ width: { xs: "200px", sm: "250px" } }}
        />
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 2,
            width: "350px",
          }}
          gap={1}
        >
          <Typography variant="blgsm">
            {t('loginPrompt.loginPromptTitle')}
          </Typography>
          <Typography variant="bsr">
            {t('loginPrompt.loginPromptDescription', {pageName})}
          </Typography>
          <Button
            component={RouterLink}
            to="/auth/login"
            variant="contained"
            sx={{
              typography: { xs: "bsr", sm: "bmdr" },
              bgcolor: "primary.main",
              width: "100px",
            }}
          >
            {t('loginPrompt.login')}
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
