import React from "react";
import PropTypes from "prop-types";
import Background1 from "../svg/Background1";
import { Container } from "@material-ui/core";
import BackgroundBottom from "../svg/BackgroundBottom";
import { ParallaxBanner } from "react-scroll-parallax";

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

export default ParallaxImage;
