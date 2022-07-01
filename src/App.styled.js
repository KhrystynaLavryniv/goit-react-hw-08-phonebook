import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 1,
    letterSpacing: '0.00735em',
  },
});
