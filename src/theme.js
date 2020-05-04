import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  typography: {
    fontFamily: ["Kalam", "Roboto", "Arial"].join(","),
  },
});

export default responsiveFontSizes(theme);
