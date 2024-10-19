import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate, useParams } from "react-router-dom";
import displayDuration from "../utils/displayDuration";

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
  const { coursesId, videoId } = useParams();
  const navigate = useNavigate();

  const handleSelectLecture = (lectureId) => {
    navigate(`/courses/${coursesId}/watch/${lectureId}`);
  };

// Combined function to calculate total duration and format the output
const getTotalFormattedDuration = (lectures) => {
  // Check if lectures is an array
  console.log(lectures);
  if (!Array.isArray(lectures)) {
      return 'Lectures data is invalid';
  }

  let totalSeconds = lectures.reduce((acc, { duration }) => {
      const { hours = 0, minutes = 0, seconds = 0 } = duration;  // Use default values if not present
      return acc + (hours * 3600) + (minutes * 60) + seconds;
  }, 0);

  const hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  // Formatting the result into a readable string
  const output = [];
  
  if (hours > 0) output.push(`${hours} hour${hours !== 1 ? 's' : ''}`);
  if (minutes > 0) output.push(`${minutes} minute${minutes !== 1 ? 's' : ''}`);
  if (seconds > 0 || output.length === 0)  // Always display seconds if no hours/minutes
      output.push(`${seconds} second${seconds !== 1 ? 's' : ''}`);
  
  return output.join(', ');
};



  return (
    <Stack>
      {/* Render each course as an accordion */}
      {data.map((course, courseIdx) => (
        <Accordion
          key={course.title}
          sx={{ backgroundColor: "grey.200", boxShadow: "none" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon fontSize="small" />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Stack>
              {/* Title and duration of the course */}
              <Typography variant="bssm">{course.name}</Typography>
              <Typography variant="bxsr">
                {getTotalFormattedDuration(course.lectures)}
              </Typography>
            </Stack>
          </AccordionSummary>
          {/* Each topic is rendered as a row inside the accordion */}
          {course.lectures.map((lecture, lectureIdx) => (
            <Stack px={2}>
              <AccordionDetails
                key={lecture.title}
                sx={{
                  cursor: "pointer",
                  bgcolor:
                    (lecture.lectureId === parseInt(videoId))
                      ? "grey.500"
                      : "white",
                }}
                onClick={() => handleSelectLecture(lecture.lectureId)}
              >
                <Stack direction="row" justifyContent="space-between" py={2}>
                  {/* Topic title and duration */}
                  <Typography variant="bsr">{lecture.name}</Typography>
                  <Typography variant="bsr">
                    {displayDuration(lecture.duration)}
                  </Typography>
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
