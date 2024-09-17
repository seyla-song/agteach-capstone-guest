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
import { teachAgtechURL } from "../utils/globalURL";
import { LogoutOutlined } from "@mui/icons-material";
import GuestProfilePicture from "../assets/profile-pic.jpg";

import { useState } from "react";
import Logo from "../assets/logo.png";

const HEADER_MENU_DESKTOP = [
  { page: "My Learning", path: "mylearning" },
  { page: "Marketplace", path: "marketplace" },
  { page: "AgAI", path: "agai" },
];

const HEADER_MENU_MOBILE = [
  { page: "My Learning", path: "mylearning" },
  { page: "Marketplace", path: "marketplace" },
  { page: "AgAI", path: "agai" },
  { page: "Wishlist", path: "wishlist" },
  { page: "Cart", path: "cart" },
];

function Navigation() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isAuth = true;
   
  let accountStatus = null;

  if (!isAuth) {
    accountStatus = 
      <Link underline="none" component={RouterLink} to="/auth/login">
        <Button
          startIcon={
            <AccountCircleOutlinedIcon sx={{ color: "common.black" }} />
          }
          variant="contained"
          sx={{
            backgroundColor: "common.white",
            color: "common.black",
            borderRadius: 50
          }}
        >
          Login
        </Button>
      </Link>
  } else {
    accountStatus = 
    <Box>

      <Button
        onClick={handleClick}
        variant="text"
        sx={{
          backgroundColor: "teal.main",
          color: "common.white",
          borderRadius: 50,
          borderColor: "common.white",
          borderStyle: "solid",
          borderWidth: 1,
          maxWidth: "100px",
          display: "flex",
          justifyContent: "start"
        }}
        
        >
          <img style={{width: "24px", borderRadius: "50%", marginRight: "5px"}} src={GuestProfilePicture} alt="profile picture" />
          John
      </Button>

      {/* Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 3,
          style: {
            borderRadius: 3,
            marginTop: 10,
            marginRight: 10
          },
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        disableScrollLock
      >
        <MenuItem>
          <div>
            <Link to="/guest-profile" sx={{ textDecoration: "none" }} component={RouterLink} onClick={handleClose}>
              <Typography variant="subtitle1" sx={{ fontSize: "14px", textDecoration: "none" }}>John Doe</Typography>
              <Typography variant="body2" sx={{ fontSize: "12px", marginBottom: 1, color: "dark.200"}}>
                johndoe123@gmail.com
              </Typography>
            </Link>
          </div>
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{width: "full"}}>
          <Link to="/auth/login" component={RouterLink} sx={{display: "flex",  alignItems: "center", color: 'red.main', width: "100%", textDecoration: "none"}}>
            <LogoutOutlined fontSize="small" style={{ marginRight: 8 }} />
            <Typography sx={{fontSize: "14px", flexGrow: 1}}>log out</Typography>
          </Link>
        </MenuItem>
      </Menu>
    </Box>
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth={false} sx={{ maxWidth: "1420px" }}>
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
        >
          {/* logo */}
          <Box>
            <Link component={RouterLink} to="/" sx={{ display: "flex", alignItems: "center" }}>
              <img width="94px" height="45px" src={Logo} alt="AgTeach Logo" />
            </Link>
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
            <Link href={teachAgtechURL} color="common.white" underline="none">
              <Typography variant="bsr">Become a member</Typography>
            </Link>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>

            {accountStatus}

            {/* menubar */}
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
                <MenuItem component={Link} href={teachAgtechURL} underline="none">
                  <Typography variant="bsr">
                    Become a member
                  </Typography>
                </MenuItem>
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

            <Box sx={{ display: { xs: "none", md: "flex" }}}>
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navigation;
