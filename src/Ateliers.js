import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Grid,
  Box,
  Typography,
  makeStyles,
  withWidth,
  isWidthUp,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  withStyles,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import Forest from "./svg/Forest";
import Travel from "./svg/Travel";
import Friends from "./svg/Friends";
import Discount from "./svg/Discount";
import Receipt from "./svg/Receipt";
import SignDialog from "./SignDialog";
import Image from "./components/Image";
import Happiness from "./svg/Happiness";
import SvgFox from "./svg/Fox";
import Forest1 from "./svg/Forest1";

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(even)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

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
  description: {
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  descriptionLeft: {
    marginTop: 10,
    marginBottom: 10,
    textAlign: "justify",
    fontWeight: "bold",
  },
  table: {
    marginTop: 20,
  },
  header: (props) => ({
    backgroundColor: props.background,
  }),
  headerSpan: {
    color: "white",
    fontSize: "1.4rem",
  },
  dates: {
    fontSize: "0.9rem",
    marginTop: 10,
    textAlign: "left",
  },
  schedule: {
    fontSize: "1.4rem",
    fontWeight: "bold",
    position: "relative",
  },
  full: {
    "&:after": {
      content: "'complet'",
      position: "absolute",
      top: 0,
      left: 0,
      color: "red",
      lineHeight: "26px",
      transform: "rotate(-10deg)",
      letterSpacing: "9px",
      opacity: 0.8,
    },
  },
});
const CardMarmaille = ({ title, icon, background }) => {
  const style = useCardStyle({ background });
  return (
    <Grid item xs={12} md={6}>
      <Box className={style.root}>
        <Typography variant="h5" className={style.title}>
          {title}
        </Typography>
        <Box className={style.picto}>{icon}</Box>
        <Box className={style.descriptionLeft}>
          <Typography>
            <span role="img" aria-label="emoji feuille">
              🌿
            </span>{" "}
            Dans le chouette écrin de Marmaille et Pissenlit à Saint Hilaire de
            Chaléons, je propose à vos enfants un moment de découverte de la
            nature en anglais.
          </Typography>
          <br />
          <Typography>
            <span role="img" aria-label="emoji pouce en l'air">
              👍
            </span>{" "}
            Aucun niveau n’est requis, les enfants ont déjà de formidables
            oreilles et capacités de compréhension. Le matériel ludique adapté,
            les mimes et la bonne humeur permettront à tous de passer un bon
            moment sur des thèmes variés tout au long de l’année.
          </Typography>
          <br />
          <Typography>
            <span role="img" aria-label="emoji etoiles dans les yeux">
              🤩
            </span>{" "}
            Au programme : chasse aux trésors de la nature, jeux de devinettes,
            créations naturelles, chants et histoires en anglais.
            <br />
            Des thèmes différents sont proposés au cours de l’année.
            <br /> Entre le bois et la cuisine de gadoue, le parcours de
            motricité et les trésors de la nature, les découvertes se font en
            anglais de manière très naturelle.
          </Typography>
          <TableContainer>
            <Table size="small" className={style.table}>
              <TableHead className={style.header}>
                <TableCell colSpan={2}>
                  <span className={style.headerSpan}>Autumn in the woods</span>
                </TableCell>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <TableCell>
                    <strong>10 Octobre 2020</strong>
                    <br />
                    4 - 7 ans de 10h à 12h
                    <br />8 - 11 ans de 14h à 16h
                  </TableCell>
                  <TableCell align="center">
                    <span className={style.schedule}>Tarif : 20€</span>
                  </TableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Box mt={2}>
            <Typography style={{ color: "green", fontWeight: "bold" }}>
              Groupes de 4 à 6 enfants. <br />
              Lieu dit de la Tartouzerie à Saint Hilaire de Chaléons.
            </Typography>
          </Box>
        </Box>
        <SignDialog
          type={`${title}`}
          ButtonElement={() => (
            <div style={{ lineHeight: "22px" }}>S'inscrire</div>
          )}
        >
          Inscription pour {title}.
          <Typography>
            Merci d'indiquer l'age, le nombre d'enfants et le créneau sur lequel
            vous souhaitez les inscrire dans la partie "remarques".
          </Typography>
          <Typography>
            Je vous recontacterai rapidement après l'envoi du formulaire pour
            faire connaissance et valider votre inscription !
          </Typography>
        </SignDialog>
      </Box>
    </Grid>
  );
};

