import React from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff, CalendarToday } from '@mui/icons-material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const FormInput = ({
  label,
  type = 'text',
  value,
  onChange,
  error,
  helperText,
  showPassword,
  handleClickShowPassword,
  isDate = false,
  dateValue,
  onDateChange,
}) => {
  return (
    <>
      {isDate ? (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label={label}
            value={dateValue}
            onChange={onDateChange}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                variant="outlined"
                error={error}
                helperText={helperText}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <CalendarToday />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        </LocalizationProvider>
      ) : (
        <TextField
          fullWidth
          label={label}
          type={type === 'password' && showPassword ? 'text' : type}
          value={value}
          onChange={onChange}
          error={error}
          helperText={helperText}
          variant="outlined"
          placeholder={label}
          InputProps={
            type === 'password'
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
        />
      )}
    </>
  );
};

export default FormInput;
