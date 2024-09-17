import React, { useState } from 'react';
import { Button, Typography, Box, Stack, Grid, Container, Link } from '@mui/material';
import { useForm } from 'react-hook-form';  // Import useForm from react-hook-form
import LogoLink from '../components/LoginSignup/LogoLink';
import FormInput from '../components/LoginSignup/FormInput';
import { CustomAlert } from '../components/CustomAlert';
import { useNavigate } from 'react-router-dom';
import { useResetPasswordMutation } from '../services/api/authSlice';
import { useParams } from 'react-router-dom';

const ResetPasswordPage = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const [resetPassword, { isLoading, error, isSuccess }] = useResetPasswordMutation();
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
            const response = await resetPassword({resetToken, body: {password: newPassword, passwordConfirm: confirmPassword} }).unwrap();
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
        };
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
                                    Reset Password
                                </Typography>

                                <Typography
                                    variant="bmdr"
                                    sx={{ textAlign: 'left' }}
                                >
                                    Strong passwords include numbers, letters, and punctuation marks.
                                </Typography>

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <Stack spacing={3} marginTop={2}>
                                        <FormInput
                                            label="New Password"
                                            type="password"
                                            // Register the input with validation rules
                                            {...register('newPassword', { 
                                                required: 'Password is required',
                                                minLength: {
                                                    value: 8,
                                                    message: 'Password must be at least 8 characters long'
                                                }
                                            })}
                                            error={Boolean(errors.newPassword)}
                                            helperText={errors.newPassword?.message}
                                            showPassword={showPassword}
                                            handleClickShowPassword={handleClickShowPassword}
                                        />
                                        <FormInput
                                            label="Confirm Password"
                                            type="password"
                                            // Register the input with validation and match password logic
                                            {...register('confirmPassword', {
                                                required: 'Confirm password is required',
                                                validate: (value) =>
                                                    value === watch('newPassword') || "Passwords don't match"
                                            })}
                                            error={Boolean(errors.confirmPassword)}
                                            helperText={errors.confirmPassword?.message}
                                            showPassword={showPassword}
                                            handleClickShowPassword={handleClickShowPassword}
                                        />
                                        <Link to="/auth/login">
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                fullWidth
                                                disabled={isLoading || isSuccess}
                                                style={{
                                                    marginTop: '16px',
                                                    padding: '12px',
                                                }}
                                            >
                                                {isLoading ? 'Sending Request...' : 'Reset Password'}
                                            </Button>
                                        </Link>
                                    </Stack>

                                    {/* Snackbar for displaying messages */}
                                    <CustomAlert label={snackbarMessage} open={snackbarOpen} onClose={handleCloseSnackbar} severity={snackbarSeverity} />
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
