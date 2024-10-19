import { Container, Typography } from '@mui/material';
import CourseList from '../components/MyLearning/CourseList';
import { courses } from '../utils/carouselDummy';
import { useGetCustomerEnrollmentsQuery } from '../services/api/enrollmentApi';

/**
 * A page that renders a list of courses the user is currently taking.
 *
 * @returns {React.ReactElement} A JSX element representing the course list page.
 */
export default function MyLearning() {
  const { data: courses } = useGetCustomerEnrollmentsQuery();

  console.log(courses);

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: '1420px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        py: 10,
        gap: 5,
      }}
    >
      <CourseList data={courses?.enrollments || []} />
    </Container>
  );
}
