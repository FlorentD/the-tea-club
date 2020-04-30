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
    <Box mt={10}>
      <ParallaxProvider>
        <Childhood />
      </ParallaxProvider>
      <Studies />
      <Box mb={10}>
        <England />
      </Box>
      <Box mb={10}>
        <ParallaxProvider>
          <Teach />
        </ParallaxProvider>
      </Box>
      <Today />
    </Box>
  );
};

export default Me;
