import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ExpandableText from "../../components/ExpandableText";

/**
 * A component that renders a course about section.
 *
 * It displays a heading, "Indoor Gardening and Hydroponics", and an expandable text
 * component with a description of the course, and a link to the instructor.
 *
 * @returns {React.ReactElement} The course about component.
 */
export const CourseAboutComponent = ({
  courseName,
  description,
  instructor,
}) => {
  const { instructorId } = instructor;
  const instructorName = `${instructor.firstName} ${instructor.lastName}`;
  return (
    <Stack gap={1}>
      <Typography variant="h3">{courseName}</Typography>
      <ExpandableText text={description} />
      <Typography variant="bxsr">
        Created by:{" "}
        <Link to={`/instructor-profile/${instructorId}`}>
          {" "}
          {instructorName}
        </Link>
      </Typography>
    </Stack>
  );
};
