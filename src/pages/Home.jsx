import { Container } from "@mui/material";
import HeroComponent from "../components/HomeComponent/CoreValueComponent";
import MemberComponent from "../components/MemberComponent";
import SearchBarComponent from "../components/SearchBarComponent";
import CarouselComponent from "../components/HomeComponent/CarouselComponent";
import search from "../assets/Home/search.png";
import { useGetProductCarouselQuery } from "../services/api/productApi";
import { useGetCourseCarouselQuery } from "../services/api/courseApi";

function HomePage() {
  const { data:productsData } = useGetProductCarouselQuery();
  const { data:coursesData } = useGetCourseCarouselQuery();

  
  // Assuming the data structure includes images for courses and products
  const courses = coursesData?.data || []; // Adjust based on actual structure
  const products = productsData?.data || []; // Adjust based on actual structure
  console.log(products);

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

      {courses && (
        <CarouselComponent data={courses} cardVariant="course">
          Most people interested in this course
        </CarouselComponent>
      )}

      <HeroComponent />

      {products && (
        <CarouselComponent data={products} cardVariant="product">
          Most people interested in this product
        </CarouselComponent>
      )}

      <MemberComponent />
    </Container>
  );
}

export default HomePage;
