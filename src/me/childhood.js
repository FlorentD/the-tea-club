import React from "react";
import { Grid, Box, Typography, makeStyles } from "@material-ui/core";
import { styled } from "@material-ui/core";
import ShowOnView from "../components/ShowOnView";
import ParallaxImage from "../components/ParallaxImage";

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
            <Typography variant="h5">
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
    <ParallaxImage src="/static/apples.jpg">
      <Text />
    </ParallaxImage>
  );
};

export default Childhood;
