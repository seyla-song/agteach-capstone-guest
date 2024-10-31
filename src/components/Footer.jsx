import { Container, Link, Typography, Button, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Logo from '../assets/agteach_logo.svg';
import { teachAgtechURL } from '../utils/globalURL';

const FOOTER_MENU = [
  { page: 'My Learning', path: '/mylearning' },
  { page: 'Marketplace', path: '/marketplace' },
  { page: 'AgAI', path: '/agai' },
];

/**
 * Renders the Footer component which displays the AgTeach logo, navigation links,
 * and copyright information.
 *
 * @return {JSX.Element} The rendered Footer component.
 */

export const Footer = () => {
  return (
    <Stack backgroundColor="primary.dark" color="white">
      <Container sx={{ py: 5 }}>
        <Stack
          direction={{
            sx: 'column',
            md: 'row',
          }}
          pb={5}
          justifyContent="space-between"
          alignItems={'center'}
          gap={3}
        >
          <Stack textAlign={{ xs: 'center', md: 'left' }} maxWidth={250}>
            <Link component={RouterLink} to="/">
              <img width="94px" height="45px" src={Logo} alt="AgTeach Logo" />
            </Link>
            <Typography variant="bxsr">
              8th Floor, OCIC Blvd, Sangkat Chroy Changvar, Khan Chroy Changvar,
              Phnom Penh, Cambodia
            </Typography>
          </Stack>
          <Stack direction={{ xs: 'row' }} textAlign="center" gap={2}>
            {FOOTER_MENU.map((data) => (
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
            textAlign={{ xs: 'center', md: 'left' }}
          >
            <Typography variant="blgsm">
              Ready to share your passion ? Join with us.
            </Typography>
            <Link href={teachAgtechURL} color="common.white" underline="none">
              <Button variant="contained" color="secondary">
                Become an Instructor
              </Button>
            </Link>
          </Stack>
        </Stack>
        <Stack textAlign="center" width="100%">
          <Typography variant="btr">
            © All right reserved AgTeach - 2024 | Terms and Service | Privacy
            Policy
          </Typography>
        </Stack>
      </Container>
    </Stack>
  );
};
