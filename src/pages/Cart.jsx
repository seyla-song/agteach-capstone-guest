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
          <CustomCartItem />
          <CustomCartItem />
          <CustomCartItem />
          <CustomCartItem />
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

const CustomCartItem = () => {
  const [count, setCount] = useState(1);
  const handleChange = (event) => {
    setCount(Math.max(Number(event.target.value), 1));
  };
  return (
    <Stack gap={2} py>
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" alignItems="center" gap={2}>
          <Box
            component="img"
            src="https://via.placeholder.com/200"
            alt="Cart"
            height={130}
            width={130}
          />
          <Stack gap>
            <Stack direction="row">
              <Typography maxWidth={280} variant="bssm">
                Grow Lights - LED or florescent grow lights dsfsdf asdfasd
              </Typography>
              <IconButton
                sx={{ width: 18, height: 18 }}
                color="error"
                children={<DeleteIcon sx={{ width: 16, height: 16 }} />}
              />
            </Stack>
            <Typography variant="bxsr">ID 123ABCXX</Typography>
            <ButtonGroup size="small">
              <Button
                onClick={() => setCount((prev) => prev - 1)}
                disabled={count === 1}
              >
                <RemoveIcon fontSize="small" />
              </Button>
              <TextField
                size="small"
                sx={{ width: 80 }}
                type="tel"
                onChange={handleChange}
                value={count}
              />
              <Button onClick={() => setCount((prev) => prev + 1)}>
                <AddIcon fontSize="small" />
              </Button>
            </ButtonGroup>
          </Stack>
        </Stack>
        <Stack textAlign="right" alignItems="end" pt>
          <Typography variant="blgsm" color="initial">
            $20
          </Typography>
          <Typography variant="bxsr" color="initial">
            $10 X (2) items
          </Typography>
        </Stack>
      </Stack>
      <Divider sx={{ borderColor: 'grey.400', borderStyle: 'dotted' }} />
    </Stack>
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
