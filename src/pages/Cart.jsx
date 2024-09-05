import {
  Typography,
  Grid,
  Stack,
  Container,
  Button,
  Divider,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { CustomCartItem } from '../components/Cart/CustomCartItem';
import { PurchasedHistory } from '../components/Cart/PurchasedHistory';

function CartPage() {
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
      <Grid container>
        <Grid item md={8} pr={3} pb={5} xs>
          {orderItems.map((item) => (
            <CustomCartItem key={item.id} {...item} />
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
              <Typography variant="blgsm">$40.00</Typography>
            </Stack>
            <Divider />
            <Link to="/payment">
              <Button
                size="large"
                fullWidth
                variant="contained"
                color="secondary"
              >
                Checkout
              </Button>
            </Link>
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
}

export default CartPage;

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
];

const orderItems = [
  {
    id: 'PRD001',
    name: 'Grow Light - LED',
    price: 10,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 'PRD002',
    name: 'Grow Light - Fluorescent',
    price: 15,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 'PRD003',
    name: 'Grow Light - HPS',
    price: 20,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 'PRD004',
    name: 'Grow Light - LED Grow Tent',
    price: 25,
    image: 'https://via.placeholder.com/150',
  },
];
