import "./i18n";
import React from "react";
import { Container, ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "./theme";
import Landing from "./Landing";
import Me from "./me";
import LanguageChoice from "./LanguageChoice";
import Map from "./Map";
import Footer from "./Footer";
import Contact from "./Contact";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Container>
          <LanguageChoice />
          <Landing />
        </Container>
        <Me />
        <Container>
          <Contact />
        </Container>
        <Map />
      </Router>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
