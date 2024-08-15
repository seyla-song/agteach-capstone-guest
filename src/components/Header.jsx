import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';

const HEADER_DATA = [
  { page: "My Learning", path: "mylearning" },
  { page: "Marketplace", path: "marketplace" },
  { page: "Become a member", path: "" },
  { page: "AgAI", path: "agai" },
  { page: "Wishlist", path: "wishlist" },
  { page: "Cart", path: "cart" },
  { page: "Login", path: "login" },
];

function Navigation() {
  return (
    <header>
      <nav>
        <ul>
          {HEADER_DATA.map((data) => (
            <li key={data.path}>
              <NavLink to={data.path}>{data.page}</NavLink>
              <Button href={data.path}>{data.page}</Button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;