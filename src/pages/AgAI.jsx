import { Typography, Container, Stack, Alert, Chip, Box } from "@mui/material";
import theme from "../theme/theme";
import { ImageScan } from "../components/AgAi/ImageScan";
import ExpandableText from "../components/ExpandableText";
import { useTranslation } from "react-i18next";

function AgAiPage() {
  const zipUrl = `${process.env.PUBLIC_URL}/files/test_images.zip`; // Path to your ZIP file
  const zipName = "test_images.zip"; // Name the ZIP file for download

  const [t] = useTranslation("global");

  return (
    <Container sx={{ minHeight: "100vh", pb: 10 }}>
      <Stack gap={5} my={10}>
        <Stack>
          <Typography variant="h3">
            <Chip label="BETA" color="secondary" />
            {t("agai.plantDiseaseDetection")}
          </Typography>
          <Typography variant="bxsmd">
            {t("agai.plantDiseaseDetectionDescription")}
          </Typography>
        </Stack>
        <Stack
          border={`1px dotted ${theme.palette.grey[300]}`}
          alignItems="center"
          borderRadius={3}
          gap={3}
          p={5}
        >
          <Typography variant="bmdsm" color="initial">
            {t("agai.searchAnyPlantWithAgai")}
          </Typography>
          <ImageScan />
        </Stack>
        <Alert severity="info">
          <Typography> {t("agai.note")}</Typography>
          <Typography variant="bxsr">
            {t("agai.noteDescriptionFirst")}
            <a href={zipUrl} download={zipName}>
              {t("agai.download")}
            </a>
            <Box component="br" />
            {t("agai.noteDescriptionSecond")}
            <a href="https://www.kaggle.com/datasets/abdallahalidev/plantvillage-dataset/data">
              PlantVillage
            </a>
            {t("agai.noteDescriptionThird")}
            <ExpandableText
              initialLength={10}
              text={t("agai.noteDescriptionExpandableText")}
            />
          </Typography>
        </Alert>
      </Stack>
    </Container>
  );
}

export default AgAiPage;
