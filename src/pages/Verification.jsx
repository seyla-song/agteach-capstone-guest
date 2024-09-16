import { Box, Typography, Button, Stack, Grid2 } from "@mui/material";
import FormInput from "../components/LoginSignup/FormInput";
import { useForm } from "react-hook-form";
import { useVerifyEmailMutation } from "../services/api/verifySlice";
import LogoLink from "../components/LoginSignup/LogoLink";
import { ArrowBack } from "@mui/icons-material";

export default function VerificationPage() {
  const { register, handleSubmit } = useForm();
  const [verifyEmail, { isLoading, isSuccess, isError, error }] =
    useVerifyEmailMutation();

  const onSubmit = async (data) => {
    try {
      // Call the mutation to send the code and email to the server
      const response = await verifyEmail({
        code: data.code,
        email: data.email,
      }).unwrap();
      console.log("Verification successful", response);
    } catch (err) {
      console.error("Verification failed", err);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: { sm: "80vh", xs: "100vh" },
        paddingX: 5,
      }}
    >
      <LogoLink />
      <Grid2 container direction={"row"} alignItems={"center"} gap={2}>
        <Grid2 item sx={{ width: { xs: "100%", sm: "55%" } }}>
          <Stack objectFit={"contain"}>
            <Box
              height={{ sm: "430px", xs: "246px" }}
              objectFit={"contain"}
              component={"iframe"}
              border={"none"}
              src="https://lottie.host/embed/7e3e9b9a-bfc5-43b9-83b8-f9865bff7bf6/OkwRtcwUA1.json"
            ></Box>
          </Stack>
          <Box textAlign={"center"}>
            <Typography sx={{ typography: { xs: "h4", sm: "blgsm" } }}>
              Check your email for verification code .
            </Typography>
            <Typography variant="bsr" sx={{ color: "dark.300" }}>
              Please enter code number that you receive in the email.
            </Typography>
          </Box>
        </Grid2>
        <Grid2 item gap={2} sx={{ width: { xs: "100%", sm: "40%" } }}>
          <Box width={"100%"}>
            <Typography pb={2} variant="blgsm">
              Enter verification code
            </Typography>
            <Box component="form" onSubmit={handleSubmit(onSubmit)}>
              <FormInput
                mt={2}
                label="Code"
                type="text"
                {...register("code")}
                required
              />
              <Stack gap={1} pt={1}>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  disabled={isLoading}
                >
                  Submit
                </Button>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  disabled={isLoading}
                  color="secondary"
                >
                  Resend Code
                </Button>
                <Button
                  fullWidth
                  type="submit"
                  variant="outlined"
                  disabled={isLoading}
                  startIcon={<ArrowBack />}
                >
                  Go Back
                </Button>
              </Stack>
            </Box>
          </Box>
        </Grid2>
        {isSuccess && (
          <Typography color="success.main">Verification successful!</Typography>
        )}
        {isError && (
          <Typography color="error.main">
            {error?.data?.message || "Verification failed!"}
          </Typography>
        )}
      </Grid2>
    </Box>
  );
}
