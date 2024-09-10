import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Link, Container, Stack, Grid, Divider, Snackbar, Alert } from '@mui/material';
import LogoLink from '../components/LoginSignup/LogoLink';
import FormInput from '../components/LoginSignup/FormInput';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link as RouterLink } from 'react-router-dom';
import ErrorIcon from '@mui/icons-material/Error'; // Import error icon

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

// Don't remove this
    const handleSubmit = async (event) => {
    
    
        event.preventDefault();

        if (!email || !email.includes('@') || !email.includes('.com')) {
            setEmailError(true);
            return;
        }

        setEmailError(false);
        
        try {
            // Replace with your API request
            const response = await fetch('/api/forgot-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setSnackbarSeverity('success');
                setSnackbarMessage('Check your email inbox.');
            } else {
                setSnackbarSeverity('error');
                setSnackbarMessage('Your email may be wrong or you haven\'t signed up.');
            }

            setSnackbarOpen(true);
        } catch (error) {
            setSnackbarSeverity('error');
            setSnackbarMessage('Your email may be wrong or you haven\'t signed up.');
            setSnackbarOpen(true);
        }
    };

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };
    

/////////////////////////////////////////////////////////////////////////////////////////////////

/// Fake API test ///
    //  const handleSubmit = async (event) => {
    //         event.preventDefault();

    //         // Simple email validation
    //         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //         if (!email || !emailRegex.test(email)) {
    //             setEmailError(true);
    //             return;
    //         }

    //         setEmailError(false);
            
    //         try {
    //             // Simulate network request
    //             await new Promise((resolve) => setTimeout(resolve, 1000));

    //             // Simulate API response
    //             if (email === 'phosda@gmail.com') {
    //                 setSnackbarSeverity('success');
    //                 setSnackbarMessage('Check your email inbox.');
    //             } else {
    //                 setSnackbarSeverity('error');
    //                 setSnackbarMessage('Your email may be wrong or you haven\'t signed up.');
    //             }

    //             setSnackbarOpen(true);
    //         } catch (error) {
    //             setSnackbarSeverity('error');
    //             setSnackbarMessage('An error occurred. Please try again.');
    //             setSnackbarOpen(true);
    //         }
    //     };
    //     const handleCloseSnackbar = () => {
    //         setSnackbarOpen(false);
    //     };

/////////////////////////////////////////////////////////////////////////////////////////////////

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
                                src="/img/login-signup/forgotpassword.png" 
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
                                <Box component="form" onSubmit={handleSubmit}>
                                    <FormInput
                                        label="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        error={emailError}
                                        helperText={emailError ? 'Invalid email address' : ''}
                                    />

                                    <Divider sx={{ marginY: 2 }} />

                                    <Button
                                        type="submit"
                                        variant="contained"
                                        fullWidth
                                        sx={{ padding: '12px', marginY: 2 }}
                                    >
                                        Send reset link
                                    </Button>
                                    <Link component={RouterLink} to='/login'>
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
                        bgcolor: snackbarSeverity === 'success' ? 'red' : 'red',
                        color: snackbarSeverity === 'success' ? 'black' : 'black',
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', 
                        border: `1px solid ${snackbarSeverity === 'success' ? 'green' : 'red'}`,
                        display: 'flex',
                        alignItems: 'center',
                    }}
                    iconMapping={{
                        error: <ErrorIcon sx={{ color: 'red', marginRight: 1 }} />
                    }}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default ForgotPasswordPage;
