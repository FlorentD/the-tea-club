import React from "react";
import { Typography } from "@material-ui/core";
import EnglishHelper from "../components/EnglishHelper";
import Bug from "../svg/Bug";
import ParallaxImage from "../components/ParallaxImage";

const Today = () => {
  return (
    <ParallaxImage src="/static/jardin.jpg" bottomSoft height="80vh">
      <ParallaxImage.Container xs={12} md={5} justify="flex-end">
        <ParallaxImage.Box
          mb={5}
          p={{ xs: 0, md: 10 }}
          pt={{ xs: 0, md: 0 }}
          mt={8}
        >
          <Typography variant="h5">
            En 2018 je suis devenue maman d’une petite fille et afin de la
            suivre dans ses premiers apprentissages dans un cadre plus{" "}
            <strong>NATUREL</strong>, j’ai décidé de prendre une disponibilité.
            Notre famille s’est donc installée au Pellerin et c’est désormais
            entre les formations d’anglais pour adultes et des ateliers
            d’anglais avec les enfants que je trouve le temps de me poser dans
            notre jardin pour lire des histoires et énumérer le nom des fleurs
            en anglais à ma petite{" "}
            <EnglishHelper title="Coccinelle">Ladybug</EnglishHelper>{" "}
            <span role="img" aria-label="teacher">
              <Bug height={30} />
            </span>
            .
          </Typography>
        </ParallaxImage.Box>
      </ParallaxImage.Container>
    </ParallaxImage>
  );
};

export default Today;
