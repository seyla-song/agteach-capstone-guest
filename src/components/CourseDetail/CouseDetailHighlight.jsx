import { Grid, Stack, Typography } from '@mui/material';
import TimerIcon from '@mui/icons-material/TimerOutlined';
import MovieIcon from '@mui/icons-material/MovieOutlined';
import { Fragment } from 'react';
import { showDuration } from '../../utils/showDuration';

export const CourseDetailHighlight = ({courseData}) => {
  let objectiveConent;
  const courseObjectives = courseData?.courseObjective?.includes('\r') ? courseData?.courseObjective?.replace('\r', '-+-&+-+ ').split('-+-&+-+ ') : courseData?.courseObjective;

  if (Array.isArray(courseObjectives)) {
    objectiveConent = courseObjectives.map((objective, idx) => {
      return <Typography variant="bxsr" key={idx}>
      ✅ {objective}
    </Typography>
    })
  }
  else {
    objectiveConent = `✅ ${courseObjectives}`;
  }
  return (
    <Grid item xs={12}>
      <Stack py={5}>
        <Grid container spacing={2}>
          <Grid xs={12} md={7} item>
            <Stack
              gap={1}
              justifyContent="center"
              alignItems="center"
              bgcolor="primary.dark"
              color={'white'}
              paddingY={10}
              paddingX={3}
            >
              <Stack gap={1} maxWidth={500}>
                <Typography variant="h4">
                  What you learn in this course? What included
                </Typography>
                <Fragment>
                  {objectiveConent}
                </Fragment>
              </Stack>
            </Stack>
          </Grid>
          <Grid xs={12} md={5} item>
            <Stack
              color="primary.dark"
              bgcolor="grey.300"
              justifyContent="center"
              alignItems="center"
              height="100%"
              gap={1}
              paddingY={10}
            >
              <Stack px={3} gap={1}>
                <Typography variant="h4">This course include:</Typography>
                <Stack direction="row" gap={2}>
                  <TimerIcon />
                  <Typography variant="bsr">{showDuration(courseData?.duration)}</Typography>
                </Stack>
                <Stack direction="row" gap={2}>
                  <MovieIcon />
                  <Typography variant="bsr">{courseData?.numberOfVideo} videos</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Grid>
  );
};
