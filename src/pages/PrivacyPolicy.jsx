import React from 'react';
import { Stack, Typography, Container, Divider } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Container>
      <Stack pt={10} minHeight='100vh'>
        <Typography variant="blgsm" gutterBottom>
          Privacy Policy
        </Typography>
        <Typography variant="bsr" color="textSecondary">
          Last Updated: Nov 19, 2024
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="blgsm" gutterBottom>
          1. Information We Collect
        </Typography>
        <Typography variant="bsr" paragraph>
          When you use our website, we collect the following information:
        </Typography>
        <Typography variant="bsr" paragraph>
          - <strong>Account Information:</strong> Username, date of birth, email, password, phone
          number, first name, last name, city, and address when you register.
          <br />
          - <strong>Usage Data:</strong> Information about your interactions, such as IP address,
          browser type, and accessed pages.
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="blgsm" gutterBottom>
          2. How We Use Your Information
        </Typography>
        <Typography variant="bsr" paragraph>
          We use the collected information for:
        </Typography>
        <Typography variant="bsr" paragraph>
          - Managing accounts and processing transactions.
          <br />
          - Sending confirmations, updates, and optional promotional content.
          <br />
          - Improving website functionality.
          <br />
          - Complying with legal obligations.
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="blgsm" gutterBottom>
          3. How We Protect Your Information
        </Typography>
        <Typography variant="bsr" paragraph>
          We use encryption, access controls, and regular monitoring to protect your personal data.
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="blgsm" gutterBottom>
          4. Sharing Your Information
        </Typography>
        <Typography variant="bsr" paragraph>
          We do not share your personal data except with payment processors (e.g., Stripe) or when
          required by law.
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="blgsm" gutterBottom>
          5. Your Rights
        </Typography>
        <Typography variant="bsr" paragraph>
          You can access, update, or delete your data by contacting us at [Insert Contact Email].
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="blgsm" gutterBottom>
          6. Cookies and Tracking Technologies
        </Typography>
        <Typography variant="bsr" paragraph>
          We use cookies to improve your experience. Manage cookies via your browser settings.
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="blgsm" gutterBottom>
          7. Changes to This Policy
        </Typography>
        <Typography variant="bsr" paragraph>
          We may update this policy periodically. Continued use of our services implies acceptance
          of the updated policy.
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="blgsm" gutterBottom>
          8. Contact Us
        </Typography>
        <Typography variant="bsr" paragraph>
          If you have questions or concerns, contact us at [Insert Contact Email].
        </Typography>
      </Stack>
    </Container>
  );
};

export default PrivacyPolicy;
