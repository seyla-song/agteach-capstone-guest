import React, { useState } from 'react';
import {
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Typography,
  Box,
  Stack,
  Grid,
  Container,
} from '@mui/material';
import { Visibility, VisibilityOff, CalendarToday } from '@mui/icons-material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

const SignUp = () => {
  // State variables to manage form inputs and visibility of the password
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
          <Link to="/HomePage ">
          <img
            src="/icon/agteach.png"
            alt="Logo"
            style={{ maxHeight: '120px', maxWidth: '100%' }}
          />
      </Link>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                <Typography variant="h2">
                  Sign Up
                </Typography>
                <Typography variant="bmdr">
                  Sign up to enjoy AgTeach features
                </Typography>

                <Box component="form" onSubmit={handleSubmit}>
                  <Stack spacing={2}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      variant="outlined"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      error={nameError}
                      helperText={nameError ? 'Name is required' : ''}
                    />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="Date of Birth"
                        value={dateOfBirth}
                        onChange={(newValue) => setDateOfBirth(newValue)}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            fullWidth
                            variant="outlined"
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <CalendarToday />
                                </InputAdornment>
                              ),
                            }}
                          />
                        )}
                      />
                    </LocalizationProvider>
                    <TextField
                      fullWidth
                      label="Email"
                      variant="outlined"
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
                  <Typography py={2} >
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

export default SignUp;
