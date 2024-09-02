import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const CourseAccordionComponent = ({ data }) => {
  return (
    <Stack>
      {data.map((course) => (
        <Accordion
          key={course.title}
          sx={{ backgroundColor: 'grey.200', py: 2, boxShadow: 'none' }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography variant="bmdsm">{course.title}</Typography> (
            {course.duration})
          </AccordionSummary>
          {course.topics.map((topic) => (
            <Stack px={2}>
              <AccordionDetails key={topic.title} sx={{ bgcolor: 'white' }}>
                <Stack direction="row" justifyContent="space-between" py={2}>
                  <Typography>{topic.title}</Typography>
                  <Typography>{topic.duration}</Typography>
                </Stack>
                <Divider />
              </AccordionDetails>
            </Stack>
          ))}
        </Accordion>
      ))}
    </Stack>
  );
};
