import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')) || [],
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
    addItem: (state, action) => {
      const existingProduct = state.cart.find(
        (item) => item.productId === action.payload.productId
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ productId: action.payload.productId, quantity: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    /**
     * Update the quantity of a product in the cart.
     * @param {{ productId: string, quantity: number }} action.payload
     *   - productId: The ID of the product to update.
     *   - quantity: The new quantity of the product.
     */
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const product = state.cart.find((item) => item.productId === productId);

      if (product && quantity > 0) product.quantity = quantity;
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    /**
     * Clear the cart by setting it to an empty array and removing the
     * associated localStorage entry.
     */
    clearCart: (state) => {
      state.cart = [];
      localStorage.removeItem('cart');
    },
  },
});

export const { addItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
