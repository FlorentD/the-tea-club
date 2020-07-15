import React from "react";
import {
  Container,
  Typography,
  makeStyles,
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import EnglishHelper from "./components/EnglishHelper";
import PropTypes from "prop-types";
import Forest1 from "./svg/Forest1";
import Trees from "./svg/Trees";
import SignDialog from "./SignDialog";

const useCardStyle = makeStyles({
  root: {
    margin: "20px",
  },
  title: (props) => ({
    borderTop: `4px solid ${props.background}`,
    backgroundColor: "#F2F2F2",
    padding: "10px",
    fontWeight: "bold",
  }),
  image: (props) => ({
    position: "relative",
    padding: "30px",
    height: 240,
    textAlign: "center",
    backgroundImage: `url("${props.image}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }),
  credits: {
    position: "absolute",
    color: "gray",
    bottom: 0,
    left: 0,
    "> a": {
      color: "gray",
    },
  },
});

const Card = ({ title, background, image, children, credits, fullWidth }) => {
  const style = useCardStyle({ background, image });
  return (
    <Grid item xs={12} md={fullWidth ? 12 : 6}>
      <Box className={style.root}>
        <Typography variant="h5" className={style.title}>
          {title}
        </Typography>
        <Box className={style.image}>
          {credits && (
            <Typography variant="caption" className={style.credits}>
              {credits}
            </Typography>
          )}
        </Box>
        {children}
      </Box>
    </Grid>
  );
};

Card.propTypes = {
  background: PropTypes.string,
  image: PropTypes.string,
  fullWidth: PropTypes.bool,
};

Card.defaultProps = {
  background: "black",
  image: "",
  fullWidth: false,
};

const useStyle = makeStyles({
  title: {
    textAlign: "center",
  },
  dates: {
    textAlign: "center",
    fontWeight: "bold",
  },
});

const DateFormat = ({ children }) => (
  <Typography
    style={{
      fontWeight: "bold",
      textDecoration: "underline",
      display: "inline-block",
    }}
  >
    {children}
  </Typography>
);

const Stages = () => {
  const style = useStyle();
  return (
    <Container style={{ marginTop: "40px" }}>
      <Typography variant="h3" className={style.title}>
        <EnglishHelper title="Stages d'été">Summer clubs</EnglishHelper>
      </Typography>
      <Box mt={4}>
        <Typography variant="h4" className={style.title}>
          Thème :{" "}
          <EnglishHelper title="Des ados qui continuent d’apprendre l’anglais">
            Teens keep learning English
          </EnglishHelper>
        </Typography>
      </Box>
      <Box mt={4}>
        <Typography variant="h4" color="secondary" className={style.dates}>
          Du 24 au 28 août 2020
        </Typography>
      </Box>
      <Grid container style={{ marginBottom: 40 }}>
        <Card
          title="Une reprise de l’anglais en douceur pour les collégiens"
          image="/static/english-college.jpg"
          background="#012169"
          fullWidth
        >
          <Box mt={2}>
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
          <List>
            <ListItem>
              <ListItemIcon>
                <Forest1 width={40} />
              </ListItemIcon>
              <ListItemText>
                <strong>Formule 5 matinées (150€) : </strong>
                <DateFormat>
                  du lundi 24/08/2020 au vendredi 28/08/2020
                </DateFormat>{" "}
                de 10h00 à 12h00
              </ListItemText>
            </ListItem>
          </List>
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
          <Box mt={4}>
            <SignDialog type="STAGE // Les Ados">
              Pour les collégiens du 24 au 28 août 2020.
              <Typography>
                Merci d'indiquer l'age et le nombre d'enfants que vous souhaitez
                inscrire dans la partie "Remarques".
              </Typography>
              <Typography>
                Je vous recontacterai rapidement après l'envoi du formulaire
                pour faire connaissance et valider votre inscription !
              </Typography>
            </SignDialog>
          </Box>
        </Card>
      </Grid>
      <Box mt={2} mb={10}>
        <Typography variant="h3" color="primary">
          Evénements passés :
        </Typography>
      </Box>
      <Box mt={4}>
        <Typography variant="h4" className={style.title}>
          Thème :{" "}
          <EnglishHelper title="Artistes de la nature">
            “Be an artist of nature”
          </EnglishHelper>
        </Typography>
      </Box>
      <Box mt={4}>
        <Typography variant="h4" color="secondary" className={style.dates}>
          Du 06/07/2020 au 10/07/2020
        </Typography>
      </Box>
      <Box mt={6}>
        <Typography variant="h6">
          Découvrir le jardin, la faune, la flore, s’exprimer à partir de jeux,
          chansons et créations artistiques sur le thème de la nature.
        </Typography>
        <Typography>
          On apprend les formes, les couleurs, les noms des outils, les verbes
          d’action liés à l’art, on développe son imagination et sa créativité
          en inventant une histoire, en découvrant le vocabulaire de la nature
          des plantes et des animaux.
        </Typography>
      </Box>
      <Grid container style={{ marginBottom: 40 }}>
        <Card
          title="Little EXPLORERS 4-7 ans"
          image="/static/stage_little_explorers.jpg"
          background="#4FBA6F"
        >
          <List>
            <ListItem>
              <ListItemIcon>
                <Trees width={40} />
              </ListItemIcon>
              <ListItemText>
                <strong>Formule 3 demi-journées (75€) : </strong>
                <DateFormat>du 06/07/2020 au 08/07/2020</DateFormat> de 9h30 à
                11h30
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Forest1 width={40} />
              </ListItemIcon>
              <ListItemText>
                <strong>Formule 5 demi-journées (115€) : </strong>
                <DateFormat>du 06/07/2020 au 10/07/2020</DateFormat> de 9h30 à
                11h30
              </ListItemText>
            </ListItem>
          </List>
          <List dense>
            <ListItem>
              <ListItemText>
                <strong>DAY 1</strong> : Portraits nature et Land art / Nature
                portraits and Land art
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <strong>DAY 2</strong> : La chenille qui fait des trous dans le
                potager / The very hungry Caterpillar in the garden.
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <strong>DAY 3</strong> : Petits insectes / Little insects
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <strong>DAY 4</strong> : Chasse aux trésors / Treasure hunt
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <strong>DAY 5</strong> : Oiseaux perchés / Fly little birds
              </ListItemText>
            </ListItem>
          </List>
          <Box mt={4}>
            <SignDialog type="STAGE // 4-7 ans" complete>
              Pour les Little EXPLORERS 4-7 ans du 06/07/2020 au 10/07/2020.
              <Typography>
                Merci d'indiquer l'age et le nombre d'enfants que vous souhaitez
                inscrire dans la partie "Remarques".
              </Typography>
              <Typography>
                Je vous recontacterai rapidement après l'envoi du formulaire
                pour faire connaissance et valider votre inscription !
              </Typography>
            </SignDialog>
          </Box>
        </Card>
        <Card
          title="BIG TRAVELLERS 8-11 ans"
          image="/static/stage_big_travellers.jpg"
          background="#FF757C"
          credits={<span>Photo by La Maison de Loulou</span>}
        >
          <List>
            <ListItem>
              <ListItemIcon>
                <Trees width={40} />
              </ListItemIcon>
              <ListItemText>
                <strong>Formule 3 demi-journées (75€) : </strong>
                <DateFormat>du 06/07/2020 au 08/07/2020</DateFormat> de 14h30 à
                16h30
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Forest1 width={40} />
              </ListItemIcon>
              <ListItemText>
                <strong>Formule 5 demi-journées (115€) : </strong>
                <DateFormat>du 06/07/2020 au 10/07/2020</DateFormat> de 14h30 à
                16h30
              </ListItemText>
            </ListItem>
          </List>
          <List dense>
            <ListItem>
              <ListItemText>
                <strong>DAY 1</strong> : Portraits nature et Land art / Nature
                portraits and Land art
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <strong>DAY 2</strong> : Grillon qui n’a pas de chanson d’Eric
                Carle / The very quiet cricket by Eric Carle
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <strong>DAY 3</strong> : Insectes fantastiques / Crazy insects
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <strong>DAY 4</strong> : Chasse aux trésors / Treasure hunt
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <strong>DAY 5</strong> : Les oiseaux du paradis / Wonderful
                birds
              </ListItemText>
            </ListItem>
          </List>
          <Box mt={4}>
            <SignDialog type="STAGE // 8-11 ans" complete>
              Pour les BIG TRAVELLERS 8-11 ans du 06/07/2020 au 10/07/2020.
              <Typography>
                Merci d'indiquer l'age et le nombre d'enfants que vous souhaitez
                inscrire dans la partie "Remarques".
              </Typography>
              <Typography>
                Je vous recontacterai rapidement après l'envoi du formulaire
                pour faire connaissance et valider votre inscription !
              </Typography>
            </SignDialog>
          </Box>
        </Card>
      </Grid>
    </Container>
  );
};

export default Stages;
