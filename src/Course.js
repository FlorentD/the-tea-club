import React from "react";
import { Container, Grid, Typography, Box, Hidden } from "@material-ui/core";
import Image from "./components/Image";
import EnglishHelper from "./components/EnglishHelper";
import Fern from "./svg/Fern";

const Paragraph = ({ children }) => {
  return (
    <Box mb={2}>
      <Typography>{children}</Typography>
    </Box>
  );
};

const Course = () => {
  return (
    <Box mt={{ xs: 4, md: 10 }}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={5}>
            <Hidden xsDown>
              <Box mr={10} mt={5}>
                <Image
                  src="/static/kids_square.jpg"
                  alt="caterpilar"
                  style={{ borderRadius: "50%" }}
                />
              </Box>
            </Hidden>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box mb={{ xs: 4, md: 10 }}>
              <Typography variant="h3">Comment ça se passe&nbsp;?</Typography>
            </Box>
            <ul>
              <li>
                <Paragraph>
                  On commence avec quelques rituels : la date, la météo, les
                  humeurs de chacun.
                </Paragraph>
              </li>
              <li>
                <Paragraph>
                  Le thème du moment est abordé à travers un conte, une écoute
                  musicale, une vidéo.
                </Paragraph>
              </li>
              <li>
                <Paragraph>
                  À travers des jeux et des activités manuelles tout ce
                  vocabulaire va être travaillé sans même qu’on s’en rende
                  compte :
                </Paragraph>
              </li>
            </ul>
            <Box mb={2}>
              <Typography variant="h4" style={{ color: "#007A15" }}>
                “Je crée une décoration pour ma maison : j’utilise les nombres,
                les couleurs, le vocabulaire des pièces de la maison, le nom des
                outils et du matériel que j’utilise en anglais…”
              </Typography>
            </Box>
            <ul>
              <li>
                <Paragraph>
                  En ronde, en binômes ou par petits groupes on s’amuse avec les
                  mots dans une partie de bingo ou de 7 familles, on danse, on
                  chante, on se pose des questions, on y répond, on s’écoute,
                  pour les plus grands on écrit aussi quelques mots et phrases,{" "}
                </Paragraph>
              </li>
            </ul>
            <Box m={4}>
              <Typography
                variant="h4"
                align="center"
                style={{ color: "#007A15" }}
              >
                ET SURTOUT ON SE FAIT PLAISIR !
              </Typography>
            </Box>
            <ul>
              <li>
                <Paragraph>
                  À la fin de l’atelier on fait un bilan, on exprime ce qui nous
                  a plu ou moins plu, on se remercie, on se félicite.
                </Paragraph>
              </li>
            </ul>
            <Box m={4}>
              <Typography
                variant="h4"
                align="center"
                style={{ color: "#007A15" }}
              >
                “
                <EnglishHelper title="AU JARDIN !">
                  IN THE GARDEN!
                </EnglishHelper>{" "}
                ”
              </Typography>
            </Box>
            <Typography variant="h5">
              Quand il fait beau on s’installe dans le jardin et on pratique
              tout ça dans la nature…{" "}
              <span role="img" aria-label="fern">
                <Fern height={20} />
              </span>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Course;
