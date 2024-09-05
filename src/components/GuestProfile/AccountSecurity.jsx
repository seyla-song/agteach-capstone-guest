import { Box, Button, OutlinedInput, Stack, Typography } from "@mui/material";

/**
 * @function AccountSecurity
 * @description This component renders a form to input an email and a button to save the input.
 * @returns {JSX.Element} A JSX element that renders the form and button.
 */
function AccountSecurity() {
  return (
    <>
      <Stack sx={{ m: 2, gap: 2 }}>
        <Typography variant="h4">Account Security</Typography>
        <OutlinedInput placeholder="Enter your Email" />
      </Stack>

      <Box
        sx={{
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <Stack
          sx={{ m: 2, justifyContent: "flex-end" }}
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
export default AccountSecurity;
