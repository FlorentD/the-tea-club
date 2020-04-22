import React from "react";
import { Box, Container, Grid } from "@material-ui/core";
import Logo from "./svg/Logo";

const App = () => {
  return (
    <Container>
      <Grid container justify="center">
        <Grid item xs={6}>
          <Box mt={4}>
            <Logo />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
