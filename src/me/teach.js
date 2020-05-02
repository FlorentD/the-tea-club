import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import {
  Container,
  Grid,
  Box,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { styled } from "@material-ui/core";
import Funny from "../svg/Funny";
import ShowOnView from "../components/ShowOnView";

const useStyles = makeStyles({
  root: {
    color: "white",
  },
  box: {
    backgroundColor: "rgba(0,0,0,0.8)",
  },
});

const StyledParallax = styled(ParallaxBanner)({});

const Text = styled(({ className }) => {
  const styles = useStyles();
  return (
    <Grid container className={className}>
      <Grid item xs={12} md={8}>
        <ShowOnView>
          <Box
            mt={{ xs: 2, md: 8 }}
            p={{ xs: 2, md: 5 }}
            className={styles.box}
          >
            <Typography variant="h4" classes={styles}>
              A mon retour en France j’ai poursuivi mes études pour devenir{" "}
              <strong>professeur des écoles</strong> et comme j’avais désormais
              compris{" "}
              <strong>l’importance de pratiquer l’anglais régulièrement</strong>{" "}
              j’ai continué à me former et à pratiquer la langue en animant des
              ateliers d’anglais pour les enfants avec l’association{" "}
              <a
                href="http://www.popenglish.com/site/"
                target="_blank"
                rel="noreferrer noopener nofollow"
              >
                Pop English
              </a>{" "}
              Lorraine. Mon imitation de l’éléphant était clairement
              exceptionnelle.
            </Typography>
            <br />
            <Typography variant="h4" classes={styles}>
              S’en sont suivies six belles années en région parisienne où j’ai
              pu porter ma double casquette de <i>maîtresse/teacher</i> de la
              maternelle au CM2. C’était{" "}
              <strong>un vrai challenge mais aussi un réel plaisir</strong> de
              faire découvrir l’anglais sous un aspect plus ludique et vivant à
              mes chers élèves. Certaines chansons resteront je pense à vie
              gravées dans la mémoire des enfants et la mienne (voire celle des
              parents... ne me remerciez pas{" "}
              <span role="img" aria-label="funny">
                <Funny height={30} />
              </span>
              )
            </Typography>
          </Box>
        </ShowOnView>
      </Grid>
    </Grid>
  );
})({
  position: "relative",
  justifyContent: "center",
  zIndex: 100,
});

const Teach = () => {
  return (
    <StyledParallax
      style={{
        height: "90vh",
      }}
      layers={[{ image: "/static/bike.jpg", amount: 0.1 }]}
    >
      <Container>
        <Text />
      </Container>
    </StyledParallax>
  );
};

export default Teach;
