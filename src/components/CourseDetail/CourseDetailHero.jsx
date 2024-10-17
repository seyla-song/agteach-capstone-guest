import { Button, Grid, Typography, Stack, Link } from '@mui/material';
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from '@vidstack/react/player/layouts/default';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useStripe } from '@stripe/react-stripe-js';
import { useEnrollmentMutation } from '../../services/api/enrollmentApi';

export const CourseDetailHero = ({ courseData }) => {
  const [enrollment] = useEnrollmentMutation();
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();

  const navigate = useNavigate();

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const data = await enrollment({ courseId: 405 }).unwrap();

      console.log(data);

      if (data.id) {
        // Redirect to Stripe's checkout page using the session ID
        const result = await stripe.redirectToCheckout({ sessionId: data.id });

        if (result.error) {
          console.error('Stripe checkout error', result.error);
        }
      } else {
        console.error('Failed to create checkout session');
      }
    } catch (error) {
      console.error('Error during checkout', error);
      error.status === 401 && navigate('/auth/login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Grid color={'white'} item xs={12}>
      <Grid alignItems={'center'} paddingY={15} container>
        <Grid item xs={5}>
          <Stack gap>
            <Typography variant="h2">${courseData?.price}</Typography>
            <Typography variant="h4">{courseData?.name}</Typography>
            <Typography variant="bsr">{courseData?.description}</Typography>
            <Typography variant="bsr">
              Created by:{' '}
              <Link
                sx={{
                  color: 'white',
                  textUnderlineOffset: 3,
                  cursor: 'pointer',
                  ':hover': {
                    textDecoration: 'underline',
                  },
                }}
                onClick={() =>
                  navigate(`/instructor-profile/${courseData?.instructorId}`)
                }
              >
                {courseData?.instructor?.firstName +
                  ' ' +
                  courseData?.instructor?.lastName}
              </Link>
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={5}>
          <Stack display={'flex'} flexDirection={'column'} gap={1}>
            <MediaPlayer title="Sprite Fight" src={courseData?.previewVideoUrl}>
              <MediaProvider />
              <DefaultVideoLayout
                thumbnails={courseData?.thumbnailUrl}
                icons={defaultLayoutIcons}
              />
            </MediaPlayer>
            <Stack display={'flex'} flexDirection={'column'} gap={1}>
              <Link>
                <Button
                  onClick={handleCheckout}
                  fullWidth
                  color="secondary"
                  variant="contained"
                  disabled={!stripe || loading}
                >
                  <Typography
                    variant="bmd"
                    color={!stripe || loading ? 'common.white' : 'primary'}
                  >
                    {loading ? 'Processing...' : 'Enroll Now'}
                  </Typography>
                </Button>
              </Link>
              <Button
                sx={{
                  backgroundColor: 'tertiary.main',
                  color: 'tertiary.contrastText',
                }}
                variant="contained"
              >
                Add to Wishlist
              </Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};
