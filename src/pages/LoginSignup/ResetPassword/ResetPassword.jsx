import React, { useState } from 'react';
import { Button, Typography, Box, Stack, Grid, Container } from '@mui/material';
import LogoLink from '../../../components/LoginSignup/LogoLink';
import FormInput from '../../../components/LoginSignup/FormInput';
import { Link } from 'react-router-dom';

const ResetPasswordPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [newPasswordError, setNewPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleSubmit = (event) => {
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
            console.log('Password reset successfully');
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
                                {/* Reset Password Title */}
                                <Typography 
                                    variant="h2" 
                                    component="h2" 
                                    gutterBottom
                                    sx={{ textAlign: 'left' }}  
                                >
                                    Reset Password
                                </Typography>

                                {/* Strong Passwords Instruction */}
                                <Typography
                                    variant="bmdr"
                                    sx={{
                                        textAlign: 'left',
                                        
                                    }}
                                >
                                    Strong passwords include numbers, letters, and punctuation marks.
                                </Typography>

                                <form onSubmit={handleSubmit}>
                                    <Stack spacing={3} marginTop={2}>
                                        {/* New Password Input */}
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
                                        {/* Confirm Password Input */}
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
                                        <Link to="/login">
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