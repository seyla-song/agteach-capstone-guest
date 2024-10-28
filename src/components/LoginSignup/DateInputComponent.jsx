import React from "react";
import { TextField, InputAdornment, FormHelperText } from "@mui/material";
import { CalendarToday } from "@mui/icons-material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const DateInput = React.forwardRef((props, ref) => {
  const { label, dateValue, onDateChange, error, helperText, ...rest } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        disableFuture
        ref={ref}
        label={label}
        value={dateValue ? dayjs(dateValue) : null}
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
      {error && (
        <FormHelperText error sx={{ pl: 2, marginTop: '2px !important' }}>
          {helperText}
        </FormHelperText>
      )}
    </LocalizationProvider>
  );
});

export default DateInput;
