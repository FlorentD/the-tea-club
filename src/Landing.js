import React from "react";
import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import Titeuf from "./svg/Titeuf";
import Fille from "./svg/Fille";
import Cheveux from "./svg/Cheveux";
import LandingCard from "./components/LandingCard";
import Contact from "./Contact";
import BackgroundBottom from "./svg/BackgroundBottom";

const Landing = () => {
  return (
    <>
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#012169",
          letterSpacing: "-1px",
          width: "100%",
          padding: "30px 0px 40px 0px",
          color: "#ffffff",
        }}
      >
        <Typography
          variant="h2"
          style={{ lineHeight: "60px", fontSize: "3rem", fontWeight: "bold" }}
        >
          Apprendre l’anglais naturellement en s’amusant !
        </Typography>
        <BackgroundBottom style={{ position: "absolute", bottom: "-1px" }} />
      </div>
      <Container style={{ backgroundColor: "white" }}>
        <LandingCard
          icon={<Titeuf width={140} />}
          title="The Tea Club c’est avant tout permettre aux enfants de se retrouver pour passer un bon moment en anglais."
        >
          Ce ne sont pas des cours ou des leçons ; on apprend tout en s’amusant.
        </LandingCard>
        <LandingCard
          title="L’oral et le jeu tiennent une place principale."
          icon={<Fille width={140} />}
          direction="right"
        >
          On bricole, on chante, on dessine, on joue... le tout en anglais pour
          développer le plus naturellement possible les échanges dans cette
          langue.
        </LandingCard>
        <LandingCard
          title="Vos enfants ont entre 4 et 11 ans ?"
          icon={<Cheveux width={140} />}
        >
          Peu importe le niveau, chacun apprend à son rythme !
        </LandingCard>
        <Contact />
      </Container>
    </>
  );
};

export default Landing;
