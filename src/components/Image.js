import React, { useState } from "react";
import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";
import Fade from "@material-ui/core/Fade";

const Image = ({ src, alt, width, height }) => {
  const [shouldShow, show] = useState(false);
  return (
    <LazyLoad height={height} once offset={100}>
      <Fade in={shouldShow} timeout={500}>
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          onLoad={() => show(true)}
        />
      </Fade>
    </LazyLoad>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Image.defaultProps = {
  width: "100%",
  height: "100%",
};

export default Image;
