import {
  Container,
  Link,
  Box,
  Typography,
  Toolbar,
  AppBar,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Logo from "../assets/logo.png";

const FOOTER_MENU = [
  { page: "My Learning", path: "mylearning" },
  { page: "Marketplace", path: "marketplace" },
  { page: "Become a member", path: "" },
  { page: "AgAI", path: "agai" },
];

export default function Footer() {
  return (
    <AppBar position="static" sx={{height: '330px', display: 'flex', justifyContent: 'center'}} >
      <Container>
        <Toolbar sx={{ display: "flex", flexDirection: "column", gap: "50px"}}>
          <Box sx={{ display: "flex" }}>
            <Link component={RouterLink} to="/">
              <img width="94px" height="45px" src={Logo} alt="AgTeach Logo" />
            </Link>
          </Box>
          <Box sx={{ display: { md: "flex" }, gap: "2rem" }}>
            {FOOTER_MENU.map((data) => (
              <Link component={RouterLink} to={data.path}>
                <Typography variant="bmdr" color="common.white">
                  {data.page}
                </Typography>
              </Link>
            ))}
          </Box>
          <Typography variant="btr">
            © All right reserved AgTeach - 2024 | Terms and Service | Privacy
            Policy
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
