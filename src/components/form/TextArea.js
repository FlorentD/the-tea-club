import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage, useField } from "formik";
import { TextField, Box, makeStyles, Typography } from "@material-ui/core";

const useCustomStyle = makeStyles(() => ({
  root: {
    "& textarea + fieldset": {
      borderWidth: 2,
    },
    "& input:focus + fieldset": {},
  },
}));

const TextArea = ({ name, type, placeholder, ...props }) => {
  const [field, meta] = useField(name);
  const classes = useCustomStyle();
  return (
    <Box m={1}>
      <TextField
        label={placeholder}
        InputProps={{ classes }}
        type={type}
        multiline
        rows={8}
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

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

TextArea.defaultProps = {
  type: "text",
};

export default TextArea;
