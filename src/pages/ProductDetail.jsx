import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link, Route, useParams } from "react-router-dom";
import ButtonComponent from "../components/product-detail-component/ButtonComponent";
import TitleComponent from "../components/product-detail-component/TitleComponent";
import DescriptionComponent from "../components/product-detail-component/DescriptionComponent";
import SellerComponent from "../components/product-detail-component/SellerComponent";
import ProductCarouselComponent from "../components/product-detail-component/ProductCarouselComponent";
import { CustomCarousel } from "../components/CustomCarousel";

const products = [
  {
    name: "Grow Lights - LED or fluorescent grow lights",
    price: "$10",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Grow Lights - LED or fluorescent grow lights",
    price: "$15",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Grow Lights - LED or fluorescent grow lights",
    price: "$20",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Grow Lights - LED or fluorescent grow lights",
    price: "$25",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Grow Lights - LED or fluorescent grow lights",
    price: "$30",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Product 6",
    price: "$35",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Product 7",
    price: "$40",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Product 8",
    price: "$45",
    image: "https://via.placeholder.com/150",
  },
];

function ProductDetailPage() {
  const params = useParams();
  return (
    <Container
      maxWidth="1420px"
      width="100%"
      sx={{
        display: "flex",
        justifyContent: "center",
        my: { xs: "30px", md: "125px" },
      }}
    >
      {/* desktop */}
      <Stack
        maxWidth="1420px"
        width="100%"
        spacing="160px"
        sx={{ display: { xs: "none", md: "block" } }}
      >
        <Grid container direction="row">
          <Grid item size={5}>
            <ProductCarouselComponent />
          </Grid>
          <Grid size={1} />
          <Grid item size={5}>
            <Stack spacing="20px">
              <TitleComponent />
              <DescriptionComponent />
              <SellerComponent />
              <Stack spacing="10px">
                <ButtonComponent path="/cart" color="secondary">
                  Add to cart
                </ButtonComponent>
                <ButtonComponent path="/payment" color="primary">
                  Buy now
                </ButtonComponent>
              </Stack>
            </Stack>
          </Grid>
          <Grid size={1} />
        </Grid>
        <Stack spacing="30px">
          <Typography variant="h4">
            You might also want to buy these product
          </Typography>
          <CustomCarousel data={products} cardVariant="product" />
        </Stack>
      </Stack>

      {/* mobile */}
      <Stack width="100%" sx={{ display: { xs: "block", md: "none" } }} spacing='30px'>
        <SellerComponent />

        <TitleComponent />

        <ProductCarouselComponent />

        <DescriptionComponent />

        <Stack spacing="30px">
          <Typography variant="blgsm">
            You might also want to buy these product
          </Typography>
          <CustomCarousel data={products} cardVariant="product" />
        </Stack>
        <Stack spacing="10px">
          <ButtonComponent path="/cart" color="secondary">
            Add to cart
          </ButtonComponent>
          <ButtonComponent path="/payment" color="primary">
            Buy now
          </ButtonComponent>
        </Stack>
      </Stack>
    </Container>
  );
}

export default ProductDetailPage;
