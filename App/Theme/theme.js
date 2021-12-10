import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#fffff",
      sendButton:'#00AA55'
    },
    secondary: {
      main: "#08AA56",
    },
    warning: {
      main: "#FFC007",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
