import React from "react";
import { Button, Typography, Box, Stack, Grid, Container } from "@mui/material";
import { Link } from "react-router-dom";
import FormInput from "../components/LoginSignup/FormInput";
import LogoLink from "../components/LoginSignup/LogoLink";
import { useForm, Controller } from "react-hook-form";
import dayjs from "dayjs";
import { useShowDummyQuery } from "../services/api/apiSlice";

const Signup = () => {
  const { data, isLoading } = useShowDummyQuery();

  const [showPassword, setShowPassword] = React.useState(false);
  const { control, handleSubmit, register, formState } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      dateOfBirth: null,
    },
  });

  const { errors } = formState;

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleClickShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <Box>
      <Container maxWidth="md">
        <Typography>{data}</Typography>
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

                <Box width={"100%"}>
                  <Stack
                    component={"form"}
                    onSubmit={handleSubmit(onSubmit)}
                    spacing={2}
                  >
                    <FormInput
                      label="Your Name"
                      {...register("name", {
                        required: "Please enter your name",
                      })}
                      error={!!errors.name}
                      helperText={errors.name?.message}
                    />

                    <Controller
                      name="dateOfBirth"
                      control={control}
                      sx={{ width: "100" }}
                      render={({ field }) => (
                        <FormInput
                          label="Date of Birth"
                          isDate={true}
                          dateValue={field.value}
                          onDateChange={(newDate) => field.onChange(newDate)}
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
                      handleClickShowPassword={handleClickShowPassword}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      sx={{
                        padding: "12px",
                      }}
                    >
                      Sign Up
                    </Button>
                  </Stack>

                  <Typography py={2}>
                    Already have an account? <Link to="/login">Login</Link>
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Signup;
