import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import {
  Container,
  Stack,
  Typography,
  Grid,
  Button,
  IconButton,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import TitleComponent from '../components/product-detail-component/TitleComponent';
import DescriptionComponent from '../components/product-detail-component/DescriptionComponent';
import SellerComponent from '../components/product-detail-component/SellerComponent';
import ProductCarouselComponent from '../components/product-detail-component/ProductCarouselComponent';
import { CustomCarousel } from '../components/CustomCarousel';
import {
  useGetOneProductQuery,
  useGetRecommendedProductsQuery,
} from '../services/api/productApi';

import CustomModal from '../components/CustomModal';
import { addItemToCart } from '../features/cart/cartSlice';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CloseIcon from '@mui/icons-material/Close';

function ProductDetailPage() {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const [allRelatedProducts, setAllRelatedProducts] = useState([]);
  const [selectedProductInfo, setSelectedProductInfo] = useState({});
  const { data: relatedProducts } = useGetRecommendedProductsQuery(productId);
  const { data, isLoading, isError, error } = useGetOneProductQuery(productId);
  const [open, setOpen] = useState(false);
  const toggleModal = () => setOpen((prev) => !prev); // Toggle function

  // Find the product in the cart
  const cartItem = useSelector((state) =>
    state.cart.items.find(
      (item) => item.productId === selectedProductInfo.productId
    )
  );  

  const currentQuantity = cartItem?.quantity || 0;
  const availableStock = selectedProductInfo.quantity;
  

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
        title="Reach Quantity Limit"
        description="Sorry, you have reached the quantity limit. Please remove an item and try again."
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
                <Button onClick={handleAddToCart} variant="contained">
                  Add to cart
                </Button>
                <Button
                  variant="outlined"
                  endIcon={<FavoriteBorderOutlinedIcon />}
                >
                  Favourite
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
        <Stack spacing="30px" sx={{ mt: { xs: '50px', md: '160px' } }}>
          {allRelatedProducts.length > 0 && (
            <Stack>
              <Typography sx={{ typography: { xs: 'blgsm', md: 'h4' } }}>
                You might also want to buy these products
              </Typography>
              <CustomCarousel data={allRelatedProducts} cardVariant="product" />
            </Stack>
          )}
        </Stack>
      </Stack>
    </Container>
  );
}

export default ProductDetailPage;
