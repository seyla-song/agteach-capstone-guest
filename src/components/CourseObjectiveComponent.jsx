import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

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
  const [t] = useTranslation("global");

  return (
    <Stack
      gap
      bgcolor="primary.dark"
      color={"white"}
      padding={10}
      {...children}
    >
      <Stack gap maxWidth={500}>
        <Typography variant="h4">{t('courseVideo.whatYouWillLearnInThisCourse?')}</Typography>
        <Typography variant="bxsr">
          {courseObjective}
        </Typography>
      </Stack>
    </Stack>
  );
};
