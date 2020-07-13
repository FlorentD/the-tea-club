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
import SignDialog from "./SignDialog";
import Image from "./components/Image";

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
            du mercredi 23/09/2020 au mercredi 16/06/2021
          </Typography>
          <Typography variant="h5" style={{ fontWeight: "bold" }}>
            {price}€ l’année
          </Typography>
          <Typography variant="h6">
            15 séances de 9h30 à 11h30 (un mercredi sur deux)
          </Typography>
        </Box>
        {children}
        <SignDialog type={title}>
          Pour les {title}.
          <Typography>
            Le prix pour 15 séances de 2h est de {price}€.
          </Typography>
          <Typography>
            Merci d'indiquer l'age et le nombre d'enfants que vous souhaitez
            inscrire dans la partie "remarques".
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
          <Typography variant="h6">du 21 septembre au 15 juin 2021</Typography>
          <Typography variant="h5" style={{ fontWeight: "bold" }}>
            {price}€ l’année
          </Typography>
          <Typography variant="h6">
            30 séances les lundis ou mardis de 17h à 18h.
          </Typography>
        </Box>
        {children}
        <SignDialog type={title}>
          Pour les {title}.
          <Typography>Le prix pour 30 séances est de {price}€.</Typography>
          <Typography>
            Merci d'indiquer l'age et le nombre d'enfants que vous souhaitez
            inscrire dans la partie "remarques".
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

const Ateliers = () => {
  return (
    <Container style={{ marginTop: "40px" }}>
      <Grid container>
        <CardLittleExplorer
          title="Little EXPLORERS 4-7 ans"
          icon={<Forest width={120} />}
          background="#4FBA6F"
          price={360}
        ></CardLittleExplorer>
        <Card
          title="BIG TRAVELLERS 8-11 ans"
          icon={<Travel width={120} />}
          background="#FF757C"
          price={450}
        ></Card>
        <Typography
          variant="h4"
          color="secondary"
          style={{ textAlign: "center", fontWeight: "bold" }}
        >
          Une progression naturelle sur 5 périodes avec des thèmes variés et
          motivants pour les enfants au fil des fêtes calendaires.
        </Typography>
        <Grid container spacing={6}>
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

export default Ateliers;
