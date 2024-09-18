import React, { useState } from "react";
import {
  Box,
  Button,
  OutlinedInput,
  Stack,
  Typography,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  FormHelperText,
} from "@mui/material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

/**
 * Renders a form to change the user's password.
 *
 * @returns {React.ReactElement} A JSX element representing the password change form.
 */
function ChangePassword() {
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    retype: false,
  });

  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    retype: "",
  });

  const [errors, setErrors] = useState({
    current: false,
    new: false,
    retype: false,
  });

  const handleTogglePasswordVisibility = (field) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const handleInputChange = (field, value) => {
    setPasswords((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSave = () => {
    const newErrors = {
      current: passwords.current === "",
      new: passwords.new === "",
      retype: passwords.retype === "",
    };
    setErrors(newErrors);

    // If no errors, proceed with the save logic
    const noErrors = Object.values(newErrors).every((error) => !error);
    if (noErrors) {
      // Save password logic here
      console.log("Passwords saved:", passwords);
    }
  };

  return (
    <>
      <Stack sx={{ m: 2, gap: 2 }}>
        <Typography variant="h4">Change Password</Typography>

        {/* Current Password Field */}
        <FormControl variant="outlined" error={errors.current}>
          <InputLabel htmlFor="current-password">
            Enter Current Password
          </InputLabel>
          <OutlinedInput
            id="current-password"
            type={showPassword.current ? "text" : "password"}
            value={passwords.current}
            onChange={(e) => handleInputChange("current", e.target.value)}
            label="Enter Current Password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => handleTogglePasswordVisibility("current")}
                  edge="end"
                >
                  {showPassword.current ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          {errors.current && (
            <FormHelperText error>This field is required</FormHelperText>
          )}
        </FormControl>

        {/* New Password Field */}
        <FormControl variant="outlined" error={errors.new}>
          <InputLabel htmlFor="new-password">Enter New Password</InputLabel>
          <OutlinedInput
            id="new-password"
            type={showPassword.new ? "text" : "password"}
            value={passwords.new}
            onChange={(e) => handleInputChange("new", e.target.value)}
            label="Enter New Password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => handleTogglePasswordVisibility("new")}
                  edge="end"
                >
                  {showPassword.new ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          {errors.new && (
            <FormHelperText error>This field is required</FormHelperText>
          )}
        </FormControl>

        {/* Re-type Password Field */}
        <FormControl variant="outlined" error={errors.retype}>
          <InputLabel htmlFor="retype-password">Re-type Password</InputLabel>
          <OutlinedInput
            id="retype-password"
            type={showPassword.retype ? "text" : "password"}
            value={passwords.retype}
            onChange={(e) => handleInputChange("retype", e.target.value)}
            label="Re-type Password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => handleTogglePasswordVisibility("retype")}
                  edge="end"
                >
                  {showPassword.retype ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          {errors.retype && (
            <FormHelperText error>This field is required</FormHelperText>
          )}
        </FormControl>
      </Stack>

      {/* Save Button */}
      <Box sx={{ width: "100%", boxSizing: "border-box" }}>
        <Stack
          sx={{ m: 2, justifyContent: "flex-end" }}
          direction="row"
          spacing={2}
        >
          <Button
            variant="contained"
            sx={{ px: 10, py: 2 }}
            onClick={handleSave}
          >
            Save
          </Button>
        </Stack>
      </Box>
    </>
  );
}

export default ChangePassword;
