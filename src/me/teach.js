import React from "react";
import { Typography } from "@material-ui/core";
import Funny from "../svg/Funny";
import ParallaxImage from "../components/ParallaxImage";

const Teach = () => {
  return (
    <ParallaxImage src="/static/bike.jpg" height="90vh" soft={false}>
      <ParallaxImage.Container xs={12} md={8} justify="flex-end">
        <ParallaxImage.Box mt={{ xs: 2, md: 8 }} p={{ xs: 2, md: 5 }} dark>
          <Typography variant="h5">
            A mon retour en France j’ai poursuivi mes études pour devenir
            professeur des écoles et comme j’avais désormais compris
            l’importance de pratiquer l’anglais régulièrement, j’ai continué à
            me former et à <strong>PRATIQUER LA LANGUE</strong> en animant des
            ateliers d’anglais pour les enfants avec l’association{" "}
            <a
              href="http://www.popenglish.com/site/"
              target="_blank"
              rel="noreferrer noopener nofollow"
              style={{ color: "white" }}
            >
              Pop English
            </a>{" "}
            Lorraine. Mon imitation de l’éléphant était clairement
            exceptionnelle.
          </Typography>
          <br />
          <Typography variant="h5">
            S’en sont suivies six belles années en région parisienne où j’ai pu
            porter ma double casquette de <strong>MAÎTRESSE-TEACHER</strong> de
            la maternelle au CM2. C’était un vrai challenge mais aussi un réel
            plaisir de faire découvrir l’anglais sous un aspect plus ludique et
            vivant à mes chers élèves. Certaines chansons resteront, je pense,
            gravées à vie dans la mémoire des enfants et la mienne (voire celle
            des parents… ne me remerciez pas
            <span role="img" aria-label="funny">
              <Funny height={30} />
            </span>
            )
          </Typography>
        </ParallaxImage.Box>
      </ParallaxImage.Container>
    </ParallaxImage>
  );
};

export default Teach;
