import {
  Typography,
  Grid,
  Stack,
  Container,
  Button,
  Divider,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CustomCartItem } from '../components/Cart/CustomCartItem';
import { PurchasedHistory } from '../components/Cart/PurchasedHistory';
import { Elements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { usePurchasedMutation } from '../services/api/purchasedApi';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetCartItemsMutation } from '../services/api/cartApi';
import { CustomAlert } from '../components/CustomAlert';

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

function CartPage() {
  return (
    <Elements stripe={stripePromise}>
      <CartContent />
    </Elements>
  );
}

export default CartPage;

const CartContent = () => {
  const [purchased] = usePurchasedMutation();
  const [getCartItems, { data, isLoading, isError }] =
    useGetCartItemsMutation();
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const [snackbar, setSnackbar] = useState({
    label: '',
    open: false,
    severity: 'error',
  });

  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const data = await purchased({ cartItems }).unwrap();
      if (data.id) {
        const result = await stripe.redirectToCheckout({ sessionId: data.id });
        if (result.error) {
          console.error('Stripe checkout error', result.error);
        }
      } else {
        console.error('Failed to create checkout session');
      }
    } catch (err) {
      console.error('Error during checkout', err);
      err.status === 401 && navigate('/auth/login');
    } finally {
      setLoading(false);
    }
  };

  const handleGetCartItems = async () => {
    try {
      const res = await getCartItems(cart.items).unwrap();
      if (res.status === 'success') {
        console.log(res);
        return;
      }
    } catch (err) {
      console.log(err);
      setSnackbar({
        label: err.data.message,
        open: true,
        severity: 'error',
      });
    }
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: '1420px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: '50px', md: '120px' },
        pt: 10,
      }}
    >
      <CustomAlert
        label={snackbar.label}
        open={snackbar.open}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        severity={snackbar.severity}
      />
      <Grid container>
        <Grid item md={8} pr={3} pb={5} xs>
          {cart.items.map((item) => (
            <CustomCartItem
              key={item.productId}
              productId={item.productId}
              quantity={item.quantity}
              availableStock={item.availableStock}
              name={item.name}
              imageUrl={item.imageUrl}
              price={item.price}
            />
          ))}
        </Grid>
        <Grid item md={4} xs>
          <Stack
            bgcolor="common.white"
            p={3}
            borderRadius={3}
            height={180}
            justifyContent="space-between"
            sx={{
              borderColor: 'grey.300',
              borderStyle: 'solid',
              borderWidth: '1px',
            }}
          >
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="blgsm">Subtotal</Typography>
              <Typography variant="blgsm">${cart.totalAmount}</Typography>
            </Stack>
            <Divider />
            <Button
              size="large"
              fullWidth
              variant="contained"
              color="secondary"
              disabled={!stripe || loading}
              onClick={handleGetCartItems}
            >
              {isLoading ? 'Processing...' : 'Checkout'}
            </Button>
          </Stack>
        </Grid>
        <Grid item sx={{ py: 5 }} xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <PurchasedHistory data={purchasedHistory} />
        </Grid>
      </Grid>
    </Container>
  );
};

const purchasedHistory = [
  {
    orderId: 'ORD12345',
    date: 'Aug 12, 2022',
    items: [
      { name: 'Product 1', qty: 2, price: 10, total: 20 },
      { name: 'Product 2', qty: 3, price: 15, total: 45 },
      { name: 'Product 3', qty: 1, price: 20, total: 20 },
    ],
    totalPrice: 85,
  },
  {
    orderId: 'ORD67890',
    date: 'Aug 15, 2022',
    items: [
      { name: 'Product 4', qty: 2, price: 12, total: 24 },
      { name: 'Product 5', qty: 1, price: 25, total: 25 },
    ],
    totalPrice: 49,
  },
  {
    orderId: 'ORD34567',
    date: 'Aug 18, 2022',
    items: [
      { name: 'Product 6', qty: 3, price: 18, total: 54 },
      { name: 'Product 7', qty: 2, price: 22, total: 44 },
      { name: 'Product 8', qty: 1, price: 30, total: 30 },
    ],
    totalPrice: 128,
  },
  {
    orderId: 'ORD67891',
    date: 'Aug 15, 2022',
    items: [
      { name: 'Product 4', qty: 2, price: 12, total: 24 },
      { name: 'Product 5', qty: 1, price: 25, total: 25 },
    ],
    totalPrice: 49,
  },
  {
    orderId: 'ORD34568',
    date: 'Aug 18, 2022',
    items: [
      { name: 'Product 6', qty: 3, price: 18, total: 54 },
      { name: 'Product 7', qty: 2, price: 22, total: 44 },
      { name: 'Product 8', qty: 1, price: 30, total: 30 },
    ],
    totalPrice: 128,
  },
];


const cartItems = [
  {
    name: 'Fertilizer',
    imageUrl:
      'http://agteach-dev-assets.s3.ap-southeast-2.amazonaws.com/products/148/product-cover-image.jpeg',
    productId: 148,
    price: 12,
    quantity: 1,
  },
  {
    name: 'Wildflower Seed Mix',
    imageUrl:
      'http://agteach-dev-assets.s3.ap-southeast-2.amazonaws.com/products/150/product-cover-image.jpeg',
    productId: 150,
    price: 32,
    quantity: 2,
  },
  {
    name: '(Test)Garden Fork V2',
    imageUrl:
      'http://agteach-dev-assets.s3.ap-southeast-2.amazonaws.com/products/152/product-cover-image.jpeg',
    productId: 152,
    price: 234,
    quantity: 1,
  },
];
