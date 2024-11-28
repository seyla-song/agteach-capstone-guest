import { Grid, Stack, Typography } from '@mui/material';
import TimerIcon from '@mui/icons-material/TimerOutlined';
import MovieIcon from '@mui/icons-material/MovieOutlined';
import { Fragment } from 'react';
import { showDuration } from '../../utils/showDuration';
import { useTranslation } from 'react-i18next';

export const CourseDetailHighlight = ({courseData}) => {
  let objectiveConent;
  const courseObjectives = courseData?.courseObjective?.includes('\r') ? courseData?.courseObjective?.replace('\r', '-+-&+-+ ').split('-+-&+-+ ') : courseData?.courseObjective;
  const [t] = useTranslation("global");
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
      <Stack py={{xs:5, md:10}}>
        <Grid container spacing={{md:2}}>
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
                  {t('courseDetail.whatYouWillLearnInThisCourse?')}
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
                <Typography variant="h4">{t('courseDetail.thisCourseIncludes')}:</Typography>
                <Stack direction="row" gap={2}>
                  <TimerIcon />
                  <Typography variant="bsr">{showDuration(courseData?.duration, t('courseDetail.min'), t('courseDetail.hour'))}</Typography>
                </Stack>
                <Stack direction="row" gap={2}>
                  <MovieIcon />
                  <Typography variant="bsr">{courseData?.numberOfVideo} {t('courseDetail.video')}</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Grid>
  );
};
