import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import { CalendarToday } from "@mui/icons-material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const DateInput = React.forwardRef((props, ref) => {
  const { label, dateValue, onDateChange, error, helperText, ...rest } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        ref={ref}
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
            {...rest}
          />
        )}
      />
    </LocalizationProvider>
  );
});

export default DateInput;
