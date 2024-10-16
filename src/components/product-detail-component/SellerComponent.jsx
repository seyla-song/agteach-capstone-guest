import { Avatar, Box, Divider, Stack, Typography } from '@mui/material';

import { useNavigate } from 'react-router';

/**
 * SellerComponent renders a component that displays seller information
 * @function
 * @returns {React.ReactElement} A JSX element that renders a seller component
 */
export default function SellerComponent({ seller }) {
  const navigate = useNavigate();

  const goToInstructorProfile = (id) => navigate(`/instructor-profile/${id}`);

  /**
   * A React component that displays seller information and allows users to add or remove the seller from their wishlist.
   *
   * @return {JSX.Element} The JSX element representing the seller component
   */
  return (
    <Stack spacing={1.5}>
      <Divider />
      <Box
        sx={{ display: 'flex', gap: '20px', justifyContent: 'space-between' }}
      >
        <Stack direction="row" alignItems="center">
          <Avatar sx={{cursor: 'pointer'}} src={seller.image_url} onClick={() => goToInstructorProfile(seller.instructorId)}/>
          <Stack direction="column" sx={{ marginLeft: 2 }}>
            <Typography sx={{cursor: 'pointer'}} variant="bmdsm" onClick={() => goToInstructorProfile(seller.instructorId)}>{seller.firstName + " " + seller.lastName}</Typography>
            <Typography variant="bxsr" color="dark.200">
              {/* will fix later */}
              {'Kep, Kampot, Cambodia'}
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <Divider />
    </Stack>
  );
}
