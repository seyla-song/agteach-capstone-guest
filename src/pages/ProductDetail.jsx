import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  useGetOneProductQuery,
  useGetRecommendedProductsQuery,
} from '../services/api/productApi';

import {
  Container,
  Stack,
  Typography,
  Grid,
  Button,
  IconButton,
  Alert,
  AlertTitle,
  Box,
  Divider,
} from '@mui/material';
import { addItemToCart } from '../features/cart/cartSlice';

import CloseIcon from '@mui/icons-material/Close';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';

import {
  CustomCarousel,
  ContentLoading,
  TitleComponent,
  CustomModal,
  SellerComponent,
  ProductCarouselComponent,
  DescriptionComponent,
  CustomFaq,
} from '../components/index';

function ProductDetailPage() {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const [allRelatedProducts, setAllRelatedProducts] = useState([]);
  const [selectedProductInfo, setSelectedProductInfo] = useState({});
  const { data: relatedProducts } = useGetRecommendedProductsQuery(productId);
  const { data, isLoading } = useGetOneProductQuery(productId);
  const [open, setOpen] = useState(false);
  const toggleModal = () => setOpen((prev) => !prev); // Toggle function

  // Find the product in the cart
  const cartItem = useSelector((state) =>
    state.cart.items.find(
      (item) => item.productId === selectedProductInfo.productId
    )
  );

  const currentQuantity = cartItem?.quantity || 0;
  const availableStock = selectedProductInfo?.quantity;

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
    return <ContentLoading />;
  }

  const handleAddToCart = () => {
    try {
      if (currentQuantity < availableStock) {
        dispatch(
          addItemToCart({
            productId: selectedProductInfo.productId,
            name: selectedProductInfo.name,
            imageUrl: selectedProductInfo.imageUrl,
            price: selectedProductInfo.price,
            availableStock,
          })
        );
        return;
      }
      toggleModal();
    } catch (error) {
      console.error('Failed to add item to cart:', error);
    }
  };

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
      <CustomModal
        open={open}
        onClose={toggleModal} // Use the same function to close the modal
        title="Reach Stock Limit"
        description="Sorry, you have reached the available stock limit. You can still add other item to the cart."
      >
        <IconButton onClick={toggleModal} aria-label="delete">
          <CloseIcon />
        </IconButton>
      </CustomModal>
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
                {availableStock < 10 && availableStock > 0 && (
                  <Stack direction="row" gap={1} justifyContent="center">
                    <TimerOutlinedIcon color="error" />
                    <Typography color="error" variant="bmdr">
                      Hurry only ({availableStock}) item left !
                    </Typography>
                  </Stack>
                )}
                {availableStock > 0 ? (
                  <Button onClick={handleAddToCart} variant="contained">
                    Add to cart
                  </Button>
                ) : (
                  <Alert icon={<TakeoutDiningIcon />} severity="warning">
                    <AlertTitle>Out of Stock</AlertTitle>
                    Sorry, this item is out of stock. Favourite the product now
                    to buy later.
                  </Alert>
                )}
                {/* <Button
                  variant="outlined"
                  endIcon={<FavoriteBorderOutlinedIcon />}
                >
                  Favourite
                </Button> */}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
        <Stack spacing="30px" sx={{ mt: { xs: '50px', md: '160px' } }}>
          {allRelatedProducts.length > 0 && (
            <Stack gap={2}>
              <Typography
                sx={{
                  maxWidth: { xs: '250px', md: '300px' },
                  typography: { xs: 'blgsm', md: 'h4' },
                }}
              >
                You might also want to buy these products
              </Typography>
              <CustomCarousel data={allRelatedProducts} cardVariant="product" />
            </Stack>
          )}
        </Stack>

        <Divider sx={{ my: 10 }} />
        <CustomFaq />
      </Stack>
    </Container>
  );
}

export default ProductDetailPage;
