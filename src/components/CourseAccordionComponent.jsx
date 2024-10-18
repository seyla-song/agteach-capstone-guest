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
  const { coursesId } = useParams();
  const navigate = useNavigate();
  const couresContent = data;


  const handleSelectLecture = (lectureId) => {
    navigate(`/courses/${coursesId}/watch/${lectureId}`);
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
              {/* <Typography variant='bxsr'>{course.duration}</Typography> */}
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
                    (courseIdx === 0) & (lectureIdx === 0)
                      ? "grey.500"
                      : "white",
                }}
                onClick={()=>handleSelectLecture(lecture.lectureId)}
              >
                <Stack direction="row" justifyContent="space-between" py={2}>
                  {/* Topic title and duration */}
                  <Typography variant="bsr">{lecture.name}</Typography>
                  {/* <Typography variant='bsr'>{topic.title}</Typography> */}
                  {/* <Typography variant='bsr'>{lecture.duration}</Typography> */}
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
