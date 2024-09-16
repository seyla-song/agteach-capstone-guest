import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Box,
  Stack,
  Grid,
  Container,
} from "@mui/material";
import FormInput from "../components/LoginSignup/FormInput";
import LogoLink from "../components/LoginSignup/LogoLink";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../services/api/authSlice";
import { ToastContainer, toast } from 'react-toastify';

function Login() {
  const [login, { isLoading, isError }] = useLoginMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [visible] = useState(false);
  const navigator = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  
  const handleShowPassword = () => setShowPassword((prev) => !prev);
  const submitHandler = async (data) => {
    console.log(data)  

    try {
      await login(data).unwrap();
      console.log("Login successful", data);
      navigator("/"); // <-- redirect to home page
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <Box>
      {isError && <Typography color="error">Login failed</Typography>}
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
                <Typography variant="h2">Login</Typography>
                <Typography variant="bmdr">
                  Please login to continue to your account
                </Typography>
                <Stack
                  component="form"
                  spacing={2}
                  onSubmit={handleSubmit(submitHandler)}
                >
                  <FormInput
                    variant="outlined"
                    label="Email"
                    fullWidth
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
                    variant="outlined"
                    label="Password"
                    fullWidth
                    type={visible ? "text" : "password"}
                    {...register("password", {
                      required: "Please enter your password",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                      pattern: {
                        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                        message:
                          "Password must contain at least one letter and one number",
                      },
                    })}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    showPassword={showPassword}
                    handleClickShowPassword={handleShowPassword}
                  />

                  <Stack py={2} alignItems="start">
                    <FormControlLabel
                      control={<Checkbox {...register("keepMeLoggedIn")} />}
                      label="Keep me logged in"
                    />
                    <Link
                      to="/forgot-password"
                      style={{ textDecoration: "none" }}
                    >
                      <Typography variant="bsr" color="primary.main">
                        Forgot Password?
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
                    {isLoading ? "Logging in..." : "Login"}
                  </Button>
                  <Stack
                    py={2}
                    color="primary.main"
                    direction={"row"}
                    justifyContent={"center"}
                  >
                    Need an account?
                    <Link to="/auth/signup" textDecoration="underline" color= "primary.main" >
                      <Typography color="primary.main" padding={"0 0 0 5px"}>
                        Create one
                      </Typography>
                    </Link>
                  </Stack>
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
