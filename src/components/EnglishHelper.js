import React from "react";
import PropTypes from "prop-types";
import { Tooltip, withStyles } from "@material-ui/core";

const SytledToolTip = withStyles((theme) => ({
  tooltip: {
    fontSize: theme.typography.pxToRem(14),
  },
}))(Tooltip);

const EnglishHelper = ({ title, children }) => {
  return (
    <SytledToolTip title={title} placement="right">
      <i style={{ cursor: "help", borderBottom: "1px dotted #000" }}>
        {children}
      </i>
    </SytledToolTip>
  );
};

EnglishHelper.propTypes = {
  title: PropTypes.string.isRequired,
};

export default EnglishHelper;
