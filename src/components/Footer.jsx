import { Container, Link, Typography, Button, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Logo from "../assets/agteach-main-logo.svg";
import { teachAgtechURL } from "../utils/globalURL";
import { useTranslation } from "react-i18next";

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

export const Footer = () => {
  const [t] = useTranslation("global");
  return (
    <Stack backgroundColor="primary.dark" color="white">
      <Container sx={{ py: 5 }}>
        <Stack
          direction={{
            sx: "column",
            md: "row",
          }}
          pb={5}
          justifyContent="space-between"
          alignItems={"center"}
          gap={3}
        >
          <Stack textAlign={{ xs: "center", md: "left" }} maxWidth={250}>
            <Link component={RouterLink} to="/">
              <img width="94px" height="45px" src={Logo} alt="AgTeach Logo" />
            </Link>
            <Typography variant="bxsr">
              {t("footer.address")}
            </Typography>
          </Stack>
          <Stack direction={{ xs: "row" }} textAlign="center" gap={2}>
            {t("footer.footerMenu", { returnObjects: true }).map((data) => (
              <Link component={RouterLink} to={data.path} key={data.page}>
                <Typography variant="bxsr" color="common.white">
                  {data.page}
                </Typography>
              </Link>
            ))}
          </Stack>

          <Stack
            maxWidth={250}
            gap={2}
            textAlign={{ xs: "center", md: "left" }}
          >
            <Typography variant="blgsm">
              {t("footer.passion")}
            </Typography>
            <Link
              href={teachAgtechURL}
              target="_blank"
              color="common.white"
              underline="none"
            >
              <Button variant="contained" color="secondary">
                {t("homepage.becomeAnInstructor")}
              </Button>
            </Link>
          </Stack>
        </Stack>
        <Stack textAlign="center" width="100%">
          <Typography variant="btr">
            {t("footer.copyright")} |{" "}
            <Link
              component={RouterLink}
              to={"/terms-and-conditions"}
              target="_blank"
              sx={{ color: "common.white" }}
            >
              {t("footer.terms")}
            </Link>{" "}
            |{" "}
            <Link
              component={RouterLink}
              to={"/privacy-policy"}
              target="_blank"
              sx={{ color: "common.white" }}
            >
              {t("footer.privacy")}
            </Link>
          </Typography>
        </Stack>
      </Container>
    </Stack>
  );
};
