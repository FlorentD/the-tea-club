import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import SignDialog from "../SignDialog";
import Image from "./Image";

const useStyles = makeStyles({
  root: {
    margin: "20px auto",
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderRadius: "5px",
  },
  title: {
    position: "absolute",
    top: "10px",
    left: "10px",
    backgroundColor: "rgba(255,255,255, 0.9)",
    padding: "10px 20px",
    borderRadius: "5px",
  },
  dates: {
    position: "absolute",
    top: "180px",
    right: "10px",
    backgroundColor: "rgba(255,255,255, 0.9)",
    padding: "10px 20px",
    borderRadius: "5px",
  },
});

const ContactMessage = () => (
  <>
    <Typography>
      Merci d'indiquer l'age, le nombre d'enfants et le créneau sur lequel vous
      souhaitez les inscrire dans la partie "remarques".
    </Typography>
    <Typography>
      Je vous recontacterai rapidement après l'envoi du formulaire pour faire
      connaissance et valider votre inscription !
    </Typography>
  </>
);

const StageRow = ({
  src,
  title,
  dates,
  FirstButtonLabel,
  SecondButtonLabel,
}) => {
  const style = useStyles();
  return (
    <Grid item xs={12} md={6}>
      <div className={style.imageContainer}>
        <Image src={src} alt="" className={style.image} />
        <Typography className={style.title} variant="h5">
          {title}
        </Typography>
        <Typography className={style.dates}>{dates}</Typography>
        {SecondButtonLabel ? (
          <Grid container spacing={1}>
            <Grid item xd={12} md={6}>
              <SignDialog
                type={`${title} (3)`}
                ButtonElement={FirstButtonLabel}
              >
                Inscription pour le stage {title} pour <FirstButtonLabel />.
                <ContactMessage />
              </SignDialog>
            </Grid>
            <Grid item xd={12} md={6}>
              <SignDialog
                type={`${title} (5)`}
                ButtonElement={SecondButtonLabel}
              >
                Inscription pour le stage {title} pour <SecondButtonLabel />.
                <ContactMessage />
              </SignDialog>
            </Grid>
          </Grid>
        ) : (
          <SignDialog type={title} ButtonElement={FirstButtonLabel}>
            Inscription pour le stage {title} pour <FirstButtonLabel />.
            <ContactMessage />
          </SignDialog>
        )}
      </div>
    </Grid>
  );
};

StageRow.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string.isRequired,
  dates: PropTypes.string.isRequired,
  FirstButtonLabel: PropTypes.func,
  SecondButtonLabel: PropTypes.func,
};

StageRow.defaultProps = {
  src: "https://picsum.photos/600/300",
};

export default StageRow;
