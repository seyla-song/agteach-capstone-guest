import { Link } from "react-router-dom";

function CartPage() {
  return (
    <>
      <h1>Cart page</h1>
      <Link to='/payment'>Pay</Link>
    </>
  );
}

export default CartPage;
