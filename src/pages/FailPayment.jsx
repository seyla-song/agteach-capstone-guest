import React from 'react';
import { Box, Typography, Grid, Stack, Button, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export default function FailPayment() {
  return (
    <Box
      bgcolor="grey.100"
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid container maxWidth="lg" sx={{ padding: 4 }} bgcolor="white">
        <Grid
          item
          xs={12}
          sx={{
            padding: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <HighlightOffIcon sx={{ fontSize: 60, color: 'red.main' }} />

          <Typography textAlign='center' color="red.main" variant="blgsm" mt={2}>
            We have not received your payment
          </Typography>
          <Typography variant="bsr" textAlign="center" color="dark.200" mt>
            You payment did not complete, try again
          </Typography>
          <Box pt={3}>
            <Link component={RouterLink} to="/" underline="none">
              <Button variant="outlined" sx={{ width: 400 }}>
                Back to AgTeach
              </Button>
            </Link>
          </Box>

          <Stack direction="row" gap pt={2}>
            <Typography variant="bxsmd">POWERED BY STRIPE</Typography>
            <Typography variant="bxsmd">|</Typography>
            <Typography variant="bxsr">
              <Box
                component="a"
                href="#"
                color="dark.200"
                sx={{ textDecoration: 'none' }}
              >
                Terms and Conditon
              </Box>
            </Typography>
            <Typography variant="bxsr">
              <Box
                component="a"
                href="#"
                color="dark.200"
                sx={{ textDecoration: 'none' }}
              >
                Privacy Policy
              </Box>
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
