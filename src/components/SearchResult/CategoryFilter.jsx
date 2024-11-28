import { Button, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const CategoryFilter = ({ category, handleChange }) => {
  const inactive = {
    backgroundColor: "dark.100",
    color: "dark.200",
  };
  const [t] = useTranslation("global");
  return (
    <Stack gap={2}>
      <Typography sx={{ typography: { xs: "bmdsm", sm: "blgsm" } }}>
        {t("searchResult.categories")}
      </Typography>
      <Stack direction="row" gap={1}>
        <Button
          variant="contained"
          disableElevation
          onClick={() => {
            if (category !== "course") handleChange("course");
          }}
          sx={{
            borderRadius: "45px",
            typography: { xs: "bsr", sm: "bsmr" },
            ...(category === "product" ? inactive : {}),
          }}
        >
          {t("searchResult.course")}
        </Button>
        <Button
          variant="contained"
          disableElevation
          onClick={() => {
            if (category !== "product") handleChange("product");
          }}
          sx={{
            borderRadius: "45px",
            typography: { xs: "bsr", sm: "bsmr" },
            ...(category === "course" ? inactive : {}),
          }}
        >
          {t("searchResult.product")}
        </Button>
      </Stack>
    </Stack>
  );
};

export default CategoryFilter;
