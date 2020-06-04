import React from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Container,
  Typography,
  makeStyles,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
  Button,
} from "@material-ui/core";
import Group from "./svg/Group";
import Student from "./svg/Student";
import English from "./svg/English";
import { ME_CONTACTER } from "./routes";
import Cultures from "./svg/Cultures";
import School from "./svg/School";

const useStyle = makeStyles({
  title: {
    marginTop: 20,
    marginBottom: 40,
    textAlign: "center",
  },
  category: {
    fontWeight: "bold",
    marginTop: 30,
  },
});

const Prestations = () => {
  const style = useStyle();
  const history = useHistory();
  return (
    <Container>
      <Typography variant="h2" className={style.title}>
        Prestations sur mesure
      </Typography>
      <Grid container justify="center">
        <Grid item xs={12} md={8}>
          <Typography>
            Je propose aussi, tout au long de l'année, des prestations sur
            mesure selon vos besoins
          </Typography>
          <Typography color="secondary" className={style.category}>
            Pour les particuliers :
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <Group width={40} />
              </ListItemIcon>
              <ListItemText>
                Ateliers sur mesure pour un groupe constitué (tarifs variables
                selon la durée et l’âge des enfants).
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Student width={40} />
              </ListItemIcon>
              <ListItemText>
                Cours particuliers anglais adolescents (collège 11-15 ans).
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <English width={40} />
              </ListItemIcon>
              <ListItemText>
                Remise à niveau / approfondissement des bases / séances
                thématiques en immersion.
              </ListItemText>
            </ListItem>
          </List>
          <Typography color="secondary" className={style.category}>
            Pour les associations ou structures locales :
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <Cultures width={40} />
              </ListItemIcon>
              <ListItemText>
                Animations thématiques lors d'événements / manifestations
                (restaurants, portes ouvertes…)
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <School width={40} />
              </ListItemIcon>
              <ListItemText>
                Animations ponctuelles / intervention dans les écoles, centre de
                loisirs, crèches, médiathèques… :{" "}
                <Link to={ME_CONTACTER}>devis sur demande</Link>.
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="center">
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push(ME_CONTACTER)}
        >
          <Box m={2}>Me contacter</Box>
        </Button>
      </Box>
    </Container>
  );
};

export default Prestations;
