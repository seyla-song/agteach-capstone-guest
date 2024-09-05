import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
  Divider,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

/**
 * PurchasedHistory component is a reusable component
 * that renders a list of purchased history with accordion
 * that shows the details of the purchased items.
 *
 * @param {{ data: Array }} props
 *   - data is an array of objects that should contain the keys:
 *     - orderId: The order id of the purchased history.
 *     - date: The date of the purchased history.
 *     - items: An array of objects that contains the keys:
 *       - name: The name of the item.
 *       - price: The price of the item.
 *       - qty: The quantity of the item.
 *       - total: The total price of the item.
 *     - totalPrice: The total price of the purchased history.
 */
export const PurchasedHistory = ({ data }) => {
  return (
    <Stack gap={3} pb={10}>
      <Stack>
        <Typography variant="h3">Purchased History</Typography>
        <Typography variant="bxsmd" color="dark.300">
          Found (5) Items
        </Typography>
      </Stack>
      <Stack>
        {data.map((item) => (
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
              {/* render purchased items with details */}
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
              {/* render total price */}
              <Stack
                color={'dark.300'}
                direction="row"
                justifyContent="space-between"
                pt={2}
              >
                <Typography variant="bmdsm">Total</Typography>
                <Typography variant="bmdsm">${item.totalPrice}</Typography>
              </Stack>
            </AccordionDetails>
          </Accordion>
        ))}
      </Stack>
    </Stack>
  );
};
