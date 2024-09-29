import {
  Container,
  Link,
  Box,
  Typography,
  Toolbar,
  AppBar,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Logo from "../assets/agteach_logo.svg";
import theme from "../theme/theme";
import { teachAgtechURL } from "../utils/globalURL";

const FOOTER_MENU = [
  { page: "My Learning", path: "/mylearning" },
  { page: "Marketplace", path: "/marketplace" },
  { page: "AgAI", path: "/agai" },
];

/**
 * Renders the Footer component which displays the AgTeach logo, navigation links,
 * and copyright information.
 *
 * @return {JSX.Element} The rendered Footer component.
 */

export default function Footer() {
  return (
    <AppBar
      position="static"
      sx={{
        height: "330px",
        display: "flex",
        justifyContent: "center",
        padding: 0,
      }}
    >
      <Container maxWidth={false}>
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "50px",
            padding: 0,
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Link component={RouterLink} to="/">
              <img width="94px" height="45px" src={Logo} alt="AgTeach Logo" />
            </Link>
          </Box>
          <Container maxWidth="sm" sx={{ padding: 0 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              {FOOTER_MENU.map((data) => (
                <Link component={RouterLink} to={data.path} key={data.page}>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: theme.typography.bxsr.fontSize,
                        sm: theme.typography.bsr.fontSize,
                        md: theme.typography.bmdr.fontSize,
                      },
                    }}
                    color="common.white"
                  >
                    {data.page}
                  </Typography>
                </Link>
              ))}
              <Link
                href={teachAgtechURL}
                color="common.white"
                underline="none"
              >
                <Typography variant="bsr">Become a member</Typography>
              </Link>
            </Box>
          </Container>
          <Typography variant="btr" sx={{ textAlign: "center" }}>
            © All right reserved AgTeach - 2024 | Terms and Service | Privacy
            Policy
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
