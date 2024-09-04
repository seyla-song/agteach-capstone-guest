import React, { useState } from 'react';
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Box,
  Stack,
  IconButton,
  InputAdornment,
  Grid,
  Container,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';

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
    <Box>
      {/* Login Box */}
      <Container>
        <Stack
          paddingTop={10}
          alignItems="center"
          height={1080}
          justifyContent="start"
          textAlign="center"
          gap={10}
        >
          <Stack
            width="100%"
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Link to="/HomePage ">
            <img
              src="/icon/agteach.png"
              alt="Logo"
              style={{ maxHeight: '120px', maxWidth: '100%' }}
            
              />
              </Link>
          </Stack>
          <Grid container>
            <Grid item xs={4} />
            <Grid item xs={4}>
              <Stack gap py={2}>
                <Typography variant="h2">Login</Typography>
                <Typography variant="bmdr">
                  Please login to continue to your account
                </Typography>
              </Stack>
              <Box component="form" onSubmit={handleSubmit}>
                <Stack gap={2}>
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={emailError}
                    helperText={emailError ? 'Invalid email address' : ''}
                  />
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
                </Stack>
                <Stack py={2} alignItems="start">
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Keep me logged in"
                  />
                  <Link to="/forgotpassword">
                    <Typography variant="bmdmd">Forgot Password?</Typography>
                  </Link>
                </Stack>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                >
                  Login
                </Button>
                <Typography py={2}>
                  Need an account? <Link to="/signup">Create one</Link>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4} />
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Login;