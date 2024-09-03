import React from 'react';
import { Container, TextField, Typography, Button, Box, Grid, Stack } from '@mui/material';

const PersonalInfoForm = () => {
  return (
    <Container maxWidth="xs" sx={{ mt: 5 }}>
      {/* Logo */}
      <Stack sx={{ display: 'flex', justifyContent: 'center', mb: 10}}>
        <img src="/icon/agteach.png" alt="Logo" style={{ height: '50px' }} />
      </Stack>

      <Box container spacing={3} justifyContent="center" >
        {/* Personal Information Section */}
        <Stack item xs={12} >
          <Typography variant="h5">Personal Information</Typography>
        </Stack>
        
        {/* Flexbox for First and Last Name */}
        <Box item xs={12}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between' }}>
            <TextField
              label="First name"
              variant="outlined"
              required
              
              sx={{
                width: { xs: '100%', sm: '48%' },
                mb: { xs: 2, sm: 0 }, // Add margin bottom on mobile
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderWidth: '2px',
                  },
                  '&:hover fieldset': {
                    borderWidth: '2px',
                  },
                  '&.Mui-focused fieldset': {
                    borderWidth: '2px',
                  },
                },
              }}
            />
            <TextField
              label="Last name"
              variant="outlined"
              required
              
              sx={{
                width: { xs: '100%', sm: '48%' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderWidth: '2px',
                  },
                  '&:hover fieldset': {
                    borderWidth: '2px',
                  },
                  '&.Mui-focused fieldset': {
                    borderWidth: '2px',
                  },
                },
              }}
            />
          </Box>
        </Box>

        {/* Contact Information Section */}
        <Stack item xs={12}>
          <Typography variant="h5">Contact Information</Typography>
        </Stack>

        {/* Flexbox for Email and Phone Number */}
        <Box item xs={12}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between' }}>
            <TextField
              label="Email"
              variant="outlined"
              required
              InputProps={{
                style: { height: '50px', borderRadius: '12px' },
              }}
              sx={{
                width: { xs: '100%', sm: '48%' },
                mb: { xs: 2, sm: 0 }, // Add margin bottom on mobile
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderWidth: '2px',
                  },
                  '&:hover fieldset': {
                    borderWidth: '2px',
                  },
                  '&.Mui-focused fieldset': {
                    borderWidth: '2px',
                  },
                },
              }}
            />
            <TextField
              label="Phone number"
              variant="outlined"
              required
              InputProps={{
                style: { height: '50px', borderRadius: '12px' },
              }}
              sx={{
                width: { xs: '100%', sm: '48%' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderWidth: '2px',
                  },
                  '&:hover fieldset': {
                    borderWidth: '2px',
                  },
                  '&.Mui-focused fieldset': {
                    borderWidth: '2px',
                  },
                },
              }}
            />
          </Box>
        </Box>

        {/* Buttons aligned side-by-side on the right side */}
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
          <Button
            variant="outlined"
            sx={{
              padding: '10px 45px',
              borderColor: '#003300',
              color: '#003300',
              '&:hover': { borderColor: '#002200', color: '#002200' },
              mr:2, // Margin between buttons
            }}
          >
            Skip
          </Button>

          <Button
            variant="contained"
            sx={{
              backgroundColor: '#003300',
              '&:hover': { backgroundColor: '#002200' },
              padding: '10px 40px',
            }}
          >
            Submit
          </Button>
        </Grid>
      </Box>
    </Container>
  );
};

export default PersonalInfoForm;




