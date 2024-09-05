import {
  Box,
  Typography,
  Grid,
  Stack,
  Container,
  ButtonGroup,
  Button,
  TextField,
  IconButton,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CustomCartItem } from '../components/CustomCartItem';

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
          <Stack gap={3} pb={10}>
            <Stack>
              <Typography variant="h3">Purchased History</Typography>
              <Typography variant="bxsmd" color="dark.300">
                Found (5) Items
              </Typography>
            </Stack>
            <Stack>
              {purchasedHistory.map((item) => (
                <Accordion
                  elevation={0}
                  sx={{
                    borderWidth: 1,
                    borderColor: 'grey.300',
                    borderStyle: 'solid',
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Stack>
                      <Typography variant="bmdsm"> # {item.orderId}</Typography>
                      <Typography color="dark.300" variant="bxsr">
                        {item.date}
                      </Typography>
                    </Stack>
                  </AccordionSummary>
                  <AccordionDetails>
                    {item.items.map((item) => (
                      <Stack>
                        <Stack
                          color="dark.300"
                          direction="row"
                          justifyContent="space-between"
                        >
                          <Stack>
                            <Typography variant="bxsr">{item.name}</Typography>
                            <Typography variant="bxsr">
                              {item.price} x ({item.qty}) items
                            </Typography>
                          </Stack>
                          <Typography variant="bxsr">${item.total}</Typography>
                        </Stack>
                        <Divider sx={{ borderStyle: 'dotted', py: 1 }} />
                      </Stack>
                    ))}
                    <Stack
                      color={'dark.300'}
                      direction="row"
                      justifyContent="space-between"
                      pt={2}
                    >
                      <Typography variant="bmdsm">Total</Typography>
                      <Typography variant="bmdsm">
                        ${item.totalPrice}
                      </Typography>
                    </Stack>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Stack>
          </Stack>
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
