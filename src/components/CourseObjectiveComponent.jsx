import { Stack, Typography } from "@mui/material";

/**
 * A component that renders a course objectives section.
 *
 * It displays a heading, "What you learn in this course? What included", and
 * a list of objectives of the course in a Stack component.
 *
 * @param {React.ReactNode} children The children to render inside the component.
 * @returns {React.ReactElement} The course objectives component.
 */
export const CourseObjectiveComponent = (props, children) => {
  const { courseObjective } = props;
  return (
    <Stack
      gap
      bgcolor="primary.dark"
      color={"white"}
      padding={10}
      {...children}
    >
      <Stack gap maxWidth={500}>
        <Typography variant="h4">What you learn in this course?</Typography>
        <Typography variant="bxsr">
          {courseObjective}
          {/* ✅ How to mix and manage nutrient solutions to ensure optimal plant
          growth and health in a soil-free environment
        </Typography>
        <Typography variant="bxsr">
          ✅ How to design and build various types of hydroponic systems,
          including nutrient film techniques and deep water culture.
        </Typography>
        <Typography variant="bxsr">
          ✅ Techniques for managing light, temperature, and humidity to create
          the ideal conditions for indoor plant growth. */}
        </Typography>
      </Stack>
    </Stack>
  );
};
