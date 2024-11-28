import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Box, Typography, Grid, Stack, Button, Link } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import AgteachBg from '../assets/agteach-bg.svg';
import { useTranslation } from 'react-i18next';

export default function FailPayment() {
  const [t] = useTranslation('global');

  return (
    <Grid container height="100vh">
      <Grid item xs={12} md={6}>
        <Stack alignItems="center" justifyContent="center" height="100%" p={3}>
          <Stack alignItems="center">
            <HighlightOffIcon sx={{ fontSize: 60, color: 'red.main' }} />
            <Typography
              textAlign="center"
              color="red.main"
              variant="blgsm"
              mt={2}
            >
              {t('failPayment.weHaveNotReceivedYourPayment')}
            </Typography>
            <Typography variant="bsr" textAlign="center" color="dark.200" mt>
              {t('failPayment.youPaymentDidNotComplete')}
            </Typography>
          </Stack>
          <Link mt={2} component={RouterLink} to="/" underline="none">
            <Button
              variant="outlined"
              endIcon={<ArrowCircleRightOutlinedIcon />}
              sx={{ width: 400 }}
            >
             {t('failPayment.backToAgTeach')}
            </Button>
          </Link>

          <Stack direction="row" gap pt={2}>
            <Typography variant="bxsmd">{t('failPayment.poweredByStripe').toUpperCase()}</Typography>
            <Typography variant="bxsmd">|</Typography>
            <Typography variant="bxsr">
              <Box
                component="a"
                href="#"
                color="dark.200"
                sx={{ textDecoration: 'none' }}
              >
                <a href='https://stripe.com/legal/consumer'>{t('failPayment.termsAndConditions')}</a>
              </Box>
            </Typography>
            <Typography variant="bxsr">
              <Box
                component="a"
                href="#"
                color="dark.200"
                sx={{ textDecoration: 'none' }}
              >
                <a href='https://stripe.com/privacy'>{t('failPayment.privacyPolicy')}</a>
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
