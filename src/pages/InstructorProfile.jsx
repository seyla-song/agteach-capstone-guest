import { Navigate, useParams } from "react-router-dom";
import { useGetInstructorQuery } from "../services/api/instructorApi.js";

import { Container, Divider, Stack } from "@mui/material";

import {
  Courses,
  ProfilePage,
  Products,
  ContentLoading,
} from "../components/index.js";

/**
 * The InstructorProfile component renders a page with the instructor's profile,
 * courses they are teaching, and products they have created.
 *
 * @returns {JSX.Element} A JSX element representing the instructor's profile page.
 */
export default function InstructorProfile() {
  let { id } = useParams();
  const { data, isLoading, isError } = useGetInstructorQuery(id);

  const instructorData = !isLoading ? data : "";

  if (isLoading) {
    return <ContentLoading />;
  }

  if (isError) {
    return <Navigate to="/error" />;
  }

  return (
    <Container sx={{ minHeight: "100vh", mb: 10 }}>
      <ProfilePage instructorData={instructorData.instructor} />

      <Divider sx={{ my: 6 }} />

      <Stack gap={10}>
        <Courses
          courseData={instructorData.courses}
          instructorName={instructorData.instructor.lastName}
        />

        <Products
          productData={instructorData.products}
          instructorName={instructorData.instructor.lastName}
        />
      </Stack>
    </Container>
  );
}
