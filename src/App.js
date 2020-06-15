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
  ATELIERS,
  COMME_CA_SE_PASSE,
  MA_PHILOSOPHIE,
  ME_CONTACTER,
  PRESTATIONS,
  QUI_JE_SUIS,
  STAGES,
} from "./routes";
import Ateliers from "./Ateliers";
import Stages from "./Stages";
import Prestations from "./Prestations";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Menu />
        <Switch>
          <Route path={COMME_CA_SE_PASSE}>
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
          <Route path={ATELIERS}>
            <Ateliers />
          </Route>
          <Route path={STAGES}>
            <Stages />
          </Route>
          <Route path={PRESTATIONS}>
            <Prestations />
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
