import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import {
  Container,
  Grid,
  Box,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { styled } from "@material-ui/core";

const useStyleBox = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgba(255,255,255,0.9)",
    padding: "10px 15px",
    [theme.breakpoints.up("md")]: {
      padding: "30px 50px",
    },
  },
}));

const Text = styled(({ className }) => {
  const styleBox = useStyleBox();
  return (
    <Grid container className={className}>
      <Grid item xs={12} md={6}>
        <Box
          mt={{ xs: 4, md: 5 }}
          ml={{ xs: 0, md: 5 }}
          m={{ xs: 1, md: 10 }}
          className={styleBox.root}
        >
          <Typography variant="h5">
            Je suis née en Lorraine, dans un bain linguistique plutôt allemand
            car ma famille le parlait de manière bilingue et j’apprenais
            également cette langue à l’école primaire. En même temps j’étais
            très curieuse de découvrir cette “langue des chansons” apprise par
            les copines des autres classes : <strong>l’ANGLAIS</strong>.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          mt={{ xs: 4, md: 30 }}
          ml={{ xs: 0, md: 5 }}
          m={{ xs: 1, md: 10 }}
          className={styleBox.root}
        >
          <Typography variant="h5">
            Avec une marraine professeure d’anglais qui m’a également transmis
            cette passion et qui a aiguisé encore ma curiosité pour la langue de
            Shakespeare, je me suis dirigée après un baccalauréat scientifique
            (qui n’était pas tant ma voie que ça) vers ce fameux chemin des
            langues.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
})({
  position: "relative",
  zIndex: 100,
});

const Childhood = () => {
  return (
    <ParallaxBanner
      style={{
        height: "75vh",
      }}
      layers={[{ image: "/static/apples.jpg", amount: 0.1 }]}
    >
      <Container>
        <Text />
      </Container>
    </ParallaxBanner>
  );
};

export default Childhood;
