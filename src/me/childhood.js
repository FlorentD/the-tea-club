import React from "react";
import MeCard from "../components/MeCard";
import { Typography, Box, Container } from "@material-ui/core";

const Childhood = () => {
  return (
    <>
      <Container>
        <Box display="flex" justifyContent="flex-end">
          <Typography variant="h4">Hello I'm Deborah ! </Typography>
        </Box>
      </Container>
      <MeCard src="/static/apples_square.jpg" alt="apples">
        Je suis née à Metz en Lorraine, dans un bain linguistique plutôt
        allemand et en même temps très curieuse de découvrir cette “langue des
        chansons” apprise dans les autres classes : <strong>l’ANGLAIS</strong>.
      </MeCard>
    </>
  );
};

export default Childhood;
