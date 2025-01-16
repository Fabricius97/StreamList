import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif', // Använd Poppins som standardtypsnitt
    color: "#f5f5f5",
  },
  palette: {
    primary: {
      main: "#1976d2", // Din primära färg
    },
    secondary: {
      main: "#d32f2f", // Din sekundära färg
    },
    background: {
      default: "#f5f5f5", // Bakgrundsfärg
    },
  },
});

export default theme;
