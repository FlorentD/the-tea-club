import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

const useCardStyle = makeStyles({
  root: {
    margin: "20px",
  },
  title: (props) => ({
    borderTop: `4px solid ${props.background}`,
    backgroundColor: "#F2F2F2",
    padding: "10px",
    fontWeight: "bold",
  }),
  image: (props) => ({
    position: "relative",
    padding: "30px",
    height: 240,
    textAlign: "center",
    backgroundImage: `url("${props.image}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }),
  credits: {
    position: "absolute",
    color: "gray",
    bottom: 0,
    left: 0,
    "> a": {
      color: "gray",
    },
  },
});

const Card = ({ title, background, image, children, credits, fullWidth }) => {
  const style = useCardStyle({ background, image });
  return (
    <Grid item xs={12} md={fullWidth ? 12 : 6}>
      <Box className={style.root}>
        <Typography variant="h5" className={style.title}>
          {title}
        </Typography>
        <Box className={style.image}>
          {credits && (
            <Typography variant="caption" className={style.credits}>
              {credits}
            </Typography>
          )}
        </Box>
        {children}
      </Box>
    </Grid>
  );
};

Card.propTypes = {
  background: PropTypes.string,
  image: PropTypes.string,
  fullWidth: PropTypes.bool,
};

Card.defaultProps = {
  background: "black",
  image: "",
  fullWidth: false,
};

export default Card;
