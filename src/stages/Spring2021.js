import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import StageRow from "../components/StageRow";

const Spring2021 = () => {
  return (
    <>
      <Box mt={2} mb={5}>
        <Typography variant="h3" color="secondary" align="center">
          26 au 30 avril, Explore the Jungle!
        </Typography>
        <Grid container justify="center">
          <Grid item xs={12} md={10}>
            <Typography>
              Vos enfants ont l’âme exploratrice, laissez les s’évader dans une
              jungle extraordinaire à la découverte des plantes et animaux
              fantastiques pour les vacances de printemps.
            </Typography>
            <Typography>
              Jeux, chants, expériences et créations manuelles en anglais tout
              est là pour apprendre en s’amusant !
            </Typography>
            <Typography>
              Pour les adolescents, encore de nombreuses découvertes
              artistiques, scientifiques à découvrir pour assimiler les temps en
              anglais, la grammaire et tant de vocabulaire qui s’inscriront
              naturellement dans leur mémoire.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Grid container spacing={6}>
        <StageRow
          cycle="Vacances d'avril 2021"
          src="https://the-tea-club.s3.eu-west-3.amazonaws.com/jungle_47.jpg"
          title="Club 4 - 7 ans, du 26 au 30 avril"
          dates="Du lundi au vendredi, 9h30 à 11h30 (2h)"
          FirstButtonLabel={() => <span>3 demi-journées (75)</span>}
          SecondButtonLabel={() => <span>5 demi-journées (115€)</span>}
        />
      </Grid>
      <Grid container spacing={6}>
        <StageRow
          cycle="Vacances d'avril 2021"
          src="https://the-tea-club.s3.eu-west-3.amazonaws.com/jungle_710.jpg"
          title="Club 8 - 11 ans, le 26, 27, 28 avril"
          dates="Du lundi au mercredi, de 14h à 16h (2h)"
          FirstButtonLabel={() => <span>3 demi-journées (75€)</span>}
        />
        <StageRow
          cycle="Vacances d'avril 2021"
          src="https://the-tea-club.s3.eu-west-3.amazonaws.com/jungle_college.jpg"
          title="Club collège,  29 et 30 avril"
          dates="Du jeudi au vendredi, 14h à 17h (3h)"
          FirstButtonLabel={() => <span>3 demi-journées (90€)</span>}
        />
      </Grid>
    </>
  );
};

export default Spring2021;
