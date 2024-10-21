import React from 'react';
import { Box, Typography, Grid, Stack, Button, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import AgteachBg from '../assets/agteach-bg.svg';

export default function FailPayment() {
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
              We have not received your payment
            </Typography>
            <Typography variant="bsr" textAlign="center" color="dark.200" mt>
              You payment did not complete, try again
            </Typography>
          </Stack>
          <Link mt={2} component={RouterLink} to="/" underline="none">
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
