import { createTheme } from "@mui/material";
import color from "./Color";
import typography from "./Typography";
import components from "./Component";

const theme = createTheme({
    palette: color,
    typography: typography,
    components: components
})

export default theme;

