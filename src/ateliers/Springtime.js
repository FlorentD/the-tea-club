import React from "react";
import Card from "../components/Card";
import { Box, Typography } from "@material-ui/core";
import SignDialog from "../SignDialog";

const Springtime = () => {
  return (
    <Card
      title="It’s Springtime!"
      image="https://the-tea-club.s3.eu-west-3.amazonaws.com/sprintime.jpg"
    >
      <Box mt={2}>
        <Typography paragraph>
          Quelle belle saison qui arrive, vous souhaitez faire découvrir ou
          pratiquer l’anglais à votre enfant lors d’une activité créative et
          dans la bonne humeur c’est par ici -->
        </Typography>
        <Typography paragraph>
          J’accueillerai avec joie vos enfants au jardin pour réaliser des
          créations inspirées des trésors du jardin pour cette magnifique
          saison.
        </Typography>
        <Typography variant="h5">Samedi 20 mars</Typography>
        <ul>
          <li>
            <Typography>
              Atelier 3-6 ans de 10h à 11h45 Jardin créatif et manuel pour les
              petites mains.
            </Typography>
          </li>
          <li>
            <Typography>
              Atelier 7-10 ans de 11h à 12h Créé ta carte pop up du printemps.
            </Typography>
          </li>
        </ul>
        <Typography paragraph>
          Tarif : <strong>12€ par enfant</strong>
        </Typography>
        <Typography paragraph>
          Lieu : <strong>33 rue de la Jouardais au Pellerin</strong>
        </Typography>
      </Box>
      <Box mt={4}>
        <SignDialog type="Springtime">
          Atelier du samedi 20 mars
          <Typography>
            Merci d'indiquer l'age, l'atelier et le nombre d'enfants que vous
            souhaitez inscrire dans la partie "Remarques".
          </Typography>
          <Typography>
            Je vous recontacterai rapidement après l'envoi du formulaire pour
            faire connaissance et valider votre inscription !
          </Typography>
        </SignDialog>
      </Box>
    </Card>
  );
};

export default Springtime;
