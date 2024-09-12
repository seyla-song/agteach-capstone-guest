import React, { forwardRef } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const TextInput = forwardRef(
  (
    {
      label,
      type,
      value,
      onChange,
      error,
      helperText,
      showPassword,
      handleClickShowPassword,
      ...rest
    },
    ref
  ) => {
    return (
      <TextField
        ref={ref}
        fullWidth
        label={label}
        type={type === "password" && showPassword ? "text" : type}
        value={value}
        onChange={onChange}
        error={error}
        helperText={helperText}
        variant="outlined"
        placeholder={label}
        InputProps={
          type === "password"
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : null
        }
        {...rest}
      />
    );
  }
);

export default TextInput;
