import React from "react";
import { Box, Typography } from "@material-ui/core";
import SignDialog from "../SignDialog";
import Card from "../components/Card";

const CreativeEaster = () => {
  return (
    <Card
      title="Rabbits, chicks and chocolate eggs are out!"
      image="https://the-tea-club.s3.eu-west-3.amazonaws.com/easter.jpg"
    >
      <Box mt={2}>
        <Typography paragraph>
          Un bon moment de créativité pour vos kids autour du thème de Pâques.
          Créer une décoration de Pâques en anglais rien de plus simple quand on
          le fait en s’amusant.
        </Typography>
        <Typography variant="h5">Samedi 3 avril</Typography>
        <ul>
          <li>
            <Typography>
              Atelier 3-6 ans de 10h à 11h45 / Crée ton panier de Pâques.
            </Typography>
          </li>
          <li>
            <Typography>
              Atelier 7-10 ans de 11h à 12h / Crée ta carte pop up du printemps.
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
        <SignDialog type="Creative Easter">
          Atelier du samedi 3 avril
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

export default CreativeEaster;
