/**
 * Load the cart state from local storage.
 * @returns {Object|undefined} The deserialized cart state if it exists, undefined otherwise.
 * The cart state is an object with an `items` property, which is an array of objects with `productId` and `quantity` properties.
 */
export const loadCartState = () => {
  try {
    const serializedState = localStorage.getItem('cart');
    if (serializedState === null) return undefined;

    const cartState = JSON.parse(serializedState);
    const total = cartState.items.reduce((sum, item) => sum + item.quantity, 0);

    return { ...cartState, total };
  } catch (err) {
    console.error('Could not load cart state:', err);
    return undefined;
  }
};

/**
 * Save the cart state to local storage.
 * @param {Object} cartState
 *  - items: An array of objects with productId and quantity properties.
 * @returns {undefined}
 */
export const saveCartState = (cartState) => {
  try {
    const cartToSave = {
      items: cartState.items.map((item) => ({
        productId: item.productId,
        quantity: item.quantity,
      })),
    };
    const serializedState = JSON.stringify(cartToSave);
    localStorage.setItem('cart', serializedState);
  } catch {
    // Ignore write errors
  }
};
