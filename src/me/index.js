import React from "react";
import { Box } from "@material-ui/core";
import { ParallaxProvider } from "react-scroll-parallax";
import Childhood from "./childhood";
import Studies from "./studies";
import England from "./england";
import Teach from "./teach";
import Today from "./today";

const Me = () => {
  return (
    <ParallaxProvider>
      <Box mt={{ xs: 5, md: 10 }}>
        <Box mb={10}>
          <Childhood />
        </Box>
        <Box mb={10}>
          <Studies />
        </Box>
        <Box mb={10}>
          <England />
        </Box>
        <Box mb={10}>
          <Teach />
        </Box>
        <Box mb={10}>
          <Today />
        </Box>
      </Box>
    </ParallaxProvider>
  );
};

export default Me;