const CardLittleFoxes = ({ title, icon, background }) => {
  const style = useCardStyle({ background });
  return (
    <Grid item xs={12} md={6}>
      <Box className={style.root}>
        <Typography variant="h5" className={style.title}>
          {title}
        </Typography>
        <Box className={style.picto}>{icon}</Box>
        <Box className={style.descriptionLeft}>
          <Typography>
            <span role="img" aria-label="emoji renard">
              🦊
            </span>{" "}
            Des ateliers de 45 min pour que votre enfant découvre naturellement
            les sons et tonalités de l’anglais au travers de chansons,
            histoires, mises en scène, petits jeux… Les mots ou expressions sont
            accompagnés d’une image ou d’un geste pour être compris
            spontanément.
            <br />
            <br />
            <span role="img" aria-label="emoji pouce en l'air">
              👍
            </span>{" "}
            Pour l’enfant:
            <List>
              <ListItem>
                <ListItemText>
                  - à travers différents supports audios, visuels et tactiles
                  tous ses sens sont éveillés
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  - il va découvrir la langue et s'en imprégner tout en
                  s’amusant
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  - en confiance avec son parent il participe à un moment
                  ludique, complice, convivial avec d’autres enfants.
                </ListItemText>
              </ListItem>
            </List>
            <span role="img" aria-label="emoji parfait">
              👌
            </span>{" "}
            Pour le parent :
            <List>
              <ListItem>
                <ListItemText>
                  - vous découvrez des chansons, des jeux, du vocabulaire simple
                  que vous pourrez aisément réinvestir avec votre enfant à la
                  maison
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  - vous apprenez à encourager, féliciter votre enfant en
                  anglais
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  - vous partagez un moment privilégié avec votre enfant dans un
                  petit groupe.
                </ListItemText>
              </ListItem>
            </List>
          </Typography>
          <Typography style={{ color: "#d7a001" }}>
            <strong>
              Groupes : de 4 à 6 enfants maximum <br />
              (un enfant accompagné d’un parent).
            </strong>
            <br />
            <strong>Tarif : 12 € le binôme enfant-parent.</strong>
            <br />
            <strong>Durée : 45 minutes</strong>
            <br />
            <strong>
              Un samedi matin ou mercredi matin par mois <br />
              (à définir avec le groupe) <br />
              Lieu : l'Escapade Le Pellerin
            </strong>
            <br />
          </Typography>
        </Box>
        <br />
        <SignDialog
          type={`${title}`}
          ButtonElement={() => (
            <div style={{ lineHeight: "22px" }}>S'inscrire</div>
          )}
        >
          Inscription pour {title}.
          <Typography>
            Merci d'indiquer l'age, le nombre d'enfants et le créneau sur lequel
            vous souhaitez les inscrire dans la partie "remarques".
          </Typography>
          <Typography>
            Je vous recontacterai rapidement après l'envoi du formulaire pour
            faire connaissance et valider votre inscription !
          </Typography>
        </SignDialog>
      </Box>
    </Grid>
  );
};

