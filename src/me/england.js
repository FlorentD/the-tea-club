import React from "react";
import MeCard from "../components/MeCard";

const England = () => {
  return (
    <MeCard
      src="https://the-tea-club.s3.eu-west-3.amazonaws.com/telephonebooth_square.jpg"
      alt="telephonebooth"
    >
      Après ces premières études, j’ai pris mon courage à deux mains et j’ai
      fait mes valises pour aller vivre <strong>UNE ANNÉE EN ANGLETERRE</strong>{" "}
      comme assistante de français dans les écoles primaires britanniques.
      J’espérais secrètement croiser la famille royale lors d’un “teatime” mais
      j’ai surtout fait une multitude de rencontres avec des personnes
      formidables dans les écoles, chez ma landlady, au détour des pubs, et même
      lors de simples balades.
      <br />
      <br />
      J’ai eu le déclic pour enfin <strong>PARLER</strong> anglais car, il faut
      l’avouer je n’avais de toute façon pas vraiment le choix dans ce contexte.
      Mais la peur de s’exprimer s’est estompée pour laisser place au{" "}
      <strong>PLAISIR D'ÉCHANGER</strong>.
    </MeCard>
  );
};

export default England;
