export const loadCartState = () => {
    try {
      const serializedState = localStorage.getItem('cart');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  };
  
  export const saveCartState = (cartState) => {
    try {
      const cartToSave = {
        items: cartState.items.map(item => ({
          productId: item.productId,
          quantity: item.quantity
        }))
      };
      const serializedState = JSON.stringify(cartToSave);
      localStorage.setItem('cart', serializedState);
    } catch {
      // Ignore write errors
    }
  };