import React from "react";
import { Typography } from "@material-ui/core";
import ParallaxImage from "../components/ParallaxImage";

const Childhood = () => {
  return (
    <ParallaxImage src="/static/apples.jpg" topSoft>
      <ParallaxImage.Container xs={12} md={8}>
        <ParallaxImage.Box
          mt={{ xs: 4, md: 10 }}
          ml={{ xs: 0, md: 5 }}
          m={{ xs: 1, md: 10 }}
        >
          <Typography variant="h5">
            Je suis née à Metz en Lorraine, dans un bain linguistique plutôt
            allemand et en même temps très curieuse de découvrir cette “langue
            des chansons” apprise dans les autres classes :{" "}
            <strong>l’ANGLAIS</strong>.
          </Typography>
        </ParallaxImage.Box>
      </ParallaxImage.Container>
    </ParallaxImage>
  );
};

export default Childhood;
