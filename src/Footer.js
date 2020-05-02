import React from "react";
import { Typography, Box, Container } from "@material-ui/core";

const Footer = () => {
  return (
    <Container>
      <Box m={5} textAlign="center">
        <Typography>The Tea Club - 2020</Typography>
        <Typography>Le Pellerin</Typography>
      </Box>
    </Container>
  );
};

export default Footer;
