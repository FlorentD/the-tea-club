import React from "react";
import PropTypes from "prop-types";
import Background1 from "../svg/Background1";
import { Container, Box, makeStyles, Grid } from "@material-ui/core";
import BackgroundBottom from "../svg/BackgroundBottom";
import { ParallaxBanner } from "react-scroll-parallax";
import ShowOnView from "./ShowOnView";

const useStyleBox = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgba(255,255,255,0.9)",
    padding: "10px 15px",
    [theme.breakpoints.up("md")]: {
      padding: "30px 50px",
    },
  },
}));

const TextBox = ({ children, ...props }) => {
  const styleBox = useStyleBox();
  return (
    <ShowOnView>
      <Box {...props} className={styleBox.root}>
        {children}
      </Box>
    </ShowOnView>
  );
};

TextBox.propTypes = {
  dark: PropTypes.bool,
  light: PropTypes.bool,
};

TextBox.DefautProps = {
  dark: false,
  light: true,
};

const useStyleContainer = makeStyles({
  root: {
    position: "relative",
    zIndex: 100,
  },
});

const TextContainer = ({ children, ...props }) => {
  const style = useStyleContainer();
  return (
    <Grid container className={style.root}>
      <Grid item {...props}>
        {children}
      </Grid>
    </Grid>
  );
};

const ParallaxImage = ({ src, amount, children, height, soft }) => {
  return (
    <ParallaxBanner
      style={{
        height,
      }}
      layers={[{ image: src, amount }]}
    >
      {soft && <Background1 style={{ position: "absolute" }} />}
      <Container>{children}</Container>
      {soft && (
        <BackgroundBottom style={{ position: "absolute", bottom: -1 }} />
      )}
    </ParallaxBanner>
  );
};

ParallaxImage.propTypes = {
  src: PropTypes.string.isRequired,
  amount: PropTypes.number,
  height: PropTypes.string,
  soft: PropTypes.bool,
};

ParallaxImage.defaultProps = {
  amount: 0.1,
  height: "60vh",
  soft: true,
};

ParallaxImage.Box = TextBox;
ParallaxImage.Container = TextContainer;

export default ParallaxImage;
