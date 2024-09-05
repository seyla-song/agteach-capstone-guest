import { FormControlLabel, Radio, Typography } from "@mui/material";

/**
 * CustomFormController is a reusable component that renders a
 * FormControlLabel with a Typography as the label.
 *
 * @param {{ label: string, value: string, control: ReactNode }} props
 *   - label is the label to display on the Typography
 *   - value is the value of the FormControlLabel
 *   - control is the ReactNode to render as the contro eg: control = {<Radio />}*
 * @returns {ReactNode} A FormControlLabel with a Typography as the label
 */
function CustomFormController({ label, value, control, ...sx }) {
  return (
    <FormControlLabel
      value={value}
      control={control}
      label={
        <Typography sx={{ typography: { xs: "bsr", sm: "bmdr" } }}>
          {label}
        </Typography>
      }
      {...sx}
    />
  );
}
export default CustomFormController;
