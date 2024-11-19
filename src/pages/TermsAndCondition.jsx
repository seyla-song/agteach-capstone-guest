import React from 'react';
import { Stack, Typography, Container, Divider } from '@mui/material';

const TermsAndConditions = () => {
  return (
    <Container>
      <Stack sx={{ padding: 4 }}>
        <Typography variant="blgsm" gutterBottom>
          Terms and Conditions
        </Typography>
        <Typography variant="bsr">
          Last Updated: Nov 19, 2024
        </Typography>

        <Divider sx={{ my: 5 }} />

        <Typography variant="blgsm" gutterBottom>
          1. General Information
        </Typography>
        <Typography variant="bsr" paragraph>
          Welcome to <strong>AgTeach</strong>! By accessing or using our website
          (<a href="https://alphabeez.anbschool.org/" target="_blank" rel="noopener noreferrer">
            https://alphabeez.anbschool.org/
          </a>
          ), you agree to comply with and be bound by these Terms and Conditions.
        </Typography>
        <Typography variant="bsr" paragraph>
          AgTeach is an educational and e-commerce platform offering courses and products
          primarily focused on the agriculture sector. By using AgTeach, you confirm that
          you are at least 15 years old. Users under this age are not permitted to register
          or use our services.
        </Typography>

        <Divider sx={{ my: 5 }} />

        <Typography variant="blgsm" gutterBottom>
          2. User Accounts
        </Typography>
        <Typography variant="bsr" paragraph>
          To access certain features, users must create an account by providing accurate
          information, including username, date of birth, email, password, phone number,
          first name, last name, city, and address. Users are responsible for maintaining
          the confidentiality of their account credentials. Notify us immediately of any
          unauthorized use.
        </Typography>

        <Divider sx={{ my: 5 }} />

        <Typography variant="blgsm" gutterBottom>
          3. Purchases and Payments
        </Typography>
        <Typography variant="bsr" paragraph>
          AgTeach offers both tangible agricultural products and digital courses. Payments
          are securely processed through Stripe. Refunds are issued only for products that
          are out of stock or undelivered. No refunds are available for course purchases.
        </Typography>

        <Divider sx={{ my: 5 }} />

        <Typography variant="blgsm" gutterBottom>
          4. Prohibited Activities
        </Typography>
        <Typography variant="bsr" paragraph>
          Users must refrain from spamming, posting illegal or inappropriate content, or
          engaging in activities that violate Cambodian law. Violations may result in account
          suspension, termination, or legal action.
        </Typography>

        <Divider sx={{ my: 5 }} />

        <Typography variant="blgsm" gutterBottom>
          5. Intellectual Property
        </Typography>
        <Typography variant="bsr" paragraph>
          All website content, including text, graphics, and logos, is owned by AgTeach.
          Users may not reproduce or distribute this content without written consent.
        </Typography>

        <Divider sx={{ my: 5 }} />

        <Typography variant="blgsm" gutterBottom>
          6. Privacy Policy
        </Typography>
        <Typography variant="bsr" paragraph>
          AgTeach collects only the information provided during signup and does not share
          user data with third parties. For details, refer to our Privacy Policy.
        </Typography>

        <Divider sx={{ my: 5 }} />

        <Typography variant="blgsm" gutterBottom>
          7. Disclaimer of Liability
        </Typography>
        <Typography variant="bsr" paragraph>
          AgTeach is not responsible for technical issues, system downtime, or losses
          resulting from unauthorized access. Users acknowledge that they use the website
          at their own risk.
        </Typography>

        <Divider sx={{ my: 5 }} />

        <Typography variant="blgsm" gutterBottom>
          8. Dispute Resolution
        </Typography>
        <Typography variant="bsr" paragraph>
          These Terms are governed by Cambodian law. Disputes will first be addressed
          through direct negotiation. If unresolved, disputes will be handled through
          arbitration or Cambodian courts.
        </Typography>

        <Divider sx={{ my: 5 }} />

        <Typography variant="blgsm" gutterBottom>
          9. Modifications to Terms
        </Typography>
        <Typography variant="bsr" paragraph>
          AgTeach reserves the right to update these Terms and Conditions at any time.
          Updates will be posted on the website. Continued use constitutes acceptance
          of the revised terms.
        </Typography>

        <Divider sx={{ my: 5 }} />

        <Typography variant="blgsm" gutterBottom>
          10. Termination of Access
        </Typography>
        <Typography variant="bsr" paragraph>
          AgTeach may terminate or suspend user accounts for violating these Terms or
          engaging in prohibited activities.
        </Typography>

        <Divider sx={{ my: 5 }} />

        <Typography variant="blgsm" gutterBottom>
          11. Contact Us
        </Typography>
        <Typography variant="bsr" paragraph>
          For questions or concerns about these Terms, please contact us at khomkhit460@gmail.com
        </Typography>
      </Stack>
    </Container>
  );
};

export default TermsAndConditions;