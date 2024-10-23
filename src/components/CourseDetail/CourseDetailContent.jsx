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

export const CourseDetailContent = ({
  sections,
  numberOfVideos,
  courseLength,
}) => {
  const [sectionLimit, setSectionLimit] = useState(10);

  const handleChangeSectionLimit = () => {
    setSectionLimit(sectionLimit + 10);
  };

  return (
    <Grid item xs={12}>
      <Stack gap={2} py={5}>
        <Stack>
          <Typography variant="h4">Course Content</Typography>
          <Typography variant="bxsr">
            {sections.length} sections • {numberOfVideos} videos •{' '}
            {showDuration(courseLength)} total length
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
                          {showDuration(lecture.duration)}
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
