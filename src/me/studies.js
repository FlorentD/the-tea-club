import React from "react";
import MeCard from "../components/MeCard";

const Studies = () => {
  return (
    <MeCard src="/static/book_square.jpg" alt="book" direction="right">
      Avec une marraine professeure d’anglais qui a aiguisé ma curiosité pour la
      langue de Shakespeare, je me suis dirigée après quelques soubresauts
      scientifiques vers ce fameux <strong>CHEMIN DES LANGUES</strong>.
      <br />
      <br />
      Trois années de faculté d’anglais m’ont alors donné les bases et les
      outils pour comprendre la grammaire, la littérature, la civilisation
      anglaises.
    </MeCard>
  );
};

export default Studies;
