import React from "react";
import EnglishHelper from "../components/EnglishHelper";
import Bug from "../svg/Bug";
import MeCard from "../components/MeCard";

const Today = () => {
  return (
    <MeCard src="/static/jardin_square.jpg" alt="garden">
      En 2018 je suis devenue maman d’une petite fille et afin de la suivre dans
      ses premiers apprentissages dans un cadre plus <strong>NATUREL</strong>,
      j’ai décidé de prendre une disponibilité. Notre famille s’est donc
      installée au Pellerin et c’est désormais entre les formations d’anglais
      pour adultes et des ateliers d’anglais avec les enfants que je trouve le
      temps de me poser dans notre jardin pour lire des histoires et énumérer le
      nom des fleurs en anglais à ma petite{" "}
      <EnglishHelper title="Coccinelle">Ladybug</EnglishHelper>{" "}
      <span role="img" aria-label="teacher">
        <Bug height={20} />
      </span>
      .
    </MeCard>
  );
};

export default Today;
