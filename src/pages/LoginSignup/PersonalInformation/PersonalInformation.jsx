import React, { useState } from 'react';
import LogoLink from '../../../components/LoginSignup/LogoLink';
import FormInput from '../../../components/LoginSignup/FormInput';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box, Stack, Grid } from '@mui/material';

const PersonalInfoForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement form submission logic
    console.log('Form submitted with:', { firstName, lastName, email, phone });
  };

  return (
    <Box>
      <Container maxWidth="md">
        <Stack
          paddingTop={{ xs: 8, md: 10 }}
          alignItems="center"
          spacing={4}
        >
          {/* Logo */}
          <LogoLink />
          
          <Typography variant="h2" textAlign="center">
            Personal Information
          </Typography>
          
          <Box component="form" sx={{ width: '100%' }} onSubmit={handleSubmit}>
            <Stack spacing={4}>
              {/* Personal Information */}
              <Stack spacing={2}>
                <Typography variant="h4">Personal Information</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                  <FormInput
                    label="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    error={errors.firstName}
                    helperText={errors.firstName ? 'First name is required' : ''}
                  />
                  <FormInput
                    label="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    error={errors.lastName}
                    helperText={errors.lastName ? 'Last name is required' : ''}
                  />
                </Box>
              </Stack>

              {/* Contact Information */}
              <Stack spacing={2}>
                <Typography variant="h4">Contact Information</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                  <FormInput
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={errors.email}
                    helperText={errors.email ? 'Email is required' : ''}
                  />
                  <FormInput
                    label="Phone Number"
                    type='tel'
                  
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    error={errors.phone}
                    helperText={errors.phone ? 'Phone number is required' : ''}
                  />
                </Box>
              </Stack>
            </Stack>

            {/* Buttons aligned to the right on all screen sizes */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 4 }}>
              <Stack direction="row" spacing={2}>
                <Link to="/guest-profile">
                  <Button
                    variant="outlined"
                    sx={{ padding: { xs: '8px 20px', md: '8px 35px' },
                    }}
                  >
                    Skip
                  </Button>
                </Link>

                <Link to="/guest-profile">
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ padding: { xs: '8px 20px', md: '8px 35px' },
                    }}
                  >
                    Submit
                  </Button>
                </Link>
              </Stack>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default PersonalInfoForm;
