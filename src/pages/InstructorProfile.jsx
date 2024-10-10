import { Box, CircularProgress, Container, Divider } from "@mui/material";
import ProfilePage from "../components/InstructorProfile/ProfilePage.jsx";
import Courses from "../components/InstructorProfile/Coures.jsx";
import Products from "../components/InstructorProfile/Products.jsx";
import { useGetInstructorQuery } from "../services/api/instructorApi.js";
import { useParams } from "react-router-dom";

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
  //

  !isLoading ? console.log(instructorData) : console.log("Loading...");

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 10,
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  console.log("course", instructorData.courses);
  console.log(isError);
  // if (isError) {
  //   return <Navigate to="/error" />;
  // }

  return (
    <>
      <Container sx={{ alignItems: "center" }}>
        <ProfilePage instructorData={instructorData.instructor} />

        <Divider sx={{ my: 6 }} />

        <Courses
          courseData={instructorData.courses}
          instructorName={instructorData.instructor.lastName}
        />

        <Products
          productData={instructorData.products}
          instructorName={instructorData.instructor.lastName}
        />
      </Container>
    </>
  );
}
