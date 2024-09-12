import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Link, Container, Stack, Grid, Divider, Snackbar, Alert } from '@mui/material';
import LogoLink from '../components/LoginSignup/LogoLink';
import { useForm } from 'react-hook-form';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import ErrorIcon from '@mui/icons-material/Error';
import { useForgotpasswordMutation } from '../services/api/authSlice';
import forgetPasswordImg from '../assets/forgotpassword.png';


/**
 * Renders a form to reset the user's password.
 *
 * The form will accept an email address and, if valid, send a reset link to the user's email address.
 * If the user is not found or the email is invalid, an error message will be displayed.
 *
 * @returns {React.ReactElement} A JSX element representing the password reset form.
 */
const ForgotPasswordPage = () => {
    const navigate = useNavigate();
    const [forgotpassword, { isLoading, error, isSuccess, isError }] = useForgotpasswordMutation();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

    const onSubmit = async (data) => {
        try {
            const response = await forgotpassword({ email: data.email }).unwrap();
            navigate('/reset-password');
            console.log(response);
            if (response) {
                setSnackbarSeverity('success');
                setSnackbarMessage('Check your email inbox.');
                reset(); 
            }
        } catch (err) {
            setSnackbarSeverity('error');
            setSnackbarMessage(error?.data?.message || "Your email may be wrong or you haven't signed up.");
        } finally {
            setSnackbarOpen(true);
        }
    };

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
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

                    <Grid container spacing={4} alignItems="center">
                        {/* Left side: Image and text */}
                        <Grid item xs={11} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img 
                                src={forgetPasswordImg}
                                alt="Forgot Password" 
                                style={{ 
                                    width: '80%', 
                                    maxWidth: '300px', 
                                    height: 'auto',
                                    marginBottom: '16px' 
                                }} 
                            />

                            <Typography variant="h4" textAlign="center" sx={{ whiteSpace: 'nowrap' }}>
                                Forgot Your Password?
                            </Typography>
                            <Typography variant="body1">
                                Please enter the email address associated with this account and we will email you a link to reset your password.
                            </Typography>
                        </Grid>

                        {/* Right side: Form */}
                        <Grid item xs={11} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Stack spacing={2} sx={{ width: '100%', maxWidth: '400px' }}>
                                <Typography variant="h4" textAlign="center">Enter your email address</Typography>
                                <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                                <TextField
                                        label="Email"
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                        {...register('email', {
                                            required: 'Email is required',
                                            pattern: {
                                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                                message: 'Please enter a valid email address'
                                            }
                                        })}
                                        error={!!errors.email}
                                        helperText={errors.email ? errors.email.message : ''}
                                    />


                                    <Divider sx={{ marginY: 2 }} />

                                    <Button
                                        type="submit"
                                        variant="contained"
                                        fullWidth
                                        sx={{ padding: '12px', marginY: 2 }}
                                        disabled={isLoading}
                                    >
                                        {isLoading ? 'Sending...' : 'Send reset link'}
                                    </Button>
                                    <Link component={RouterLink} to='/auth/login'>
                                        <Button fullWidth 
                                            startIcon={<ArrowBackIosNewIcon />}
                                            variant='outlined'>
                                            Back to login
                                        </Button>
                                    </Link>
                                </Box>
                            </Stack>
                        </Grid>
                    </Grid>
                </Stack>
            </Container>

            {/* Snackbar for displaying messages */}
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity={snackbarSeverity}
                    sx={{
                        width: '100%',
                        bgcolor: snackbarSeverity === 'success' ? 'white' : 'red',
                        color: 'black',
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', 
                        border: `1px solid ${snackbarSeverity === 'success' ? 'green' : 'red'}`,

                        display: 'flex',
                        alignItems: 'center',
                    }}
                    iconMapping={{
                        error: <ErrorIcon sx={{ color: 'black', marginRight: 1 }} />
                    }}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default ForgotPasswordPage;