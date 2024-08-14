import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to='mylearning'>My Learning</NavLink>
          </li>
          <li>
            <NavLink to='marketplace'>Marketplace</NavLink>
          </li>
          <li>
            <NavLink to=''>Become a member</NavLink>
          </li>
          <li>
            <NavLink to='agai'>AgAI</NavLink>
          </li>
          <li>
            <NavLink to='wishlist'>Wishlist</NavLink>
          </li>
          <li>
            <NavLink to='cart'>Cart</NavLink>
          </li>
          <li>
            <NavLink to='login'>Login</NavLink>
          </li>
          <li>
            <NavLink to='profile'>Profile</NavLink>
          </li>
          <li>
            <NavLink to='search'>Search Result</NavLink>
          </li>
          <li>
            <NavLink to='payment'>Payment</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation