import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
  Divider,
  CircularProgress,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ItemsLoading } from '../ItemsLoading';

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
  console.log(data);
  return (
    <Stack gap={3} pb={10}>
      <Stack>
        <Typography variant="h3">Purchased History</Typography>
        {data < 1 ? (
          <ItemsLoading title="purchased" />
        ) : (
          <Typography variant="bxsmd" color="dark.300">
            Found ({data?.length}) Items
          </Typography>
        )}
      </Stack>
      {data && (
        <Stack>
          {data?.map((order) => (
            <Accordion
              key={order.purchase_id} // Ensure this is unique
              elevation={0}
              sx={{
                borderWidth: 1,
                borderColor: 'grey.300',
                borderStyle: 'solid',
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel-${order.purchased_id}-content`} // Unique ID for accessibility
                id={`panel-${order.purchased_id}-header`}
              >
                <Stack>
                  <Typography variant="bmdsm">
                    {' '}
                    # {order.purchased_id}
                  </Typography>
                  {/* <Typography color="dark.300" variant="bxsr">
                  {order.date}
                </Typography> */}
                </Stack>
              </AccordionSummary>
              <AccordionDetails>
                {/* Render purchased items with details */}
                {order.products.map((itemDetail) => (
                  <Stack key={itemDetail.product_id}>
                    {' '}
                    {/* Ensure itemDetail.id is unique */}
                    <Stack
                      color="dark.300"
                      direction="row"
                      justifyContent="space-between"
                    >
                      <Stack>
                        <Typography variant="bxsr">
                          {itemDetail.name}
                        </Typography>
                        <Typography variant="bxsr">
                          {itemDetail.price} x ({itemDetail.quantity}) items
                        </Typography>
                      </Stack>
                      <Typography variant="bxsr">
                        ${itemDetail.total}
                      </Typography>
                    </Stack>
                    <Divider sx={{ borderStyle: 'dotted', py: 1 }} />
                  </Stack>
                ))}
                {/* Render total price */}
                <Stack
                  color={'dark.300'}
                  direction="row"
                  justifyContent="space-between"
                  pt={2}
                >
                  <Typography variant="bmdsm">Total</Typography>
                  <Typography variant="bmdsm">${order.total_price}</Typography>
                </Stack>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      )}
    </Stack>
  );
};
