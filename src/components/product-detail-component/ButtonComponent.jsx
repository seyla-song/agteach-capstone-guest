import { Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function ButtonComponent({ path, color, children }) {
  return (
      <Link component={RouterLink} to={path}>
        <Button fullWidth variant="contained" color={color}>
          {children}
        </Button>
      </Link>
  );
}
