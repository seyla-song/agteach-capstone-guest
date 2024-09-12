import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import { useState } from "react";
import Logo from "../assets/logo.png";

const HEADER_MENU_DESKTOP = [
  { page: "My Learning", path: "mylearning" },
  { page: "Marketplace", path: "marketplace" },
  { page: "AgAI", path: "agai" },
  { page: "Become a member", path: "" },
];

const HEADER_MENU_MOBILE = [
  { page: "My Learning", path: "mylearning" },
  { page: "Marketplace", path: "marketplace" },
  { page: "AgAI", path: "agai" },
  { page: "Become a member", path: "" },
  { page: "Wishlist", path: "wishlist" },
  { page: "Cart", path: "cart" },
  { page: "Login", path: "login" },
];

function Navigation() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth={false} sx={{ maxWidth: "1420px" }}>
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          {/* logo */}
          <Box sx={{ display: "flex" }}>
            <Link component={RouterLink} to="/">
              <img width="94px" height="45px" src={Logo} alt="AgTeach Logo" />
            </Link>
          </Box>

          {/* mobile */}
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {HEADER_MENU_MOBILE.map((data) => (
                <MenuItem
                  key={data.path}
                  onClick={handleCloseNavMenu}
                  component={RouterLink}
                  to={data.path}
                >
                  <Typography variant="bsr">{data.page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* desktop */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: "2rem" }}>
            {HEADER_MENU_DESKTOP.map((data) => (
              <Link key={data.path} component={RouterLink} to={data.path}>
                <Typography variant="bsr" color="common.white">
                  {data.page}
                </Typography>
              </Link>
            ))}
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link underline="none" component={RouterLink} to="/login">
              <Button
                startIcon={
                  <AccountCircleOutlinedIcon sx={{ color: "common.black" }} />
                }
                variant="contained"
                sx={{
                  backgroundColor: "common.white",
                  color: "common.black",
                  borderRadius: 50,
                }}
              >
                Login
              </Button>
            </Link>
            <IconButton
              sx={{ color: "common.white" }}
              component={RouterLink}
              to="cart"
            >
              <ShoppingCartOutlinedIcon fontSize="small" />
            </IconButton>
            <IconButton
              sx={{ color: "common.white" }}
              component={RouterLink}
              to="wishlist"
            >
              <StarOutlineOutlinedIcon fontSize="small" />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navigation;
