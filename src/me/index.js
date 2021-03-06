import React from "react";
import { Box } from "@material-ui/core";
import Childhood from "./childhood";
import Studies from "./studies";
import England from "./england";
import Teach from "./teach";
import Today from "./today";

const Me = () => {
  return (
    <Box mt={{ xs: 5, md: 10 }}>
      <Box mb={{ xs: 4, md: 10 }}>
        <Childhood />
      </Box>
      <Box mb={{ xs: 4, md: 10 }}>
        <Studies />
      </Box>
      <Box mb={{ xs: 4, md: 10 }}>
        <England />
      </Box>
      <Box mb={{ xs: 4, md: 10 }}>
        <Teach />
      </Box>
      <Box mb={{ xs: 4, md: 10 }}>
        <Today />
      </Box>
    </Box>
  );
};

export default Me;
