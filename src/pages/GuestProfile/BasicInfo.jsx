import { Box, Button, OutlinedInput, Stack, Typography } from "@mui/material";

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
