import { Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

/**
 * A reusable button component that links to a specified path.
 *
 * @param {string} path - the URL path to link to
 * @param {string} color - the color of the button
 * @param {ReactNode} children - the content to be displayed inside the button
 * @return {JSX.Element} the button component
 */

export default function ButtonComponent({ path, color, children }) {
  return (
    <Link component={RouterLink} to={path}>
      <Button fullWidth variant="contained" color={color}>
        {children}
      </Button>
    </Link>
  );
}
