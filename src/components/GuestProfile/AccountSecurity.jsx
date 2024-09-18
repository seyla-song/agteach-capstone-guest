import React, { useState } from "react";
import {
  Box,
  Button,
  OutlinedInput,
  Stack,
  Typography,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@mui/material";

/**
 * @function AccountSecurity
 * @description This component renders a form to input an email and a button to save the input.
 * @returns {JSX.Element} A JSX element that renders the form and button.
 */
function AccountSecurity() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSave = () => {
    if (!email) {
      setError('Email is required');
    } else {
      setError('');
    }
  };
  return (
    <>
      <Stack sx={{ m: 2, gap: 2 }}>
        <Typography variant="h4">Account Security</Typography>
        <FormControl variant="outlined" error={!!error}>
          <InputLabel htmlFor="account-security">Email</InputLabel>
          <OutlinedInput
            id="account-security"
            label="Email"
            placeholder="e.g. janeagteach@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
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
          <Button variant="contained" sx={{ px: 10, py: 2 }} onClick={handleSave}>
            Save
          </Button>
        </Stack>
      </Box>
    </>
  );
}
export default AccountSecurity;
