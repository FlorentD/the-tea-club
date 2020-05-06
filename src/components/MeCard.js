import React from "react";
import PropTypes from "prop-types";
import { Box, makeStyles, Grid, Typography } from "@material-ui/core";
import Image from "./Image";

const useStyle = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const MeCard = ({ src, alt, children, direction }) => {
  const style = useStyle();
  return (
    <Grid container justify="center">
      <Grid item xs={8} className={style.root}>
        {direction === "left" && (
          <Box pf={5} pr={5}>
            <Image
              src={src}
              alt={alt}
              style={{ borderRadius: "50%", width: "280px" }}
            />
          </Box>
        )}
        <Box>
          <Typography variant="h5" style={{ color: "#000000" }}>
            {children}
          </Typography>
        </Box>
        {direction === "right" && (
          <Box pf={5} pr={5}>
            <Image
              src={src}
              alt={alt}
              style={{ borderRadius: "50%", width: "280px" }}
            />
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

MeCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(["right", "left"]),
};

MeCard.defaultProps = {
  direction: "left",
};

export default MeCard;
