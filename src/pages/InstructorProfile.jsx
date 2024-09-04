import { Container, Divider } from "@mui/material";
import ProfilePage from "../components/InstructorProfile/ProfilePage.jsx";
import Courses from "../components/InstructorProfile/Coures.jsx";
import Products from "../components/InstructorProfile/Products.jsx";

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
