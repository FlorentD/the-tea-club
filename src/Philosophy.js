import React from "react";
import { Typography, Grid, Container, Box } from "@material-ui/core";
import Image from "./components/Image";

const Paragraph = ({ children }) => {
  return (
    <Box mb={5}>
      <Typography variant="h5">{children}</Typography>
    </Box>
  );
};

const Philosophy = () => {
  return (
    <Box mt={10}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={5}>
            <Box mr={10} mt={5}>
              <Image
                src="/static/chenille.jpg"
                alt="caterpilar"
                style={{ borderRadius: "20%" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box mb={10}>
              <Typography variant="h2">What is it?</Typography>
            </Box>
            <Typography variant="h4">APPRENDRE avec plaisir</Typography>
            <Paragraph>
              Les ateliers The Tea club ont été créés pour apprendre l'anglais à
              votre enfant de manière naturelle grâce à des activités ludiques
              comme le chant, la danse, les histoires, les créations manuelles,
              et bien d’autres jeux encore.
              <br />
              Au cours de ces ateliers et/ou stages durant les vacances, il
              s’imprègne d’un environnement totalement anglais en s’amusant, en
              échangeant, en créant autour de thèmes comme la culture, les
              traditions, la vie de tous les jours, ses passions.
            </Paragraph>
            <Typography variant="h4">NATURELLEMENT EN IMMERSION</Typography>
            <Paragraph>
              L’essentiel passe par l’oral: les sons, les rythmes s’acquièrent
              dès le plus jeune âge très facilement. Les enfants possèdent des
              capacités exceptionnelles ,une formidable curiosité, une grande
              spontanéité, ainsi que des oreilles et une mémoire très
              réceptives. Ils bénéficient de facultés naturelles à acquérir une
              langue lorsqu’ils s’y trouvent régulièrement exposés.
            </Paragraph>
            <Typography variant="h4">AVEC BIENVEILLANCE:</Typography>
            <Paragraph>
              Pas de pression d’apprentissage, le but premier est d’acquérir
              l’envie d’échanger en anglais. On se familiarise avec la langue,
              on ouvre son regard sur le monde, on découvre d’autres cultures,
              on partage et on échange dans une autre langue commune. Dans un
              entraînement hebdomadaire, puis quotidien lorsque votre enfant
              partagera ses découvertes avec vous,vous serez étonnés par la
              capacité de votre enfant à répéter, imiter, chanter ce qu’il vit
              dans ces ateliers, puis les mots viendront en anglais dans un
              autre contexte. Les progrès fleuriront mais se réaliseront aussi
              au fil des années.
            </Paragraph>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Philosophy;