const CardLittleExplorer = ({ title, icon, background, children }) => {
  const style = useCardStyle({ background });
  return (
    <Grid item xs={12} md={6}>
      <Box className={style.root}>
        <Typography variant="h5" className={style.title}>
          {title}
        </Typography>
        <Box className={style.picto}>{icon}</Box>
        <Box className={style.description}>
          <Typography variant="h6">
            à partir du mardi 22 septembre 2020
          </Typography>
          <Typography variant="h6">
            <TableContainer>
              <Table size="small" className={style.table}>
                <TableHead className={style.header}>
                  <TableCell colSpan={2}>
                    <span className={style.headerSpan}>
                      Créneaux disponibles
                    </span>
                  </TableCell>
                </TableHead>
                <TableBody>
                  <StyledTableRow>
                    <TableCell>
                      <strong>Mardi</strong>
                      <br />
                      1 heure chaque semaine
                      <br />
                      <i>hors vacances scolaires</i>
                    </TableCell>
                    <TableCell align="center">
                      <span className={style.schedule}>17h - 18h</span>
                    </TableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <TableCell>
                      <strong>Mercredi</strong>
                      <br />2 heures un mercredi sur deux*
                    </TableCell>
                    <TableCell align="center">
                      <span className={`${style.schedule}`}>9h30 - 11h30</span>
                    </TableCell>
                  </StyledTableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Typography className={style.dates}>
              * Vous pouvez me contacter pour connaitre les dates sur l'année
            </Typography>
          </Typography>
          <br />
        </Box>
        {children}
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <SignDialog
              type={`${title} année`}
              ButtonElement={() => (
                <div style={{ lineHeight: "22px" }}>
                  S'inscrire à l'année
                  <br />
                  <span style={{ fontSize: "x-large" }}>360€</span>
                </div>
              )}
            >
              Inscription à l'année pour les {title} (360€).
              <Typography>
                Merci d'indiquer l'age, le nombre d'enfants et le créneau sur
                lequel vous souhaitez les inscrire dans la partie "remarques".
              </Typography>
              <Typography>
                Je vous recontacterai rapidement après l'envoi du formulaire
                pour faire connaissance et valider votre inscription !
              </Typography>
            </SignDialog>
          </Grid>
          <Grid item xs={12} md={6}>
            <SignDialog
              type={`${title} trimestre`}
              ButtonElement={() => (
                <div style={{ lineHeight: "22px" }}>
                  S'inscrire au trimestre
                  <br />
                  <span style={{ fontSize: "x-large" }}>140€</span>
                </div>
              )}
            >
              Inscription pour un semestre pour les {title} (140€).
              <Typography>
                Merci d'indiquer l'age, le nombre d'enfants et le créneau sur
                lequel vous souhaitez les inscrire dans la partie "remarques".
              </Typography>
              <Typography>
                Je vous recontacterai rapidement après l'envoi du formulaire
                pour faire connaissance et valider votre inscription !
              </Typography>
            </SignDialog>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

const Card = ({ title, icon, background, children, price }) => {
  const style = useCardStyle({ background });
  return (
    <Grid item xs={12} md={6}>
      <Box className={style.root}>
        <Typography variant="h5" className={style.title}>
          {title}
        </Typography>
        <Box className={style.picto}>{icon}</Box>
        <Box className={style.description}>
          <Typography variant="h6">
            à partir du lundi 21 septembre 2020
          </Typography>

          <Typography variant="h6">
            <TableContainer>
              <Table size="small" className={style.table}>
                <TableHead className={style.header}>
                  <TableCell colSpan={2}>
                    <span className={style.headerSpan}>
                      Créneaux disponibles
                    </span>
                  </TableCell>
                </TableHead>
                <TableBody>
                  <StyledTableRow>
                    <TableCell>
                      <strong>Lundi</strong>
                      <br />
                      1 heure chaque semaine
                      <br />
                      <i>hors vacances scolaires</i>
                    </TableCell>
                    <TableCell align="center">
                      <span className={style.schedule}>17h - 18h</span>
                    </TableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <TableCell>
                      <strong>Mercredi</strong>
                      <br />2 heures un mercredi sur deux*
                    </TableCell>
                    <TableCell align="center">
                      <span className={style.schedule}>14h30 - 16h30</span>
                    </TableCell>
                  </StyledTableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Typography>
          <Typography className={style.dates}>
            * Vous pouvez me contacter pour connaitre les dates sur l'année
          </Typography>
          <br />
        </Box>
        {children}
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <SignDialog
              type={`${title} annee`}
              ButtonElement={() => (
                <div style={{ lineHeight: "22px" }}>
                  S'inscrire à l'année
                  <br />
                  <span style={{ fontSize: "x-large" }}>390€</span>
                </div>
              )}
            >
              Inscription à l'année pour les {title} (390€).
              <Typography>
                Merci d'indiquer l'age, le nombre d'enfants et le créneau sur
                lequel vous souhaitez les inscrire dans la partie "remarques".
              </Typography>
              <Typography>
                Je vous recontacterai rapidement après l'envoi du formulaire
                pour faire connaissance et valider votre inscription !
              </Typography>
            </SignDialog>
          </Grid>
          <Grid item xs={12} md={6}>
            <SignDialog
              type={`${title} semestre`}
              ButtonElement={() => (
                <div style={{ lineHeight: "22px" }}>
                  S'inscrire au trimestre
                  <br />
                  <span style={{ fontSize: "x-large" }}>150€</span>
                </div>
              )}
            >
              Inscription pour un semestre pour les {title} (150€).
              <Typography>
                Merci d'indiquer l'age, le nombre d'enfants et le créneau sur
                lequel vous souhaitez les inscrire dans la partie "remarques".
              </Typography>
              <Typography>
                Je vous recontacterai rapidement après l'envoi du formulaire
                pour faire connaissance et valider votre inscription !
              </Typography>
            </SignDialog>
          </Grid>
        </Grid>
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

const useInfoStyle = makeStyles({
  root: { display: "flex", alignItems: "center", marginTop: "40px" },
  icon: { textAlign: "center" },
  text: { marginLeft: "20px" },
});

const Infos = ({ icon, children }) => {
  const style = useInfoStyle();
  return (
    <Grid item xs={12} md={6} className={style.root}>
      <Box className={style.icon}>
        <div>{icon}</div>
      </Box>
      <Box className={style.text}>{children}</Box>
    </Grid>
  );
};

const Ateliers = ({ width }) => {
  const style = useInfoStyle();
  return (
    <Container style={{ marginTop: "40px" }}>
      <Grid container justify="center">
        <CardLittleExplorer
          title="LITTLE EXPLORERS 4-7 ans"
          icon={<Forest width={120} />}
          background="#4FBA6F"
        />
        <Card
          title="BIG TRAVELLERS 8-11 ans"
          icon={<Travel width={120} />}
          background="#FF757C"
        />
        <CardLittleFoxes
          title="LITTLE FOXES"
          icon={<SvgFox width={120} />}
          background="#FFCA05"
        />
        <CardMarmaille
          title="HAPPY NATURE"
          icon={<Forest1 width={120} />}
          background="#99D53B"
        />
        <Grid item xs={12} md={8} className={style.root}>
          <Box className={style.icon}>
            <div>
              <Happiness width={80} />
            </div>
          </Box>
          <Box className={style.text}>
            <Typography color="primary">
              Un atelier peut être ajouté sur d’autres horaires du lundi au
              mercredi à partir de 4 inscrits, n’hésitez pas à me faire part de
              vos besoins (jour - horaires - âge des enfants)
            </Typography>
          </Box>
        </Grid>
        <Typography
          variant="h4"
          color="secondary"
          style={{ textAlign: "center", fontWeight: "bold", marginTop: 40 }}
        >
          Une progression naturelle sur 5 périodes avec des thèmes variés et
          motivants pour les enfants au fil des fêtes calendaires.
        </Typography>
        <Grid container spacing={isWidthUp("sm", width) ? 6 : 0}>
          <Grid item xs={12} md={6}>
            <Box mt={4} mb={2}>
              <Image
                src="/static/atelier_2.jpg"
                alt=""
                style={{ objectFit: "cover", height: 300 }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box mt={4} mb={2}>
              <Image
                src="/static/atelier_1.jpg"
                alt=""
                style={{ objectFit: "cover", height: 300 }}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container alignItems="center">
          <Infos icon={<Friends width={100} />}>
            <Typography>
              Ouverture d’ateliers à partir de 4 enfants minimum inscrits.
            </Typography>
            <Typography>Petits groupes : 6 enfants maximum.</Typography>
          </Infos>
          <Infos icon={<Discount width={100} />}>
            <Typography>
              (montant recalculé si démarrage des ateliers après le 21/09/2020)
            </Typography>
            <Typography>
              Réductions : -10% pour le 2ème enfant. -15% pour le 3ème enfant.
            </Typography>
          </Infos>
          <Infos icon={<Receipt width={100} />}>
            <Typography>
              Le règlement s’effectue en début d'année dans sa totalité par
              espèces , par virement bancaire ou par chèque(s), en 1 fois ou 3
              fois sans frais pour la période de septembre à juin.
            </Typography>
          </Infos>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withWidth()(Ateliers);
