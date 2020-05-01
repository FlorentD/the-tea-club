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

const useStyles = makeStyles({
  root: {
    color: "white",
  },
  box: {
    backgroundColor: "rgba(0,0,0,0.8)",
  },
});

const StyledParallax = styled(ParallaxBanner)({});

const Text = styled(({ className }) => {
  const styles = useStyles();
  return (
    <Grid container className={className}>
      <Grid item xs={12} md={8}>
        <Box mt={{ xs: 4, md: 10 }} p={{ xs: 2, md: 5 }} className={styles.box}>
          <Typography variant="h4" classes={styles}>
            A mon retour en France j’ai poursuivi mon autre passion, la
            pédagogie, en passant mon concours de professeur des écoles tout en
            dispensant des ateliers d’anglais chantés et dansés pour les
            enfants.
          </Typography>
          <br />
          <Typography variant="h4" classes={styles}>
            S’en sont suivies six belles années en région parisienne où j’ai pu
            apprendre, expérimenter, transmettre ces deux passions l’anglais et
            la pédagogie en tant que <i>maîtresse/teacher</i>&nbsp; de la
            maternelle au CM2.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
})({
  position: "relative",
  justifyContent: "center",
  zIndex: 100,
});

const Teach = () => {
  return (
    <StyledParallax
      style={{
        height: "70vh",
      }}
      layers={[{ image: "/static/bike.jpg", amount: 0.1 }]}
    >
      <Container>
        <Text />
      </Container>
    </StyledParallax>
  );
};

export default Teach;
