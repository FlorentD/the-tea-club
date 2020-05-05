import * as React from "react";
import PropTypes from "prop-types";

function BackgroundBottom({ color, ...props }) {
  return (
    <svg viewBox="0 0 1280 30" {...props}>
      <style>{`.test-bg-bottom_svg__st0{fill:${color}`}</style>
      <path
        className="test-bg-bottom_svg__st0"
        d="M1280 30H0V0c199.7 14.1 413.4 22.5 639.5 22.5C866 22.5 1080 14.1 1280 0v30z"
        id="test-bg-bottom_svg__Rectangle"
      />
    </svg>
  );
}

BackgroundBottom.propTypes = {
  color: PropTypes.string,
};

BackgroundBottom.defaultProps = {
  color: "#fff",
};

export default BackgroundBottom;
