import { Container, Divider } from "@mui/material";
import ProfilePage from "./ProfilePage.jsx";
import Courses from "./Coures.jsx";
import Products from "./Products.jsx";

export default function InstructorProfile() {
  return (
    <>
      <Container
        sx={{
          alignItems: "center",
        }}
      >
        <ProfilePage />

        <Divider sx={{ my: 6 }} />

        <Courses />
<Container></Container>
        <Products />
      </Container>
    </>
  );
}

