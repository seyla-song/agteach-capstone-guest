import { Box, Button, Grid, Typography, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from '@vidstack/react/player/layouts/default';

export const CourseDetailHero = () => {
  return (
    <Grid color={'white'} item xs={12}>
      <Grid alignItems={'center'} paddingY={15} container>
        <Grid item xs={5}>
          <Stack gap>
            <Typography variant="h2">$74.99</Typography>
            <Typography variant="h4">
              Indoor Gardening and Hydroponics
            </Typography>
            <Typography variant="bsr">
              Learn about various types of hydroponic setups, nutrient
              solutions, lighting, and plant care techniques hands-on projects
              to design and build a personal hydroponic garden
            </Typography>
            <Typography variant="bsr">
              Created by: <Link>Emily Greene</Link>
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={5}>
          <Stack display={'flex'} flexDirection={'column'} gap={1}>
            <MediaPlayer
              title="Sprite Fight"
              src="https://files.vidstack.io/sprite-fight/720p.mp4"
            >
              <MediaProvider />
              <DefaultVideoLayout
                thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
                icons={defaultLayoutIcons}
              />
            </MediaPlayer>
            <Stack display={'flex'} flexDirection={'column'} gap={1}>
              <Button color="secondary" variant="contained">
                Enroll Now
              </Button>
              <Button variant="contained">Add to Wishlist</Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};
