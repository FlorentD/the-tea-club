import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import StageRow from "../components/StageRow";

const Winter2021 = () => {
  return (
    <>
      <Box mt={2} mb={5}>
        <Typography variant="h3" color="secondary" align="center">
          Stages WINTER WONDERLAND 2021!
        </Typography>
        <Grid container justify="center">
          <Grid item xs={12} md={10}>
            <Typography>
              Autour du thème de l'hiver vos enfants pourront créer, chanter,
              s'amuser en anglais.
            </Typography>
            <Typography>
              Ça se passe durant les vacances de février au Pellerin :
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Grid container spacing={4}>
        <StageRow
          cycle="Vacances d'hiver 2021"
          src="https://the-tea-club.s3.eu-west-3.amazonaws.com/winter_2021_teens.jpg"
          title="Teens Club, du 24 au 26 février"
          dates="Du mercredi au vendredi, 10h à 12h pour les collégiens"
          FirstButtonLabel={() => <span>3 demi-journées (90€)</span>}
        />
      </Grid>
      <Grid container spacing={4}>
        <StageRow
          cycle="Vacances d'hiver 2021"
          src="https://the-tea-club.s3.eu-west-3.amazonaws.com/winter_2021_4-7.jpg"
          title="Club 4 - 7 ans, du 1er au 5 mars"
          dates="Du lundi au vendredi, 9h30 à 11h30"
          FirstButtonLabel={() => <span>3 demi-journées (75€)</span>}
          SecondButtonLabel={() => <span>5 demi-journées (115€)</span>}
        />
        <StageRow
          cycle="Vacances d'hiver 2021"
          src="https://the-tea-club.s3.eu-west-3.amazonaws.com/winter_2021_8-11.jpg"
          title="Club 8 - 11 ans, du 1er au 5 mars"
          dates="Du lundi au vendredi, 14h à 16h"
          FirstButtonLabel={() => <span>3 demi-journées (75€)</span>}
          SecondButtonLabel={() => <span>5 demi-journées (115€)</span>}
        />
      </Grid>
    </>
  );
};

export default Winter2021;
