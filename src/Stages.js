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
import Forest from "./svg/Forest";
import Forest1 from "./svg/Forest1";
import Trees from "./svg/Trees";
import Travel from "./svg/Travel";
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
  picto: (props) => ({
    padding: "30px",
    textAlign: "center",
    backgroundColor: props.background,
  }),
});

const Card = ({ title, icon, background, children }) => {
  const style = useCardStyle({ background });
  return (
    <Grid item xs={12} md={6}>
      <Box className={style.root}>
        <Typography variant="h4" className={style.title}>
          {title}
        </Typography>
        <Box className={style.picto}>{icon}</Box>
        {children}
      </Box>
    </Grid>
  );
};

Card.propTypes = {
  background: PropTypes.string,
};

Card.defaultProps = {
  background: "black",
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
        <EnglishHelper title="Stages vacances">Holiday clubs</EnglishHelper>
      </Typography>
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
      </Box>
      <Grid container>
        <Card
          title="Little EXPLORERS 4-7 ans"
          icon={<Forest width={120} />}
          background="#4FBA6F"
        >
          <List>
            <ListItem>
              <ListItemIcon>
                <Trees width={30} />
              </ListItemIcon>
              <ListItemText>
                Formule 3 demi-journées :{" "}
                <DateFormat>du 06/07/2020 au 08/07/2020</DateFormat> de 9h30 à
                11h30
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Forest1 width={30} />
              </ListItemIcon>
              <ListItemText>
                Formule 5 demi-journées :{" "}
                <DateFormat>du 06/07/2020 au 10/07/2020</DateFormat> de 14h30 à
                16h30
              </ListItemText>
            </ListItem>
          </List>
          <Typography>
            Landart, animaux fantastiques, chasse au trésor, mini hôtel à
            insectes, bateaux- bâtons peinture, découpages, collages, créations
            naturelles !
          </Typography>
          <Box mt={4}>
            <SignDialog type="STAGE // 4-7 ans">
              Pour les Little EXPLORERS 4-7 ans du 06/07/2020 au 10/07/2020.
              <Typography>
                Je vous recontacterai rapidement après l'envoi du formulaire
                pour faire connaissance et valider votre inscription !
              </Typography>
            </SignDialog>
          </Box>
        </Card>
        <Card
          title="BIG TRAVELLERS 8-11 ans"
          icon={<Travel width={120} />}
          background="#FF757C"
          price={450}
        >
          <List>
            <ListItem>
              <ListItemIcon>
                <Forest1 width={30} />
              </ListItemIcon>
              <ListItemText>
                Formule 5 demi-journées :{" "}
                <DateFormat>du 06/07/2020 au 10/07/2020</DateFormat> de 9h30 à
                12h00
              </ListItemText>
            </ListItem>
          </List>
          <Typography>
            Landart, les insectes, la chasse au trésor, safari photo, les
            oiseaux du monde compositions, pliages, peintures, découvertes
            photographiques et animalières !
          </Typography>
          <Box mt={4}>
            <SignDialog type="STAGE // 8-11 ans">
              Pour les BIG TRAVELLERS 8-11 ans du 06/07/2020 au 10/07/2020.
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
