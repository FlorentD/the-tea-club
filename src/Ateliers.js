import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Grid,
  Box,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Forest from "./svg/Forest";
import Travel from "./svg/Travel";
import Friends from "./svg/Friends";
import Discount from "./svg/Discount";
import Receipt from "./svg/Receipt";

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
    marginTop: "10px",
    textAlign: "center",
    fontWeight: "bold",
  },
});

const Card = ({ title, icon, background, children, price }) => {
  const style = useCardStyle({ background });
  return (
    <Grid item xs={12} md={6}>
      <Box className={style.root}>
        <Typography variant="h4" className={style.title}>
          {title}
        </Typography>
        <Box className={style.picto}>{icon}</Box>
        <Box className={style.description}>
          <Typography variant="h6">Abonnement à l'année</Typography>
          <Typography variant="h5" style={{ fontWeight: "bold" }}>
            {price}€ l’année ({price / 30}€ la séance)
          </Typography>
          <Typography variant="h6">30 séances</Typography>
        </Box>
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

const useInfoStyle = makeStyles({
  root: { display: "flex", alignItems: "center", marginTop: "40px" },
  icon: { textAlign: "center" },
  text: { marginLeft: "20px" },
});

const Infos = ({ icon, children }) => {
  const style = useInfoStyle();
  return (
    <Grid xs={12} md={7} className={style.root}>
      <Box className={style.icon}>
        <div>{icon}</div>
      </Box>
      <Box className={style.text}>{children}</Box>
    </Grid>
  );
};

const Ateliers = () => {
  return (
    <Container style={{ marginTop: "40px" }}>
      <Typography
        variant="h5"
        style={{ textAlign: "center", fontWeight: "bold" }}
      >
        Du 21/09/2020 au 12/06/2021
      </Typography>
      <Grid container>
        <Card
          title="Little EXPLORERS 4-7 ans"
          icon={<Forest width={120} />}
          background="#4FBA6F"
          price={360}
        ></Card>
        <Card
          title="BIG TRAVELLERS 8-11 ans"
          icon={<Travel width={120} />}
          background="#FF757C"
          price={450}
        ></Card>
        <Grid container direction="column" alignItems="center">
          <Infos icon={<Friends width={100} />}>
            <Typography>
              Ouverture d’ateliers à partir de 4 enfants minimum inscrits.
            </Typography>
            <Typography>Groupes limités à 6 enfants maximum.</Typography>
          </Infos>
          <Infos icon={<Discount width={100} />}>
            <Typography>
              (montant recalculé si démarrage des cours après le 21/09/2020)
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

export default Ateliers;
