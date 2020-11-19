import React from "react";
import Funny from "../svg/Funny";
import MeCard from "../components/MeCard";

const Teach = () => {
  return (
    <MeCard
      src="https://the-tea-club.s3.eu-west-3.amazonaws.com/bike_square.jpg"
      alt="bike"
      direction="right"
    >
      À mon retour en France, j’ai poursuivi mes études pour devenir professeur
      des écoles et comme j’avais désormais compris l’importance de pratiquer
      l’anglais régulièrement, j’ai continué à me former et à{" "}
      <strong>PRATIQUER LA LANGUE</strong> en animant des ateliers d’anglais
      pour les enfants avec l’association{" "}
      <a
        href="http://www.popenglish.com/site/"
        target="_blank"
        rel="noreferrer noopener nofollow"
        style={{ color: "black" }}
      >
        Pop English
      </a>{" "}
      Lorraine.
      <br />
      <br />
      S’en sont suivies six belles années en région parisienne où j’ai pu porter
      ma double casquette de <strong>MAÎTRESSE-TEACHER</strong> de la maternelle
      au CM2. C’était un vrai challenge mais aussi un réel plaisir de faire
      découvrir l’anglais sous un aspect plus ludique et vivant à mes chers
      élèves. Certaines chansons resteront, je le pense, gravées à vie dans la
      mémoire des enfants et la mienne (voire celle des parents… ne me remerciez
      pas{" "}
      <span role="img" aria-label="funny">
        <Funny height={20} />
      </span>
      )
    </MeCard>
  );
};

export default Teach;
