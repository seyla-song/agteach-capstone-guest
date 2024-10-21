import { useGetCustomerEnrollmentsQuery } from '../services/api/enrollmentApi';

import { Container } from '@mui/material';

import { CourseList } from '../components/index';

/**
 * A page that renders a list of courses the user is currently taking.
 *
 * @returns {React.ReactElement} A JSX element representing the course list page.
 */
export default function MyLearning() {
  const { data: courses, isLoading } = useGetCustomerEnrollmentsQuery();

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
      <CourseList data={courses?.enrollments || []} isLoading={isLoading} />
    </Container>
  );
}
