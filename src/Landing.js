import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import Logo from "./svg/Logo";
import { useTranslation } from "react-i18next";

const Landing = () => {
  const { t } = useTranslation();
  return (
    <Grid container justify="center">
      <Grid item xs={12} md={6}>
        <Box p={5}>
          <Logo />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography align="center" variant="h2">
          {t("welcome")} Déborah{" "}
          <span role="img" aria-label="teacher">
            👩‍🏫
          </span>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Landing;
