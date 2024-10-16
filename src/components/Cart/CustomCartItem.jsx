import { useState } from 'react';
import {
  Stack,
  TextField,
  Box,
  IconButton,
  Typography,
  ButtonGroup,
  Button,
  Divider,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

/**
 * A reusable React component that renders a single item in the cart.
 *
 * @param {{ name: string, id: string, price: number, image: string }} props
 *   - name: The name of the product.
 *   - id: The id of the product.
 *   - price: The price of the product.
 *   - image: The image of the product.
 *
 * @returns {React.ReactElement} A JSX element that renders the cart item.
 */
export const CustomCartItem = ({ name, id, price, image }) => {
  const [count, setCount] = useState(1);
  const handleChange = (event) => {
    setCount(Math.max(Number(event.target.value), 1));
  };
  return (
    <Stack gap={2} py={1}>
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" alignItems="center" gap={2}>
          <Box
            component="img"
            src={image}
            alt="Cart"
            height={130}
            width={130}
          />
          <Stack gap={1}>
            <Stack direction="row">
              <Typography maxWidth={280} variant="bssm">
                {name}
              </Typography>
              <IconButton
                sx={{ width: 18, height: 18 }}
                color="error"
                children={<DeleteIcon sx={{ width: 16, height: 16 }} />}
              />
            </Stack>
            <Typography variant="bxsr">{id}</Typography>
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
        <Stack textAlign="right" alignItems="end" pt={1}>
          <Typography variant="blgsm" color="initial">
            ${price * count}
          </Typography>
          <Typography variant="bxsr" color="initial">
            ${price} X ({count}) items
          </Typography>
        </Stack>
      </Stack>
      <Divider sx={{ borderColor: 'grey.400', borderStyle: 'dotted' }} />
    </Stack>
  );
};
