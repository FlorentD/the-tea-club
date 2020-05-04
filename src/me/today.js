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
import Bug from "../svg/Bug";
import ShowOnView from "../components/ShowOnView";

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
        <Box>
          <Image src="/static/jardin.jpg" alt="Jardin" />
        </Box>
      </Grid>
      <Grid item xs={12} md={8}>
        <Box
          mb={5}
          p={{ xs: 0, md: 10 }}
          pt={{ xs: 0, md: 0 }}
          className={styles.box}
        >
          <ShowOnView>
            <Typography variant="h5" classes={styles}>
              En 2018 je suis devenue maman d’une petite fille et afin de la
              suivre dans ses premiers apprentissages{" "}
              <strong>dans un cadre plus naturel</strong>, j’ai décidé de
              prendre une disponibilité. Notre famille s’est donc installée au
              Pellerin, dans la région nantaise et c’est désormais entre les
              formations d’anglais pour adultes et des ateliers d’anglais avec
              les enfants que je trouve le temps de me poser dans notre jardin
              pour lire des histoires et énumérer le nom des fleurs en anglais à
              ma petite{" "}
              <EnglishHelper title="Coccinelle">Ladybug</EnglishHelper>{" "}
              <span role="img" aria-label="teacher">
                <Bug height={30} />
              </span>
              .
            </Typography>
          </ShowOnView>
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
