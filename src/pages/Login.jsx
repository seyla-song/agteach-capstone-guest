import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../services/api/authApi";
import { useTranslation } from "react-i18next";

import {
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Box,
  Stack,
  Grid,
  Container,
  Select,
  MenuItem,
} from "@mui/material";

import { CustomAlert, LogoLink, FormInput } from "../components/index";
import { useDispatch, useSelector } from "react-redux";
import { checkLoginStatus } from "../features/auth/authSlice";
import { setEmail } from "../features/auth/userSlice";
import i18next from "i18next";

function Login() {
  const [t] = useTranslation("global");
  const [login, { isLoading }] = useLoginMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "",
  });
  const [visible] = useState(false);
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const savedLanguage = localStorage.getItem("language") || "en";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      keepMeLoggedIn: false,
    },
  });
  const handleChangeLanguage = (event) => {
    if (event.target.value === 10) {
      i18next.changeLanguage("en");
      localStorage.setItem("language", "en");
    } else {
      i18next.changeLanguage("kh");
      localStorage.setItem("language", "kh");
    }
  };
  const handleShowPassword = () => setShowPassword((prev) => !prev);
  const { isAtCourseDetail, isAtCart } = useSelector((state) => state.auth);
  const { courseId } = useSelector((state) => state.user);

  const submitHandler = async (data) => {
    try {
      const res = await login(data).unwrap();
      if (res.token) {
        let verification = res?.data?.user?.isVerify;
        dispatch(
          checkLoginStatus({ isAuthenticated: true, isVerified: verification })
        );
        dispatch(setEmail(res?.data?.user?.email));
      }
      if (isAtCart) {
        navigator("/cart");
      } else if (isAtCourseDetail) {
        navigator(`/courses/${courseId}`);
      } else navigator("/");
    } catch (error) {
      setSnackbar({
        open: true,
        message: error.data.message,
        severity: "error",
      });
    }
  };

  return (
    <Box>
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
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                <Typography variant="h2">{t("login.login")}</Typography>
                <Typography variant="bmdr">{t("login.description")}</Typography>
                <Stack
                  component="form"
                  spacing={2}
                  onSubmit={handleSubmit(submitHandler)}
                >
                  <CustomAlert
                    label={snackbar.message}
                    severity={snackbar.severity}
                    open={snackbar.open}
                    onClose={() => setSnackbar({ ...snackbar, open: false })}
                  />

                  <FormInput
                    variant="outlined"
                    label={t("login.email")}
                    fullWidth
                    {...register("email", {
                      required: t("login.pleaseEnterYourEmail"),
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: t("login.invalidEmail"),
                      },
                    })}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                  <FormInput
                    variant="outlined"
                    label={t("login.password")}
                    fullWidth
                    type={visible ? "text" : "password"}
                    {...register("password", {
                      required: t("login.pleaseEnterYourPassword"),
                    })}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    showPassword={showPassword}
                    handleClickShowPassword={handleShowPassword}
                  />

                  <Stack py={2} alignItems="start">
                    <FormControlLabel
                      control={<Checkbox {...register("keepMeLoggedIn")} />}
                      label={t("login.keepMeLoggedIn")}
                    />
                    <Link
                      to="/auth/forgot-password"
                      style={{ textDecoration: "none" }}
                    >
                      <Typography variant="bsr" color="primary.main">
                        {t("login.forgotPassword")}
                      </Typography>
                    </Link>
                  </Stack>

                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    style={{
                      marginTop: "10px",
                      padding: "12px",
                    }}
                  >
                    {isLoading ? `${t("login.loggingIn")}` : t("login.login")}
                  </Button>
                  <Stack
                    py={2}
                    color="primary.main"
                    direction={"row"}
                    justifyContent={"center"}
                  >
                    {t("login.needAnAccount")}
                    <Link
                      to="/auth/signup"
                      textDecoration="underline"
                      color="primary.main"
                    >
                      <Typography color="primary.main" padding={"0 0 0 5px"}>
                        {t("login.signUp")}
                      </Typography>
                    </Link>
                  </Stack>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Select
                      labelId="language-select-label"
                      id="language-select"
                      defaultValue={savedLanguage === "en" ? 10 : 20}
                      sx={{
                        width: "120px",
                        border: "none",
                        color: "common.black",
                        ".MuiSelect-icon": {
                          color: "common.black",
                        },
                        ".MuiOutlinedInput-notchedOutline": { border: 0 },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          border: "0", // Remove border when focused
                        },
                      }}
                      label="Language"
                      onChange={handleChangeLanguage}
                    >
                      <MenuItem value={10}>English</MenuItem>
                      <MenuItem value={20}>ភាសាខ្មែរ</MenuItem>
                    </Select>
                  </Box>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}

export default Login;
