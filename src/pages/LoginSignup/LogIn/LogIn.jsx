import React, { useState } from 'react';
import FormInput from '../../../components/LoginSignup/FormInput';
import LogoLink from '../../../components/LoginSignup/LogoLink';
import { Button, Checkbox, FormControlLabel, Typography, Box, Stack, Grid, Container,
} from '@mui/material';
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
      console.log('Form submitted');
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
          justifyContent="start"
          textAlign="center"
          spacing={4}
        >
          <LogoLink />
          
          <Grid container justifyContent="center">
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                <Typography variant="h2">Login</Typography>
                <Typography variant="bmdr">
                  Please login to continue to your account
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>
                  <Stack spacing={2}>
                  <FormInput
                      label="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      error={emailError}
                      helperText={emailError ? 'Invalid email address' : ''}
                    />
                    <FormInput
                      label="Password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      error={passwordError}
                      helperText={passwordError ? 'Password is required' : ''}
                      showPassword={showPassword}
                      handleClickShowPassword={handleClickShowPassword}
                    />
                    
                  </Stack>
                  <Stack py={2} alignItems="start">
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Keep me logged in"
                    />
                    <Link to="/forgot-password">
                      <Typography variant="bmdmd">Forgot Password?</Typography>
                    </Link>
                  </Stack>

                  <Link to="/">
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      style={{
                        marginTop: '16px',
                        padding: '12px',
                      }}
                    >
                      Login
                    </Button>
                  </Link>
                  <Typography py={2}>
                    Need an account? <Link to="/signup">Create one</Link>
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Login;