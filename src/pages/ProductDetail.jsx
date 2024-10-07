import { Container, Stack, Typography, Grid } from "@mui/material";
import ButtonComponent from "../components/product-detail-component/ButtonComponent";
import TitleComponent from "../components/product-detail-component/TitleComponent";
import DescriptionComponent from "../components/product-detail-component/DescriptionComponent";
import SellerComponent from "../components/product-detail-component/SellerComponent";
import ProductCarouselComponent from "../components/product-detail-component/ProductCarouselComponent";
import { CustomCarousel } from "../components/CustomCarousel";
import { useGetOneProductQuery, useGetCategoryProductsQuery } from "../services/api/productApi";
import { useEffect, useState } from "react";

/**
 * A React functional component that renders a product detail page.
 *
 * The component includes a product carousel, title, description, seller information,
 * and buttons for adding to cart and buying now. It also displays a custom carousel
 * with recommended products.
 *
 * @return {JSX.Element} The JSX element representing the product detail page.
 */

function ProductDetailPage() {
  const [allProducts, setAllProducts] = useState([]);
  const {data: relatedProducts, isLoading: isRelatedProductsLoading, isError: isRelatedProductsError, Error: relatedProductsError} = useGetCategoryProductsQuery();

  useEffect(() => {
    if (relatedProducts) {
      setAllProducts(relatedProducts.data)
    }
  }, [relatedProducts])

  return (
    <Container
      maxWidth="1420px"
      width="100%"
      sx={{
        display: "flex",
        justifyContent: "center",
        my: { xs: "50px", md: "125px" },
      }}
    >
      <Stack maxWidth="1420px" width="100%">
        <Grid container>
          <Grid item xs={12} md={5}>
            <ProductCarouselComponent />
          </Grid>
          <Grid item xs={0} md={1} />
          <Grid item xs={12} md={5}>
            <Stack spacing="20px">
              <TitleComponent title={""} price={""}/>
              <DescriptionComponent describtion={""}/>
              <SellerComponent seller={{}}/>
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
        </Grid>
        <Stack spacing="30px" sx={{ mt: { xs: "50px", md: "160px" } }}>
          <Typography sx={{ typography: { xs: "blgsm", md: "h4" } }}>
            You might also want to buy these product
          </Typography>
          <CustomCarousel data={allProducts} cardVariant="product" />
        </Stack>
      </Stack>
    </Container>
  );
}

export default ProductDetailPage;
