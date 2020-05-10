import React from "react";
import {
  Typography,
  Container,
  Box,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core";
import Titeuf from "./svg/Titeuf";
import Fille from "./svg/Fille";
import Cheveux from "./svg/Cheveux";
import LandingCard from "./components/LandingCard";
import Contact from "./Contact";
import BackgroundBottom from "./svg/BackgroundBottom";
import BigBen from "./svg/BigBen";
import StatueOfLiberty from "./svg/StatusOfLiberty";

const useTitleStyle = makeStyles((theme) => ({
  wrapper: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#012169",
    letterSpacing: "-1px",
    width: "100%",
    padding: "20px 0px 20px 0px",
    color: "#ffffff",
    [theme.breakpoints.up("md")]: { padding: "30px 0px 40px 0px" },
  },
  subWrapper: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    lineHeight: "30px",
    fontSize: "1.5rem",
    fontWeight: "bold",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      fontSize: "3rem",
      lineHeight: "60px",
    },
  },
}));

const Landing = () => {
  const titleStyle = useTitleStyle();
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <>
      <div className={titleStyle.wrapper}>
        <div className={titleStyle.subWrapper}>
          <BigBen width={60} />
          <Box ml={2} mr={2}>
            <Typography variant="h2" className={titleStyle.title}>
              Apprendre l’anglais naturellement en s’amusant !
            </Typography>
          </Box>
          <StatueOfLiberty width={60} />
        </div>
        <BackgroundBottom style={{ position: "absolute", bottom: "-1px" }} />
      </div>
      <Container style={{ backgroundColor: "white" }}>
        <LandingCard
          icon={<Titeuf width={mobile ? 100 : 140} />}
          title="The Tea Club c’est avant tout permettre aux enfants de se retrouver pour passer un bon moment en anglais."
        >
          Ce ne sont pas des cours ou des leçons ; on apprend tout en s’amusant.
        </LandingCard>
        <LandingCard
          title="L’oral et le jeu tiennent une place principale."
          icon={<Fille width={mobile ? 100 : 140} />}
          direction="right"
        >
          On bricole, on chante, on dessine, on joue... le tout en anglais pour
          développer le plus naturellement possible les échanges dans cette
          langue.
        </LandingCard>
        <LandingCard
          title="Vos enfants ont entre 4 et 11 ans ?"
          icon={<Cheveux width={mobile ? 100 : 140} />}
        >
          Peu importe le niveau, chacun apprend à son rythme !
        </LandingCard>
        <Contact />
      </Container>
    </>
  );
};

export default Landing;
