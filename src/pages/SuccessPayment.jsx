import React, { useEffect } from 'react';
import { Box, Typography, Grid, Stack, Button, Link } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Link as RouterLink } from 'react-router-dom';
import { clearCart } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';

const data = {
  session: {
    amount_total: 5000,
    currency: 'usd',
    customer_details: {
      email: 'customer@example.com',
      address: {
        line1: '123 Main St',
        city: 'San Francisco',
        state: 'CA',
        postal_code: '94111',
        country: 'US',
      },
    },
    payment_status: 'paid',
    status: 'complete',
  },
  paymentIntent: {
    amount: 5000,
    currency: 'usd',
    status: 'succeeded',
    payment_method_types: ['card'],
    charges: {
      data: [
        {
          id: 'ch_1JklMNopQrsTuv456',
          amount: 5000,
          currency: 'usd',
          payment_method_details: {
            card: {
              brand: 'visa',
              last4: '4242',
              exp_month: 12,
              exp_year: 2025,
            },
          },
          status: 'succeeded',
          receipt_url:
            'https://pay.stripe.com/receipts/acct_1H2I3J4K5L6/ch_1JklMNopQrsTuv456',
        },
      ],
    },
  },
};

export default function SuccessPayment() {
  const dispatch = useDispatch();

  // Fetch session data using session ID
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get('session_id');

    if (sessionId) {
      dispatch(clearCart());
    }
  }, [dispatch]);

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
              - {data.paymentIntent.amount / 100} {data.paymentIntent.currency.toUpperCase()}
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
