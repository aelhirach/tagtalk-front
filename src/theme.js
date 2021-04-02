import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#71C7E5",
    },
    secondary: {
      main: "#F1CB30",
    },
  },
  typography: {
    fontFamily: ["grold_roundedsemilight"].join(","),
    subtitle1: {
      fontSize: 12,
    },
    body1: {
      fontWeight: 500,
      color: "#211915",
    },
    h3: {
      fontSize: 36,
      lineHeight: 1.2,
      fontFamily: "grold_roundedextrabold",
    },
  },
});