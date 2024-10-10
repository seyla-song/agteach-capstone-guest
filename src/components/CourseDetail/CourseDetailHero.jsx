import { Button, Grid, Typography, Stack, Link } from '@mui/material';
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from '@vidstack/react/player/layouts/default';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const CourseDetailHero = ({courseData}) => {

  const navigate = useNavigate();

  return (
    <Grid color={'white'} item xs={12}>
      <Grid alignItems={'center'} paddingY={15} container>
        <Grid item xs={5}>
          <Stack gap>
            <Typography variant="h2">${courseData.price}</Typography>
            <Typography variant="h4">
              {courseData.courseObjective}
            </Typography>
            <Typography variant="bsr">
              {courseData.description}
            </Typography>
            <Typography variant="bsr">
              Created by:{' '}
              <Link
                sx={{
                  color: 'white',
                  textUnderlineOffset: 3,
                  cursor: "pointer",
                  ":hover": {
                    textDecoration: "underline"
                  }
                }}
                onClick={() => navigate(`/instructor-profile/${courseData.instructorId}`)}
              >
                {courseData.instructorName || 'Emily Greene'}
              </Link>
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={5}>
          <Stack display={'flex'} flexDirection={'column'} gap={1}>
            <MediaPlayer
              title="Sprite Fight"
              src={courseData.previewVideoUrl}
            >
              <MediaProvider />
              <DefaultVideoLayout
                thumbnails={courseData.thumbnailUrl}
                icons={defaultLayoutIcons}
              />
            </MediaPlayer>
            <Stack display={'flex'} flexDirection={'column'} gap={1}>
              <Link to='/payment'>
                <Button fullWidth color="secondary" variant="contained">
                  Enroll Now
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
