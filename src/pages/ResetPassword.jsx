import React, { useState, useEffect } from 'react';
import { Button, Typography, Box, Stack, Grid, Container, Link } from '@mui/material';
import LogoLink from '../components/LoginSignup/LogoLink';
import FormInput from '../components/LoginSignup/FormInput';
import { CustomAlert } from '../components/CustomAlert';
import { useNavigate } from 'react-router-dom';
import { useResetPasswordMutation } from '../services/api/authSlice';
import { useParams } from 'react-router-dom';

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
    const [resetPassword, { isLoading, error, isSuccess }] = useResetPasswordMutation();
    const { resetToken } = useParams();
    const [showPassword, setShowPassword] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [newPasswordError, setNewPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [isConfirmPasswordEmpty, setIsConfirmPasswordEmpty] = useState(false);
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

    const handleSubmit = async (event) => {
        event.preventDefault();

        const resetData = {token: resetToken, password: newPassword, passwordConfirm: confirmPassword};

        if (!newPassword) {
            setNewPasswordError(true);

        } else {
            setNewPasswordError(false);
        }

        if (!confirmPassword) {
            setIsConfirmPasswordEmpty(true);
            return;
        }   
        else {
            setIsConfirmPasswordEmpty(false);
        }

        if (newPassword !== confirmPassword) {
            setConfirmPasswordError(true);

        } else {
            setConfirmPasswordError(false);
        }

        if (Boolean(newPassword) && Boolean(confirmPassword) && newPassword === confirmPassword) {

            try {
                const response = await resetPassword(resetData);        
                
                if (response.data?.status === 'success') {
                    setSnackbarSeverity('success');
                    setSnackbarMessage('Password reset successful.');
                    setTimeout(() => {
                        navigate('/auth/login')
                    }, 2000);
                }
                else {
                    setSnackbarSeverity('error');
                    setSnackbarMessage('Failed to reset password');
                }
            } catch (err) {
                setSnackbarSeverity('error');
                setSnackbarMessage('Something Went wrong. Please try again');
            } finally {
                setSnackbarOpen(true);
            }
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
                                            error={confirmPasswordError || isConfirmPasswordEmpty}
                                            helperText={isConfirmPasswordEmpty ? `Confirm password is required` : '' || confirmPasswordError ? `Password isn't match` : ''}
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
                                                {isLoading? 'Sending Request...' : 'Reset Password'}
                                            </Button>
                                        </Link>
                                    </Stack>

                                    {/* Snackbar for displaying messages */}
                                    <CustomAlert label={snackbarMessage} open={snackbarOpen} onClose={handleCloseSnackbar} severity={snackbarSeverity}/>
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
