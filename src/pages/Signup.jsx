import React from "react";
import { Button, Typography, Box, Stack, Grid, Container } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import FormInput from "../components/LoginSignup/FormInput";
import LogoLink from "../components/LoginSignup/LogoLink";
import { useSignupMutation, useGetCardQuery, useUpdateCardMutation } from "../services/api/authSlice";
import dayjs from "dayjs";

const SignupPage = () => {
  const navigate = useNavigate();
  const [signup, { isLoading }] = useSignupMutation();

  
  const [showPassword, setShowPassword] = React.useState(false);
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      dateOfBirth: null,
    },
  });

  const handleShowPassword = () => setShowPassword((prev) => !prev);

  const submitHandler = async (data) => {
    try {
      data.dateOfBirth = dayjs(data.dateOfBirth).format("YYYY/MM/DD");
      await signup(data).unwrap();
      console.log("Signup successful", data);
      navigate("info");
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <Container maxWidth="md">
      <Stack
        paddingTop={{ xs: 8, md: 10 }}
        alignItems="center"
        justifyContent="start"
        textAlign="center"
        spacing={4}
      >
        <LogoLink />
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={8} md={6}>
            <Stack spacing={2}>
              <Typography variant="h2">Sign Up</Typography>
              <Typography variant="bmdr">
                Sign up to enjoy AgTeach features
              </Typography>
              <Box width="100%">
                <form onSubmit={handleSubmit(submitHandler)}>
                  <Stack spacing={2}>
                    <FormInput
                      label="Name"
                      {...register("name", {
                        required: "Please enter your name",
                      })}
                      error={!!errors.name}
                      helperText={errors.name?.message}
                    />
                    <Controller
                      name="dateOfBirth"
                      control={control}
                      rules={{ required: "Please select your date of birth" }} // Add validation rule
                      render={({ field }) => (
                        <FormInput
                          label="Date of Birth"
                          isDate={true}
                          dateValue={field.value ? dayjs(field.value) : null}
                          onDateChange={(newDate) => field.onChange(newDate)}
                          error={!!errors.dateOfBirth} // Set error state
                          helperText={errors.dateOfBirth?.message} // Set helper text
                        />
                      )}
                    />
                    <FormInput
                      label="Email"
                      {...register("email", {
                        required: "Please enter your email",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      error={!!errors.email}
                      helperText={errors.email?.message}
                    />
                    <FormInput
                      label="Password"
                      type="password"
                      {...register("password", {
                        required: "Please enter your password",
                        minLength: {
                          value: 8,
                          message: "Password must be at least 8 characters",
                        },
                        maxLength: {
                          value: 20,
                          message: "Password must be at most 20 characters",
                        },
                        pattern: {
                          value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/,
                          message:
                            "Password must contain at least one letter and one number",
                        },
                      })}
                      error={!!errors.password}
                      helperText={errors.password?.message}
                      showPassword={showPassword}
                      handleClickShowPassword={handleShowPassword}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      sx={{ padding: "12px" }}
                      disabled={isLoading}
                    >
                      {isLoading ? "Signing Up..." : "Sign Up"}
                    </Button>
                  </Stack>
                  <Typography py={2}>
                    Already have an account? <Link to="/login">Login</Link>
                  </Typography>
                </form>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};

export default SignupPage;
