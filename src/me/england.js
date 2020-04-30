import React from "react";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import Image from "../components/Image";

const England = () => {
  return (
    <Container>
      <Grid container justify="flex-end" alignItems="flex-start">
        <Grid item xs={6}>
          <Box m={5} ml={0}>
            <Typography variant="h4">
              J’ai passé une année scolaire entière, en immersion dans trois
              écoles primaires britanniques dans la ville de{" "}
              <a
                href="https://fr.wikipedia.org/wiki/Milton_Keynes"
                target="_blank"
                rel="noreferrer noopener"
              >
                Milton Keynes
              </a>{" "}
              où j’étais assistante de français. Logée chez ma chère{" "}
              <i>landlady</i>&nbsp; Pat, qui m’a également tant appris, et
              entourée d’assistants étrangers du monde entier, j’ai eu le déclic
              pour enfin <strong>PARLER</strong> anglais.
            </Typography>
          </Box>
          <Box m={5} ml={0}>
            <Typography variant="h4">
              La peur de s’exprimer s’est estompée au fil des mois pour laisser
              place au plaisir d’échanger avec les personnes de toutes
              nationalités confondues dans une langue commune.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box ml={10} mr={10}>
            <Image src="/static/telephonebooth.jpg" alt="telephonebooth" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default England;
