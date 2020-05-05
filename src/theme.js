import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  typography: {
    fontFamily: ["Kalam", "Roboto", "Arial"].join(","),
    h2: {
      fontFamily: ["Marck Script", "Roboto", "Arial"].join(","),
    },
  },
});

export default responsiveFontSizes(theme);
