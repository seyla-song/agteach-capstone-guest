import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";

export const CustomFaq = () => {
  const [t] = useTranslation("global");
  const faqList = t("homepage.faqList", { returnObjects: true });
  console.log(faqList);
  return (
    <Stack gap={3} pb={5}>
      <Typography variant="h4" textAlign="center">
        {t("homepage.faqTitle")}
      </Typography>
      <Stack>
        {faqList.map((item) => (
          <Accordion sx={{ py: 1 }} elevation={false} key={item.question}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography variant="bmdsm">{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="dark.300" multiline>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Stack>
    </Stack>
  );
};
