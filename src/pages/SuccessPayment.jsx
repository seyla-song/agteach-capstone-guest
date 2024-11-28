import React from 'react';
import { clearCart } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { useGetPaymentSessionQuery } from '../services/api/paymentApi';

import {
  Typography,
  Grid,
  Stack,
  Box,
  Divider,
  Link,
  Button,
} from '@mui/material';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

import ReceiptElement from '../assets/receipt-element.svg';
import AgteachBg from '../assets/agteach-bg.svg';

import { ContentLoading } from '../components/index';
import { useTranslation } from 'react-i18next';

export default function SuccessPayment() {
  const dispatch = useDispatch();
  const urlParams = new URLSearchParams(window.location.search);
  const sessionId = urlParams.get('session_id');
  const [t] = useTranslation('global');

  const { data, isLoading } = useGetPaymentSessionQuery(sessionId);

  if (sessionId) {
    dispatch(clearCart());
  }

  if (isLoading && !data) return <ContentLoading />;

  const { session, paymentIntent } = data || {};

  return (
    <Grid container height="100vh">
      <Grid item xs={12} md={6}>
        <Stack alignItems="center" justifyContent="center" height="100%" p={3}>
          <Stack gap={1} alignItems="center">
            <CheckCircleOutlineIcon sx={{ fontSize: 60, color: 'teal.main' }} />
            <Typography variant="blgsm" textAlign="center" mt={2}>
              {t('successPayment.thanksForYourPayment')}
            </Typography>
            <Typography textAlign="center">
              {t('successPayment.aPaymentToAgTeachWillAppearOnYourStatement')}
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
                  - {paymentIntent?.amount / 100}{' '}
                  {paymentIntent?.currency?.toUpperCase()}
                </Typography>
              </Stack>
            </Stack>

            <Stack width="100%" py={3} borderRadius="10px">
              <Divider />
              <SimpleRow label="Email" value={session.customer_details.email} />
              <SimpleRow
                label="Address"
                value={data.session.customer_details.address.country}
              />
            </Stack>
          </Stack>
          <Link component={RouterLink} to="/" underline="none">
            <Button
              variant="outlined"
              endIcon={<ArrowCircleRightOutlinedIcon />}
              sx={{ width: 400 }}
            >
              {t('successPayment.backToAgTeach')}
            </Button>
          </Link>

          <Stack direction="row" gap pt={2}>
            <Typography variant="bxsmd">{t('successPayment.poweredByStripe').toUpperCase()}</Typography>
            <Typography variant="bxsmd">|</Typography>
            <Typography variant="bxsr">
              <Box
                component="a"
                href="#"
                color="dark.200"
                sx={{ textDecoration: 'none' }}
              >
                <a href='https://stripe.com/legal/consumer'>{t('successPayment.termsAndConditions')}</a>
              </Box>
            </Typography>
            <Typography variant="bxsr">
              <Box
                component="a"
                href="#"
                color="dark.200"
                sx={{ textDecoration: 'none' }}
              >
                <a href='https://stripe.com/privacy'>{t('successPayment.privacyPolicy')}</a>
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
