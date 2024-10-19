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
import { useForm } from "react-hook-form";
import { useUpdatePasswordMutation } from "../../services/api/userApi";
import { CustomAlert } from "../../components/CustomAlert";

function ChangePassword() {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      passwordCurrent: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const [resetPassword, { isError }] = useUpdatePasswordMutation();
  const [submitError, setSubmitError] = useState("");

  const onSubmit = async (formData) => {
    try {
      await resetPassword(formData).unwrap();
      console.log("Success:", formData);
    } catch (error) {
      setSubmitError("Error submitting form. Please try again.");
      console.error("Error submitting form:", error);
    }
  };

  const [showPassword, setShowPassword] = useState({
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

  return (
    <>
      <Stack sx={{ m: 2, gap: 2 }}>
        <Typography variant="h4">Change Password</Typography>
        {submitError && <Typography color="error">{submitError}</Typography>}
        {/* Current Password Field */}
        <CustomAlert
          label={errors.passwordCurrent?.message}
          severity={isError ? "success" : "error"}
          open={open}
          onClose={() => setOpen(false)}
        />
        <FormControl variant="outlined" error={Boolean(errors.passwordCurrent)}>
          <InputLabel htmlFor="current-password">
            Enter Current Password
          </InputLabel>
          <OutlinedInput
            id="current-password"
            type={showPassword.current ? "text" : "password"}
            {...register("passwordCurrent", { required: true })}
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
          {errors.passwordCurrent && (
            <FormHelperText error>This field is required</FormHelperText>
          )}
        </FormControl>

        {/* New Password Field */}
        <FormControl variant="outlined" error={Boolean(errors.password)}>
          <InputLabel htmlFor="new-password">Enter New Password</InputLabel>
          <OutlinedInput
            id="new-password"
            type={showPassword.new ? "text" : "password"}
            {...register("password", { required: true })}
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
          {errors.password && (
            <FormHelperText error>This field is required</FormHelperText>
          )}
        </FormControl>

        {/* Re-type Password Field */}
        <FormControl variant="outlined" error={Boolean(errors.passwordConfirm)}>
          <InputLabel htmlFor="retype-password">Re-type Password</InputLabel>
          <OutlinedInput
            id="retype-password"
            type={showPassword.retype ? "text" : "password"}
            {...register("passwordConfirm", {
              required: true,
              validate: (value) => {
                if (value !== watch("password")) {
                  return "Passwords do not match";
                }
              },
            })}
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
          {errors.passwordConfirm && (
            <FormHelperText error>
              {errors.passwordConfirm.message || "This field is required"}
            </FormHelperText>
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
            onClick={handleSubmit(onSubmit)}
          >
            Save
          </Button>
        </Stack>
      </Box>
    </>
  );
}

export default ChangePassword;
