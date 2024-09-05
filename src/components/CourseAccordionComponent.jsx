import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

/**
 * A component that renders a list of courses as an accordion.
 *
 * @param {{title: string, duration: string, topics: {title: string, duration: string}[]}[]} data
 * An array of course objects:
 * - `title`: The title of the course.
 * - `duration`: The duration of the course.
 * - `topics`: An array of topic objects:
 *   - `title`: The title of the topic.
 *   - `duration`: The duration of the topic.
 * @returns {JSX.Element} A stack of accordions, each with a summary showing the
 * course title and duration, and a details section showing the topics as a
 * stack of rows with the topic title and duration.
 */
export const CourseAccordionComponent = ({ data }) => {
  return (
    <Stack>
      {/* Render each course as an accordion */}
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
              {/* Title and duration of the course */}
              <Typography variant="bssm">{course.title}</Typography>
              <Typography variant='bxsr'>{course.duration}</Typography>
            </Stack>
          </AccordionSummary>
          {/* Each topic is rendered as a row inside the accordion */}
          {course.topics.map((topic) => (
            <Stack px={2}>
              <AccordionDetails key={topic.title} sx={{ bgcolor: 'white' }}>
                <Stack direction="row" justifyContent="space-between" py={2}>
                  {/* Topic title and duration */}
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
