import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Error from "../assets/Authentication/error.svg";

/**
 * Renders an error page with an error image, message, and buttons to go back to the homepage or refresh the page.
 *
 * @return {JSX.Element} The JSX element representing the error page.
 */

export default function ErrorPage() {
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
            Oops ! Page not found.
          </Typography>
          <Typography variant="bsr" gutterBottom>
            We are really sorry for the inconvenience
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
              Back to home
            </Button>
            <Button
              variant="contained"
              onClick={() => window.location.reload()}
              sx={{
                typography: { xs: "bsr", sm: "bmdr" },
                bgcolor: "primary.main",
              }}
            >
              Refresh
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}
