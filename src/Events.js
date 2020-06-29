import React from "react";
import { Grid, Typography, Box, makeStyles } from "@material-ui/core";
import EnglishHelper from "./components/EnglishHelper";
import SignDialog from "./SignDialog";
import Image from "./components/Image";

const useStyles = makeStyles((theme) => ({
  image: {
    [theme.breakpoints.up("md")]: {
      width: 300,
      height: 250,
    },
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
    <Grid container justify="center">
      <Grid item xs={12} md={10}>
        <Box mt={4}>
          <Typography variant="h4" color="primary">
            Prochains rendez-vous : Matinées Happy Nature
          </Typography>
          <Typography variant="h5" color="secondary">
            le samedi 11 juillet pour les 4/6 ans…
          </Typography>
        </Box>
        <Box mt={2}>
          <Typography variant="h6">
            <span role="img" aria-label="drapeau du royaume-uni">
              🇬🇧
            </span>
            <span role="img" aria-label="emoji feuille">
              🌿
            </span>{" "}
            Une matinée en anglais dans la nature pour vos enfants, ça vous
            tente ?{" "}
            <span role="img" aria-label="emoji feuille">
              🌿
            </span>
            <span role="img" aria-label="drapeau du royaume-uni">
              🇬🇧
            </span>
          </Typography>
        </Box>
        <Box display="flex" mt={2} className={style.bodyBox}>
          <Box mt={{ xs: 1, md: 1 }} mb={{ xs: 2, md: 0 }}>
            <Image
              src="/static/happy_nature.jpg"
              alt="image de présentation des matinées happy nature"
              className={style.image}
            />
            <SignDialog type="marmaille-et-pissenlit">
              <Typography>
                Merci d'indiquer la date souhaitée (vendredi 26 juin ou dimanche
                28 juin), l'age et le nombre d'enfants que vous souhaitez
                inscrire dans la partie "Remarques".
              </Typography>
              <Typography>Tarif découverte : 20€ par enfant</Typography>
            </SignDialog>
          </Box>
          <Box ml={{ xs: 0, md: 5 }}>
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
              je propose à vos enfants un moment de découverte de la nature en
              anglais.
            </Typography>
            <Typography className={style.typo}>
              <span role="img" aria-label="emoji feuille">
                🌿
              </span>{" "}
              Aucun niveau n’est requis, les enfants ont déjà de formidables
              oreilles et capacités de compréhension. Le matériel ludique
              adapté, les mimes et la bonne humeur permettront à tous de passer
              un bon moment.
            </Typography>
            <Typography className={style.typo}>
              <span role="img" aria-label="emoji feuille">
                🌿
              </span>{" "}
              Au programme chasse aux trésors de la nature, jeux de devinettes,
              créations naturelles, chants et histoires en anglais.
            </Typography>
            <Typography className={style.typo}>
              <span role="img" aria-label="emoji feuille">
                🌿
              </span>{" "}
              Horaires : <strong>10h à 12h</strong>
            </Typography>
            <Typography className={style.typo}>
              <span role="img" aria-label="emoji feuille">
                🌿
              </span>{" "}
              Tarif découverte : <strong>20€ par enfant</strong>
            </Typography>
            <Typography className={style.typo}>
              <span role="img" aria-label="emoji feuille">
                🌿
              </span>{" "}
              en cette période de crise sanitaire, un protocole sanitaire est
              mis en place sur le lieu, et devra être lu en amont.
              <br /> Nous veillerons au lavage des mains, nous serons en petits
              groupes de 6 enfants maximum et je privilégie l’utilisation du
              matériel individuel pour chaque enfant.
            </Typography>
            <Typography className={style.typo}>
              <EnglishHelper title="À bientôt !">See you soon!</EnglishHelper>
            </Typography>
            <Typography className={style.typo}>Déborah</Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Events;
