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
import { useTranslation } from "react-i18next";

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
  const [t] = useTranslation("global");

  const handleShowPassword = () => setShowPassword((prev) => !prev);

  const validatePassword = (value) => {
    if (!/[a-z]/.test(value))
      return t("signup.passwordMustContainLowercase");
    if (!/[A-Z]/.test(value))
      return t("signup.passwordMustContainUppercase");
    if (!/\d/.test(value)) return t("signup.passwordMustContainNumber");
    if (!/[@$!%*?&]/.test(value))
      return t("signup.passwordMustContainSpecialCharacter");
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
              <Typography variant="h2">{t("signup.signup")}</Typography>
              <Typography variant="bmdr">
              {t("signup.signUpToEnjoyAgteachFeatures")}
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
                      label={t("signup.username")}
                      {...register("username", {
                        required: t("signup.pleaseEnterYourName"),
                        minLength: {
                          value: 3,
                          message: t("signup.usernameMustBeAtLease3characters"),
                        },
                        maxLength: {
                          value: 20,
                          message: t("signup.usernameMustBeAtMost20characters"),
                        },
                        pattern: {
                          value: /^[a-zA-Z][a-zA-Z0-9]*$/,
                          message: t("signup.usernameMustStartWithALetter"),
                        },
                      })}
                      error={!!errors.username}
                      helperText={errors.username?.message}
                    />
                    <Controller
                      name="dateOfBirth"
                      control={control}
                      rules={{
                        required: t("signup.pleaseProvideYourDateOfBirth"),
                        validate: (value) => {
                          const currentDate = new Date();
                          const age = differenceInYears(
                            currentDate,
                            new Date(value)
                          );

                          return (
                            age >= 15 || t("signup.youMustBeAtLeast15YearsOld")
                          );
                        },
                      }}
                      render={({ field }) => (
                        <FormInput
                          label={t("signup.dateOfBirth")}
                          isDate={true}
                          dateValue={field.value}
                          onDateChange={(newDate) => field.onChange(newDate)}
                          error={!!errors.dateOfBirth}
                          helperText={errors.dateOfBirth?.message}
                        />
                      )}
                    />
                    <FormInput
                      label={t("signup.email")}
                      {...register("email", {
                        required: t("signup.pleaseEnterYourName"),
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: t("signup.invalidEmail"),
                        },
                      })}
                      error={!!errors.email}
                      helperText={errors.email?.message}
                    />
                    <FormInput
                      label={t("signup.password")}
                      type="password"
                      showPassword={showPassword}
                      handleClickShowPassword={handleShowPassword}
                      {...register("password", {
                        required:  t("signup.pleaseEnterYourPassword"),
                        minLength: {
                          value: 8,
                          message: t("signup.passwordMustBeAtLease8characters"),
                        },
                        maxLength: {
                          value: 20,
                          message: t("signup.passwordMustBeAtMost20characters"),
                        },
                        validate: validatePassword,
                      })}
                      error={!!errors.password}
                      helperText={errors.password?.message}
                    />
                    <FormInput
                      label={t("signup.confirmPassword")}
                      type="password"
                      showPassword={showPassword}
                      handleClickShowPassword={handleShowPassword}
                      {...register("passwordConfirm", {
                        required: t("signup.pleaseConfirmYourPassword"),
                        validate: (value) => {
                          if (value !== watch("password")) {
                            return t("signup.passwordsDoNotMatch");
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
                      {t("signup.passwordMustContains")}
                    </Typography>
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      sx={{ padding: "12px" }}
                      disabled={isLoading}
                    >
                      {isLoading ? t("signup.signup") + "..." : t("signup.signup")}
                    </Button>
                  </Stack>
                  <Typography py={2}>
                    {t("signup.alreadyHaveAccount")} <Link to="/auth/login">{t("signup.login")}</Link>
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
