import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Stack, Button, Link } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { loadStripe } from '@stripe/stripe-js';
import { Link as RouterLink } from 'react-router-dom';

export default function SuccessPayment() {

  // const [sessionData, setSessionData] = useState(null);

  // // Fetch session data using session ID
  // useEffect(() => {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   const sessionId = urlParams.get('session_id');

  //   if (sessionId) {
  //     fetch(`/api/checkout-session?sessionId=${sessionId}`)
  //       .then((response) => response.json())
  //       .then((data) => setSessionData(data))
  //       .catch((error) => console.error('Error fetching session data:', error));
  //   }
  // }, []);

  // if (!sessionData) {
  //   return <Typography>Loading...</Typography>;
  // }

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
          <CheckCircleOutlineIcon sx={{ fontSize: 60, color: 'teal.main' }} />

          <Typography variant="blgsm" mt={2}>
            Thanks for your payment
          </Typography>
          <Typography variant="bsr" textAlign="center" color="dark.200" mt>
            A payment to AgTeach will appear on your statement.
          </Typography>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            maxWidth={400}
            borderRadius={3}
            width="100%"
            p={3}
            mt={2}
            sx={{
              border: '1px dashed #ccc',
            }}
          >
            <Typography variant="h3" color="dark.200">
              - 100.00 USD
            </Typography>
          </Stack>
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
