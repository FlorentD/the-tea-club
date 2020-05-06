import React from "react";
import { Typography, Grid, Container, Box } from "@material-ui/core";
import Image from "./components/Image";

const Paragraph = ({ children }) => {
  return (
    <Box mt={3} mb={10}>
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
                src="/static/speak-english.jpg"
                alt="caterpilar"
                style={{ borderRadius: "50%" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography
              variant="h4"
              style={{ fontWeight: "bold", color: "#007A15" }}
            >
              APPRENDRE AVEC PLAISIR
            </Typography>
            <Paragraph>
              L’objectif est d’apprendre l'anglais à votre enfant de manière
              ludique. Grâce à des activités comme le chant, la danse, les
              histoires, les créations manuelles, il s’amuse et créé dans un
              bain exclusivement anglais autour de thèmes qui le concernent,
              l’intéressent, le motivent.
            </Paragraph>
            <Typography
              variant="h4"
              style={{ fontWeight: "bold", color: "#007A15" }}
            >
              NATURELLEMENT EN IMMERSION
            </Typography>
            <Paragraph>
              L’essentiel passe par l’oral: les sons, les rythmes s’acquièrent
              dès le plus jeune âge très facilement. Les enfants ont des
              capacités de mémorisation exceptionnelles, ils sont aussi curieux
              et spontanés. Leurs jeunes oreilles très réceptives leur
              permettront d’apprivoiser la langue lors de ces activités sans
              même qu’ils s’en rendre compte.
            </Paragraph>
            <Typography
              variant="h4"
              style={{ fontWeight: "bold", color: "#007A15" }}
            >
              AVEC BIENVEILLANCE
            </Typography>
            <Paragraph>
              Pas de pression d’apprentissage, le but premier est d’acquérir
              l’envie d’échanger en anglais. On se familiarise avec la langue,
              on ouvre son regard sur le monde, on découvre d’autres cultures,
              on partage et on échange dans une autre langue commune. Les
              progrès fleuriront progressivement grâce à une pratique régulière
              et plaisante.
            </Paragraph>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Philosophy;
