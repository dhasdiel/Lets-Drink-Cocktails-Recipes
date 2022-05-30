import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#FDBA74",
    },
    secondary: {
      main: "#FED7AA",
    },
    text: {
      primary: "#27272A",
    },
  },
  typography: {
    fontFamily: ["Spline Sans Mono"].join(","),
  },
});
