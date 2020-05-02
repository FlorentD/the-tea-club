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
import Background1 from "../svg/Background1";
import BackgroundBottom from "../svg/BackgroundBottom";
import ShowOnView from "../components/ShowOnView";

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
      <Grid item xs={12} md={8}>
        <ShowOnView>
          <Box
            mt={{ xs: 4, md: 10 }}
            ml={{ xs: 0, md: 5 }}
            m={{ xs: 1, md: 10 }}
            className={styleBox.root}
          >
            <Typography variant="h4">
              Je suis née à <strong>Metz</strong> en Lorraine, dans un bain
              linguistique plutôt allemand et en même temps très curieuse de
              découvrir cette “langue des chansons” apprise par les copines des
              autres classes : <strong>l’ANGLAIS</strong>.
            </Typography>
          </Box>
        </ShowOnView>
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
        height: "60vh",
      }}
      layers={[{ image: "/static/apples.jpg", amount: 0.1 }]}
    >
      <Background1 style={{ position: "absolute" }} />
      <Container>
        <Text />
      </Container>
      <BackgroundBottom style={{ position: "absolute", bottom: -1 }} />
    </ParallaxBanner>
  );
};

export default Childhood;
