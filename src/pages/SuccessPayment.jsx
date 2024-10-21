import React, { useEffect } from 'react';
import {
  Typography,
  Grid,
  Stack,
  Box,
  Divider,
  Link,
  Button,
} from '@mui/material';
import { clearCart } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ReceiptElement from '../assets/receipt-element.svg';
import AgteachBg from '../assets/agteach-bg.svg';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

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
  const navigate = useNavigate();

  // Fetch session data using session ID
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get('session_id');

    if (sessionId) {
      dispatch(clearCart());
      return;
    }
    navigate('/marketplace');
  }, [dispatch, navigate]);

  return (
    <Grid container height="100vh">
      <Grid item xs={12} md={6}>
        <Stack alignItems="center" justifyContent="center" height="100%" p={3}>
          <Stack gap={1} alignItems="center">
            <CheckCircleOutlineIcon sx={{ fontSize: 60, color: 'teal.main' }} />
            <Typography variant="blgsm" textAlign="center" mt={2}>
              Thanks for your payment
            </Typography>
            <Typography textAlign="center">
              A payment to AgTeach will appear on your statement.
            </Typography>
            <Stack
              sx={{
                backgroundImage: `url(${ReceiptElement})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
              width="100%"
              height="100px"
              justifyContent="center"
            >
              <Stack direction="row" justifyContent="space-between" px={3}>
                <Typography variant="bssm" color="dark.200">
                  AgTeach
                </Typography>
                <Typography variant="bssm" color="dark.200">
                  - {data.paymentIntent.amount / 100}{' '}
                  {data.paymentIntent.currency.toUpperCase()}
                </Typography>
              </Stack>
            </Stack>

            <Stack width="100%" py={3} borderRadius="10px">
              <Divider />
              <SimpleRow
                label="Email"
                value={data.session.customer_details.email}
              />
              <SimpleRow
                label="Address"
                value={
                  data.session.customer_details.address.line1 +
                  data.session.customer_details.address.city +
                  data.session.customer_details.address.state
                }
              />

              <SimpleRow
                label="Postal Code"
                value={data.session.customer_details.address.postal_code}
              />
            </Stack>
          </Stack>
          <Link component={RouterLink} to="/" underline="none">
            <Button
              variant="outlined"
              endIcon={<ArrowCircleRightOutlinedIcon />}
              sx={{ width: 400 }}
            >
              Back to AgTeach
            </Button>
          </Link>

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
        </Stack>
      </Grid>
      <Grid item bgcolor="grey.100" xs={12} md={6} justifyContent="center">
        <Box
          height="100%"
          sx={{
            backgroundImage: `url(${AgteachBg})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
          p={3}
        />
      </Grid>
    </Grid>
  );
}

const SimpleRow = ({ label, value }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      py={2}
      sx={{
        borderBottomStyle: 'dotted',
        borderBottomWidth: '1px',
        borderBottomColor: 'grey.400',
      }}
    >
      <Typography variant="bxsmd">{label}: </Typography>
      <Typography variant="bxsmd">{value}</Typography>
    </Stack>
  );
};
