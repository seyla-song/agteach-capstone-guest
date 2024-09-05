import { Box, Button, OutlinedInput, Stack } from '@mui/material';

/**
 * Renders a form to change the user's password.
 *
 * @returns {React.ReactElement} A JSX element representing the password change form.
 */
function ChangePassword() {
  return (
    <>
      <Stack sx={{ m: 2, gap: 2 }}>
        <OutlinedInput
          type="password"
          id="currentPassword"
          name="currentPassword"
          placeholder="Enter Current Password"
        />
        <OutlinedInput
          type="password"
          id="newPassword"
          name="newPassword"
          placeholder="Enter New Password"
        />
        <OutlinedInput
          type="password"
          id="retypePassword"
          name="retypePassword"
          placeholder="Re-type Password"
        />
      </Stack>

      <Box
        sx={{
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <Stack
          sx={{ m: 2, justifyContent: 'flex-end' }}
          direction="row"
          spacing={2}
        >
          <Button variant="contained" sx={{ px: 10, py: 2 }}>
            Save
          </Button>
        </Stack>
      </Box>
    </>
  );
}

export default ChangePassword;
