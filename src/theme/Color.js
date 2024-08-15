import { createTheme, ThemeProvider } from '@mui/material/styles';

export function colorPalette() {
    const theme = createTheme({
        palette: {
            common: {
                black: '#000',
                white: '#fff',
            },
            primary: {
                main: '#082214', 
                dark: '#001B0C', 
            },
            dark: {
                100: '#E4E7ED',
                200: '#778396',
                300: '#516079',
                400: '#2F3F5B',
                500: '#142440',
            },
            grey: {
                100: '#F9FAFB',
                200: '#F9FAFB',
                300: '#F3F4F6',
                400: '#DEE2E6',
                500: '#CED4DA',
            },
            secondary: {
                main: '#F3BE2A', 
                contrastText: '#fff', 
            },
            red: {
                1: '#E2111C', 
            },
            blue: {
                main: '#348FFD',
                dark: '#016FD0',
            },
            purple: {
                main: '#5D87FF', 
            },
            teal: {
                main: '#1BAAA5', 
            },
        },
    });
    return theme; // Ensure the theme is returned for use
};
