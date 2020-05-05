import React from "react";
import { Typography } from "@material-ui/core";
import ParallaxImage from "../components/ParallaxImage";

const Studies = () => {
  return (
    <ParallaxImage src="/static/book.jpg" height="75vh">
      <ParallaxImage.Container xs={12} md={5} justify="flex-end">
        <ParallaxImage.Box
          p={{ xs: 0, md: 3 }}
          mb={{ xs: 2, md: 0 }}
          mt={{ xs: 8 }}
        >
          <Typography variant="h5">
            Avec une marraine professeure d’anglais qui a aiguisé ma curiosité
            pour la langue de Shakespeare, je me suis dirigée après quelques
            soubresauts scientifiques vers ce fameux{" "}
            <strong>CHEMIN DES LANGUES</strong>.
            <br />
            <br />
            Trois années de faculté d’anglais m’ont alors donné les bases et les
            outils pour comprendre la grammaire, la littérature, la civilisation
            anglaises.
          </Typography>
        </ParallaxImage.Box>
      </ParallaxImage.Container>
    </ParallaxImage>
  );
};

export default Studies;
