import React from "react";
import { Container, Grid, Typography, Box } from "@material-ui/core";
import Image from "./components/Image";

const Paragraph = ({ children }) => {
  return (
    <Box mb={2}>
      <Typography variant="h5">{children}</Typography>
    </Box>
  );
};

const Course = () => {
  return (
    <Box mt={10}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={5}>
            <Box mr={10} mt={5}>
              <Image
                src="/static/kids.jpg"
                alt="caterpilar"
                style={{ borderRadius: "20%" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box mb={10}>
              <Typography variant="h2">Comment ça se passe ?</Typography>
            </Box>
            <Paragraph>
              Chaque atelier s’adapte au contexte, à l’humeur et au thème du
              moment mais en général ça se passe comme ça :
            </Paragraph>
            <Paragraph>
              On commence avec quelques rituels pour mieux se connaître,
              découvrir la date, la météo du jour, les humeurs de chacun, un
              événement particulier.
            </Paragraph>
            <Paragraph>
              On échauffe un peu sa voix et son corps avec un chant/ un
              mini-jeu.
            </Paragraph>
            <Paragraph>
              On découvre un thème du jour à travers un conte, une écoute
              musicale, une vidéo.
            </Paragraph>
            <Paragraph>
              On présente le vocabulaire grâce à des flashcards, des affiches,
              des objets du quotidien.
            </Paragraph>
            <Paragraph>
              À travers des jeux et des activités manuelles tout ce vocabulaire
              va être travaillé sans même qu’on s’en rende compte.
            </Paragraph>
            <Paragraph>
              Je crée une décoration pour ma maison: j’utilise les nombres, les
              couleurs, le vocabulaire des pièces de la maison, les noms des
              outils et du matériel que j’utilise etc…
            </Paragraph>
            <Paragraph>
              En ronde en binôme ou par petits groupes on s’amuse avec les mots
              dans une partie de bingo ou de 7 familles, on danse, on chante, on
              se pose des questions, on y répond, on s’écoute, pour les plus
              grands on écrit aussi quelques mots et surtout on se fait PLAISIR
              !
            </Paragraph>
            <Paragraph>
              Quand il fait beau on s’installe dans le jardin et on pratique
              tout ça dans la nature.
            </Paragraph>
            <Paragraph>
              À la fin de l’atelier on fait un bilan, on exprime ce qui nous a
              plu ou moins plu, on se remercie, on se félicite.
            </Paragraph>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Course;
