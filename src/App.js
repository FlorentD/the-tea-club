import "./i18n";
import React from "react";
import { Container, ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "./theme";
import Landing from "./Landing";
import LanguageChoice from "./LanguageChoice";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Container>
          <LanguageChoice />
          <Landing />
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
