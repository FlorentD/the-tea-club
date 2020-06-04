import React from "react";
import PropTypes from "prop-types";
import { Box, makeStyles, Grid, Typography } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "20px",
    paddingTop: "20px",
    borderBottom: "1px dashed #98C163",
    color: "#007A15",
    [theme.breakpoints.up("md")]: { flexDirection: "row" },
  },
}));

const LandingCard = ({ icon, title, children, direction }) => {
  const style = useStyle();
  return (
    <Grid container justify="center">
      <Grid item xs={12} md={8} className={style.root}>
        {direction === "left" && <Box p={{ xs: 2, md: 5 }}>{icon}</Box>}
        <Box>
          <Box mb={2}>
            <Typography variant="h5" display="block">
              {title}
            </Typography>
          </Box>
          <Typography variant="h6" style={{ color: "#000000" }}>
            {children}
          </Typography>
        </Box>
        {direction === "right" && <Box p={{ xs: 2, md: 5 }}>{icon}</Box>}
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
