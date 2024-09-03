import React, { useState } from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Link, Typography, Box, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let valid = true;

        if (!email || !email.includes('@')) {
            setEmailError(true);
            valid = false;
        } else {
            setEmailError(false);
        }

        if (!password) {
            setPasswordError(true);
            valid = false;
        } else {
            setPasswordError(false);
        }

        if (valid) {
            // Proceed with form submission (e.g., API call)
            console.log('Form submitted');
        } else {
            console.log('Form contains errors');
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                padding: '0 20px', // Add padding for responsiveness
                boxSizing: 'border-box',
            }}
        >
            {/* Logo at the top */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    padding: '40px', 
                }}
            >
                <img src={`${process.env.PUBLIC_URL}/icon/agteach.png`} alt="Logo" style={{ maxHeight: '120px' }} />
            </Box>
            
            {/* Login Box */}  
            <Box
                sx={{
                    backgroundColor: 'white',
                    padding: '40px 30px',
                    borderRadius: '12px',
                    textAlign: 'center',
                    width: '460px', // Fixed width
                }}
            >
                <Typography variant="h2" component="h2" gutterBottom sx={{ color: '#032613' }}>
                    Login
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        color: '#032613',
                        marginBottom: 3,
                        fontSize: '0.875rem', // Smaller font size
                        textAlign: 'center', 
                        maxWidth: '300px', // Limit width to ensure it stays on one line
                        marginLeft: 'auto', 
                        marginRight: 'auto', 
                    }}
                >
                    Please login to continue to your account
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Box sx={{ marginBottom: 3 }}>
                        <TextField
                            fullWidth
                            label="Email"
                            variant="outlined"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            error={emailError}
                            helperText={emailError ? 'Invalid email address' : ''}
                            InputLabelProps={{
                                style: { color: '#032613' }, 
                            }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '12px', // Rounded corners for the input fields
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
                    <Box sx={{ marginBottom: 3 }}>
                        <TextField
                            fullWidth
                            label="Password"
                            type={showPassword ? 'text' : 'password'}
                            variant="outlined"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            error={passwordError}
                            helperText={passwordError ? 'Password is required' : ''}
                            InputLabelProps={{
                                style: { color: '#032613' }, 
                            }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '12px', // Rounded corners for the input fields
                                    '& fieldset': {
                                        borderColor: passwordError ? 'red' : '#032613', 
                                    },
                                    '&:hover fieldset': {
                                        borderColor: passwordError ? 'red' : '#032613',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: passwordError ? 'red' : '#032613',
                                    },
                                },
                                '& .MuiInputBase-input': {
                                    color: '#032613', 
                                },
                            }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: 3 }}>
                        <FormControlLabel
                            control={<Checkbox sx={{ color: '#032613' }} />}
                            label="Keep me logged in"
                            sx={{ color: '#032613' }}
                        />
                        <Link href="#" variant="body2" sx={{ color: '#032613' }}>
                            Forgot Password?
                        </Link>
                    </Box>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ 
                            backgroundColor: '#032613', 
                            color: 'white', 
                            padding: '12px 0', 
                            fontWeight: 'bold',
                            marginTop: 4, 
                            borderRadius: '12px', 
                            '&:hover': {
                                backgroundColor: '#021a0e',
                            }
                        }}
                        fullWidth
                    >
                        Login
                    </Button>
                    <Typography variant="body2" sx={{ marginTop: 5, color: '#032613' }}>
                        Need an account? <Link href="#" sx={{ color: '#032613' }}>Create one</Link>
                    </Typography>
                </form>
                
            </Box>
        </Box>
    );
}

export default Login;
