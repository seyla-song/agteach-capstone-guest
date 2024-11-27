import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { showDuration } from '../../utils/showDuration';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const CourseDetailContent = ({
  sections,
  numberOfVideos,
  courseLength,
}) => {
  const [sectionLimit, setSectionLimit] = useState(10);
  const [t] = useTranslation("global");

  const handleChangeSectionLimit = () => {
    setSectionLimit(sectionLimit + 10);
  };

  return (
    <Grid item xs={12}>
      <Stack gap={2} py={{xs:5, md:10}}>
        <Stack>
          <Typography variant="h4">{t('courseDetail.courseContent')}</Typography>
          <Typography variant="bxsr">
            {sections.length} {t('courseDetail.section')} • {numberOfVideos} {t('courseDetail.video')} •{' '}
            {showDuration(courseLength, t('courseDetail.min'), t('courseDetail.hour'))} {t('courseDetail.totalLength')}
          </Typography>
        </Stack>
        <Stack>
          {sections.slice(0, sectionLimit).map((section) => (
            <Accordion
              key={section.sectionId}
              sx={{ backgroundColor: 'grey.200', py: 2, boxShadow: 'none' }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography variant="bmdsm">{section.name}</Typography>
                {/* {showDuration(section.section.duration)} */}
              </AccordionSummary>
              {section.lectures.map((lecture) => {
                return (
                  <Stack key={lecture.lectureId} px={2}>
                    <AccordionDetails sx={{ bgcolor: 'white' }}>
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        py={2}
                      >
                        <Typography>{lecture.name}</Typography>
                        <Typography>
                          {showDuration(lecture.duration, t('courseDetail.min'), t('courseDetail.hour'))}
                        </Typography>
                      </Stack>
                      <Divider />
                    </AccordionDetails>
                  </Stack>
                );
              })}
            </Accordion>
          ))}
        </Stack>
        {sectionLimit < sections.length && (
          <Button onClick={handleChangeSectionLimit} variant="outlined">
            View ({sections.length - sectionLimit}) More
          </Button>
        )}
      </Stack>
    </Grid>
  );
};
