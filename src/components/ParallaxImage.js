import React from "react";
import PropTypes from "prop-types";
import Background1 from "../svg/Background1";
import { Container, Box, makeStyles, Grid } from "@material-ui/core";
import BackgroundBottom from "../svg/BackgroundBottom";
import { ParallaxBanner } from "react-scroll-parallax";
import ShowOnView from "./ShowOnView";

const useStyleBox = makeStyles((theme) => ({
  root: (props) => ({
    backgroundColor: props.light ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,0.8)",
    color: !props.light && "white",
    padding: "10px 15px",
    [theme.breakpoints.up("md")]: {
      padding: "30px 50px",
    },
  }),
}));

const TextBox = ({ children, dark, light, ...props }) => {
  const styleBox = useStyleBox({ light: !dark });
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
};

TextBox.DefautProps = {
  dark: false,
};

const useStyleContainer = makeStyles({
  root: {
    position: "relative",
    zIndex: 100,
  },
});

const TextContainer = ({ children, justify, alignItems, ...props }) => {
  const style = useStyleContainer();
  return (
    <Grid
      container
      className={style.root}
      justify={justify}
      alignItems={alignItems}
    >
      <Grid item {...props}>
        {children}
      </Grid>
    </Grid>
  );
};

TextContainer.propTypes = {
  justify: PropTypes.string,
  alignItems: PropTypes.string,
};

TextContainer.defaultProps = {
  justify: "initial",
  alignItems: "initial",
};

const ParallaxImage = ({
  src,
  amount,
  children,
  height,
  soft,
  topSoft,
  bottomSoft,
}) => {
  return (
    <ParallaxBanner
      style={{
        height,
      }}
      layers={[{ image: src, amount }]}
    >
      {(soft || topSoft) && <Background1 style={{ position: "absolute" }} />}
      <Container>{children}</Container>
      {(soft || bottomSoft) && (
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
  soft: false,
  topSoft: false,
  bottomSoft: false,
};

ParallaxImage.Box = TextBox;
ParallaxImage.Container = TextContainer;

export default ParallaxImage;
