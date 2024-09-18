import { Container } from "@mui/material";
import HeroComponent from "../components/HomeComponent/CoreValueComponent";
import MemberComponent from "../components/MemberComponent";
import SearchBarComponent from "../components/SearchBarComponent";
import CarouselComponent from "../components/HomeComponent/CarouselComponent";
import search from "../assets/Home/search.png";

function HomePage() {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1420px",
        display: "flex",
        flexDirection: "column",
        gap: { xs: "50px", md: "120px" },
        padding: 0,
        margin: {
          xs: "auto auto 50px auto",
          md: "100px auto 100px auto",
        },
      }}
    >
      <SearchBarComponent backDrop={search} />
      {/* <CarouselComponent data="courses" cardVariant="course">
        Most people interested in this course
      </CarouselComponent> */}
      <HeroComponent />
      {/* <CarouselComponent data="products" cardVariant="product">
        Most people interested in this product
      </CarouselComponent> */}
      <MemberComponent />
    </Container>
  );
}

export default HomePage;
