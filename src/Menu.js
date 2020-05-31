import React, { useState, useEffect } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import {
  Box,
  Fade,
  Grid,
  Hidden,
  Typography,
  makeStyles,
  Drawer,
} from "@material-ui/core";
import {
  ATELIERS,
  COMME_CA_SE_ASSE,
  MA_PHILOSOPHIE,
  ME_CONTACTER,
  QUI_JE_SUIS,
  STAGES,
} from "./routes";
import Logo from "./svg/Logo";
import Signs from "./svg/Signs";

const useStyle = makeStyles({
  root: {
    fontFamily: ["Kalam", "Roboto", "Arial"].join(","),
    color: "black",
    width: "180px",
    fontSize: "20px",
    margin: "10px",
    fontWeight: "bold",
    textAlign: "center",
    textDecoration: "none",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: "5px",
    padding: "12px 8px",
    boxShadow: "2px 2px 5px 0px rgba(0,0,0,0.75)",
  },
});

const MenuLink = ({ children, to, onClick = () => null }) => {
  const style = useStyle();
  return (
    <NavLink to={to} className={style.root} onClick={onClick}>
      {children}
    </NavLink>
  );
};

const useNewMenuStyle = makeStyles({
  root: {
    borderBottom: "2px solid #98C163",
  },
  button: {
    color: "black",
    fontFamily: ["Kalam", "Roboto", "Arial"].join(","),
    fontSize: "22px",
    fontWeight: "bold",
    padding: "12px 20px",
    "&:hover": {
      color: "#007A15",
    },
    "&:not(:last-child)": {
      borderRight: "2px solid #98C163",
    },
  },
});

const NewMenuLink = ({ children, to, onClick = () => null }) => {
  const style = useNewMenuStyle();
  return (
    <NavLink to={to} className={style.button} onClick={onClick}>
      {children}
    </NavLink>
  );
};

const useLogoStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgba(255,255,255,0.8)",
    padding: "20px",
    borderRadius: "50%",
    border: "2px solid black",
  },
  image: {
    width: "100px",
    [theme.breakpoints.up("md")]: { width: "180px" },
  },
}));

const LogoComp = () => {
  const style = useLogoStyle();
  return (
    <Fade in={true} timeout={800}>
      <div className={style.root}>
        <Logo className={style.image} />
      </div>
    </Fade>
  );
};

const useMenuStyle = makeStyles((theme) => ({
  root: {
    backgroundImage: "url('/static/background.jpg')",
    backgroundSize: "cover",
    borderBottom: "2px solid #98C163",
    [theme.breakpoints.down("md")]: { marginTop: "50px" },
  },
}));

const useMobileMenuStyle = makeStyles({
  root: {
    position: "fixed",
    top: 0,
    zIndex: 100,
    padding: "10px",
    backgroundColor: "#000",
    color: "#fff",
    cursor: "pointer",
  },
});

const MobileMenu = () => {
  const style = useMobileMenuStyle();
  const [open, setOpen] = useState(false);
  return (
    <Hidden mdUp>
      <Grid
        container
        justify="flex-start"
        alignItems="center"
        className={style.root}
        onClick={() => setOpen(true)}
      >
        <Signs width={20} heiht={20} />
        <Box ml={1}>
          <Typography variant="h4">menu</Typography>
        </Box>
      </Grid>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <MenuLink to={COMME_CA_SE_ASSE} onClick={() => setOpen(false)}>
          Comment ça se passe ?
        </MenuLink>
        <MenuLink to={MA_PHILOSOPHIE} onClick={() => setOpen(false)}>
          Philosophie
        </MenuLink>
        <MenuLink to={QUI_JE_SUIS} onClick={() => setOpen(false)}>
          Qui suis-je ?
        </MenuLink>
        <MenuLink to={ME_CONTACTER} onClick={() => setOpen(false)}>
          Me Contacter
        </MenuLink>
      </Drawer>
    </Hidden>
  );
};

const Menu = () => {
  const history = useHistory();
  const style = useMenuStyle();
  const menu = useNewMenuStyle();
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <MobileMenu />
      <Grid
        container
        justify="center"
        alignItems="center"
        className={style.root}
      >
        <Box
          p={{ xs: 1, md: 3 }}
          onClick={() => history.push("/")}
          style={{ cursor: "pointer" }}
        >
          <LogoComp />
        </Box>
      </Grid>
      <Hidden xsDown>
        <Grid container justify="center" className={menu.root}>
          <NewMenuLink to={COMME_CA_SE_ASSE}>Comment ça se passe ?</NewMenuLink>
          <NewMenuLink to={MA_PHILOSOPHIE}>Philosophie</NewMenuLink>
          <NewMenuLink to={QUI_JE_SUIS}>Qui suis-je ?</NewMenuLink>
          <NewMenuLink to={ATELIERS}>Les Ateliers</NewMenuLink>
          <NewMenuLink to={STAGES}>Les Stages</NewMenuLink>
          <NewMenuLink to={ME_CONTACTER}>Me Contacter</NewMenuLink>
        </Grid>
      </Hidden>
    </>
  );
};

export default Menu;
