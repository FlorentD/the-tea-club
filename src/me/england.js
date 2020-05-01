import React from "react";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import Image from "../components/Image";

const England = () => {
  return (
    <Container>
      <Grid container justify="flex-end" alignItems="flex-start">
        <Grid item xs={12} md={6}>
          <Box m={{ xs: 0, md: 5 }} ml={0} mb={{ xs: 2, md: 0 }}>
            <Typography variant="h4">
              Après ces premières études, j’ai pris mon courage à deux mains et
              j’ai fait mes valises pour aller vivre{" "}
              <strong>une année en Angleterre</strong>
              comme assistante de français dans les écoles primaires
              britanniques. J’espérais secrètement croiser la famille royale
              lors d’un “teatime” mais j’ai surtout fait une multitude de
              rencontres avec des personnes formidables dans les écoles, chez ma
              landlady, au détour des pubs, et même lors d’une simple balade.
            </Typography>
          </Box>
          <Box m={{ xs: 0, md: 5 }} ml={0} mb={{ xs: 2, md: 0 }}>
            <Typography variant="h4">
              J’ai eu le déclic pour enfin <strong>PARLER</strong> anglais car,
              il faut l’avouer je n’avais de toute façon pas vraiment le choix
              dans ce contexte. Mais la peur de s’exprimer s’est estompée pour
              laisser place au <strong>plaisir d’échanger</strong>.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box ml={{ xs: 0, md: 10 }} mr={{ xs: 0, md: 10 }}>
            <Image src="/static/telephonebooth.jpg" alt="telephonebooth" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default England;
