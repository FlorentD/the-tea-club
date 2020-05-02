import React from "react";
import PropTypes from "prop-types";
import { useField, ErrorMessage } from "formik";
import { TextField, Typography, Box, makeStyles } from "@material-ui/core";

const useCustomStyle = makeStyles(() => ({
  root: {
    "& input + fieldset": {
      borderWidth: 2,
    },
    "& input:focus + fieldset": {},
  },
}));

const Text = ({ name, type, placeholder, ...props }) => {
  const [field, meta] = useField(name);
  const classes = useCustomStyle();
  return (
    <Box m={1}>
      <TextField
        label={placeholder}
        InputProps={{ classes }}
        type={type}
        variant="outlined"
        fullWidth
        error={meta.touched && !!meta.error}
        {...field}
        {...props}
      />
      <ErrorMessage name={field.name}>
        {(msg) => <Typography color="error">{msg}</Typography>}
      </ErrorMessage>
    </Box>
  );
};

Text.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

Text.defaultProps = {
  type: "text",
};

export default Text;
