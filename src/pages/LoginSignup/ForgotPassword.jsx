import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Link, Container, Divider } from '@mui/material';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!email || !email.includes('@')) {
            setEmailError(true);
        } else {
            setEmailError(false);
            // Handle sending reset password link
            console.log('Reset link sent to:', email);
        }
    };

    return (
        <Container
            maxWidth="lg" // Adjust based on your design needs
            sx={{
                padding: { xs: '20px', md: '40px' },
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}
        >
            {/* Container for the Logo */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: { xs: '20px 0', md: '40px 0' },
                }}
            >
                <a href="/target-page" style={{ textDecoration: 'none' }}>
                    <img 
                        src={`${process.env.PUBLIC_URL}/icon/agteach.png`} 
                        alt="Logo" 
                        style={{ maxHeight: '120px', width: 'auto' }} 
                    />
                </a>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1,
                    boxSizing: 'border-box',
                    padding: { xs: '10px', md: '0' },
                }}
            >
                {/* Left side with Image and Text */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        flex: 1,
                        textAlign: 'center',
                        marginRight: { md: '40px' },
                        marginBottom: { xs: '20px', md: '0' },
                    }}
                >
                    <img 
                        src={`${process.env.PUBLIC_URL}/img/login-signup/forgotpassword.png`} 
                        alt="Forgot Password" 
                        style={{ maxWidth: '100%', height: 'auto', maxHeight: '379px' }} 
                    />
                    <Typography
                        variant="h1"
                        sx={{
                            marginTop: '20px',
                            color: '#032613',
                            fontSize: { xs: '1.5rem', md: '2.5rem' },
                            fontWeight: 'bold',
                        }}
                    >
                        Forgot Your Password?
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            marginTop: '10px',
                            color: '#032613',
                            fontSize: { xs: '0.875rem', md: '1rem' },
                        }}
                    >
                        Please enter the email address associated with <br /> this account and we will email you a link to reset <br />your password.
                    </Typography>
                </Box>

                {/* Right side with Reset Password Form */}
                <Box
                    sx={{
                        padding: { xs: '15px', md: '40px 30px' },
                        textAlign: 'center',
                        width: { xs: '100%', sm: '80%', md: '460px' },
                    }}
                >
                    <Typography
                        variant="body1"
                        sx={{
                            color: '#032613',
                            marginBottom: 2,
                            fontSize: { xs: '1rem', md: '1.125rem' },
                            fontWeight: 'bold',
                            textAlign: 'left',
                        }}
                    >
                        Enter your email address
                    </Typography>

                    <form onSubmit={handleSubmit}>
                        <Box sx={{ marginBottom: 3 }}>
                            <TextField
                                fullWidth
                                label="Email"
                                variant="outlined"
                                placeholder="eg: johndoe@abc.xyz"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                error={emailError}
                                helperText={emailError ? 'Invalid email address' : ''}
                                InputLabelProps={{
                                    style: { color: '#032613' },
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '4px',
                                        '& fieldset': {
                                            borderColor: emailError ? 'red' : '#032613',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: emailError ? 'red' : '#032613',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: emailError ? 'red' : '#032613',
                                        },
                                    },
                                    '& .MuiInputBase-input': {
                                        color: '#032613',
                                    },
                                }}
                            />
                        </Box>


                        {/* <Box sx={{ border: '0.5px solid #d3d3d3', marginY: 2 }} /> */}
                        <Divider sx={{margin:'8px'}} />

                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                backgroundColor: '#032613',
                                color: 'white',
                                padding: '12px 0',
                                fontWeight: 'bold',
                                marginTop: 1,
                                borderRadius: '4px',
                                '&:hover': {
                                    backgroundColor: '#021a0e',
                                },
                            }}
                            fullWidth
                        >
                            Send reset link
                        </Button>
                        <Link
                            href="/src/pages/LogIn.jsx"
                            variant="body2"
                            sx={{
                                display: 'block',
                                marginTop: 3,
                                color: '#032613',
                                textDecoration: 'none',
                                border: '1px solid #032613',
                                padding: '8px',
                                borderRadius: '4px',
                                textAlign: 'center',
                                '&:hover': {
                                    borderColor: '#021a0e',
                                },
                            }}
                        >
                            Back to login
                        </Link>
                    </form>
                </Box>
            </Box>
        </Container>
    );
};

export default ForgotPassword;







