import React, { useState, useEffect } from 'react';
import { Button, Typography, Box, Stack, Grid, Container, Link } from '@mui/material';
import LogoLink from '../components/LoginSignup/LogoLink';
import FormInput from '../components/LoginSignup/FormInput';
import { useNavigate } from 'react-router-dom';

    /**
     * Renders a form to reset the user's password.
     *
     * This component renders a form with two input fields for the new password and
     * confirm password. If the user enters valid input, the form will be submitted to
     * the server to reset the password. If the form is valid but the server returns an
     * error, an error message will be displayed. If the form is valid and the server
     * returns a success message, a success message will be displayed and the user will
     * be redirected to the login page.
     *
     * @returns {React.ReactElement} A JSX element that renders the form and handles
     *   the form submission.
     */
const ResetPasswordPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [newPasswordError, setNewPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [successMessage, setSuccessMessage] = useState(''); // State for success message

    const navigate = useNavigate();

    useEffect(() => {
        if (newPassword && confirmPassword && newPassword === confirmPassword) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [newPassword, confirmPassword]);

    const handleClickShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        let valid = true;

        if (!newPassword) {
            setNewPasswordError(true);
            valid = false;
        } else {
            setNewPasswordError(false);
        }

        if (newPassword !== confirmPassword || !confirmPassword) {
            setConfirmPasswordError(true);
            valid = false;
        } else {
            setConfirmPasswordError(false);
        }

        if (valid) {
            try {
                const response = await fetch('/api/reset-password', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ newPassword }),
                });

                if (response.ok) {
                    setSuccessMessage('We have received your reset password.'); // Set success message
                } else {
                    console.error('Failed to reset password');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        } else {
            console.log('Form contains errors');
        }
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

                                <form onSubmit={handleSubmit}>
                                    <Stack spacing={3} marginTop={2}>
                                        <FormInput
                                            label="New Password"
                                            type="password"
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                            error={newPasswordError}
                                            helperText={newPasswordError ? 'Password is required' : ''}
                                            showPassword={showPassword}
                                            handleClickShowPassword={handleClickShowPassword}
                                        />
                                        <FormInput
                                            label="Confirm Password"
                                            type="password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            error={confirmPasswordError}
                                            helperText={confirmPasswordError ? 'Passwords must match' : ''}
                                            showPassword={showPassword}
                                            handleClickShowPassword={handleClickShowPassword}
                                        />
                                        <Link to="/auth/login">
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                fullWidth
                                                style={{
                                                    marginTop: '16px',
                                                    padding: '12px',
                                                }}
                                            >
                                                Reset Password
                                            </Button>
                                        </Link>
                                    </Stack>
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
