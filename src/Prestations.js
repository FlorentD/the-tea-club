import React from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  Typography,
  makeStyles,
  Grid,
  Box,
  Button,
} from "@material-ui/core";
import { ME_CONTACTER } from "./routes";
import Image from "./components/Image";
import SignDialog from "./SignDialog";

const useStyle = makeStyles({
  title: {
    marginTop: 20,
    marginBottom: 40,
    textAlign: "center",
  },
  category: {
    fontWeight: "bold",
    fontSize: "xxx-large",
  },
  italic: {
    fontStyle: "italic",
  },
});

const usePrestaStyle = makeStyles({
  grid: {
    borderBottom: (props) => `10px solid ${props.color}`,
    paddingBottom: 10,
  },
  title: {
    textAlign: "center",
    backgroundColor: (props) => props.color,
    marginBottom: 10,
    padding: 10,
  },
  box: {
    lineHeight: 10,
    marginTop: 10,
  },
});

const PrestaCard = ({
  title,
  img,
  What,
  where,
  How,
  color,
  signTitle,
  SignParagraph,
}) => {
  const styles = usePrestaStyle({ color });
  return (
    <Grid item xs={12} md={6}>
      <Box className={styles.grid}>
        <Typography variant="h5" className={styles.title}>
          {title}
        </Typography>
        <Image src={img} alt="" height={200} />
        <Box className={styles.box}>
          <Typography color="primary">WHAT?</Typography>
          <Typography>
            <What />
          </Typography>
        </Box>
        {where && (
          <Box className={styles.box}>
            <Typography color="primary">WHERE AND WHEN?</Typography>
            <Typography>{where}</Typography>
          </Box>
        )}
        <Box className={styles.box}>
          <Typography color="primary">HOW?</Typography>
          <Typography>
            <How />
          </Typography>
        </Box>
        <Box mt={4}>
          <SignDialog type={signTitle}>
            <SignParagraph />
          </SignDialog>
        </Box>
      </Box>
    </Grid>
  );
};

const Prestations = () => {
  const style = useStyle();
  const history = useHistory();
  return (
    <Container>
      <Typography variant="h2" className={style.title}>
        Prestations sur mesure
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Typography align="center">
            Je propose aussi, tout au long de l'année, des prestations sur
            mesure selon vos besoins.
          </Typography>
          <Typography color="secondary" className={style.category}>
            Pour les particuliers :
          </Typography>
        </Grid>
        <PrestaCard
          title="Atelier nature"
          img="/static/presta_nature.jpg"
          What={() => (
            <Box>
              <Typography>
                Un moment pour que les jeunes oreilles se baignent dans
                l’anglais sur le thème de la nature.
              </Typography>
            </Box>
          )}
          where="Chez vous, chez moi, dans le jardin ou sur un lieu défini avec vous (parcs de la région) avec un groupe de 4 à 6 enfants, nous découvrons les premiers mots de la nature environnante."
          color="lightgreen"
          How={() => {
            return (
              <Box>
                <Typography>
                  Observation/répétition avec des jeux, des chants, des
                  créations naturelles. Quoi de mieux pour pratiquer facilement
                  la langue ?
                </Typography>
                <Typography>Tarif : 50 € / 1 heure</Typography>
              </Box>
            );
          }}
          signTitle="Prestation // Atelier Nature"
          SignParagraph={() => {
            return (
              <Box>
                <Typography>
                  Merci d'indiquer vos choix pour l'atelier nature, je vous
                  recontacterai rapidement pour organiser la séance !
                </Typography>
                <Typography>Tarif : 50 €</Typography>
              </Box>
            );
          }}
        />
        <PrestaCard
          title="Teens"
          img="/static/presta_teen.jpg"
          What={() => (
            <Box>
              <Typography>
                Atelier collectif à l'année pour les collégiens <br />➞ 4
                collégiens par groupe (adaptation des horaires avec les emplois
                du temps des collégiens).
              </Typography>
            </Box>
          )}
          where="Cours individuels à mon domicile au Pellerin ou à votre domicile (avec ajout de frais kilométriques)."
          color="lightblue"
          How={() => {
            return (
              <Box>
                <Typography>
                  Les tarifs sont les suivants pour le niveau collège :
                </Typography>
                <Typography>25 € /h cours individuel</Typography>
                <Typography>20 € /h cours collectif</Typography>
              </Box>
            );
          }}
          signTitle="Prestation // Teen"
          SignParagraph={() => {
            return (
              <Box>
                <Typography>
                  Merci d'indiquer votre cours souhaité, je vous recontacterai
                  rapidement !
                </Typography>
                <Typography>25 € /h cours individuel</Typography>
                <Typography>20 € /h cours collectif</Typography>
              </Box>
            );
          }}
        />
        <Grid item xs={12}>
          <Typography color="secondary" className={style.category}>
            Pour les associations ou structures locales :
          </Typography>
        </Grid>
        <PrestaCard
          title="Petit bain d’anglais pour les crèches"
          img="/static/presta_creche.jpg"
          color="lightpink"
          What={() => (
            <Box>
              <Typography>
                Une initiation aux premières sonorités de l’anglais à travers
                des jeux et des chansons.
              </Typography>
              <Typography className={style.italic}>
                Exemples d’activités : Say Hello ! Se présenter avec Mister Fox,
                Colourful time : bowling des couleurs, Story time : lecture
                d’album, Funny animals : jeu d’assemblage des animaux.
              </Typography>
            </Box>
          )}
          How={() => {
            return (
              <Box>
                <Typography>1H ➞ 45 €</Typography>
                <Typography>forfait 4 séances ➞ 160 €</Typography>
                <Typography>forfait 10 séances à l’année ➞ 135 €</Typography>
                <Typography>forfait demi-journée ➞ 150 €</Typography>
              </Box>
            );
          }}
          signTitle="Prestation // Crèche"
          SignParagraph={() => {
            return (
              <Box>
                <Typography>
                  Merci d'indiquer le format souhaité,je vous recontacterai
                  rapidement !
                </Typography>
                <Typography>1H ➞ 45 €</Typography>
                <Typography>
                  forfait 4 séances ➞ 160 € soit 40€/heure
                </Typography>
                <Typography>
                  forfait 10 séances à l’année ➞ 135 € soit 35€/heure
                </Typography>
              </Box>
            );
          }}
        />

        <Grid item xs={12}>
          <Box display="flex" justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              onClick={() => history.push(ME_CONTACTER)}
            >
              <Box m={2}>Me contacter</Box>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Prestations;
