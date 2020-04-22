import React from "react";
import { Box, Grid, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Fr from "./svg/Fr";
import Uk from "./svg/Uk";

const useFlagStyle = makeStyles({
  root: {
    cursor: "pointer",
  },
});

const LanguageChoice = () => {
  const flagStyle = useFlagStyle();
  const history = useHistory();
  const { i18n } = useTranslation();
  return (
    <Grid container justify="flex-end">
      <Fr
        height={24}
        className={flagStyle.root}
        onClick={async () => {
          history.push("?lang=fr");
          await i18n.changeLanguage("fr");
        }}
      />
      <Box ml={1}>
        <Uk
          height={24}
          className={flagStyle.root}
          onClick={async () => {
            history.push("?lang=en");
            await i18n.changeLanguage("en");
          }}
        />
      </Box>
    </Grid>
  );
};

export default LanguageChoice;
