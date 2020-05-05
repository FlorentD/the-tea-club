import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Box, Fade, Grid, makeStyles } from "@material-ui/core";
import {
  COMME_CA_SE_ASSE,
  MA_PHILOSOPHIE,
  ME_CONTACTER,
  QUI_JE_SUIS,
} from "./routes";
import Logo from "./svg/Logo";

const useStyle = makeStyles({
  root: {
    fontFamily: ["Kalam", "Roboto", "Arial"].join(","),
    color: "black",
    width: "180px",
    fontSize: "20px",
    margin: "20px",
    fontWeight: "bold",
    textAlign: "center",
    textDecoration: "none",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: "5px",
    padding: "12px 8px",
  },
});

const MenuLink = ({ children, to }) => {
  const style = useStyle();
  return (
    <NavLink to={to} className={style.root}>
      {children}
    </NavLink>
  );
};

const useLogoStyle = makeStyles({
  root: {
    backgroundColor: "rgba(255,255,255,0.8)",
    padding: "20px",
    borderRadius: "50%",
    border: "2px solid black",
  },
});

const LogoComp = () => {
  const style = useLogoStyle();
  return (
    <Fade in={true} timeout={800}>
      <div className={style.root}>
        <Logo style={{ width: 180 }} />
      </div>
    </Fade>
  );
};

const useMenuStyle = makeStyles({
  root: {
    backgroundImage: "url('/static/band.jpg')",
    backgroundSize: "cover",
    borderBottom: "2px solid #98C163",
  },
});

const Menu = () => {
  const history = useHistory();
  const style = useMenuStyle();
  return (
    <Grid container justify="center" alignItems="center" className={style.root}>
      <MenuLink to={COMME_CA_SE_ASSE}>Comment ça se passe</MenuLink>
      <MenuLink to={MA_PHILOSOPHIE}>Philosophie</MenuLink>
      <Box
        p={3}
        onClick={() => history.push("/")}
        style={{ cursor: "pointer" }}
      >
        <LogoComp />
      </Box>
      <MenuLink to={QUI_JE_SUIS}>Qui suis-je</MenuLink>
      <MenuLink to={ME_CONTACTER}>Me Contacter</MenuLink>
    </Grid>
  );
};

export default Menu;
