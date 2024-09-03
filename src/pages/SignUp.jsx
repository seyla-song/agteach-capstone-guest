import React from 'react';
import {
  Container,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  Box,
  Button,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

const SignUp = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [dateOfBirth, setDateOfBirth] = React.useState(dayjs());

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Inline styles for TextField borders using MUI system
  const textFieldStyles = {
    '& .MuiOutlinedInput-root': {
      borderRadius: '10px',
      '& fieldset': {
        borderColor: '#003300', 
      },
      '&:hover fieldset': {
        borderColor: '#003300',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#003300',
      },
    },
    '& .MuiInputBase-input': {
      color: '#032613',
      height: '1.5em', // Adjust height here
    },
    '& .MuiInputAdornment-root': {
      height: '1.5em', // Align adornments
    },
  };
  return (
    <Container
      maxWidth="xs"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 10,
      }}
    >
      <Box
        component="img"
        src="/icon/agteach.png"
        alt="AgTeach Logo"
        sx={{ mb: 30 }}
      />

      <Typography variant="h4" sx={{ mb: 2 }}>
        Sign up
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Sign up to enjoy AgTeach features
      </Typography>

      <TextField
        label="Your Name"
        variant="outlined"
        fullWidth
        sx={{ mb: 2, ...textFieldStyles }}
      />

{/* <LocalizationProvider dateAdapter={AdapterDayjs}>
  <DatePicker
    label="Date of Birth"
    value={dateOfBirth}
    onChange={(newValue) => setDateOfBirth(newValue)}
    renderInput={(params) => (
      <TextField
        {...params}
        variant="outlined"
        fullWidth
        sx={{
          mb: 2,
          '& .MuiOutlinedInput-root': {
            height: '120px', 
            '& input': {
              padding: '20px', 
            },
            '& .MuiInputAdornment-root': {
              height: '120px', 
              '& .MuiSvgIcon-root': {
                fontSize: '30px', 
              },
            },
          },
          ...textFieldStyles, 
        }}
        InputProps={{
          ...params.InputProps,
          startAdornment: (
            <InputAdornment position="start">
              <CalendarTodayIcon />
            </InputAdornment>
          ),
        }}
      />
    )}
  />
</LocalizationProvider> */}


      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        sx={{ mb: 2, ...textFieldStyles }}
      />

      <TextField
        label="Password"
        variant="outlined"
        type={showPassword ? 'text' : 'password'}
        fullWidth
        sx={{ mb: 2, ...textFieldStyles }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleClickShowPassword}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Button
        type="submit"
        variant="contained"
        sx={{ marginTop: 3, backgroundColor: '#003300', '&:hover': { backgroundColor: '#002200' } }}
        fullWidth
      >
        Sign Up
      </Button>

      <Typography variant="body2" color="text.secondary">
        Need an account?{' '}
        <Typography
          component="a"
          href="#"
          sx={{ color: '#003300', textDecoration: 'none' }}
        >
          Login
        </Typography>
      </Typography>
    </Container>
  );
};

export default SignUp;






// <Signup />