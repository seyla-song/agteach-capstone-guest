import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    /**
     * Add an item to the cart. If the item is already in the cart,
     * the quantity will be increased by one. Otherwise, the item
     * will be added to the cart with a quantity of one.
     * @param {{ productId: string }} action.payload
     *   - productId: The ID of the item to add to the cart.
     */
    addItemToCart: (state, action) => {
      const { productId, availableStock } = action.payload;
      const existingProduct = state.items.find(
        (item) => item.productId === productId
      );

      if (existingProduct) {
        if (existingProduct.quantity < availableStock) {
          existingProduct.quantity += 1;
        }
      } else {
        state.items.push({ productId, quantity: 1 });
      }
      state.total = state.items.reduce((sum, item) => sum + item.quantity, 0);
    },
    /**
     * Update the quantity of a product in the cart.
     * @param {{ productId: string, quantity: number }} action.payload
     *   - productId: The ID of the product to update.
     *   - quantity: The new quantity of the product.
     */
    updateItemQuantity: (state, action) => {
      const { productId, quantity } = action.payload;

      const item = state.items.find((item) => item.productId === productId);

      if (item) {
        item.quantity = quantity;
      }
      state.total = state.items.reduce((sum, item) => sum + item.quantity, 0);
    },

    /**
     * Remove an item from the cart.
     * @param {{ productId: string }} action.payload
     *   - productId: The ID of the item to remove from the cart.
     */
    removeItemFromCart: (state, action) => {
      console.log(action.payload);
      state.items = state.items.filter(
        (item) => item.productId !== action.payload.productId
      );
      state.total = state.items.reduce((sum, item) => sum + item.quantity, 0);
    },

    /**
     * Clear the cart by setting it to an empty array and removing the
     * associated localStorage entry.
     */
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const {
  addItemToCart,
  updateItemQuantity,
  removeItemFromCart,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
