import React from "react";
import PropTypes from "prop-types";

const Image = ({ src, alt, width, height }) => {
  return <img src={src} alt={alt} width={width} height={height} />;
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
