import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useSignupMutation } from "../services/api/authApi";
import { useDispatch } from "react-redux";
import { setEmail } from "../features/auth/userSlice";

import { Button, Typography, Box, Stack, Grid, Container } from "@mui/material";

import dayjs from "dayjs";

import { CustomAlert, LogoLink, FormInput } from "../components/index";
import { differenceInYears } from "date-fns";

const SignupPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signup, { isLoading }] = useSignupMutation();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [showPassword, setShowPassword] = useState(false);
  const {
    control,
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
      dateOfBirth: null,
    },
  });

  const handleShowPassword = () => setShowPassword((prev) => !prev);

  const validatePassword = (value) => {
    if (!/[a-z]/.test(value))
      return "Password must contain at least one lowercase letter.";
    if (!/[A-Z]/.test(value))
      return "Password must contain at least one uppercase letter.";
    if (!/\d/.test(value)) return "Password must contain at least one number.";
    if (!/[@$!%*?&]/.test(value))
      return "Password must contain at least one special character.";
    return true;
  };

  const submitHandler = async (data) => {
    try {
      data.dateOfBirth = dayjs(data.dateOfBirth).format("YYYY/MM/DD");
      const { email, dateOfBirth } = data;
      const response = await signup(data).unwrap();
      if (response.status === "success") {
        setSnackbarSeverity("success");
        setSnackbarMessage(response.message);
        localStorage.setItem("signupStage", "additionalInfo");
      }
      localStorage.setItem('dob', dateOfBirth);
      dispatch(setEmail(email));
      navigate("/auth/signup/info");
    } catch (error) {
      setSnackbarSeverity("error");
      setSnackbarMessage(error.data.message);
      setSnackbarOpen(true);
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
                <CustomAlert
                  label={snackbarMessage}
                  open={snackbarOpen}
                  onClose={() => setSnackbarOpen(false)}
                  severity={snackbarSeverity}
                />
                <form onSubmit={handleSubmit(submitHandler)}>
                  <Stack spacing={2}>
                    <FormInput
                      label="Username"
                      {...register("username", {
                        required: "Please enter your name",
                        minLength: {
                          value: 3,
                          message: "Username must be at least 3 characters",
                        },
                        maxLength: {
                          value: 20,
                          message: "Username must be at most 20 characters",
                        },
                        pattern: {
                          value: /^[a-zA-Z][a-zA-Z0-9]*$/,
                          message: "Username must at least start with a letter and contain only letters and numbers",
                        },
                      })}
                      error={!!errors.username}
                      helperText={errors.username?.message}
                    />
                    <Controller
                      name="dateOfBirth"
                      control={control}
                      rules={{
                        required: "Please provide your date of birth",
                        validate: (value) => {
                          const currentDate = new Date();
                          const age = differenceInYears(
                            currentDate,
                            new Date(value)
                          );

                          return (
                            age >= 15 || "You must be at least 15 years old."
                          );
                        },
                      }}
                      render={({ field }) => (
                        <FormInput
                          label="Date of Birth"
                          isDate={true}
                          dateValue={field.value}
                          onDateChange={(newDate) => field.onChange(newDate)}
                          error={!!errors.dateOfBirth}
                          helperText={errors.dateOfBirth?.message}
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
                      showPassword={showPassword}
                      handleClickShowPassword={handleShowPassword}
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
                        validate: validatePassword,
                      })}
                      error={!!errors.password}
                      helperText={errors.password?.message}
                    />
                    <FormInput
                      label="Confirm Password"
                      type="password"
                      showPassword={showPassword}
                      handleClickShowPassword={handleShowPassword}
                      {...register("passwordConfirm", {
                        required: "Please confirm your password",
                        validate: (value) => {
                          if (value !== watch("password")) {
                            return "Passwords do not match";
                          }
                        },
                      })}
                      error={!!errors.passwordConfirm}
                      helperText={errors.passwordConfirm?.message}
                    />
                    <Typography
                      color="dark.300"
                      fontSize="12px"
                      marginTop={"10px"}
                      textAlign={"left"}
                    >
                      Password must contains at least one lowercase letter, one
                      uppercase letter, one number, and one special character.
                    </Typography>
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
                    Already have an account? <Link to="/auth/login">Login</Link>
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
