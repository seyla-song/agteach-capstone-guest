import React, { useState } from 'react';
import { TextField, Button, Typography, Box, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const ResetPassword = () => {
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
            // Proceed with form submission (e.g., API call)
            console.log('Password reset successfully');
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
                minHeight: '100vh',
                padding: '20px',
                boxSizing: 'border-box',
            }}
        >
            {/* Logo at the top */}
            <Box sx={{ marginBottom: 5 }}>
                <img src={`${process.env.PUBLIC_URL}/icon/agteach.png`} alt="Logo" style={{ maxHeight: '120px', maxWidth: '100%' }} />
            </Box>

            {/* Reset Password Box */}
            <Box
                sx={{
                    backgroundColor: 'white',
                    padding: { xs: '20px 20px', md: '40px 30px' },
                    borderRadius: '12px',
                    textAlign: 'center',
                    width: { xs: '100%', sm: '80%', md: '460px' },
                }}
            >
                <Typography 
                    variant="h2" 
                    component="h2" 
                    gutterBottom 
                    sx={{ 
                        color: '#032613', 
                        fontSize: { xs: '1.5rem', md: '2rem' }, 
                        textAlign: 'left'  // Align text to the left
                    }}
                >
                    Reset Password
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        color: '#032613',
                        marginBottom: 3,
                        fontSize: { xs: '0.75rem', md: '0.875rem' },
                        textAlign: 'left', // Align text to the left
                        maxWidth: '100%', // Ensure the text doesn't wrap into multiple lines
                        whiteSpace: 'nowrap', // Force the text to stay on one line
                        overflow: 'hidden',
                        textOverflow: 'ellipsis', // Ellipsis if text overflows (optional)
                    }}
                >
                    Strong passwords include numbers, letters, and punctuation marks.
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Box sx={{ marginBottom: 3 }}>
                        <TextField
                            fullWidth
                            label="New Password"
                            type={showPassword ? 'text' : 'password'}
                            variant="outlined"
                            placeholder="New Password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            error={newPasswordError}
                            helperText={newPasswordError ? 'Password is required' : ''}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '12px',
                                    '& fieldset': {
                                        borderColor: newPasswordError ? 'red' : '#032613',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: newPasswordError ? 'red' : '#032613',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: newPasswordError ? 'red' : '#032613',
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
                    <Box sx={{ marginBottom: 3 }}>
                        <TextField
                            fullWidth
                            label="Confirm Password"
                            type={showPassword ? 'text' : 'password'}
                            variant="outlined"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            error={confirmPasswordError}
                            helperText={confirmPasswordError ? 'Passwords must match' : ''}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '12px',
                                    '& fieldset': {
                                        borderColor: confirmPasswordError ? 'red' : '#032613',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: confirmPasswordError ? 'red' : '#032613',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: confirmPasswordError ? 'red' : '#032613',
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
                            },
                        }}
                        fullWidth
                    >
                        Reset Password
                    </Button>
                </form>
            </Box>
        </Box>
    );
}

export default ResetPassword;
