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
} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/DeleteOutline';

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
        <Grid item md={8} pr={3} xs>
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
        <Grid item sx={{ py: 10 }} xs={12}>
          <Divider />
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
      <Divider sx={ { borderColor: 'grey.400', borderStyle: 'dotted' }} />
    </Stack>
  );
};
