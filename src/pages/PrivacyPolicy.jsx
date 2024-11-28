import React from "react";
import { Stack, Typography, Container, Divider } from "@mui/material";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const [t] = useTranslation("global");
  // const strong = <strong>Account Information</strong>;
  return (
    <Container>
      <Stack pt={10} minHeight="100vh">
        <Typography variant="blgsm" gutterBottom>
          {t("privacyPolicy.privacyPolicyTitle")}
        </Typography>
        <Typography variant="bsr" color="textSecondary">
          {t("privacyPolicy.lastUpdated")}: Nov 19, 2024
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="blgsm" gutterBottom>
          1. {t("privacyPolicy.informationWeCollectTitle")}
        </Typography>
        <Typography variant="bsr" paragraph>
          {t("privacyPolicy.informationWeCollectP1")}
        </Typography>
        <Typography variant="bsr" paragraph>
          <strong>{t("privacyPolicy.informationWeCollectTitle2")}</strong>
          {t("privacyPolicy.informationWeCollectP2")}
          <br />
          <strong>{t("privacyPolicy.informationWeCollectTitle3")}</strong>
          {t("privacyPolicy.informationWeCollectP3")}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="blgsm" gutterBottom>
          2. {t("privacyPolicy.howWeUseYourInformationTitle")}
        </Typography>
        <Typography variant="bsr" paragraph>
          {t("privacyPolicy.howWeUseYourInformationP1")}
        </Typography>
        <Typography variant="bsr" paragraph>
          {t("privacyPolicy.howWeUseYourInformationP2")}
          <br />
          {t("privacyPolicy.howWeUseYourInformationP3")}
          <br />
          {t("privacyPolicy.howWeUseYourInformationP4")}
          <br />
          {t("privacyPolicy.howWeUseYourInformationP5")}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="blgsm" gutterBottom>
          3. {t("privacyPolicy.howWeProtectYourInformationTitle")}
        </Typography>
        <Typography variant="bsr" paragraph>
          {t("privacyPolicy.howWeProtectYourInformationP1")}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="blgsm" gutterBottom>
          4. {t("privacyPolicy.sharingYourInformationTitle")}
        </Typography>
        <Typography variant="bsr" paragraph>
          {t("privacyPolicy.sharingYourInformationP1")}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="blgsm" gutterBottom>
          5. {t("privacyPolicy.yourRightsTitle")}
        </Typography>
        <Typography variant="bsr" paragraph>
          {t("privacyPolicy.yourRightsP1")}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="blgsm" gutterBottom>
          6. {t("privacyPolicy.cookiesAndTrackingTechnologiesTitle")}
        </Typography>
        <Typography variant="bsr" paragraph>
          {t("privacyPolicy.cookiesAndTrackingTechnologiesP1")}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="blgsm" gutterBottom>
          7. {t("privacyPolicy.changestoThisPolicyTitle")}
        </Typography>
        <Typography variant="bsr" paragraph>
          {t("privacyPolicy.changestoThisPolicyP1")}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="blgsm" gutterBottom>
          8. {t("privacyPolicy.contactUsTitle")}
        </Typography>
        <Typography variant="bsr" paragraph>
          {t("privacyPolicy.contactUsP1")}
        </Typography>
      </Stack>
    </Container>
  );
};

export default PrivacyPolicy;
