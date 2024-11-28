import React from "react";
import { Stack, Typography, Container, Divider } from "@mui/material";
import { useTranslation } from "react-i18next";

const TermsAndConditions = () => {
  const [t] = useTranslation("global");

  return (
    <Container>
      <Stack sx={{ padding: 4 }}>
        <Typography variant="blgsm" gutterBottom>
          {t("termsService.termsAndConditions")}
        </Typography>
        <Typography variant="bsr">
          {t("termsService.lastUpdated")}: Nov 19, 2024
        </Typography>

        <Divider sx={{ my: 5 }} />

        <Typography variant="blgsm" gutterBottom>
          1. {t("termsService.generalInformationTitle")}
        </Typography>
        <Typography variant="bsr" paragraph>
          {t("termsService.generalInformationP1", {
            url: "https://alphabeez.anbschool.org/",
          })}
        </Typography>
        <Typography variant="bsr" paragraph>
          {t("termsService.generalInformationP2")}
        </Typography>

        <Divider sx={{ my: 5 }} />

        <Typography variant="blgsm" gutterBottom>
          2. {t("termsService.userAccountsTitle")}
        </Typography>
        <Typography variant="bsr" paragraph>
          {t("termsService.userAccounts")}
        </Typography>

        <Divider sx={{ my: 5 }} />

        <Typography variant="blgsm" gutterBottom>
          3. {t("termsService.purchasesAndPaymentsTitle")}
        </Typography>
        <Typography variant="bsr" paragraph>
          {t("termsService.purchasesAndPayments")}
        </Typography>

        <Divider sx={{ my: 5 }} />

        <Typography variant="blgsm" gutterBottom>
          4. {t("termsService.prohibitedActivitiesTitle")}
        </Typography>
        <Typography variant="bsr" paragraph>
          {t("termsService.prohibitedActivities")}
        </Typography>

        <Divider sx={{ my: 5 }} />

        <Typography variant="blgsm" gutterBottom>
          5. {t("termsService.intellectualPropertyTitle")}
        </Typography>
        <Typography variant="bsr" paragraph>
          {t("termsService.intellectualProperty")}
        </Typography>

        <Divider sx={{ my: 5 }} />

        <Typography variant="blgsm" gutterBottom>
          6. {t("termsService.privacyPolicyTitle")}
        </Typography>
        <Typography variant="bsr" paragraph>
          {t("termsService.privacyPolicy")}
        </Typography>

        <Divider sx={{ my: 5 }} />

        <Typography variant="blgsm" gutterBottom>
          7. {t("termsService.disclaimerofLiabilityTitle")}
        </Typography>
        <Typography variant="bsr" paragraph>
          {t("termsService.disclaimerofLiability")}
        </Typography>

        <Divider sx={{ my: 5 }} />

        <Typography variant="blgsm" gutterBottom>
          8. {t("termsService.disputeResolutionTitle")}
        </Typography>
        <Typography variant="bsr" paragraph>
          {t("termsService.disputeResolution")}
        </Typography>

        <Divider sx={{ my: 5 }} />

        <Typography variant="blgsm" gutterBottom>
          9. {t("termsService.modificationstoTermsTitle")}
        </Typography>
        <Typography variant="bsr" paragraph>
          {t("termsService.modificationstoTermsTitle")}
        </Typography>

        <Divider sx={{ my: 5 }} />

        <Typography variant="blgsm" gutterBottom>
          10. {t("termsService.terminationofAccessTitle")}
        </Typography>
        <Typography variant="bsr" paragraph>
          {t("termsService.terminationofAccess")}
        </Typography>

        <Divider sx={{ my: 5 }} />

        <Typography variant="blgsm" gutterBottom>
          11. {t("termsService.contactUsTitle")}
        </Typography>
        <Typography variant="bsr" paragraph>
          {t("termsService.contactUs")}
        </Typography>
      </Stack>
    </Container>
  );
};

export default TermsAndConditions;
