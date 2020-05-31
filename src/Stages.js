import React from "react";
import { Container, Typography, makeStyles } from "@material-ui/core";
import EnglishHelper from "./components/EnglishHelper";

const useStyle = makeStyles({
  title: {
    textAlign: "center",
  },
});

const Stages = () => {
  const style = useStyle();
  return (
    <Container style={{ marginTop: "40px" }}>
      <Typography variant="h3" className={style.title}>
        <EnglishHelper title="Stages vacances">Holiday clubs</EnglishHelper>
      </Typography>
      <Typography variant="h4" className={style.title}>
        Thème :{" "}
        <EnglishHelper title="Artistes de la nature">
          “Be an artist of nature”
        </EnglishHelper>
      </Typography>
    </Container>
  );
};

export default Stages;
