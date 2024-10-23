import { Box, Button, Container, Link, Stack, Typography } from '@mui/material';
import Member from '../assets/happy-farmer.png';
import { teachAgtechURL } from '../utils/globalURL';

export const MemberComponent = () => {
  return (
    <Container maxWidth={false} sx={{ bgcolor: 'primary.main', my: 5 }}>
      <Stack
        px={{ xs: 1, md: 10 }}
        pt={{ xs: 5, md: 15 }}
        pb={{ xs: 10, md: 15 }}
        gap={5}
        direction={{ xs: 'column-reverse', md: 'row' }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack maxWidth={400} gap={3}>
          <Typography
            sx={{ typography: { xs: 'h3', md: 'h2' } }}
            color="common.white"
          >
            Ready to share your passion for indoor gardening?
          </Typography>
          <Typography
            sx={{ typography: { xs: 'bxsr', sm: 'bsr' } }}
            color="common.white"
          >
            Join our platform as an instructor and inspire others while
            showcasing your expertise. Empower the next generation of gardeners
            and grow your impact today! Apply now and be a part of our vibrant
            community
          </Typography>
          <Link href={teachAgtechURL} target="_blank" underline="none">
            <Button variant="contained" color="secondary">
              Become an Instructor
            </Button>
          </Link>
        </Stack>
        <Box
          height="500px"
          width={{ xs: '100%', md: '500px' }}
          sx={{
            backgroundImage: `url(${Member})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
          p={3}
        />
      </Stack>
    </Container>
  );
};
