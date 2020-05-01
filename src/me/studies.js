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
              Trois années de faculté d’anglais m’ont données les bases et les
              outils pour comprendre la grammaire, la littérature, la
              civilisation anglaises mais ce n’est qu’en prenant mon courage à
              deux mains et en faisant mes valises pour l’Angleterre que mes
              apprentissages se sont vraiment révélés.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Studies;
