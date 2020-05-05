import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import ParallaxImage from "../components/ParallaxImage";

const useStyleContainer = makeStyles({
  root: {
    position: "relative",
    zIndex: 100,
  },
});

const England = () => {
  const style = useStyleContainer();
  return (
    <ParallaxImage src="/static/telephonebooth.jpg" height="80vh">
      <Grid container className={style.root} justify="space-between">
        <Grid item xs={12} md={5}>
          <ParallaxImage.Box
            m={{ xs: 0, md: 4 }}
            ml={0}
            mb={{ xs: 2, md: 0 }}
            dark
          >
            <Typography variant="h5">
              Après ces premières études, j’ai pris mon courage à deux mains et
              j’ai fait mes valises pour aller vivre{" "}
              <strong>UNE ANNÉE EN ANGLETERRE</strong>
              comme assistante de français dans les écoles primaires
              britanniques. J’espérais secrètement croiser la famille royale
              lors d’un “teatime” mais j’ai surtout fait une multitude de
              rencontres avec des personnes formidables dans les écoles, chez ma
              landlady, au détour des pubs, et même lors de simples balades.
            </Typography>
          </ParallaxImage.Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <ParallaxImage.Box
            m={{ xs: 0, md: 4 }}
            mb={{ xs: 2, md: 0 }}
            ml={{ xs: 10, md: 10 }}
            mt={{ xs: 0, md: 16 }}
            dark
          >
            <Typography variant="h5">
              J’ai eu le déclic pour enfin <strong>PARLER</strong> anglais car,
              il faut l’avouer je n’avais de toute façon pas vraiment le choix
              dans ce contexte. Mais la peur de s’exprimer s’est estompée pour
              laisser place au plaisir d’échanger.
            </Typography>
          </ParallaxImage.Box>
        </Grid>
      </Grid>
    </ParallaxImage>
  );
};

export default England;
