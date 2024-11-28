import React, { useState } from 'react';
import { useForm } from 'react-hook-form'; // Import useForm from react-hook-form
import { useNavigate, useParams } from 'react-router-dom';
import { useResetPasswordMutation } from '../services/api/authApi';
import { useTranslation } from 'react-i18next';

import {
  Button,
  Typography,
  Box,
  Stack,
  Grid,
  Container,
  Link,
} from '@mui/material';

import { CustomAlert, LogoLink, FormInput } from '../components/index';

const ResetPasswordPage = () => {
  const [t] = useTranslation("global");
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [resetPassword, { isLoading, isSuccess }] =
    useResetPasswordMutation();
  const { resetToken } = useParams();
  const [showPassword, setShowPassword] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const onSubmit = async (data) => {
    const { newPassword, confirmPassword } = data;

    try {
      const response = await resetPassword({
        resetToken,
        body: { password: newPassword, passwordConfirm: confirmPassword },
      }).unwrap();
      if (response.status === 'success') {
        setSnackbarSeverity('success');
        setSnackbarMessage('Password reset successful');
        setTimeout(() => {
          navigate('/auth/login');
        }, 2000);
      } else {
        setSnackbarSeverity('error');
        setSnackbarMessage('Failed to reset password');
      }
    } catch (err) {
      setSnackbarSeverity('error');
      setSnackbarMessage('Something went wrong. Please try again');
    } finally {
      setSnackbarOpen(true);
    }
  };

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

  return (
    <Box>
      <Container maxWidth="md">
        <Stack
          paddingTop={{ xs: 8, md: 10 }}
          alignItems="center"
          justifyContent="center"
          spacing={4}
        >
          <LogoLink />

          <Grid container justifyContent="center">
            <Grid item xs={12} md={6}>
              <Box>
                <Typography
                  variant="h2"
                  component="h2"
                  gutterBottom
                  sx={{ textAlign: 'left' }}
                >
                  {t("resetPassword.resetPassword")}
                </Typography>

                <Typography variant="bmdr" sx={{ textAlign: 'left' }}>
                  {t("resetPassword.description")}
                </Typography>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <Stack spacing={3} marginTop={2}>
                    <FormInput
                      label={t("resetPassword.password")}
                      type="password"
                      // Register the input with validation rules
                      {...register('newPassword', {
                        required: t("resetPassword.passwordIsRequired"),
                        minLength: {
                          value: 8,
                          message:
                            t("resetPassword.passwordMustBeAtLease8characters"),
                        },
                        validate: validatePassword
                      })}
                      error={Boolean(errors.newPassword)}
                      helperText={errors.newPassword?.message}
                      showPassword={showPassword}
                      handleClickShowPassword={handleClickShowPassword}
                    />
                    <FormInput
                      label={t("resetPassword.confirmPassword")}
                      type="password"
                      // Register the input with validation and match password logic
                      {...register('confirmPassword', {
                        required: t("resetPassword.confirmPasswordIsRequired"),
                        validate: (value) =>
                          value === watch('newPassword') ||
                          t("resetPassword.passwordsDoNotMatch"),
                      })}
                      error={Boolean(errors.confirmPassword)}
                      helperText={errors.confirmPassword?.message}
                      showPassword={showPassword}
                      handleClickShowPassword={handleClickShowPassword}
                    />
                    <Typography color="dark.300" fontSize="12px" marginTop={"10px"} textAlign={"left"}>
                      {t("resetPassword.passwordMustContains")}
                    </Typography>
                    <Link to="/auth/login">
                      <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        disabled={isLoading || isSuccess}
                        style={{
                          marginTop: '12px',
                          padding: '12px',
                        }}
                      >
                        {isLoading ? t("resetPassword.sendingRequest") : t("resetPassword.sendResetPassword")}
                      </Button>
                    </Link>
                  </Stack>

                  {/* Snackbar for displaying messages */}
                  <CustomAlert
                    label={snackbarMessage}
                    open={snackbarOpen}
                    onClose={handleCloseSnackbar}
                    severity={snackbarSeverity}
                  />
                </form>
              </Box>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default ResetPasswordPage;
