import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
  Container,
  Link,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Stack,
  Avatar,
} from '@mui/material';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { LogoutOutlined } from '@mui/icons-material';
import ProfilePlaceholder from '../assets/profile-placeholder.png';
import Logo from '../assets/agteach_logo.svg';
import { useLogoutMutation } from '../services/api/authApi';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useGetUserInfoQuery } from '../services/api/userApi';

const HEADER_MENU_DESKTOP = [
  { page: 'My Learning', path: 'mylearning' },
  { page: 'Marketplace', path: 'marketplace' },
  { page: 'AgAI', path: 'agai' },
];

const HEADER_MENU_MOBILE = [
  { page: 'My Learning', path: 'mylearning' },
  { page: 'Marketplace', path: 'marketplace' },
  { page: 'AgAI', path: 'agai' },
  // { page: 'Wishlist', path: 'wishlist' },
];

function Navigation() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();
  const { data: guestData } = useGetUserInfoQuery();

  const cartItemTotal = useSelector((state) => state.cart.totalQuantity);

  let data = {};
  if (guestData) {
    data = guestData.data;
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogoutDialogOpen = () => {
    setOpenLogoutDialog(true);
  };

  const handleLogoutDialogClose = () => {
    setOpenLogoutDialog(false);
  };

  const handleLogout = async () => {
    try {
      await logout(); // Call the logout mutation
      localStorage.removeItem('authToken');
      localStorage.removeItem('userInfo');
      localStorage.removeItem('signupStage');
      navigate('/auth/login'); // Redirect to login page
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  let accountStatus = null;

  if (!isAuth) {
    accountStatus = (
      <Link underline="none" component={RouterLink} to="/auth/login">
        <Button
          startIcon={
            <AccountCircleOutlinedIcon sx={{ color: 'common.black' }} />
          }
          variant="contained"
          sx={{
            backgroundColor: 'common.white',
            color: 'common.black',
            borderRadius: 50,
          }}
        >
          Login
        </Button>
      </Link>
    );
  } else {
    accountStatus = (
      <Box>
        <Button
          onClick={handleClick}
          sx={{
            minWidth: 'auto',
            p: 0.4,
            bgcolor: 'common.white',
            width: 'hug-content',
            borderRadius: '100%',
            borderColor: 'secondary.main',
            borderWidth: 2,
            borderStyle: 'solid',
          }}
        >
          <Avatar
            alt="AgTeach Profile"
            sx={{ width: 23, height: 23 }}
            src={data?.customer?.imageUrl + `?${new Date().getTime()}` || ProfilePlaceholder}
          />
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
              marginRight: 10,
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
              <Link
                to="/guest-profile"
                sx={{ textDecoration: 'none' }}
                component={RouterLink}
                onClick={handleClose}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ fontSize: '14px', textDecoration: 'none' }}
                >
                  {data.username}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: '12px', marginBottom: 1, color: 'dark.200' }}
                >
                  {data.email}
                </Typography>
              </Link>
            </div>
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              handleLogoutDialogOpen();
            }}
            sx={{ width: 'full' }}
          >
            <Typography
              component={Link}
              variant="bsr"
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: 'red.main',
                width: '100%',
                textDecoration: 'none',
              }}
            >
              <LogoutOutlined
                fontSize="small"
                sx={{ mr: 1, typography: 'bmdsm' }}
              />
              Log Out
            </Typography>
          </MenuItem>
        </Menu>

        {/* Logout Confirmation Dialog */}
        <Dialog
          open={openLogoutDialog}
          onClose={handleLogoutDialogClose}
          aria-labelledby="logout-dialog-title"
        >
          <DialogTitle id="logout-dialog-title" color="primary">
            Confirm Logout
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to log out?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleLogout} sx={{ color: 'red.main' }} autoFocus>
              Log Out
            </Button>
            <Button onClick={handleLogoutDialogClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </Box>
    );
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth={false} sx={{ maxWidth: '1420px' }}>
        <Toolbar
          disablegutters="true"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* logo */}
          <Box>
            <Link
              component={RouterLink}
              to="/"
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <img width="94px" height="45px" src={Logo} alt="AgTeach Logo" />
            </Link>
          </Box>

          {/* desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '2rem' }}>
            {HEADER_MENU_DESKTOP.map((data) => (
              <Link key={data.path} component={RouterLink} to={data.path}>
                <Typography variant="bsr" color="common.white">
                  {data.page}
                </Typography>
              </Link>
            ))}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {accountStatus}

            {/* menubar */}
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
                {cartItemTotal > 0 && (
                  <Typography
                    position="absolute"
                    top={10}
                    right={5}
                    bgcolor="red.main"
                    variant="btr"
                    borderRadius={100}
                    width={15}
                  >
                    {cartItemTotal}
                  </Typography>
                )}
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
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
                <MenuItem component={RouterLink} to="cart">
                  <Stack direction="row" gap={1} alignItems="center">
                    <Typography variant="bsr">Cart</Typography>
                    {cartItemTotal > 0 && (
                      <Typography
                        textAlign="center"
                        bgcolor="red.main"
                        variant="btr"
                        color="common.white"
                        borderRadius={100}
                        width={15}
                      >
                        {cartItemTotal}
                      </Typography>
                    )}
                  </Stack>
                </MenuItem>
              </Menu>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton
                sx={{ color: 'common.white' }}
                component={RouterLink}
                to="cart"
              >
                <ShoppingCartOutlinedIcon fontSize="small" />
                {cartItemTotal > 0 && (
                  <Typography
                    position="absolute"
                    top={2}
                    right={0}
                    bgcolor="red.main"
                    variant="btr"
                    borderRadius={100}
                    width={15}
                  >
                    {cartItemTotal}
                  </Typography>
                )}
              </IconButton>

              {/* <IconButton
                sx={{ color: 'common.white' }}
                component={RouterLink}
                to="wishlist"
              >
                <StarOutlineOutlinedIcon fontSize="small" />
              </IconButton> */}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navigation;
