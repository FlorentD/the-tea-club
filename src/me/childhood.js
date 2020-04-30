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

const StyledBox = styled(Box)({
  backgroundColor: "rgba(255,255,255,0.9)",
  padding: "30px 50px",
});

const useStyles = makeStyles({
  root: {},
});

const StyledParallax = styled(ParallaxBanner)({});

const Text = styled(({ className }) => {
  const styles = useStyles();
  return (
    <Grid container className={className}>
      <Grid item xs={6}>
        <StyledBox mt={5} ml={5} m={10}>
          <Typography variant="h5" classes={styles}>
            Je suis née en Lorraine, dans un bain linguistique plutôt allemand
            car ma famille le parlait de manière bilingue et j’apprenais
            également cette langue à l’école primaire. En même temps j’étais
            très curieuse de découvrir cette “langue des chansons” apprise par
            les copines des autres classes : <strong>l’ANGLAIS</strong>.
          </Typography>
        </StyledBox>
      </Grid>
      <Grid item xs={6}>
        <StyledBox mt={30} ml={5} m={10}>
          <Typography variant="h5" classes={styles}>
            Avec une marraine professeure d’anglais qui m’a également transmis
            cette passion et qui a aiguisé encore ma curiosité pour la langue de
            Shakespeare, je me suis dirigée après un baccalauréat scientifique
            (qui n’était pas tant ma voie que ça) vers ce fameux chemin des
            langues.
          </Typography>
        </StyledBox>
      </Grid>
    </Grid>
  );
})({
  position: "relative",
  zIndex: 100,
});

const Childhood = () => {
  return (
    <StyledParallax
      style={{
        height: "75vh",
      }}
      layers={[{ image: "/static/apples.jpg", amount: 0.1 }]}
    >
      <Container>
        <Text />
      </Container>
    </StyledParallax>
  );
};

export default Childhood;
