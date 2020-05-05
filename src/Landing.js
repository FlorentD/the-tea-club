import React from "react";
import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import Titeuf from "./svg/Titeuf";
import Fille from "./svg/Fille";
import Cheveux from "./svg/Cheveux";
import LandingCard from "./components/LandingCard";
import Contact from "./Contact";

const Landing = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#012169",
          width: "100%",
          padding: "50px 0px",
          color: "#ffffff",
        }}
      >
        <Typography
          variant="h2"
          style={{ lineHeight: "60px", fontSize: "3rem", fontWeight: "bold" }}
        >
          Apprendre l’anglais naturellement en s’amusant !
        </Typography>
      </div>
      <Container style={{ backgroundColor: "white" }}>
        <LandingCard
          icon={<Titeuf width={140} />}
          title="Ce ne sont pas des cours ou des leçons, on apprend tout en s’amusant."
        >
          Les ateliers The Tea club ont été créés pour apprendre l'anglais à
          votre enfant de manière naturelle grâce à des activités ludiques comme
          le chant, la danse, les histoires, les créations manuelles, et bien
          d’autres jeux encore.
        </LandingCard>
        <LandingCard
          title="L’oral et le jeu tiennent une place principale pour développer le
              plus naturellement possible l’échange en anglais."
          icon={<Fille width={140} />}
          direction="right"
        ></LandingCard>
        <LandingCard
          title="Ces ateliers en petits groupes s’adressent aux enfants âgés de 4
                à 11 ans."
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
