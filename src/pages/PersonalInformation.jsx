import React from 'react';
import { Container, TextField, Typography, Button, Box, Grid } from '@mui/material';

const PersonalInfoForm = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      {/* Logo */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 10 }}>
        <img src="/icon/agteach.png" alt="Logo" style={{ height: '50px' }} />
      </Box>

      <Grid container spacing={4}>
        {/* Personal Information Section */}
        <Grid item xs={12}>
          <Typography variant="h6">Personal Information</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="First name"
            variant="outlined"
            fullWidth
            required
            InputProps={{
              style: { height: '50px', borderWidth: '2px' }, // Increased border width
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderWidth: '2px', // Larger border
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
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Last name"
            variant="outlined"
            fullWidth
            required
            InputProps={{
              style: { height: '50px', borderWidth: '2px' },
            }}
            sx={{
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
        </Grid>

        {/* Contact Information Section */}
        <Grid item xs={12}>
          <Typography variant="h6">Contact Information</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            required
            InputProps={{
              style: { height: '50px', borderWidth: '2px' },
            }}
            sx={{
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
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Phone number"
            variant="outlined"
            fullWidth
            required
            InputProps={{
              style: { height: '50px', borderWidth: '2px' },
            }}
            sx={{
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
        </Grid>

        {/* Buttons aligned to the right */}
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#003300',
              '&:hover': { backgroundColor: '#002200' },
              padding: '10px 20px',
              marginRight: '10px',
            }}
          >
            Submit
          </Button>
          <Button
            variant="outlined"
            sx={{
              padding: '10px 20px',
              borderColor: '#003300',
              color: '#003300',
              '&:hover': { borderColor: '#002200', color: '#002200' },
            }}
          >
            Skip
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PersonalInfoForm;

