import React from 'react';
import {
  Container,
  TextField,
  Typography,
  Button,
  Box,
  Stack,
  Grid,
} from '@mui/material';
import { Link } from 'react-router-dom';

const PersonalInfoForm = () => {
  return (
    <Box>
      <Container maxWidth="sm">
        <Stack
          paddingTop={{ xs: 4, md: 8 }}
          alignItems="center"
          spacing={4}
        >
          {/* Logo */}
          <Link to="/">
            <img
              src="/icon/agteach.png"
              alt="Logo"
              style={{ maxHeight: '100px', maxWidth: '100%' }}
            />
          </Link>

          <Grid container spacing={4}>
            {/* Personal Information */}
            <Grid item xs={11.5}>
              <Typography variant="h5" gutterBottom>
                Personal Information
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                <TextField
                  label="First name"
                  variant="outlined"
                  required
                  fullWidth
                />
                <TextField
                  label="Last name"
                  variant="outlined"
                  required
                  fullWidth
                />
              </Box>
            </Grid>

            {/* Contact Information */}
            <Grid item xs={11.5}>
              <Typography variant="h5" gutterBottom>
                Contact Information
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                <TextField
                  label="Email"
                  variant="outlined"
                  required
                  fullWidth
                  sx={{ minHeight: '56px', fontSize: '1rem' }}
                />
                <TextField
                  label="Phone number"
                  variant="outlined"
                  required
                  fullWidth
                  sx={{ minHeight: '56px', fontSize: '1rem' }}
                />
              </Box>
            </Grid>
          </Grid>

          {/* Buttons aligned to the right on all screen sizes */}
          <Box sx={{ display: 'flex', justifyContent: { xs: 'flex-end', md: 'flex-end' }, width: '100%' }}>
            <Stack direction="row" spacing={2}>
              <Button
                variant="outlined"
                sx={{
                  padding: { xs: '8px 20px', md: '8px 35px' },
                  borderColor: '#003300',
                  color: '#003300',
                  '&:hover': { borderColor: '#002200', color: '#002200' },
                }}
              >
                Skip
              </Button>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#003300',
                  '&:hover': { backgroundColor: '#002200' },
                  padding: { xs: '8px 20px', md: '8px 35px' },
                }}
              >
                Submit
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default PersonalInfoForm;









