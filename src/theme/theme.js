import { createTheme } from "@mui/material";
import color from "./Color";
import typography from "./Typography";

const theme = createTheme({
    palette: color,
    typography: typography
})

export default theme