import { Container, Divider } from "@mui/material";
import ProfilePage from "../components/InstructorProfile/ProfilePage.jsx";
import Courses from "../components/InstructorProfile/Coures.jsx";
import Products from "../components/InstructorProfile/Products.jsx";

/**
 * The InstructorProfile component renders a page with the instructor's profile,
 * courses they are teaching, and products they have created.
 *
 * @returns {JSX.Element} A JSX element representing the instructor's profile page.
 */
export default function InstructorProfile() {
  return (
    <>
      <Container sx={{alignItems: "center"}}>
        <ProfilePage />

        <Divider sx={{ my: 6 }} />

        <Courses />

        <Products />
      </Container>
    </>
  );
}
