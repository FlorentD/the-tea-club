import React from "react";
import PropTypes from "prop-types";
import { Box, makeStyles, Grid, Typography } from "@material-ui/core";
import Image from "./Image";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  image: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "280px",
      borderRadius: "50%",
    },
  },
}));

const MeCard = ({ src, alt, children, direction }) => {
  const style = useStyle();
  return (
    <Grid container justify="center">
      <Grid item xs={12} md={8} className={style.root}>
        {direction === "left" && (
          <Box pr={{ xs: 0, md: 5 }} mb={{ xs: 2, md: 0 }}>
            <Image src={src} alt={alt} className={style.image} />
          </Box>
        )}
        <Box m={{ xs: 2, md: 0 }}>
          <Typography style={{ color: "#000000" }}>{children}</Typography>
        </Box>
        {direction === "right" && (
          <Box pl={{ xs: 0, md: 5 }}>
            <Image src={src} alt={alt} className={style.image} />
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
