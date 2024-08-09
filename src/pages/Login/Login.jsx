import React from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Link, Typography, Box } from '@mui/material';

const Login = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                
            }}
        >
            {/* Logo at the top */}
            <Box
                sx={{
                    marginBottom: 4,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <img src={`${process.env.PUBLIC_URL}/icon/agteach.png`} alt="Logo" style={{ maxHeight: '80px' }} />
            </Box>
            
            {/* Login Box */}
            <Box
                sx={{
                    backgroundColor: 'white',
                    padding: '40px 30px',
                    borderRadius: '10px',
                    textAlign: 'center',
                    width: '320px',
                }}
            >
                <Typography variant="h5" component="h2" gutterBottom sx={{ color: '#032613' }}>
                    Login
                </Typography>
                <form>
                    <Box sx={{ marginBottom: 2 }}>
                        <TextField
                            fullWidth
                            label="Email"
                            variant="outlined"
                            placeholder="Please login to continue to your account."
                            InputLabelProps={{
                                style: { color: '#032613' }, // Label color
                            }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#032613', // Border color
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#032613',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#032613',
                                    },
                                },
                                '& .MuiInputBase-input': {
                                    color: '#032613', // Text color
                                },
                            }}
                        />
                    </Box>
                    <Box sx={{ marginBottom: 2 }}>
                        <TextField
                            fullWidth
                            label="Password"
                            type="password"
                            variant="outlined"
                            placeholder="Password"
                            InputLabelProps={{
                                style: { color: '#032613' }, // Label color
                            }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#032613', // Border color
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#032613',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#032613',
                                    },
                                },
                                '& .MuiInputBase-input': {
                                    color: '#032613', // Text color
                                },
                            }}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
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
                            '&:hover': {
                                backgroundColor: '#021a0e',
                            }
                        }}
                        fullWidth
                    >
                        Login
                    </Button>
                </form>
                <Typography variant="body2" sx={{ marginTop: 2, color: '#032613' }}>
                    Need an account? <Link href="#" sx={{ color: '#032613' }}>Create one</Link>
                </Typography>
            </Box>
        </Box>
    );
}

export default Login;

