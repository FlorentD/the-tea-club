import React from "react";
import { Box, Typography } from "@material-ui/core";
import SignDialog from "../SignDialog";
import Card from "../components/Card";

const SpringButterflies = () => {
  return (
    <Card
      title="Spring Butterflies"
      image="https://the-tea-club.s3.eu-west-3.amazonaws.com/butterflies.jpg"
    >
      <Box mt={2}>
        <Typography paragraph>
          Venez profiter d’un après-midi nature et création en anglais autour du
          thème des papillons. Sur le superbe site de Marmaille et Pissenlit,
          les enfants pourront observer les insectes fascinants, jouer et créer
          en anglais sans oublier un moment convivial de Tea Time à partager.
        </Typography>
        <Typography variant="h5">Samedi 17 avril :</Typography>
        <ul>
          <li>
            <Typography>14h-15h30 : 7-10 ans</Typography>
          </li>
          <li>
            <Typography>15h30-16h : Pause Tea time</Typography>
          </li>
          <li>
            <Typography>16h-17h : 3 - 6 ans</Typography>
          </li>
        </ul>
        <Typography>
          Tarif 1h30 : <strong>15€ par duo enfant-accompagnant</strong>
        </Typography>
        <Typography paragraph>
          Tarif 1h : <strong>12€ par duo enfant-accompagnant</strong>
        </Typography>
        <Typography paragraph>
          Lieu : <strong>La Tartouzerie 44680 Saint Hilaire de Chaléons</strong>
        </Typography>
      </Box>
      <Box mt={4}>
        <SignDialog type="Springtime">
          Atelier Marmaille du 17 avril
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

export default SpringButterflies;
