import React from 'react';
import { Container, TextField, Typography, Button, Box, Grid } from '@mui/material';

const PersonalInfoForm = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 30 }}>
      {/* Logo */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 10 }}>
        <img src="/icon/agteach.png" alt="Logo" style={{ height: '50px' }} />
      </Box>

      <Grid container spacing={3} justifyContent="center">
        {/* Personal Information Section */}
        <Grid item xs={12} >
          <Typography variant="h5" >Personal Information</Typography>
        </Grid>
        
        {/* Flexbox for First and Last Name */}
        <Grid item xs={160}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <TextField
              label="First name"
              variant="outlined"
              required
              InputProps={{
                style: { height: '50px', borderRadius: '12px', width:'328px'},
              }}
              sx={{
                width: '48%', // Adjusted to fit wider screen
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
              InputProps={{
                style: { height: '50px', borderRadius: '12px', width:'328px' },
              }}
              sx={{
                width: '48%', // Adjusted to fit wider screen
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
        </Grid>

        {/* Contact Information Section */}
        <Grid item xs={200}>
          <Typography variant="h5">Contact Information</Typography>
        </Grid>

        {/* Flexbox for Email and Phone Number */}
        <Grid item xs={200}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <TextField
              label="Email"
              variant="outlined"
              required
              InputProps={{
                style: { height: '50px', borderRadius: '12px', width:'328px' },
              }}
              sx={{
                width: '48%', // Adjusted to fit wider screen
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
                style: { height: '50px', borderRadius: '12px', width:'328px' },
              }}
              sx={{
                width: '48%', // Adjusted to fit wider screen
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
        </Grid>

        {/* Buttons aligned to the right */}
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4, marginLeft:'100%' }}>
          <Button
            variant="outlined"
            sx={{
              padding: '10px 45px',
              borderColor: '#003300',
              color: '#003300',
              '&:hover': { borderColor: '#002200', color: '#002200' },
              marginRight: '10px',
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
      </Grid>
    </Container>
  );
};

export default PersonalInfoForm;


