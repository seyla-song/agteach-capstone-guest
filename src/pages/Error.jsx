import { Link as RouterLink } from "react-router-dom";

import { useTranslation } from "react-i18next";

import { Box, Button, Container, Stack, Typography } from "@mui/material";

import Error from "../assets/Authentication/error.svg";

/**
 * Renders an error page with an error image, message, and buttons to go back to the homepage or refresh the page.
 *
 * @return {JSX.Element} The JSX element representing the error page.
 */

export default function ErrorPage() {
  const [t] = useTranslation("global");

  return (
    <Container
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
          src={Error}
          alt="Error"
          sx={{ width: { xs: "200px", sm: "250px" } }}
        />
        <Stack sx={{ textAlign: "center" }} gap={1}>
          <Typography variant="blgsm" gutterBottom>
            {t("error.pageNotFoundTitle")}
          </Typography>
          <Typography variant="bsr" gutterBottom>
            {t("error.pageNotFoundP1")}
          </Typography>
          <Stack direction="row" gap={2} alignSelf="center">
            <Button
              component={RouterLink}
              to="/"
              variant="outlined"
              sx={{
                typography: { xs: "bsr", sm: "bmdr" },
                borderColor: "primary.main",
              }}
            >
              {t("error.backToHome")}
            </Button>
            <Button
              variant="contained"
              onClick={() => window.location.reload()}
              sx={{
                typography: { xs: "bsr", sm: "bmdr" },
                bgcolor: "primary.main",
              }}
            >
              {t("error.refresh")}
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}
