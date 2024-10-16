import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Thunk to fetch cart items from the backend
export const fetchCartItems = createAsyncThunk(
  'cart/fetchCartItems',
  async (_, { rejectWithValue }) => {
    try {
      // const response = await api.get('/cart');
      // return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount:0,
  isLoading: false,
  error: null,
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
      state.totalQuantity = state.items.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
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
      state.totalQuantity = state.items.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
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
      state.totalQuantity = state.items.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
    },

    /**
     * Clear the cart by setting it to an empty array and removing the
     * associated localStorage entry.
     */
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;

        // Calculate total total amount
        state.totalAmount = state.items.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );

        // Calculate total quantity
        state.totalQuantity = state.items.reduce(
          (sum, item) => sum + item.quantity,
          0
        );
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  addItemToCart,
  updateItemQuantity,
  removeItemFromCart,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
