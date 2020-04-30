import React from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Image from "../components/Image";

const useStyles = makeStyles({
  root: {},
});

const Studies = () => {
  const styles = useStyles();
  return (
    <Container>
      <Grid container justify="flex-end" alignItems="center">
        <Grid item xs={6}>
          <Box m={10}>
            <Image src="/static/book.jpg" alt="book" />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box p={3}>
            <Typography variant="h4" classes={styles}>
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
