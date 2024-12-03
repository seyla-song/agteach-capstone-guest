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
import { useTranslation } from "react-i18next";

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
  const [t] = useTranslation("global");

  const handleSelectLecture = (lectureId) => {
    navigate(`/courses/${coursesId}/watch/${lectureId}`);
  };

  // Combined function to calculate total duration and format the output
  const getTotalFormattedDuration = (lectures) => {
    // Check if lectures is an array
    if (!Array.isArray(lectures)) {
      return "Lectures data is invalid";
    }

    let totalSeconds = lectures.reduce((acc, { duration }) => {
      const { hours = 0, minutes = 0, seconds = 0 } = duration; // Use default values if not present
      return acc + hours * 3600 + minutes * 60 + seconds;
    }, 0);

    const hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    // Formatting the result into a readable string
    const output = [];

    if (hours > 0) output.push(`${hours} ${t("courseVideo.hour")}`);
    if (minutes > 0) output.push(`${minutes} ${t("courseVideo.minute")}`);
    if (seconds > 0 || output.length === 0)
      // Always display seconds if no hours/minutes
      output.push(`${seconds} ${t("courseVideo.second")}`);

    return output.join(", ");
  };

  return (
    <Stack>
      {/* Render each course as an accordion */}
      {data.map((section, sectionIdx) => (
        <Accordion
          key={sectionIdx}
          sx={{ backgroundColor: "grey.200", boxShadow: "none" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon fontSize="small" />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Stack>
              {/* Title and duration of the section */}
              <Typography variant="bssm">{section.name}</Typography>
              <Typography variant="bxsr">
                {getTotalFormattedDuration(section.lectures)}
              </Typography>
            </Stack>
          </AccordionSummary>
          {/* Each topic is rendered as a row inside the accordion */}
          {section.lectures.map((lecture, lectureIdx) => (
            <Stack px={2} key={lectureIdx}>
              <AccordionDetails
                sx={{
                  cursor: "pointer",
                  bgcolor:
                    lecture.lectureId === parseInt(videoId)
                      ? "grey.500"
                      : "white",
                }}
                onClick={() => handleSelectLecture(lecture.lectureId)}
              >
                <Stack direction="column" justifyContent="space-between" py={2}>
                  {/* Topic title and duration */}
                  <Typography variant="bsr">{lecture.name}</Typography>
                  <Typography variant="bxsr">
                    {displayDuration({
                      hours: lecture.duration.hours || 0,
                      minutes: lecture.duration.minutes || 0,
                      seconds: lecture.duration.seconds || 0,
                      hourLabel: t("courseVideo.hour"),
                      minuteLabel: t("courseVideo.minute"),
                      secondLabel: t("courseVideo.second"),
                    })}
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
