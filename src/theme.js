import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  typography: {
    fontFamily: ["Itim", "Roboto", "Arial"].join(","),
    fontSize: 18,
    h2: {
      fontFamily: ["Itim", "Roboto", "Arial"].join(","),
    },
  },
});

export default responsiveFontSizes(theme);
