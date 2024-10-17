import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Stack, Button, Link } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { loadStripe } from '@stripe/stripe-js';
import { Link as RouterLink } from 'react-router-dom';
import { clearCart } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);
export default function SuccessPayment() {
  const [sessionData, setSessionData] = useState(null);
  const dispatch = useDispatch();

  // Fetch session data using session ID
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get('session_id');

    if (sessionId) {
      dispatch(clearCart());
      const fetchSession = async () => {
        const stripe = await stripePromise;

        stripe.retrieveCheckoutSession(sessionId).then((result) => {
          if (result.error) {
            console.error('Error:', result.error);
          } else {
            setSessionData(result);
          }
        });
      };
      fetchSession();
    }
  }, [dispatch]);

  if (!sessionData) {
    return <Typography>Loading...</Typography>;
  }

  console.log(sessionData);

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
