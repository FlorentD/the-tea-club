import React from "react";
import PropTypes from "prop-types";
import { Box, makeStyles, Grid, Typography } from "@material-ui/core";

const useStyle = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "20px",
    paddingTop: "20px",
    borderBottom: "1px dashed #98C163",
  },
});

const LandingCard = ({ icon, title, children, direction }) => {
  const style = useStyle();
  return (
    <Grid container justify="center">
      <Grid item xs={8} className={style.root}>
        {direction === "left" && <Box p={5}>{icon}</Box>}
        <Box>
          <Box mb={2}>
            <Typography variant="h4" display="block">
              {title}
            </Typography>
          </Box>
          <Typography variant="h5" style={{ color: "#239719" }}>
            {children}
          </Typography>
        </Box>
        {direction === "right" && <Box p={5}>{icon}</Box>}
      </Grid>
    </Grid>
  );
};

LandingCard.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(["right", "left"]),
};

LandingCard.defaultProps = {
  direction: "left",
};

export default LandingCard;
