import React from "react";
import { Container, Grid, Box, Typography } from "@material-ui/core";
import Image from "../components/Image";

const Studies = () => {
  return (
    <Container>
      <Grid container justify="flex-end" alignItems="center">
        <Grid item xs={12} md={6}>
          <Box m={{ xs: 4, md: 10 }}>
            <Image src="/static/book.jpg" alt="book" />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box p={{ xs: 0, md: 3 }} mb={{ xs: 2, md: 0 }}>
            <Typography variant="h4">
              Avec une marraine professeure d’anglais qui a aiguisé ma curiosité
              pour la langue de Shakespeare, je me suis dirigée après quelques
              soubresauts scientifiques vers ce{" "}
              <strong>fameux chemin des langues</strong>.
              <br />
              <br />
              La fac d’anglais m’a un peu assommée mais je dois reconnaître
              qu’elle m’a donnée les bases et les outils pour comprendre la
              grammaire, la littérature, la civilisation anglaises.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Studies;
