import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#5800FF',
      light: '#6A19FF',
      dark: '#3E00B3'
    },
    secondary: {
      main: '#0096FF',
      light: '#0CC6E8',
      dark: '#0C52E8'
    },
    success:{
      main: '#00D7FF',
      light: '#0CE8CD',
      dark: '#0C8DE8'
    },
    error: {
      main: '#FF0060'
    }
  },
  shadows: [
    "none",
    "drop-shadow(0 1px 1px rgb(0 0 0 / 0.05))",
    "drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))",
    "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))",
    "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
    "drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))",
    "drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none"
  ]
});