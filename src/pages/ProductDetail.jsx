import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { Container, Stack, Typography, Grid } from '@mui/material';
import ButtonComponent from '../components/product-detail-component/ButtonComponent';
import TitleComponent from '../components/product-detail-component/TitleComponent';
import DescriptionComponent from '../components/product-detail-component/DescriptionComponent';
import SellerComponent from '../components/product-detail-component/SellerComponent';
import ProductCarouselComponent from '../components/product-detail-component/ProductCarouselComponent';
import { CustomCarousel } from '../components/CustomCarousel';
import {
  useGetOneProductQuery,
  useGetRecommendedProductsQuery,
} from '../services/api/productApi';
import { Fragment } from 'react';

function ProductDetailPage() {
  const { productId } = useParams();

  const [allRelatedProducts, setAllRelatedProducts] = useState([]);
  const [selectedProductInfo, setSelectedProductInfo] = useState({});
  const { data: relatedProducts } = useGetRecommendedProductsQuery(productId);
  const { data, isLoading, isError, error } = useGetOneProductQuery(productId);

  useEffect(() => {
    if (relatedProducts) {
      setAllRelatedProducts(relatedProducts.data);
    }

    if (data) {
      setSelectedProductInfo(data.data);
    }

    window.scrollTo(0, 0);
  }, [relatedProducts, data, isLoading]);

  if (isLoading) {
    return (
      <div
        style={{
          width: '100%',
          height: 'calc(100vh - 68px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Loading...
      </div>
    );
  }
  if (isError) {
    if (error.status === 404)
      return (
        <div
          style={{
            width: '100%',
            height: 'calc(100vh - 68px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Product Not Found.
        </div>
      );
    else
      return (
        <div
          style={{
            width: '100%',
            height: 'calc(100vh - 68px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Error: {error?.message || 'An error occurred'}
        </div>
      );
  }
  return (
    <Container
      maxWidth="1420px"
      width="100%"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        my: { xs: '50px', md: '125px' },
      }}
    >
      <Stack maxWidth="1420px" width="100%">
        <Grid container>
          <Grid item xs={12} md={5}>
            <ProductCarouselComponent
              productImages={selectedProductInfo.product_images || []}
              productThumbnail={selectedProductInfo.imageUrl}
            />
          </Grid>
          <Grid item xs={0} md={1} />
          <Grid item xs={12} md={5}>
            <Stack spacing="20px">
              <TitleComponent
                title={selectedProductInfo.name || ''}
                price={selectedProductInfo.price || ''}
              />
              <DescriptionComponent
                description={selectedProductInfo.description || ''}
              />
              <SellerComponent seller={selectedProductInfo.instructor || {}} />
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
        <Stack spacing="30px" sx={{ mt: { xs: '50px', md: '160px' } }}>
          {allRelatedProducts.length > 0 && (
            <Fragment>
              <Typography sx={{ typography: { xs: 'blgsm', md: 'h4' } }}>
                You might also want to buy these products
              </Typography>
              <CustomCarousel data={allRelatedProducts} cardVariant="product" />
            </Fragment>
          )}
        </Stack>
      </Stack>
    </Container>
  );
}

export default ProductDetailPage;
