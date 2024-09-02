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
          sx={{ backgroundColor: 'grey.200', boxShadow: 'none' }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon fontSize='small' />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Stack>
              <Typography variant="bssm">{course.title}</Typography>
              <Typography variant='bxsr'>{course.duration}</Typography>
            </Stack>
          </AccordionSummary>
          {course.topics.map((topic) => (
            <Stack px={2}>
              <AccordionDetails key={topic.title} sx={{ bgcolor: 'white' }}>
                <Stack direction="row" justifyContent="space-between" py={2}>
                  <Typography variant='bsr'>{topic.title}</Typography>
                  <Typography variant='bsr'>{topic.duration}</Typography>
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
