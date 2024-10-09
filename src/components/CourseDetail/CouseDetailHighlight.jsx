import { Grid, Stack, Typography } from '@mui/material';
import TimerIcon from '@mui/icons-material/TimerOutlined';
import MovieIcon from '@mui/icons-material/MovieOutlined';
import { Fragment } from 'react';

export const CourseDetailHighlight = ({courseData}) => {
  let objectiveConent;
  const courseObjectives = courseData.course.courseObjective.includes('\r') ? courseData.course.courseObjective.replace('\r', '-+-&+-+ ').split('-+-&+-+ ') : courseData.course.courseObjective;

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
      <Stack py={10}>
        <Grid container spacing={2}>
          <Grid xs={7} item>
            <Stack
              gap
              justifyContent="center"
              alignItems="center"
              bgcolor="primary.dark"
              color={'white'}
              paddingY={10}
              paddingX={3}
            >
              <Stack gap maxWidth={500}>
                <Typography variant="h4">
                  What you learn in this course? What included
                </Typography>
                <Fragment>
                  {objectiveConent}
                </Fragment>
              </Stack>
            </Stack>
          </Grid>
          <Grid xs={5} item>
            <Stack
              color="primary.dark"
              bgcolor="grey.300"
              justifyContent="center"
              alignItems="center"
              height="100%"
              gap
            >
              <Stack px={3} gap>
                <Typography variant="h4">This course include:</Typography>
                <Stack direction="row" gap={2}>
                  <TimerIcon />
                  <Typography variant="bsr">30 hours</Typography>
                </Stack>
                <Stack direction="row" gap={2}>
                  <MovieIcon />
                  <Typography variant="bsr">60 videos</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Grid>
  );
};
