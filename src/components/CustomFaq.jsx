import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Stack,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const CustomFaq = () => {
  return (
    <Stack gap={3} pb={5}>
      <Typography variant="h4" textAlign="center">
        Frequently Asked Questions
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
              <Typography color="dark.300">{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Stack>
    </Stack>
  );
};

const faqList = [
  {
    question: 'What exactly is AgTeach?',
    answer: `Simple! We're your one-stop platform for learning farming through video courses and buying the supplies you need. 
               Think of us as your farming teacher and supply store, all in one place.`,
  },
  {
    question: 'Is this for complete beginners?',
    answer: `Absolutely! Whether you've never planted a seed or you're an experienced farmer, we've got something for you. 
               We start with the basics and build up to advanced techniques.`,
  },
  {
    question: 'What kinds of farming videos do you have?',
    answer: `Everything from "How to Start Your First Garden" to advanced topics like:
               - Growing different crops
               - Taking care of your soil
               - Dealing with pests naturally
               - Setting up irrigation
               - Harvesting tips
               - And lots more!`,
  },
  {
    question: 'What can I buy in your marketplace?',
    answer: `All the essentials you learn about in our videos:
               - Seeds
               - Tools
               - Soil supplies
               - Plant food
               - Pest control
               - Safety gear`,
  },
  {
    question: 'Is my information safe?',
    answer: `100%! We use top-notch security to protect your data and payments. 
               We never share your personal info.`,
  },
];
