import "./i18n";
import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import theme from "./theme";
import Landing from "./Landing";
import Me from "./me";
import Map from "./Map";
import Footer from "./Footer";
import Contact from "./Contact";
import Philosophy from "./Philosophy";
import Course from "./Course";
import Menu from "./Menu";
import {
  COMME_CA_SE_ASSE,
  MA_PHILOSOPHIE,
  ME_CONTACTER,
  QUI_JE_SUIS,
} from "./routes";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Menu />
        <Switch>
          <Route path={COMME_CA_SE_ASSE}>
            <Course />
          </Route>
          <Route path={MA_PHILOSOPHIE}>
            <Philosophy />
          </Route>
          <Route path={QUI_JE_SUIS}>
            <Me />
          </Route>
          <Route path={ME_CONTACTER}>
            <Contact />
            <Map />
          </Route>
          <Route>
            <Landing />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
