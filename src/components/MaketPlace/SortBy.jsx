import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
} from "@mui/material";
import { useTranslation } from "react-i18next";

export const SortByFilter = ({ sortBy, handleChange }) => {
  const [t] = useTranslation("global");
  return (
    <Box>
      <Typography sx={{ typography: { xs: "bmdsm", sm: "blgsm" } }}>
        {t("marketplace.sortBy")}
      </Typography>

      <FormControl>
        {/* Optionally, add a FormLabel if you need one */}
        {/* <FormLabel id="sort-by-label">Sort By</FormLabel> */}
        <RadioGroup
          aria-labelledby="sort-by-label"
          defaultValue="newest"
          name="radio-buttons-group"
          onChange={(e) => handleChange(e.target.value)}
        >
          <FormControlLabel
            control={<Radio />}
            label={t("marketplace.newest")}
            value="newest"
          />
          <FormControlLabel
            control={<Radio />}
            label={t("marketplace.oldest")}
            value="oldest"
          />
          <FormControlLabel
            control={<Radio />}
            label={t("marketplace.aToZ")}
            value="alphabet"
          />
          <FormControlLabel
            control={<Radio />}
            label={t("marketplace.priceLowToHigh")}
            value="plth"
          />
          <FormControlLabel
            control={<Radio />}
            label={t("marketplace.priceHighToLow")}
            value="phtl"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};
