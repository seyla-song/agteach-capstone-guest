import React, { useState } from 'react';
import { Button, Typography, Box, Stack, Grid, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import FormInput from '../../../components/LoginSignup/FormInput';
import LogoLink from '../../../components/LoginSignup/LogoLink';


import dayjs from 'dayjs';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState(dayjs());
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let valid = true;

    if (!name) {
      setNameError(true);
      valid = false;
    } else {
      setNameError(false);
    }

    if (!email || !email.includes('@')) {
      setEmailError(true);
      valid = false;
    } else {
      setEmailError(false);
    }

    if (!password) {
      setPasswordError(true);
      valid = false; } else {
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
                <Typography variant="h2">Sign Up</Typography>
                <Typography variant="bmdr">
                  Sign up to enjoy AgTeach features
                </Typography>

                <Box component="form" onSubmit={handleSubmit}>
                  <Stack spacing={2}>
                    <FormInput
                      label="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      error={nameError}
                      helperText={nameError ? 'Name is required' : ''}
                    />
                    <FormInput
                      label="Date of Birth"
                      isDate={true}
                      dateValue={dateOfBirth}
                      onDateChange={(newValue) => setDateOfBirth(newValue)}
                    />
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
                  
                  <Link to="/info">
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      style={{
                        marginTop: '16px',
                        padding: '12px',
                      }}
                    >
                      Sign Up
                    </Button>
                  </Link>

                  <Typography py={2}>
                    Already have an account? <Link to="/login">Login</Link>
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

export default Signup;

