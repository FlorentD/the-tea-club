import React from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { styled } from "@material-ui/core";
import EnglishHelper from "../components/EnglishHelper";
import Image from "../components/Image";

const useStyles = makeStyles({
  root: {},
  box: {
    backgroundColor: "rgba(255,255,255,0.8)",
  },
});

const Text = styled(({ className }) => {
  const styles = useStyles();
  return (
    <Grid container className={className}>
      <Grid item xs={12} md={4}>
        <Box p={{ xs: 0, md: 5 }}>
          <Image src="/static/nantes.jpg" alt="Nantes" />
        </Box>
      </Grid>
      <Grid item xs={12} md={8}>
        <Box
          mb={5}
          p={{ xs: 0, md: 10 }}
          pt={{ xs: 2, md: 5 }}
          className={styles.box}
        >
          <Typography variant="h4" classes={styles}>
            En 2018 je suis devenue maman d’une petite fille et afin de la
            suivre dans ses premiers apprentissages dans un cadre plus naturel,
            j’ai décidé de prendre une disponibilité. Notre famille s’est donc
            installée au <strong>Pellerin</strong>, dans la région nantaise et
            c’est désormais entre les formations d’anglais que je dispense pour
            le{" "}
            <a
              href="https://www.greta-cfa-paysdelaloire.fr/nos-centres-de-formation/greta-cfa-loire-atlantique/"
              target="_blank"
              rel="noreferrer noopener"
            >
              GRETA de Loire-Atlantique
            </a>{" "}
            et des ateliers d’anglais avec les enfants que je trouve le temps et
            le plaisir de me poser dans notre jardin pour lire des histoires et
            énumérer le nom des fleurs en anglais à ma petite{" "}
            <EnglishHelper title="Coccinelle">Ladybug</EnglishHelper>.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
})({
  position: "relative",
  justifyContent: "start",
  zIndex: 100,
});

const Today = () => {
  return (
    <Container>
      <Text />
    </Container>
  );
};

export default Today;
