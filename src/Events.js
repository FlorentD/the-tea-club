import React from "react";
import {
  Grid,
  Typography,
  Box,
  makeStyles,
  ListItem,
  ListItemText,
  List,
} from "@material-ui/core";
import EnglishHelper from "./components/EnglishHelper";
import SignDialog from "./SignDialog";
import Image from "./components/Image";

const useStyles = makeStyles((theme) => ({
  image: {
    height: 250,
    objectFit: "cover",
    marginBottom: "20px",
  },
  bodyBox: {
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      alignItems: "flex-start",
    },
  },
  typo: {
    marginTop: 12,
  },
}));

const Events = () => {
  const style = useStyles();
  return (
    <Grid container justify="center" spacing={10}>
      <Grid item xs={12} md={6}>
        <Box mt={4}>
          <Typography variant="h5" color="primary">
            Matinées happy nature, nouvelles dates :
          </Typography>
          <Typography variant="h6" color="secondary">
            Le samedi 22 août de 14h à 16h <br />
            Le samedi 29 août de 10h à 12h
          </Typography>
        </Box>
        <Box mt={{ xs: 1, md: 1 }} mb={{ xs: 2, md: 0 }}>
          <Image
            src="/static/happy_nature_2.jpg"
            alt="image de présentation des matinées happy nature"
            className={style.image}
          />
        </Box>
        <Box>
          <Typography>
            <span role="img" aria-label="emoji feuille">
              🌿
            </span>{" "}
            Dans le chouette écrin de{" "}
            <a
              href="https://marmaille-et-pissenlit.fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Marmaille et Pissenlit
            </a>{" "}
            à Saint Hilaire de Chaléons, je propose à vos enfants un moment de
            découverte de la nature en anglais.
          </Typography>
          <Typography className={style.typo}>
            <span role="img" aria-label="emoji pouce en l'air">
              👍
            </span>{" "}
            Aucun niveau n’est requis, les enfants ont déjà de formidables
            oreilles et capacités de compréhension. Le matériel ludique adapté,
            les mimes et la bonne humeur permettront à tous de passer un bon
            moment.
          </Typography>
          <Typography className={style.typo}>
            <span role="img" aria-label="emoji etoiles dans les yeux">
              🤩
            </span>{" "}
            Au programme chasse aux trésors de la nature, jeux de devinettes,
            créations naturelles, chants et histoires en anglais.
          </Typography>
          <Typography className={style.typo}>
            <span role="img" aria-label="drapeau du royaume-uni">
              🇬🇧
            </span>{" "}
            Tarif découverte : <strong>20€ par enfant</strong>
          </Typography>
          <Typography className={style.typo}>
            Venez vite inscrire votre enfant les places sont limitées !
          </Typography>
          <Box mt={2}>
            <SignDialog type="marmaille-et-pissenlit">
              <Typography>
                Merci d'indiquer la date souhaitée (vendredi 26 juin ou dimanche
                28 juin), l'age et le nombre d'enfants que vous souhaitez
                inscrire dans la partie "Remarques".
              </Typography>
              <Typography>Tarif découverte : 20€ par enfant</Typography>
            </SignDialog>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box mt={4}>
          <Typography variant="h5" color="primary">
            Stage{" "}
            <EnglishHelper title="Stages d'été">Summer clubs</EnglishHelper>{" "}
            (Pour les collégiens)
          </Typography>
          <Typography variant="h6" color="secondary">
            Thème :{" "}
            <EnglishHelper title="Des ados qui continuent d’apprendre l’anglais">
              Teens keep learning English
            </EnglishHelper>
            <br />
            Du 24 au 28 août 2020 de 10h à 12h
          </Typography>
        </Box>
        <Box mt={{ xs: 1, md: 1 }} mb={{ xs: 2, md: 0 }}>
          <Image
            src="/static/english-college.jpg"
            alt=""
            className={style.image}
          />
        </Box>
        <Box>
          <Typography>Pour aider votre enfant à :</Typography>
          <ul>
            <li>
              <Typography>
                reprendre les repères et les bases de la langue
              </Typography>
            </li>
            <li>
              <Typography>renforcer ses apprentissages</Typography>
            </li>
            <li>
              <Typography>retrouver le goût de l’anglais</Typography>
            </li>
          </ul>
        </Box>
        <Typography className={style.typo}>
          <span role="img" aria-label="drapeau du royaume-uni">
            🇬🇧
          </span>{" "}
          <strong>Formule 5 matinées (150€)</strong>
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText>
              <strong>Monday</strong> : Introduce yourself / Se présenter
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <strong>Tuesday</strong> : Let’s bake some cookies ! / Préparons
              des cookies !
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <strong>Wednesday</strong> : We love sports / On aime les sports
              (déplacement sur le site de la Martinière)
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <strong>Thursday</strong> : Discover nature / Découvre la nature
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <strong>Friday</strong> : Scientific day / Journée scientifique
            </ListItemText>
          </ListItem>
        </List>
        <Box mt={2}>
          <SignDialog type="STAGE // Les Ados">
            Pour les collégiens du 24 au 28 août 2020.
            <Typography>
              Merci d'indiquer l'age et le nombre d'enfants que vous souhaitez
              inscrire dans la partie "Remarques".
            </Typography>
            <Typography>
              Je vous recontacterai rapidement après l'envoi du formulaire pour
              faire connaissance et valider votre inscription !
            </Typography>
          </SignDialog>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Events;
