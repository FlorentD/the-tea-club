import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  typography: {
    fontFamily: ["Pathway Gothic One", "Roboto", "Arial"].join(","),
  },
});

export default responsiveFontSizes(theme);
