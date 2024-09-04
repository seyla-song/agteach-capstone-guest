import { Box, Button, OutlinedInput, Stack, Typography } from "@mui/material";

/**
 * BasicInfo component renders a basic information form with fields
 * for the user's first name, last name, and phone number.
 *
 * The component uses the `Stack` component to stack the form fields
 * vertically and the `OutlinedInput` component to render the input
 * fields. The component also renders a save button at the bottom of
 * the form using the `Button` component.
 *
 * @returns {React.ReactElement} The BasicInfo component.
 */
function BasicInfo() {
  return (
    <>
      <Stack sx={{ m: 2, gap: 2 }}>
        <Typography variant="h4">Basics Information</Typography>
        <OutlinedInput placeholder="Enter your First Name" />
        <OutlinedInput placeholder="Enter your Last Name" />
        <OutlinedInput placeholder="Enter your Phone Number" />
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

export default BasicInfo;
