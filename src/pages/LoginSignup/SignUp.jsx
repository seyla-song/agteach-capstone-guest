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

  const textFieldStyles = {
    '& .MuiOutlinedInput-root': {
      borderRadius: '10px',
    },
    '& .MuiInputBase-input': {
      color: '#032613',
    },
    '& .MuiInputAdornment-root': {
      color: '#003300',
    },
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: { xs: 8, md: 10 },
        mb: { xs: 4, md: 6 },
      }}
    >
      <Box
        component="img"
        src="/icon/agteach.png"
        alt="AgTeach Logo"
        sx={{
          width: { xs: '100px', md: '120px' },
          mb: { xs: 4, md: 6 },
        }}
      />

      <Typography
        variant="h4"
        sx={{
          mb: 2,
          fontSize: { xs: '1.75rem', md: '2rem' },
          textAlign: 'center',
        }}
      >
        Sign up
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mb: 3, textAlign: 'center' }}
      >
        Sign up to enjoy AgTeach features
      </Typography>

      <TextField
        label="Your Name"
        variant="outlined"
        fullWidth
        sx={{ mb: 2, ...textFieldStyles }}
      />

      <TextField
        label="Date of Birth"
        variant="outlined"
        fullWidth
        sx={{ mb: 2, ...textFieldStyles }}
        InputProps={{
          
          endAdornment: (
            <InputAdornment position="end">
              <CalendarTodayIcon />
            </InputAdornment>
          ),
        }}
      />

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
        sx={{
          mt: 3,
          backgroundColor: '#003300',
          '&:hover': { backgroundColor: '#002200' },
          padding: { xs: '10px', md: '12px' },
        }}
        fullWidth
      >
        Sign Up
      </Button>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mt: 2, textAlign: 'center' }}
      >
        Already have an account?{' '}
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