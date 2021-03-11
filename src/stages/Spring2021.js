import React from "react";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import StageRow from "../components/StageRow";

const useStyle = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
  },
});

const Spring2021 = () => {
  const style = useStyle();
  return (
    <>
      <Box mt={2} mb={5}>
        <Typography variant="h3" color="secondary" align="center">
          Stage vacances : Explore the Jungle!
        </Typography>
        <Typography variant="h4" color="secondary" align="center">
          Du 26 au 30 avril
        </Typography>
        <Grid container justify="center">
          <Grid item xs={12} md={10}>
            <Typography>
              Vos enfants ont l’âme exploratrice, laissez les s’évader dans une
              <strong>jungle extraordinaire</strong> à la découverte des plantes
              et animaux fantastiques pour les vacances de printemps.
            </Typography>
            <Typography paragraph>
              <strong>
                Jeux, chants, expériences et créations manuelles en anglais
              </strong>{" "}
              tout est là pour apprendre en s’amusant !
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
          FirstButtonLabel={() => <span>3 demi-journées (75€)</span>}
          SecondButtonLabel={() => <span>5 demi-journées (115€)</span>}
        />
        <StageRow
          cycle="Vacances d'avril 2021"
          src="https://the-tea-club.s3.eu-west-3.amazonaws.com/jungle_710.jpg"
          title="Club 8 - 11 ans, les 26, 27, 28 avril"
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
        <Grid item xs={12} md={6} className={style.root}>
          <Typography>
            Pour les adolescents,{" "}
            <strong>
              encore de nombreuses découvertes artistiques, scientifiques
            </strong>{" "}
            à découvrir pour assimiler les temps en anglais, la grammaire et
            tant de vocabulaire qui s’inscriront naturellement dans leur
            mémoire.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Spring2021;
