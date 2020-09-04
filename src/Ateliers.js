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
} from "@material-ui/core";
import Forest from "./svg/Forest";
import Travel from "./svg/Travel";
import Friends from "./svg/Friends";
import Discount from "./svg/Discount";
import Receipt from "./svg/Receipt";
import SignDialog from "./SignDialog";
import Image from "./components/Image";
import Happiness from "./svg/Happiness";

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

const CardLittleExplorer = ({ title, icon, background, children, price }) => {
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
                      <span className={`${style.schedule} ${style.full}`}>
                        9h30 - 11h30
                      </span>
                      <span
                        style={{
                          display: "block",
                          textAlign: "center",
                          lineHeight: "10px",
                        }}
                      >
                        ou
                      </span>
                      <span className={style.schedule}>14h30 - 16h30</span>
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
                  S'inscire à l'année
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
                  S'inscire au trimestre
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
                      <span className={style.schedule}>9h30 - 11h30</span>
                      <span
                        style={{
                          display: "block",
                          textAlign: "center",
                          lineHeight: "10px",
                        }}
                      >
                        ou
                      </span>
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
                  S'inscire à l'année
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
                  S'inscire au trimestre
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
          title="Little EXPLORERS 4-7 ans"
          icon={<Forest width={120} />}
          background="#4FBA6F"
          price={360}
        />
        <Card
          title="BIG TRAVELLERS 8-11 ans"
          icon={<Travel width={120} />}
          background="#FF757C"
          price={390}
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
