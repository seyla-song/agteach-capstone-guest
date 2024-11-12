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

export const ChangePassword = () => {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    defaultValues: {
      passwordCurrent: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const [resetPassword, { isError, error, isLoading, isSuccess }] =
    useUpdatePasswordMutation();

  const onSubmit = async (formData) => {
    const res = await resetPassword(formData);
    if (res.data?.status === "success") reset();

    setOpen(true);
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

  const validatePassword = (value) => {
    if (!/[a-z]/.test(value))
      return "Password must contain at least one lowercase letter.";
    if (!/[A-Z]/.test(value))
      return "Password must contain at least one uppercase letter.";
    if (!/\d/.test(value)) return "Password must contain at least one number.";
    if (!/[@$!%*?&]/.test(value))
      return "Password must contain at least one special character.";
    return true;
  };

  return (
    <>
      <Stack sx={{ m: 2, gap: 2 }}>
        <Typography variant="h4">Change Password</Typography>
        {/* Current Password Field */}
        <CustomAlert
          label={
            isError
              ? error.data.message
              : isSuccess
                ? "Successfuly updated password"
                : "Something went wrong. Please try again"
          }
          severity={isError ? "error" : "success"}
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
            <FormHelperText error>Current Password is required</FormHelperText>
          )}
        </FormControl>

        {/* New Password Field */}
        <FormControl variant="outlined" error={Boolean(errors.password)}>
          <InputLabel htmlFor="new-password">Enter New Password</InputLabel>
          <OutlinedInput
            id="new-password"
            type={showPassword.new ? "text" : "password"}
            {...register("password", {
              required: true,
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              maxLength: {
                value: 20,
                message: "Password must at most 20 characters",
              },
              validate: validatePassword,
            })}
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
          {(errors.password && (
            <FormHelperText error>This field is required</FormHelperText>
          ))}
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
              {errors.passwordConfirm.message || "Please re-type your password"}
            </FormHelperText>
          )}
        </FormControl>
        <Typography color="dark.300" fontSize="12px" marginTop={"10px"} textAlign={"left"}>
          Password must contains at least one lowercase letter, one uppercase letter, one number, and one special character.
        </Typography>
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
            disabled={isLoading}
          >
            {isLoading ? "saving..." : "Save"}
          </Button>
        </Stack>
      </Box>
    </>
  );
};
